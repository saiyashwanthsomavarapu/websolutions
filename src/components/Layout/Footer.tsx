import { Layout, Row, Col, Input, Button, Typography, Space, Divider, Grid } from 'antd';
import {
  FacebookFilled,
  InstagramFilled,
  SendOutlined,
  WhatsAppOutlined,
  RightOutlined
} from '@ant-design/icons';
import { Link as RouterLink } from 'react-router-dom';

const { Footer } = Layout;
const { Title, Text, Link } = Typography;


const footerStyle = {
  backgroundColor: '#000',
  color: '#fff'
};

const headingStyle = {
  color: '#999',
  marginBottom: '16px',
  fontSize: '14px'
};

const whiteTextStyle = {
  color: '#fff'
};

const linkStyle = {
  color: '#fff'
};

const companyTaglineStyle = {
  fontSize: '18px',
  color: '#fff',
  marginBottom: '32px'
};

const newsletterInputStyle = {
  color: '#fff',
  backgroundColor: 'transparent',
  borderWidth: '0 0 1px 0',
  borderColor: '#333',
  borderRadius: 0,
  paddingBottom: '8px',
  marginBottom: '16px'
};

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
  return (
    <Footer style={{ ...footerStyle, padding: (screen.lg || screen.md) ? '50px 120px' : '50px' }}>
      <Row gutter={[24, 48]}>
        {/* Left column with company tagline */}
        <Col xs={24} md={8} lg={8}>
          <div style={{ marginBottom: '32px' }}>
            <Text style={companyTaglineStyle}>
              Whether it's optimizing operations, expanding markets, or redefining strategy, Casho is your partner for success.
            </Text>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <Title level={5} style={{ ...whiteTextStyle, textTransform: 'uppercase', fontWeight: 'normal' }}>Newsletter</Title>
            <Input
              placeholder="Enter your email"
              suffix={<RightOutlined style={whiteTextStyle} />}
              style={newsletterInputStyle}
            />
          </div>
        </Col>

        {/* Middle columns for navigation */}
        <Col xs={24} md={16} lg={16}>
          <Row gutter={[24, 24]}>
            <Col xs={12} sm={12}>
              <Title level={5} style={headingStyle}>Pages</Title>
              <Space direction="vertical" style={{ display: 'flex', flexDirection: 'column' }}>
                <Link style={linkStyle}><RouterLink to="/aboutus">About Us</RouterLink></Link>
                <Link style={linkStyle}><RouterLink to="/services">Services</RouterLink></Link>
                <Link style={linkStyle}><RouterLink to="/casestudy">Case Study</RouterLink></Link>
                <Link style={linkStyle}><RouterLink to="/team">Team</RouterLink></Link>
              </Space>
            </Col>

            {/* <Col xs={12} sm={6}>
              <Title level={5} style={headingStyle}>Resources</Title>
              <Space direction="vertical" style={{ display: 'flex', flexDirection: 'column' }}>
                <Link style={linkStyle}>Blogs</Link>
                <Link style={linkStyle}>Reviews</Link>
                <Link style={linkStyle}>Contact Us</Link>
              </Space>
            </Col> */}

            <Col xs={24} sm={12}>
              <Title level={5} style={headingStyle}>Location</Title>
              <Text style={{ ...whiteTextStyle, ...textBlockStyle }}>ABCD Street, Suite 456</Text>
              <Text style={{ ...whiteTextStyle, marginBottom: '24px', display: 'block' }}>New York, NY, USA</Text>

              <Title level={5} style={headingStyle}>Follow Us</Title>
              <Space size="middle" style={{ marginBottom: '24px' }}>
                <Button type="text" shape="circle" style={socialButtonStyle}>
                  <FacebookFilled />
                </Button>
                <Button type="text" shape="circle" style={socialButtonStyle}>
                  <InstagramFilled />
                </Button>
                <Button type="text" shape="circle" style={socialButtonStyle}>
                  <SendOutlined />
                </Button>
                <Button type="text" shape="circle" style={socialButtonStyle}>
                  <WhatsAppOutlined />
                </Button>
              </Space>

              <Title level={5} style={headingStyle}>Contact us</Title>
              <Text style={{ ...whiteTextStyle, ...textBlockStyle }}>+1 (123) 456-7890</Text>
              <Text style={whiteTextStyle}>hello@example.com</Text>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Bottom links and copyright */}
      <Divider style={dividerStyle} />

      <Row justify="space-between" align="middle" style={{ marginTop: '16px' }}>

        <Col xs={24} md={12} style={{ textAlign: 'left', marginTop: '16px' }}>
          <Space align="center" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Text style={{ color: '#999' }}>© 2025 </Text>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;