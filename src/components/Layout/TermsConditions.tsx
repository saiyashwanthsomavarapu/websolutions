import { Row, Col, Typography, Space, Grid } from 'antd';
import Card from 'antd/es/card/Card';

const { Title, Paragraph } = Typography;


const styleProps = {
    color: '#121212',
    letterSpacing: '2px',
    textTransform: 'uppercase' as 'uppercase',
    fontWeight: '300',
    textDecoration: 'underline',
    textUnderlineOffset: '10px'
}
const TermsConditions = () => {
    const { useBreakpoint } = Grid;
    const screen = useBreakpoint();

    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: (screen.lg || screen.md) ? '120px' : '100px 50px',
            backgroundColor: '#fff'
        }}>
            <Row gutter={[48, 48]} >
                <Col xs={24} md={24} style={{ display: 'flex', flexDirection: 'column' }} >

                    <Typography.Text style={styleProps}>
                        Terms and Conditions
                    </Typography.Text>
                </Col>
                <Col xs={24} md={24} lg={8}>

                    <Card
                        className="service-card"
                        style={{
                            marginBottom: '24px',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            height: '100%',
                            padding: '24px',
                            backgroundColor: 'rgb(241, 246, 246)',
                            // maxWidth: '500px',
                        }}
                        hoverable
                    >
                        <div style={{ fontSize: '32px', marginBottom: '10px' }}>
                            {/* <img src={img} style={{ width: '50px', height: '50px' }} /> */}
                        </div>
                        <Title level={4} style={{ marginBottom: '12px', }}>Illegal Use</Title>
                        <Paragraph style={{ color: '#555', marginBottom: 0 }}>
                            Please read these terms and conditions carefully before using our website. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
                            Please read these terms and conditions carefully before using our website. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.

                        </Paragraph>
                    </Card>
                </Col>
                <Col xs={24} md={24} lg={8}>

                    <Card
                        className="service-card"
                        style={{
                            marginBottom: '24px',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            height: '100%',
                            padding: '24px',
                            backgroundColor: 'rgb(241, 246, 246)'
                            // maxWidth: '500px',
                        }}
                        hoverable
                    >
                        <div style={{ fontSize: '32px', marginBottom: '10px' }}>
                            {/* <img src={img} style={{ width: '50px', height: '50px' }} /> */}
                        </div>
                        <Title level={4} style={{ marginBottom: '12px', }}>Spamming</Title>
                        <Paragraph style={{ color: '#555', marginBottom: 0 }}>
                            Please read these terms and conditions carefully before using our website. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
                        </Paragraph>
                    </Card>
                </Col>
                <Col xs={24} md={24} lg={8}>

                    <Card
                        className="service-card"
                        style={{
                            marginBottom: '24px',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            height: '100%',
                            padding: '24px',
                            backgroundColor: 'rgb(241, 246, 246)'
                            // maxWidth: '500px',
                        }}
                        hoverable
                    >
                        <div style={{ fontSize: '32px', marginBottom: '10px' }}>
                            {/* <img src={img} style={{ width: '50px', height: '50px' }} /> */}
                        </div>
                        <Title level={4} style={{ marginBottom: '12px', }}>Actions Taken by Aadhya Web</Title>
                        <Paragraph style={{ color: '#555', marginBottom: 0 }}>
                            Please read these terms and conditions carefully before using our website. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </Space >
    );
}

export default TermsConditions