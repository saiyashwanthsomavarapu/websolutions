import { Row, Col, Typography, Button, Card, Divider, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './Intro.css';
const { Title, Paragraph } = Typography;

const heroSectionStyle = {
    position: 'relative',
    height: '100vh',
    minHeight: '500px',
    width: '100%',
    overflow: 'hidden',
};

const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(../src/assets/bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.5)',
};

const contentContainerStyle = {
    position: 'relative',
    display: 'flex',
    alignItem: "bottom",
    zIndex: 1,
    height: '100%',
    padding: '0 24px',
};

const headingStyle = {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: '40px',
};

const buttonStyle = {
    height: '44px',
    borderRadius: '4px',
    fontWeight: '500',
};

const darkButtonStyle = {
    ...buttonStyle,
    background: '#222',
    color: '#fff',
    border: 'none',
};

const lightButtonStyle = {
    ...buttonStyle,
    background: '#fff',
    color: '#222',
    border: 'none',
};

const statsCardStyle = {
    padding: '0px',
    height: '100%',
};

const Intro = () => {
    return (
        <div style={heroSectionStyle}>
            <div style={backgroundImageStyle}></div>

            <Space.Compact style={contentContainerStyle}>
                <Row align="middle" justify={'center'} style={{ height: '100%', }}>
                    <Col xs={24} md={12} lg={10} style={{ marginBottom: '40px' }}>
                        <Title level={1} style={{ ...headingStyle, fontSize: '48px', lineHeight: '1.2' }}>
                            INNOVATING SOLUTIONS, DRIVING SUCCESS
                        </Title>

                        <Space size="middle">
                            <Button size="large" style={darkButtonStyle}>
                                Read More <ArrowRightOutlined />
                            </Button>
                            <Button size="large" style={lightButtonStyle}>
                                Our Services <ArrowRightOutlined />
                            </Button>
                        </Space>
                    </Col>
                    <Col xs={24} md={10} lg={10}>
                        <Card style={{ ...statsCardStyle, background: '#fff' }} >
                            <Row >
                                <Col xs={12} md={12} lg={12} style={{ border: '1px solid #f0f0f0', padding: 20 }}>
                                    <Title level={1} style={{ margin: 0, fontSize: '48px' }}>500+</Title>
                                    <Divider />
                                    <Paragraph style={{ margin: 0 }}>
                                        Clients successfully partnered with businesses worldwide.
                                    </Paragraph>
                                </Col>
                                <Col xs={12} md={12} lg={12} style={{ padding: 20, background: '#d7ddcb' }}>
                                    <Title level={1} style={{ margin: 0, fontSize: '48px' }}>100+</Title>
                                    <Divider />
                                    <Paragraph style={{ margin: 0 }}>
                                        Industries: Expertise across diverse sectors.
                                    </Paragraph>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Space.Compact>
        </div>
    );
};

export default Intro;