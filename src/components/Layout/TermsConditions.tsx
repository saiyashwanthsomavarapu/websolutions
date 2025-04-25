import { Row, Col, Typography, Button, Card, Space, Grid } from 'antd';

const { Title } = Typography;

const TermsConditions = () => {
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
            <Row gutter={[48, 48]} justify="center">
            <Col xs={24} md={12} lg={12}>
                <Title
                level={1}
                style={{
                    marginTop: '8px',
                    marginBottom: '40px',
                    fontSize: screen.lg || screen.md ? '50px' : '30px',
                    fontWeight: 500,
                    color: '#121212',
                }}
                >
                Terms and Conditions
                </Title>
                <p
                style={{
                    fontSize: screen.lg || screen.md ? '16px' : '14px',
                    lineHeight: '1.6',
                    color: '#555',
                }}
                >
                Please read these terms and conditions carefully before using our website. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
                </p>
                <p
                style={{
                    fontSize: screen.lg || screen.md ? '16px' : '14px',
                    lineHeight: '1.6',
                    color: '#555',
                }}
                >
                The following Terms of Use apply to ALL Web Indore customers:
                </p>
                <p
                style={{
                    fontSize: screen.lg || screen.md ? '16px' : '14px',
                    lineHeight: '1.6',
                    color: '#555',
                }}
                >
                <strong>Illegal Use:</strong> Web Indore services may be used for lawful purposes only. Transmission, storage or distribution of any information, data or material in violation of any applicable law or regulation or that may directly facilitate the violation of any particular law or regulation is prohibited. This includes, but is not limited to: copyrighted material; trademarks; trade secrets or other intellectual property rights used without proper authorization; material that is obscene, defamatory, constitutes an illegal threat, or violates export control laws.
                </p>
                <p
                style={{
                    fontSize: screen.lg || screen.md ? '16px' : '14px',
                    lineHeight: '1.6',
                    color: '#555',
                }}
                >
                <strong>Spamming:</strong> Sending unsolicited bulk and/or commercial messages over the Internet (known as “spamming”) is prohibited, regardless of whether or not it overloads a server or disrupts service to Web Indore’s customers. Web Indore reserves the right to determine, in its sole and absolute discretion, what constitutes a violation of this provision.
                </p>
                <p
                style={{
                    fontSize: screen.lg || screen.md ? '16px' : '14px',
                    lineHeight: '1.6',
                    color: '#555',
                }}
                >
                <strong>System and Network Abuse:</strong> Violations of system or network security are prohibited and may result in criminal and civil liability. Examples of system or network security violations include, without limitation the following: unauthorized access to or use of data, systems or networks; interference with service to any user, host or network including, without limitation, mail bombing, flooding, deliberate attempts to overload
        </p>
            </Col>
        </Row>
    </Space>
    );
}

export default TermsConditions