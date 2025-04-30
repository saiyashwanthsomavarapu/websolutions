import React, { Fragment } from 'react';
import { Row, Col, Typography, Tabs, Space, TabsProps, Card, Grid, Image } from 'antd';
import { AimOutlined, ShakeOutlined } from '@ant-design/icons';
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
            <Paragraph style={{ fontSize: '16px', marginBottom: '40px', color: '#555' }}>
                With the rapid growth of e-commerce and the significant advantages it offers, everyone
                is eager to establish a sales channel online. However, not everyone knows the best
                Solution.
            </Paragraph>

            <Space direction="vertical" size={32} style={{ width: '100%' }}>
                <Card style={{ minWidth: 300, padding: 24 }}>
                    <Card.Meta
                        avatar={<AimOutlined style={iconStyle} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Mission Statement"
                        description={
                            <>
                                <Paragraph style={{ marginBottom: 0, color: '#555' }}>
                                    With the rapid growth of e-commerce and the significant advantages it offers,
                                    everyone is eager to establish a sales channel online. However, not everyone
                                    knows the best Solution.
                                </Paragraph>
                            </>
                        }
                    />
                </Card>
                <Card style={{ minWidth: 300, padding: 24 }}>
                    <Card.Meta
                        avatar={<ShakeOutlined style={iconStyle} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Mission Statement"
                        description={
                            <>
                                <Paragraph style={{ marginBottom: 0, color: '#555' }}>
                                    We're proud to deliver results that matter. Our unwavering commitment to
                                    excellence, innovation, and collaboration ensures every client receives
                                    exceptional service and measurable outcomes.
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
        { key: '2', label: 'Why Choose Us', children: 'Content of Tab Pane 2' },
        { key: '3', label: 'How It Works', children: 'Content of Tab Pane 3' },
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
                        A thribing Business With Genuine Professiobal
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