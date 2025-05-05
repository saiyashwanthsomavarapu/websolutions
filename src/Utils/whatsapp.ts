// FRONTEND React Component for WhatsApp Management

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>WhatsApp Bot Manager</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConversationsList from './ConversationsList';
import ChatInterface from './ChatInterface';
import './Dashboard.css';

const API_BASE_URL = 'http://localhost:5000/api';

function Dashboard() {
  const [conversations, setConversations] = useState({});
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchConversations();
    // Poll for new conversations every 5 seconds
    const interval = setInterval(fetchConversations, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchConversations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/conversations`);
      setConversations(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching conversations:', err);
      setError('Failed to load conversations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (recipient, message) => {
    try {
      await axios.post(`${API_BASE_URL}/send-message`, {
        to: recipient,
        message
      });
      
      // Optimistically update the UI
      const updatedConversations = { ...conversations };
      if (!updatedConversations[recipient]) {
        updatedConversations[recipient] = [];
      }
      
      updatedConversations[recipient].push({
        direction: 'outgoing',
        message,
        timestamp: new Date().toISOString()
      });
      
      setConversations(updatedConversations);
    } catch (err) {
      console.error('Error sending message:', err);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleStartNewChat = (phoneNumber) => {
    if (!phoneNumber) return;
    
    // Format the number if needed
    const formattedNumber = phoneNumber.startsWith('+') 
      ? phoneNumber 
      : `+${phoneNumber}`;
    
    // Create a new conversation entry if it doesn't exist
    if (!conversations[formattedNumber]) {
      setConversations({
        ...conversations,
        [formattedNumber]: []
      });
    }
    
    setSelectedNumber(formattedNumber);
  };

  return (
    <div className="dashboard">
      {error && <div className="error-message">{error}</div>}
      
      <div className="dashboard-content">
        <ConversationsList 
          conversations={conversations}
          selectedNumber={selectedNumber}
          onSelectConversation={setSelectedNumber}
          onStartNewChat={handleStartNewChat}
          loading={loading}
        />
        
        {selectedNumber ? (
          <ChatInterface
            recipientNumber={selectedNumber}
            messages={conversations[selectedNumber] || []}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div className="no-chat-selected">
            <p>Select a conversation or start a new one</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

// ConversationsList.js
import React, { useState } from 'react';
import './ConversationsList.css';

function ConversationsList({ 
  conversations, 
  selectedNumber, 
  onSelectConversation, 
  onStartNewChat,
  loading
}) {
  const [newChatNumber, setNewChatNumber] = useState('');
  const [showNewChatForm, setShowNewChatForm] = useState(false);

  const handleSubmitNewChat = (e) => {
    e.preventDefault();
    if (newChatNumber.trim()) {
      onStartNewChat(newChatNumber.trim());
      setNewChatNumber('');
      setShowNewChatForm(false);
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="conversations-list">
      <div className="conversations-header">
        <h2>Conversations</h2>
        <button 
          className="new-chat-button"
          onClick={() => setShowNewChatForm(!showNewChatForm)}
        >
          {showNewChatForm ? 'Cancel' : 'New Chat'}
        </button>
      </div>

      {showNewChatForm && (
        <form onSubmit={handleSubmitNewChat} className="new-chat-form">
          <input
            type="text"
            value={newChatNumber}
            onChange={(e) => setNewChatNumber(e.target.value)}
            placeholder="Phone number (with country code)"
            required
          />
          <button type="submit">Start</button>
        </form>
      )}

      {loading && Object.keys(conversations).length === 0 ? (
        <div className="loading-indicator">Loading conversations...</div>
      ) : Object.keys(conversations).length === 0 ? (
        <div className="no-conversations">No conversations yet</div>
      ) : (
        <ul className="conversations">
          {Object.entries(conversations).map(([number, messages]) => {
            // Skip if there are no messages
            if (!messages || messages.length === 0) return null;
            
            const lastMessage = messages[messages.length - 1];
            
            return (
              <li 
                key={number}
                className={selectedNumber === number ? 'selected' : ''}
                onClick={() => onSelectConversation(number)}
              >
                <div className="conversation-info">
                  <span className="phone-number">{number}</span>
                  <span className="last-message-time">
                    {formatTimestamp(lastMessage.timestamp)}
                  </span>
                </div>
                <div className="last-message-preview">
                  {lastMessage.direction === 'outgoing' && <span>You: </span>}
                  {lastMessage.message.length > 40 
                    ? `${lastMessage.message.substring(0, 40)}...` 
                    : lastMessage.message}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ConversationsList;

// ChatInterface.js
import React, { useState, useRef, useEffect } from 'react';
import './ChatInterface.css';

function ChatInterface({ recipientNumber, messages, onSendMessage }) {
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);
  const messageEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    try {
      setSending(true);
      await onSendMessage(recipientNumber, newMessage.trim());
      setNewMessage('');
    } finally {
      setSending(false);
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <h2>{recipientNumber}</h2>
      </div>

      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="no-messages">
            No messages yet. Start the conversation!
          </div>
        ) : (
          messages.map((msg, index) => (
            <div 
              key={index} 
              className={`message ${msg.direction === 'incoming' ? 'received' : 'sent'}`}
            >
              <div className="message-bubble">
                {msg.message}
                <span className="message-time">
                  {formatTimestamp(msg.timestamp)}
                </span>
              </div>
            </div>
          ))
        )}
        <div ref={messageEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="message-input-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          disabled={sending}
        />
        <button type="submit" disabled={!newMessage.trim() || sending}>
          {sending ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}

export default ChatInterface;

// CSS Styling
// App.css
.app {
  display: flex;
  flex-direction: column