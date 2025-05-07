import React, { useState, useEffect } from 'react';
import {
  Layout,
  Menu,
  Button,
  Drawer,
  MenuProps,
  Grid
} from 'antd';
import {
  MenuOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo-removebg.png';
// import logoWhite from '../../assets/New_project.png';


const { Header } = Layout;

// Define types for navigation items
interface NavItem {
  key: string;
  label: string;
  children?: NavItem[];
  path?: string;
}

const { useBreakpoint } = Grid;

const ModernHeader: React.FC = () => {
  const screens = useBreakpoint();
  const [visible, setVisible] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const isMobile = !screens.md;
  // const location = useLocation();
  // const isHome = location.pathname === '/';

  // Navigation items
  const navItems: NavItem[] = [
    { key: 'home', label: 'Home', path: '/' },
    // {
    //   key: 'products',
    //   label: 'Products',
    //   children: [
    //     { key: 'new', label: 'New Arrivals', path: '/products/new' },
    //     { key: 'best', label: 'Best Sellers', path: '/products/best' },
    //     { key: 'sale', label: 'On Sale', path: '/products/sale' }
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

  // Close drawer when switching to desktop view
  useEffect(() => {
    if (!isMobile) {
      setVisible(false);
    }
  }, [isMobile]);

  const getTextColor = () => {
    // if (isHome) {
    //   return scrolled ? 'black' : 'white';
    // }
    return 'black';; // Default for transparent header
  };

  const getLogo = () => {
    // if (isHome) {
    //   return scrolled ? logoImage : logoWhite;
    // }
    return logoImage;; // Default for transparent header
  };

  // Generate menu items for desktop navigation
  const getNavItems = (): MenuProps['items'] => {
    return navItems.map(item => {
      if (item.children) {
        // For dropdown menus
        return {
          key: item.key,
          label: (
            <span>
              {item.label}
              <DownOutlined style={{ fontSize: '12px', marginLeft: '5px' }} />
            </span>
          ),
          children: item.children.map(child => ({
            key: child.key,
            label: <Link style={{ color: getTextColor(), }} to={child.path || '/'}>{child.label}</Link>
          }))
        };
      }
      // For regular menu items
      return {
        key: item.key,
        label: <Link style={{ color: getTextColor(), textDecoration: 'none' }} to={item.path || '/'}>{item.label}</Link>
      };
    });
  };

  return (
    <>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          width: '100%',
          padding: '0 24px',
          //backgroundColor: scrolled ? 'white' : 'transparent',
          backgroundColor: 'white',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100px',
        }}
      >
        {/* Logo */}
        <div className="logo" style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>
          <Link className="responsive-logo" to="/">{<img style={{ height: '180px', marginTop: "20px" }} src={getLogo()} alt="Logo" />}</Link>
        </div>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile && (
            <Menu
              mode="horizontal"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                color: getTextColor()
              }}
              items={getNavItems()}
            />
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <Button size='large'
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setVisible(true)}
            />
          )}
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
            label: item.path ? (
              <Link
                style={{ color: 'black' }}
                to={item.path}
                onClick={() => setVisible(false)} // Close drawer on click
              >
                {item.label}
              </Link>
            ) : (
              item.label
            ),
            children: item.children?.map(child => ({
              key: child.key,
              label: (
                <Link
                  style={{ color: 'black' }}
                  to={child.path || '/'}
                  onClick={() => setVisible(false)} // Close drawer on click
                >
                  {child.label}
                </Link>
              ),
            })),
          }))}
        />
      </Drawer>
    </>
  );
};

export default ModernHeader;