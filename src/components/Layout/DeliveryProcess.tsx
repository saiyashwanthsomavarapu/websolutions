import { Row, Col, Typography, Space, Grid } from 'antd';

const { Text, Title, Paragraph } = Typography;

const DeliveryProcess = () => {
    const { useBreakpoint } = Grid;
    const screen = useBreakpoint();

    return (
        <Space
            style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                backgroundColor: '#fff',
                padding: screen.lg || screen.md ? '120px' : '100px 50px',
            }}
        >
            <Row gutter={[48, 48]} >
                <Col xs={24} md={24} lg={24}>
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
                        Delivery Process
                    </Text>
                    <Title
                        level={2}
                        style={{
                            fontSize: screen.lg ? "2.5em" : "2em",
                            marginTop: 10,
                            lineHeight: "1.2",
                        }}
                    >
                        Terms and Conditions
                    </Title>
                    <Paragraph
                        style={{
                            fontSize: screen.lg || screen.md ? '16px' : '14px',
                            lineHeight: '1.6',
                            color: '#555',
                        }}
                    >
                        Please read these terms and conditions carefully before using our website. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
                    </Paragraph>
                    <Paragraph
                        style={{
                            fontSize: screen.lg || screen.md ? '16px' : '14px',
                            lineHeight: '1.6',
                            color: '#555',
                        }}
                    >
                        The following Terms of Use apply to ALL Web Indore customers:
                    </Paragraph>
                    <Paragraph
                        style={{
                            fontSize: screen.lg || screen.md ? '16px' : '14px',
                            lineHeight: '1.6',
                            color: '#555',
                        }}
                    >
                        <strong>Illegal Use:</strong> Web Indore services may be used for lawful purposes only. Transmission, storage or distribution of any information, data or material in violation of any applicable law or regulation or that may directly facilitate the violation of any particular law or regulation is prohibited. This includes, but is not limited to: copyrighted material; trademarks; trade secrets or other intellectual property rights used without proper authorization; material that is obscene, defamatory, constitutes an illegal threat, or violates export control laws.
                    </Paragraph>
                </Col>
            </Row>
        </Space>
    );
}

export default DeliveryProcess