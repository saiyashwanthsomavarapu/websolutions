import { Row, Col, Typography, Button, Card, Space, Grid } from 'antd';

const { Title, Text, Paragraph } = Typography;

const ContactUs = () => {
    const { useBreakpoint } = Grid;
    const screen = useBreakpoint();

    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: '#fff',
            padding: (screen.lg || screen.md) ? '120px' : '100px 50px'
        }}>

            <Row gutter={[48, 48]} style={{ justifyContent: 'center' }}>
                <Col xs={24} md={12} lg={12}>
                    <Text style={{
                        color: '#121212',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        marginBottom: '1px',
                        display: 'block', textDecoration: 'underline', textUnderlineOffset: '10px'
                    }}>
                        Contact Us  {screen.lg ? 'true' : 'false'} {screen.md ? 'true' : 'false'}
                    </Text>
                    <Title level={1} style={{ marginTop: '8px', marginBottom: '40px', fontSize: screen.lg ? '2.5em' : '2em', fontWeight: 500, color: '#121212' }}>
                        Get in touch with our team
                    </Title>
                    <Paragraph style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
                        We’re here to help! Whether you have questions about our services, need support, or want to explore how we can collaborate, feel free to reach out to us through any of the following channels:
                    </Paragraph>
                </Col>
                <Col xs={24} md={12} lg={12}>
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
                        <Title level={3} style={{ fontWeight: 500 }}>Contact us</Title>

                        <Paragraph style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
                            Have questions or need more information about our services?Fill out our contact form, and our dedicated team will get back to you promptly. Whether you need support or want to learn more about our platform.
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
                            onClick={() => {
                                const inputElement = document.getElementById('get-in-touch-name') as HTMLInputElement;
                                if (inputElement) {
                                    inputElement.focus();
                                }
                            }}
                        >
                            Get in touch
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Space >
    )
}

export default ContactUs