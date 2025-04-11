import { Row, Col, Typography, Button, Card, Space, Grid } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const CaseStudySection = () => {
    const screens = Grid.useBreakpoint();
    return (
        <Space style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#f0efdf',
            overflow: 'hidden'
        }}>
            <Row gutter={[48, 48]}>
                {/* Left side - Image */}
                <Col xs={24} md={12} lg={10} style={{ position: 'relative' }}>
                    <div style={{
                        minHeight: '600px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                    }}>
                        {/* White card overlay */}
                        <Card
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                width: '250px',
                                padding: '24px',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                                border: 'none',
                                zIndex: 2
                            }}
                        >
                            <Title level={2} style={{ fontSize: '36px', margin: 0, fontWeight: '400' }}>
                                100+
                            </Title>
                            <Text style={{ display: 'block', fontSize: '16px' }}>
                                Successful consulting project
                            </Text>
                        </Card>
                    </div>
                </Col>
                {/* Right side - Content */}
                <Col xs={24} md={12} lg={14} style={{ padding: screens.lg ? '60px 40px' : '40px 80px' }}>
                    <Text style={{
                        color: '#000',
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        display: 'block',
                        textDecoration: 'underline',
                        textUnderlineOffset: '10px'
                    }}>
                        CASE STUDY
                    </Text>

                    <Title level={2} style={{
                        fontSize: screens.lg ? '2.5em' : '2em',
                        marginTop: 10,
                        lineHeight: '1.2',
                    }}>
                        Transforming Challenges into Opportunities
                    </Title>

                    <Paragraph style={{
                        fontSize: '16px',
                        color: '#555',
                        marginBottom: '32px',
                        lineHeight: '1.6'
                    }}>
                        Our case studies showcase the real-world impact of our expertise. From startups to
                        global enterprises, we've partnered with businesses to overcome challenges and
                        achieve extraordinary results
                    </Paragraph>

                    <Space direction="vertical" size={16} style={{ marginBottom: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <CheckOutlined style={{
                                color: '#333',
                                marginRight: '12px',
                                marginTop: '4px'
                            }} />
                            <Text style={{ fontSize: '16px' }}>
                                100+ success stories across industries
                            </Text>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <CheckOutlined style={{
                                color: '#333',
                                marginRight: '12px',
                                marginTop: '4px'
                            }} />
                            <Text style={{ fontSize: '16px' }}>
                                25% average cost savings achieved for clients.
                            </Text>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <CheckOutlined style={{
                                color: '#333',
                                marginRight: '12px',
                                marginTop: '4px'
                            }} />
                            <Text style={{ fontSize: '16px' }}>
                                98% client satisfaction rate.
                            </Text>
                        </div>
                    </Space>
                    <Row>
                        <Col xs={24} lg={6}>
                            <Button
                                type="primary"
                                style={{
                                    backgroundColor: '#1a1a1a',
                                    border: 'none',
                                    borderRadius: '4px',
                                    height: '48px',
                                    padding: '0 24px',
                                    fontSize: '16px'
                                }}
                            >
                                Explore All Case Studies
                            </Button>
                        </Col>
                    </Row>

                </Col>

            </Row>
        </Space>
    );
};

export default CaseStudySection;