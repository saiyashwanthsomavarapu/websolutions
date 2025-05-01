import { BarChartOutlined, PieChartOutlined, SendOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { Card, Col, Grid, Row, Space, Typography } from 'antd';
import './supportedPlatforms.css'
<BarChartOutlined />;

const { Text, Title, Paragraph } = Typography

function WhyChooseUs() {
    const screen = Grid.useBreakpoint();

    const list = [
        {
            icon: <BarChartOutlined style={{ fontSize: '42px', color: 'black' }} />,
            title: 'Outstanding Services',
            description: 'Providing exceptional customer services is our main strength and we take pride in providing outstanding services to customers.'
        },
        {
            icon: <PieChartOutlined style={{ fontSize: '48px', color: 'black' }} />,
            title: 'Experience Team',
            description: 'We have great skills and expertise that makes our company a more trusted one.'
        },
        {
            icon: <SendOutlined style={{ fontSize: '48px', color: 'black' }} />,
            title: 'Best Price',
            description: 'we offer the best solution for your business at an honest price & best price.'
        },
        {
            icon: <FieldTimeOutlined style={{ fontSize: '48px', color: 'black' }} />,
            title: 'Deliverd On Time',
            description: 'We care about our clients and can often be found working out of hours to get everything"just right".'
        }
    ]
    return (
        <Space
            style={{
                display: "flex",
                padding: screen.lg || screen.md ? "120px" : "50px",
                backgroundColor: "#f5f5f5",
            }}
        >
            <Row gutter={[48, 48]}>
                <Col xs={24} md={24} lg={24} style={{ position: 'relative' }}>
                    <Text
                        style={{
                            color: "#000",
                            textTransform: "uppercase",
                            fontWeight: "300",
                            display: "block",
                            textDecoration: "underline",
                            textUnderlineOffset: "10px",
                        }}
                    >
                        WHy choose us
                    </Text>
                    <Row gutter={[24, 24]} style={{ marginTop: 50 }}>
                        {list.map((item, index) => (
                            <Col xs={24} md={12} lg={6} key={index}>
                                <Card
                                    className='choose-us-card'
                                    style={{
                                        border: 'none',
                                        minHeight: 300,
                                        background: '#fff',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '24px 16px',
                                        borderRadius: '8px',
                                        height: '100%'
                                    }}
                                    hoverable
                                >
                                    <div style={{ marginBottom: '16px' }}>
                                        {item.icon}
                                    </div>
                                    <Title
                                        level={2}
                                        style={{
                                            fontSize: screen.lg ? '1.5em' : '1em',
                                            marginTop: 10,
                                            marginBottom: '16px',
                                            lineHeight: '1.2',
                                            color: '#000',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {item.title}
                                    </Title>
                                    <Paragraph
                                        style={{
                                            fontSize: '16px',
                                            color: '#000',
                                            textAlign: 'center',
                                            marginBottom: '0',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        {item.description}
                                    </Paragraph>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Space>
    )
}

export default WhyChooseUs