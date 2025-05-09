import React, { Fragment } from 'react';
import { Row, Col, Typography, Tabs, Space, TabsProps, Card, Grid, Image } from 'antd';
import { AimOutlined, ShakeOutlined, RocketOutlined, FullscreenOutlined , TeamOutlined   } from '@ant-design/icons';
import './styles.css';
const { Title, Text, Paragraph } = Typography;

const Tab1 = () => {

    const iconStyle = {
        fontSize: '32px',
        color: '#333',
        marginRight: '16px',
    };

    return (
        <Fragment>
            <Paragraph style={{ fontSize: '16px', marginBottom: '40px', color: '#555', textAlign: 'left' }}>
                In the fast-paced world of e-commerce, having a Shopify store isn't enough—you need the right strategy, design, and development to stand out.
                We help you avoid costly mistakes, optimize for performance, and turn your online presence into a growth engine
            </Paragraph>

            <Space direction="vertical" size={32} style={{ width: '100%' }}>
                <Card style={{ minWidth: 300, padding: 24 }}>
                    <Card.Meta
                        avatar={<AimOutlined style={iconStyle} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Our Mission"
                        description={
                            <>
                                <Paragraph style={{ marginBottom: 0, color: '#555', textAlign: 'justify' }}>
                                    We’re here to simplify technology for business owners. 
                                    Our mission is to empower entrepreneurs, startups, and D2C brands with powerful, scalable, and conversion-optimized Shopify solutions that drive long-term growth.
                                </Paragraph>
                            </>
                        }
                    />
                </Card>
                <Card style={{ minWidth: 300, padding: 24 }}>
                    <Card.Meta
                        avatar={<ShakeOutlined style={iconStyle} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="What Drives Us"
                        description={
                            <>
                                <Paragraph style={{ marginBottom: 0, color: '#555', textAlign: 'justify' }}>
                                We believe in delivering measurable impact. 
                                Our commitment to quality, innovation, and long-term partnerships ensures every client not only gets a great store—but also the tools and support to thrive in the competitive digital marketplace.
                                </Paragraph>
                            </>
                        }
                    />
                </Card>
            </Space>
        </Fragment>
    )
}
const Tab2 = () => {

    const iconStyle = {
        fontSize: '32px',
        color: '#333',
        marginRight: '16px',
    };

    return (
        <Fragment>
            <Paragraph style={{ fontSize: '16px', marginBottom: '40px', color: '#555', textAlign: 'justify' }}>
                    At Aadhya Web Solution, we combine passion, precision, and performance to empower businesses through powerful Shopify solutions. 
                    Whether you're just starting or scaling fast, our mission is to craft tailored e-commerce experiences that drive results. 
            </Paragraph>

            <Space direction="vertical" size={32} style={{ width: '100%' }}>
                <Card style={{ minWidth: 300, padding: 24 }}>
                    <Card.Meta
                        avatar={<AimOutlined style={iconStyle} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Tailored Solutions"
                        description={
                            <>
                                <Paragraph style={{ marginBottom: 0, color: '#555', textAlign: 'justify' }}>
                                     Every business is different—we build your store to fit your unique brand and goals.
                                </Paragraph>
                            </>
                        }
                    />
                </Card>
                <Card style={{ minWidth: 300, padding: 24 }}>
                    <Card.Meta
                        avatar={<RocketOutlined  style={iconStyle} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Performance-Driven Approach"
                        description={
                            <>
                                <Paragraph style={{ marginBottom: 0, color: '#555', textAlign: 'justify' }}>
                                    Speed, UX, and conversion are at the core of every store we develop.
                                </Paragraph>
                            </>
                        }
                    />
                </Card>
                <Card style={{ minWidth: 300, padding: 24 }}>
                    <Card.Meta
                        avatar={<TeamOutlined style={iconStyle} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Expert Team"
                        description={
                            <>
                                <Paragraph style={{ marginBottom: 0, color: '#555', textAlign: 'justify' }}>
                                    Certified Shopify developers with years of hands-on experience.                                
                                </Paragraph>
                            </>
                        }
                    />
                </Card>
                <Card style={{ minWidth: 300, padding: 24 }}>
                    <Card.Meta
                        avatar={<FullscreenOutlined style={iconStyle} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Full Support"
                        description={
                            <>
                                <Paragraph style={{ marginBottom: 0, color: '#555', textAlign: 'justify' }}>
                                    From launch to growth—we stay with you.
                                </Paragraph>
                            </>
                        }
                    />
                </Card>
            </Space>
        </Fragment>
    )
}
function Aboutus() {
    const screen = Grid.useBreakpoint();
    type Align = 'end' | 'start' | 'center' | undefined;
    const [alignValue, _] = React.useState<Align>('center');
    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        { key: '1', label: 'Why Need Consultation?', children: Tab1() },
        { key: '2', label: 'Why Choose Us', children: Tab2() },
        // { key: '3', label: 'How It Works', children: 'Content of Tab Pane 3' },
    ];
    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: (screen.lg || screen.md) ? '120px' : '100px 50px',
            backgroundColor: '#fff'
        }}>
            <Row gutter={[48, 48]} >
                <Col xs={24} md={24} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
                    <Text style={{
                        color: '#121212',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        textDecoration: 'underline',
                        textUnderlineOffset: '10px'
                    }}>
                        ABOUT US
                    </Text>
                    <Title level={2} style={{ marginTop: '8px', fontSize: screen.lg ? '2.5em' : '2em', fontWeight: 500, color: '#121212' }}>
                        Our Story
                    </Title>
                </Col>
                <Col xs={24} md={12} lg={12} style={{ overflow: 'hidden', width: '100%', maxWidth: '557px', aspectRatio: 557 / 641, borderRadius: '10px' }}>
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Team working together"
                        height={'100%'}
                        width={'100%'}
                        preview={false}
                        style={{
                            overflow: 'hidden',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                </Col>
                <Col xs={24} md={12} >
                    <Title level={3} style={{ marginBottom: '24px', fontSize: '32px', lineHeight: '120%', color: '#121212', fontWeight: 400 }}>
                        A Thriving Shopify Agency Backed by Real Expertise
                    </Title>
                    <div className="responsive-tabs-container">
                        <Tabs
                            defaultActiveKey="1"
                            // tabBarGutter={0}
                            // tabBarStyle={{ overflowX: 'auto' }}
                            items={items}
                            onChange={onChange}
                            indicator={{ size: (origin) => origin - 20, align: alignValue }}
                        />
                    </div>
                </Col>
            </Row>
        </Space >
    )
}

export default Aboutus