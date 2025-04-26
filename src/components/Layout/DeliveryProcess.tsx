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
                    <Title
                        level={2}
                        style={{
                            fontSize: screen.lg ? "2.5em" : "2em",
                            marginTop: 10,
                            lineHeight: "1.2",
                        }}
                    >
                        Delivery Process
                    </Title>
                    {/* <Paragraph
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
                        The following Terms of Use apply to ALL Aadhya Web Solution customers:
                    </Paragraph> */}
                    <Paragraph
                        style={{
                            fontSize: screen.lg || screen.md ? '16px' : '14px',
                            lineHeight: '1.6',
                            color: '#555',
                        }}
                    >
                        <strong>Delivery Process:</strong> 
                            We discuss the delivery of project at the time of discussion over project,it totally depends upon the pages required by the client and we decide the timeline accordingly
                            use the services already purchased until the end of your prepaid term.  
                    </Paragraph>
                </Col>
            </Row>
        </Space>
    );
}

export default DeliveryProcess