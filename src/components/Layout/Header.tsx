import React, { useState, useEffect } from 'react';
import {
  Layout,
  Menu,
  Button,
  Drawer,
  Dropdown,
  Space,
  MenuProps,
  Grid
} from 'antd';
import {
  MenuOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

// Define types for navigation items
interface NavItem {
  key: string;
  label: string;
  children?: NavItem[];
  path?: string;
}

// Define props for the header component
interface ModernHeaderProps {
  logo?: React.ReactNode;
}

const { useBreakpoint } = Grid

const ModernHeader: React.FC<ModernHeaderProps> = ({
  logo = 'LOGO',
}) => {
  const screens = useBreakpoint();
  const [visible, setVisible] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Navigation items
  const navItems: NavItem[] = [
    { key: 'home', label: 'Home', path: '/' },
    // {
    //   key: 'products',
    //   label: 'Products',
    //   children: [
    //     { key: 'new', label: 'New Arrivals', path: '/' },
    //     { key: 'best', label: 'Best Sellers', path: '/' },
    //     { key: 'sale', label: 'On Sale', path: '/' }
    //   ]
    // },
    { key: 'services', label: 'Services', path: '/services' },
    { key: 'about', label: 'About Us', path: '/aboutus' },
    { key: 'contact', label: 'Contact', path: '/contact' },
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
              <Space>
                <Link to={item.path ?? '/'} >{item.label}</Link>
                <DownOutlined style={{ fontSize: '12px' }} />
              </Space>

            </Dropdown>
          )
        };
      }
      return { key: item.key, label: <Link to={item.path ?? '/'}>{item.label}</Link> };
    });
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
          backgroundColor: 'white',
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
          <div style={{ display: screens.xs ? 'none' : 'block' }}>
            <Menu
              mode="horizontal"
              style={{
                border: 'none',
                backgroundColor: 'transparent'
              }}
              items={getNavItems()}
            />
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>


            {/* Mobile menu button */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setVisible(true)}
              style={{ display: screens.md ? 'none' : '' }}
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
              label: <Link to={child.path ?? '/'}>{child.label}</Link>,
              path: child.path
            }))
          }))}
        />
      </Drawer>
    </>
  );
};

export default ModernHeader;