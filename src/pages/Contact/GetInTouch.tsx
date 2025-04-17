import { Row, Col, Typography, Card, Space, Grid } from 'antd';

const { Title, Text, Paragraph } = Typography;

const GetInTouch = () => {
    const { useBreakpoint } = Grid;
    const screen = useBreakpoint();
    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: '#f1f6f6',
            padding: (screen.lg || screen.md) ? '120px' : '100px 50px'
        }}>
            <Row gutter={[48, 48]} style={{ justifyItems: 'start' }}>
                <Col xs={24} md={24} lg={24}>
                    <Text style={{
                        color: '#121212',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        marginBottom: '1px',
                        display: 'block', textDecoration: 'underline', textUnderlineOffset: '10px'
                    }}>
                        Get in touch
                    </Text>
                    <Title level={1} style={{ marginTop: '8px', marginBottom: '40px', fontSize: '50px', fontWeight: 500, color: '#121212' }}>
                        Let us be your guide
                    </Title>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                        We’re here to help! Whether you have questions about our services, need support, or want to explore how we can collaborate, feel free to reach out to us through any of the following channels:
                    </Paragraph>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6}>
                    <Card
                        style={{
                            backgroundColor: '#f5f7f9',
                            borderRadius: '8px',
                            padding: '0 20px 20px 20px',
                            background: '#fff',

                            border: 'none',
                            height: '100%'
                        }}
                    >

                        <Title level={3} style={{ fontWeight: 500 }}>Contact us
                        </Title>
                        <Text style={{ fontWeight: 400 }}>
                            +1 (123) 456-7890
                        </Text>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} >
                    <Card
                        style={{
                            backgroundColor: '#f5f7f9',
                            borderRadius: '8px',
                            padding: '0 20px 20px 20px',
                            background: '#fff',

                            border: 'none',
                            height: '100%'
                        }}
                    >

                        <Title level={3} style={{ fontWeight: 500 }}>Email

                        </Title>
                        <Text style={{ fontWeight: 400 }}>
                            support@aadhyawebsolution.com
                        </Text>
                    </Card>
                </Col>
            </Row>
        </Space>
    )
}

export default GetInTouch