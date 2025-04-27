import { Layout, Row, Col, Button, Typography, Space, Grid, Image, Divider } from 'antd';
import {
  FacebookFilled,
  InstagramFilled,
  WhatsAppOutlined,
  LinkedinFilled
} from '@ant-design/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import India from '../../assets/india.svg';
import US from '../../assets/us.svg';
import Logo from '../../assets/logo/logo-wide.png';

const { Footer } = Layout;
const { Title, Text } = Typography;


const footerStyle = {
  backgroundColor: '#000',
  color: '#fff'
};

const headingStyle = {
  color: '#fff',
  marginBottom: '16px',
  fontSize: '2em'
};

const whiteTextStyle = {
  color: '#fff'
};

const linkStyle = {
  color: '#fff',
  margin: '.5em .5em'
};

// const companyTaglineStyle = {
//   fontSize: '18px',
//   color: '#fff',
//   marginBottom: '32px'
// };

// const newsletterInputStyle = {
//   color: '#fff',
//   backgroundColor: 'transparent',
//   borderWidth: '0 0 1px 0',
//   borderColor: '#333',
//   borderRadius: 0,
//   paddingBottom: '8px',
//   marginBottom: '16px'
// };

const socialButtonStyle = {
  backgroundColor: '#222',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const dividerStyle = {
  backgroundColor: '#333',
  margin: '32px 0'
};

const textBlockStyle = {
  display: 'block',
  marginBottom: '4px'
};

const FooterComponent = () => {
  const screen = Grid.useBreakpoint();
  const navigateTo = useNavigate();

  return (
    <Footer style={{ ...footerStyle, padding: screen.lg ? '50px 120px' : screen.md ? '50px 80px' : '50px 20px' }}>
      <Row gutter={[24, 48]}>

      {/* Middle columns for navigation */}
      <Col xs={24} md={24} lg={24}>
        <Row gutter={[48, 48]}>
        <Col xs={24} sm={12} lg={6}>
          <Image src={Logo} width={screen.lg ? 200 : 150} preview={false} />
          <Typography.Paragraph style={{ color: 'white', marginTop: '16px', fontSize: screen.lg ? '16px' : '14px' }}>
          We transform business of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today and the future.
          </Typography.Paragraph>
          <Button
          style={{
            border: 'none',
            borderRadius: '4px',
            height: '48px',
            padding: '0 24px',
            marginTop: '2em',
            color: 'black',
            fontSize: screen.lg ? '16px' : '14px'
          }}
          onClick={() => navigateTo("/contact")}
          >
          Book a call
          </Button>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Title level={1} style={{ ...headingStyle, fontSize: screen.lg ? '2em' : '1.5em' }}>Discover</Title>
          <Space direction="vertical" style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
          <RouterLink to="/aboutus" style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>About Us</RouterLink>
          <RouterLink to="/services" style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>Services</RouterLink>
          <RouterLink to="/terms_conditions" style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>Terms Conditions</RouterLink>
          <RouterLink to="/privacy" style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>Privacy Policy</RouterLink>
          <RouterLink to="/refund" style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>Cancellation & Refund Policy</RouterLink>
          <RouterLink to="/delivery_process" style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}> Delivery Process </RouterLink>
          </Space>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Title level={1} style={{ ...headingStyle, fontSize: screen.lg ? '2em' : '1.5em' }}>Services</Title>
          <Space direction="vertical" style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
          <Text style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>IOS Development</Text>
          <Text style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>Android Development</Text>
          <Text style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>Web Development</Text>
          <Text style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>Logo Designing</Text>
          </Space>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Title level={1} style={{ ...headingStyle, fontSize: screen.lg ? '2em' : '1.5em' }}>Contact</Title>
          <Row gutter={[48, 10]}>
          <Col xs={12} lg={12}>
            <Image src={India} preview={false} style={{ width: '100%', height: 'auto' }} />
          </Col>
          <Col xs={12} lg={12}>
            <Image src={US} preview={false} style={{ width: '100%', height: 'auto' }} />
          </Col>
          <Col xs={24} style={{ marginTop: '1em' }}>
            <Text style={{ ...whiteTextStyle, ...textBlockStyle, fontSize: screen.lg ? '16px' : '14px' }}> US: +1 (123) 456-7890</Text>
            <Text style={{ ...whiteTextStyle, ...textBlockStyle, fontSize: screen.lg ? '16px' : '14px' }}> India: +1 (123) 456-7890</Text>
            <Text style={{ ...whiteTextStyle, fontSize: screen.lg ? '16px' : '14px' }}>Email: support@aadhyawebsolution.com</Text>
          </Col>
          <Col xs={24}>
            <Title level={5} style={{ ...linkStyle, fontSize: screen.lg ? '16px' : '14px' }}> Follow Us </Title>
            <Space size="middle" style={{ marginBottom: '24px' }}>
            <Button
              type="text"
              shape="circle"
              style={socialButtonStyle}
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled />
            </Button>
            <Button
              type="text"
              shape="circle"
              style={socialButtonStyle}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramFilled />
            </Button>
            <Button
              type="text"
              shape="circle"
              style={socialButtonStyle}
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled />
            </Button>
            <Button
              type="text"
              shape="circle"
              style={socialButtonStyle}
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppOutlined />
            </Button>
            </Space>
          </Col>
          </Row>
        </Col>
        </Row>
      </Col>
      </Row>
      {/* Bottom links and copyright */}
      <Divider style={dividerStyle} />
      <Row align="middle">
      <Col xs={24} md={12}>
        <Space align="center" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Text style={{ color: '#999', fontSize: screen.lg ? '16px' : '14px' }}> All Rights Reserved © Aadhya Web Solution | 2025 </Text>
        </Space>
      </Col>
      <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Space align="center" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Text style={{ color: '#999', fontSize: screen.lg ? '16px' : '14px' }}>
          <RouterLink to="/terms" style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>Terms Conditions</RouterLink> |
          <RouterLink to="/privacy" style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>Privacy Policy</RouterLink> |
          <RouterLink to="/blogd" style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}>Blogs</RouterLink> |
          <RouterLink to="/sitemaps" style={{ ...linkStyle, color: 'white', fontSize: screen.lg ? '16px' : '14px' }}> Sitemaps </RouterLink>
        </Text>
        </Space>
      </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;