import React, { useState, useEffect } from 'react';
import {
  Layout,
  Menu,
  Button,
  Drawer,
  Divider,
  Avatar,
  Badge,
  Input,
  Dropdown,
  Space,
  MenuProps
} from 'antd';
import {
  MenuOutlined,
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  DownOutlined,
  GlobalOutlined
} from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;

// Define types for navigation items
interface NavItem {
  key: string;
  label: string;
  children?: NavItem[];
}

// Define props for the header component
interface ModernHeaderProps {
  logo?: React.ReactNode;
  onSearch?: (value: string) => void;
  onLanguageChange?: (language: string) => void;
  onProfileClick?: () => void;
  onCartClick?: () => void;
  cartCount?: number;
  notificationCount?: number;
}

const ModernHeader: React.FC<ModernHeaderProps> = ({
  logo = 'LOGO',
  onSearch,
  onLanguageChange,
  onProfileClick,
  onCartClick,
  cartCount = 0,
  notificationCount = 0
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  
  // Navigation items
  const navItems: NavItem[] = [
    { key: 'home', label: 'Home' },
    { 
      key: 'products', 
      label: 'Products', 
      children: [
        { key: 'new', label: 'New Arrivals' },
        { key: 'best', label: 'Best Sellers' },
        { key: 'sale', label: 'On Sale' }
      ]
    },
    { key: 'about', label: 'About Us' },
    { key: 'contact', label: 'Contact' },
    { key: 'blog', label: 'Blog' }
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Generate menu items for desktop navigation
  const getNavItems = (): MenuProps['items'] => {
    return navItems.map(item => {
      if (item.children) {
        return {
          key: item.key,
          label: (
            <Dropdown
              menu={{
                items: item.children.map(child => ({
                  key: child.key,
                  label: child.label
                }))
              }}
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  {item.label}
                  <DownOutlined style={{ fontSize: '12px' }} />
                </Space>
              </a>
            </Dropdown>
          )
        };
      }
      return { key: item.key, label: item.label };
    });
  };
  
  // Language options
  const languageOptions = [
    { key: 'en', label: 'English' },
    { key: 'fr', label: 'Français' },
    { key: 'es', label: 'Español' }
  ];
  
  // Handle language selection
  const handleLanguageSelect = (key: string): void => {
    if (onLanguageChange) {
      onLanguageChange(key);
    }
  };
  
  return (
    <>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',
          padding: '0 24px',
          backgroundColor: scrolled ? 'white' : 'transparent',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <div className="logo" style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>
          {logo}
        </div>
        
        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: { xs: 'none', md: 'block' } }}>
            <Menu
              mode="horizontal"
              style={{ 
                border: 'none', 
                backgroundColor: 'transparent',
                minWidth: '400px'
              }}
              items={getNavItems()}
            />
          </div>
          
          {/* Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Search
              placeholder="Search"
              style={{ width: 200, marginRight: '8px' }}
              bordered={false}
              className="header-search"
              onSearch={onSearch}
            />
            
            <Dropdown
              menu={{
                items: languageOptions.map(lang => ({
                  key: lang.key,
                  label: lang.label,
                  onClick: () => handleLanguageSelect(lang.key)
                }))
              }}
            >
              <Button type="text" icon={<GlobalOutlined />} />
            </Dropdown>
            
            <Badge count={notificationCount} size="small">
              <Button type="text" icon={<BellOutlined />} />
            </Badge>
            
            <Badge count={cartCount} size="small">
              <Button type="text" icon={<ShoppingCartOutlined />} onClick={onCartClick} />
            </Badge>
            
            <Avatar icon={<UserOutlined />} onClick={onProfileClick} style={{ cursor: 'pointer' }} />
            
            {/* Mobile menu button */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setVisible(true)}
              style={{ display: { md: 'none' } }}
            />
          </div>
        </div>
      </Header>
      
      {/* Mobile drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
        width={280}
      >
        <Menu
          mode="vertical"
          style={{ border: 'none' }}
          items={navItems.map(item => ({
            key: item.key,
            label: item.label,
            children: item.children?.map(child => ({
              key: child.key,
              label: child.label
            }))
          }))}
        />
        <Divider />
        <div style={{ padding: '0 16px' }}>
          <Search 
            placeholder="Search" 
            style={{ marginBottom: '16px' }} 
            onSearch={onSearch}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
            <Button icon={<GlobalOutlined />}>Language</Button>
            <Button icon={<UserOutlined />} onClick={onProfileClick}>Account</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ModernHeader;