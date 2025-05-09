import { Row, Col, Typography, Button, Card, Space, Divider, Grid } from 'antd';
import { useNavigate } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;

function OurHistory() {
    const screen = Grid.useBreakpoint();
    const navigateTo = useNavigate()

    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: '#fff',
            padding: (screen.lg || screen.md) ? '120px' : '50px',
        }}>
            <Row gutter={[48, 48]} >
                <Col xs={24} md={12}>
                    <Text style={{
                        color: '#121212',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        marginBottom: '1px',
                        display: 'block', textDecoration: 'underline', textUnderlineOffset: '10px'
                    }}>
                        OUR HISTORY
                    </Text>
                    <Title level={1} style={{ marginTop: '8px', marginBottom: '40px', fontSize: screen.lg ? '2.5em' : '2em', fontWeight: 500, color: '#121212' }}>
                        Empowering Businesses Through Innovation & Results
                    </Title>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
                    At the heart of every thriving eCommerce brand is a partner that understands how to adapt, innovate, and scale. At Adya Websolution, we don’t just build Shopify stores — we engineer digital success.
                    <p>From custom development to growth-focused strategies, we help businesses streamline operations, enhance customer experience, and stay ahead in an ever-evolving digital landscape.</p>
                    </Paragraph>
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            marginTop: '24px',
                            backgroundColor: '#000',
                            borderColor: '#000',
                            borderRadius: '4px',
                            height: '48px',
                            padding: '0 24px'
                        }}
                        onClick={() => navigateTo("/contact")}
                    >
                        Contact Us
                    </Button>
                    <Divider type="horizontal" style={{ margin: '60px 0px' }} />
                    <div >
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={8}>
                                <Card
                                    style={{
                                        backgroundColor: '#f5f7f9',
                                        borderRadius: '8px',
                                        padding: 20,
                                        background: '#f1f6f6',

                                        border: 'none',
                                        height: '100%'
                                    }}
                                >

                                    <Title level={3} style={{ fontWeight: 500 }}>95% Customer Satisfaction</Title>
                                    <Divider type='horizontal' />
                                    <Text style={{ fontWeight: 400 }}>
                                        We prioritize client success with personalized support and world-class solutions.
                                    </Text>
                                </Card>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Card
                                    style={{
                                        backgroundColor: '#f5f7f9',
                                        borderRadius: '8px',
                                        padding: 20,
                                        background: '#f1f6f6',

                                        border: 'none',
                                        height: '100%'
                                    }}
                                >
                                    <Title level={3} style={{ fontWeight: 500 }}>50% Global Clients Served</Title>
                                    <Divider type='horizontal' />
                                    <Text style={{ fontWeight: 400 }}>
                                        Trusted by businesses worldwide to deliver performance-driven Shopify experiences.
                                    </Text>
                                </Card>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Card
                                    style={{
                                        backgroundColor: '#f5f7f9',
                                        borderRadius: '8px',
                                        padding: 20,
                                        background: '#f1f6f6',

                                        border: 'none',
                                        height: '100%'
                                    }}
                                >
                                    <Title level={3} style={{ fontWeight: 500 }}>90% Client Retention Rate</Title>
                                    <Divider type='horizontal' />
                                    <Text style={{ fontWeight: 400 }}>
                                    Our results speak for themselves — clients stay with us because we deliver.
                                    </Text>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </Col>
                <Col xs={24} md={12} lg={12} style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden', width: '100%', maxWidth: '557px', aspectRatio: 557 / 641, borderRadius: '10px' }}>
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Team working together"
                        style={{
                            overflow: 'hidden',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                </Col>

            </Row>
        </Space >
    )
}

export default OurHistory;