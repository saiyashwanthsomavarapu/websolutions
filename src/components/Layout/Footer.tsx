import { Layout, Row, Col, Button, Typography, Space, Grid, Image, Divider } from 'antd';
import {
  FacebookFilled,
  InstagramFilled,
  // SendOutlined,
  WhatsAppOutlined,
  // RightOutlined,
  LinkedinFilled
} from '@ant-design/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import India from '../../assets/inida.png';
import US from '../../assets/US.png';
import Logo from '../../assets/logo-wide.png';

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
    <Footer style={{ ...footerStyle, padding: (screen.lg || screen.md) ? '50px 120px' : '50px' }}>
      <Row gutter={[24, 48]}>

        {/* Middle columns for navigation */}
        <Col xs={24} md={24} lg={24}>
          <Row gutter={[48, 48]}>
            <Col xs={12} sm={12} lg={6}>
              <Image src={Logo} width={200} preview={false} />
              <Typography.Paragraph style={{ color: 'white', marginTop: '16px' }}>
                We transform businessof most major sectors with powerful and adapable digital solutions that satisfy the needs of today and the future.
              </Typography.Paragraph>
              <Button
                style={{
                  border: 'none',
                  borderRadius: '4px',
                  height: '48px',
                  padding: '0 24px',
                  marginTop: '2em',
                  color: 'black'
                }}
                onClick={() => navigateTo("/contact")}
              >
                Book a call
              </Button>
            </Col>
            <Col xs={12} sm={12} lg={6}>
              <Title level={1} style={headingStyle}>Discover</Title>
              <Space direction="vertical" style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
                <RouterLink to="/aboutus" style={{ ...linkStyle, color: 'white' }}>About Us</RouterLink>
                <RouterLink to="/services" style={{ ...linkStyle, color: 'white' }}>Services</RouterLink>
                <RouterLink to="/terms" style={{ ...linkStyle, color: 'white' }}>Terms Conditions</RouterLink>
                <RouterLink to="/privacy" style={{ ...linkStyle, color: 'white' }}>Privacy Policy</RouterLink>
                <RouterLink to="/refund" style={{ ...linkStyle, color: 'white' }}>Cancellation & Refund Policy</RouterLink>
                <RouterLink to="/delivery_process" style={{ ...linkStyle, color: 'white' }}> Delivery Process </RouterLink>
              </Space>
            </Col>
            <Col xs={12} sm={12} lg={6}>
              <Title level={1} style={headingStyle}>Services</Title>
              <Space direction="vertical" style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
                <Text style={{ ...linkStyle, color: 'white' }}>IOS Developement</Text>
                <Text style={{ ...linkStyle, color: 'white' }}>Android Developement</Text>
                <Text style={{ ...linkStyle, color: 'white' }}>Web Developement</Text>
                <Text style={{ ...linkStyle, color: 'white' }}>Logo desiging</Text>
              </Space>
            </Col>
            <Col xs={12} sm={12} lg={6}>
              <Title level={1} style={headingStyle}>Contact</Title>
              <Row gutter={[48, 10]}>
                <Col lg={12}>
                  <Image src={India} preview={false} style={{ width: '100%', height: '100%' }} />
                </Col>
                <Col lg={12}>
                  <Image src={US} preview={false} style={{ width: '100%', height: '100%' }} />
                </Col>
                <Col lg={24} style={{ marginTop: '1em' }}>

                  <Text style={{ ...whiteTextStyle, ...textBlockStyle }}> US: +1 (123) 456-7890</Text>
                  <Text style={{ ...whiteTextStyle, ...textBlockStyle }}> India: +1 (123) 456-7890</Text>
                  <Text style={whiteTextStyle}>Email: support@aadhyawebsolution.com</Text>

                </Col>
                <Col lg={24} >
                  <Title level={5} style={{ ...linkStyle }}> Follow Us </Title>
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
      <Row align="middle" >

        <Col xs={24} md={12} >
          <Space align="center" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Text style={{ color: '#999' }}> All Rights Reserved © Aadhya Web Solution | 2025 </Text>
          </Space>
        </Col>
        <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Space align="center" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Text style={{ color: '#999' }}>
              <RouterLink to="/terms" style={{ ...linkStyle, color: 'white' }}>TermsConditions</RouterLink> |
              <RouterLink to="/privacy" style={{ ...linkStyle, color: 'white' }}>Privacy Policy</RouterLink> |
              <RouterLink to="/blogd" style={{ ...linkStyle, color: 'white' }}>Blogs</RouterLink> |
              <RouterLink to="/sitemaps" style={{ ...linkStyle, color: 'white' }}> Sitemaps </RouterLink>
            </Text>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;