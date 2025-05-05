// Using the WhatsApp Cloud API directly (Meta/Facebook's official API)

// BACKEND (server.js)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// WhatsApp API configuration
const WHATSAPP_API_VERSION = 'v19.0';
const PHONE_NUMBER_ID = 'YOUR_PHONE_NUMBER_ID';
const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';
const VERIFY_TOKEN = 'YOUR_VERIFY_TOKEN'; // Used for webhook verification

// Base URL for the WhatsApp Cloud API
const apiUrl = `https://graph.facebook.com/${WHATSAPP_API_VERSION}/${PHONE_NUMBER_ID}`;

// Store messages (use a database in production)
const messageHistory = {};

// Send a message using WhatsApp Cloud API
app.post('/api/send-message', async (req, res) => {
  const { to, message } = req.body;
  
  if (!to || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Phone number and message are required' 
    });
  }
  
  try {
    const response = await axios.post(
      `${apiUrl}/messages`,
      {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: to,
        type: 'text',
        text: { body: message }
      },
      {
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    // Store message in history
    if (!messageHistory[to]) messageHistory[to] = [];
    messageHistory[to].push({
      direction: 'outgoing',
      message: message,
      timestamp: new Date().toISOString()
    });
    
    res.json({
      success: true,
      messageId: response.data.messages[0].id
    });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: error.response?.data?.error?.message || 'Failed to send message'
    });
  }
});

// Get message history for a specific number
app.get('/api/messages/:phoneNumber', (req, res) => {
  const { phoneNumber } = req.params;
  res.json(messageHistory[phoneNumber] || []);
});

// Get all conversations
app.get('/api/conversations', (req, res) => {
  const conversations = {};
  
  Object.keys(messageHistory).forEach(number => {
    conversations[number] = messageHistory[number];
  });
  
  res.json(conversations);
});

// Webhook verification for WhatsApp
app.get('/api/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    // Respond with the challenge token from the request
    console.log('Webhook verified');
    res.status(200).send(challenge);
  } else {
    // Respond with '403 Forbidden' if verify tokens do not match
    console.error('Verification failed. Token mismatch.');
    res.sendStatus(403);
  }
});

// Webhook to receive messages from WhatsApp
app.post('/api/webhook', (req, res) => {
  const data = req.body;
  
  if (data.object === 'whatsapp_business_account') {
    // Process each entry
    data.entry.forEach(entry => {
      entry.changes.forEach(change => {
        if (change.field === 'messages') {
          const messages = change.value.messages;
          
          if (messages && messages.length > 0) {
            messages.forEach(message => {
              if (message.type === 'text') {
                const from = message.from;
                const messageText = message.text.body;
                
                console.log(`Received message: "${messageText}" from ${from}`);
                
                // Store in message history
                if (!messageHistory[from]) messageHistory[from] = [];
                messageHistory[from].push({
                  direction: 'incoming',
                  message: messageText,
                  timestamp: new Date().toISOString()
                });
                
                // Automated reply logic (simple bot)
                handleIncomingMessage(from, messageText);
              }
            });
          }
        }
      });
    });
    
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

async function handleIncomingMessage(from, message) {
  // Simple bot logic - customize as needed
  let response = 'Thank you for your message!';
  
  const lowerCaseMessage = message.toLowerCase();
  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
    response = 'Hello! How can I assist you today?';
  } else if (lowerCaseMessage.includes('help')) {
    response = 'I can help with product information, customer support, and order status. What do you need assistance with?';
  } else if (lowerCaseMessage.includes('order')) {
    response = 'To check your order status, please provide your order number.';
  }
  
  try {
    // Send the automated response
    await axios.post(
      `${apiUrl}/messages`,
      {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: from,
        type: 'text',
        text: { body: response }
      },
      {
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    // Store response in history
    if (!messageHistory[from]) messageHistory[from] = [];
    messageHistory[from].push({
      direction: 'outgoing',
      message: response,
      timestamp: new Date().toISOString()
    });
    
    console.log(`Sent automated response to ${from}`);
  } catch (error) {
    console.error('Error sending automated response:', error);
  }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});