import { Row, Col, Typography, Card, Space, Grid, Input, Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

const { Title, Text, Paragraph } = Typography;



const GetInTouch = () => {
    const { useBreakpoint } = Grid;
    const form = useRef<HTMLFormElement | null>(null);
    const screen = useBreakpoint();

    const sendEmail = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (form.current === null) return;
        emailjs
            .sendForm(
                'service_97liufv', 'template_e1kdwt5', form.current, 'qIgm9NLjK5-6Q-qxS'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    // Clear all input field values
                    form.current?.reset();
                    // Success toast message
                    toast.success("Email send Successfully");
                },
                (error) => {
                    toast.error(error.text);
                }
            );
    };


    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: '#f1f6f6',
            padding: (screen.lg || screen.md) ? '120px' : '100px 50px'
        }}>
            <Toaster />
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
                <Col xs={24} sm={12} md={12} lg={12}>

                    <form ref={form} onSubmit={sendEmail}>
                        <Input size='large' placeholder="Name" style={{ marginBottom: '16px' }} />
                        <Input size='large' placeholder="Email" style={{ marginBottom: '16px' }} />
                        <TextArea size='large' rows={4} placeholder="message" maxLength={6} style={{ marginBottom: '16px' }} />

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
                        >
                            Submit
                        </Button>
                    </form>

                </Col>
                <Col xs={24} sm={12} md={12} lg={12} >
                    <Row gutter={[24, 24]}>
                        <Col xs={24} sm={12} md={12} lg={12}>
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
                        <Col xs={24} sm={12} md={12} lg={12}>
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
                </Col>
            </Row>
        </Space >
    )
}

export default GetInTouch