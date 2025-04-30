import { Row, Col, Typography, Button, Card, Divider, Space, Grid } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import BG from '../../assets/0_Digital Art_Futuristic_3840x2160.mp4';
import './Intro.css';
import { useNavigate } from 'react-router-dom';
import Typewriter from '../../components/Typewriter';

const { Title, Paragraph } = Typography;

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

const lightButtonStyle = {
    ...buttonStyle,
    background: '#0d2a4b',
    color: 'white',
    border: 'none',
};

const statsCardStyle = {
    padding: '0px',
    height: '100%',
};

const Intro = () => {
    const screens = Grid.useBreakpoint();
    const navigateTo = useNavigate();
    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            minHeight: '500px',
            width: '100%',
            overflow: 'hidden',
        }}>
            {/* Background video is not play in moblie we need to check this  */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.5)',
                }}
                onCanPlay={(e) => e.currentTarget.play()}
            >
                <source src={BG} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={{
                position: 'relative',
                zIndex: 1,
                height: '100%',
                padding: '0 24px',
                width: '100%',
            }}>
                <Row align="middle" justify="center" style={{ height: '100%' }}>
                    {/* First column - Always takes full width on xs screens, partial on larger screens */}
                    <Col xs={24} md={12} lg={10} style={{ width: '100%' }}>
                        <Title level={1} style={{ ...headingStyle, fontSize: screens.lg ? '2.5em' : '2em', lineHeight: '1.2' }}>
                            <Typewriter text="INNOVATING SOLUTIONS, DRIVING SUCCESS" delay={100} infinite />
                        </Title>

                        <Space size="middle">
                            <Button size="large" style={lightButtonStyle} onClick={() => navigateTo('/services')}>
                                Our Services <ArrowRightOutlined />
                            </Button>
                        </Space>
                    </Col>
                    <Col xs={24} md={10} lg={10}>
                        <Card style={{ ...statsCardStyle, background: '#fff' }}>
                            <Row gutter={0}>
                                <Col xs={12} md={12} lg={12} style={{ border: '1px solid #f0f0f0', padding: 20 }}>
                                    <Title level={1} style={{ margin: 0, fontSize: '48px' }}>500+</Title>
                                    <Divider style={{ margin: 0 }} />
                                    <Paragraph style={{ marginTop: '15px', margin: 0 }}>
                                        Clients successfully partnered with businesses worldwide.
                                    </Paragraph>
                                </Col>
                                <Col xs={12} md={12} lg={12} style={{ padding: 20, background: '#d7ddcb' }}>
                                    <Title level={1} style={{ margin: 0, fontSize: '48px' }}>100+</Title>
                                    <Divider style={{ margin: 0 }} />
                                    <Paragraph style={{ marginTop: '15px', margin: 0 }}>
                                        Projects delivered with excellence and precision.
                                    </Paragraph>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Intro;