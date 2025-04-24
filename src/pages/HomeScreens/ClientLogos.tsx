import { Typography, Row, Col, Space, Grid } from 'antd';
import logo1 from '../../assets/logo-removebg.png';
import logo2 from '../../assets/GoDaddy.png';
import './ClientLogos.css';

const { Title, Text, Paragraph } = Typography;

const ClientLogos = () => {
    const screens = Grid.useBreakpoint();
    const clientRows = [
        { name: 'Aciom Consulting', logo: logo1 },
        { name: 'RB Group', logo: logo2 },
        { name: 'Logistics Park', logo: logo1 },
        { name: 'Beacon', logo: logo2 },
        { name: 'A Softech', logo: logo2 },
        { name: 'Bandejia', logo: logo1 },
        { name: 'Anubhav', logo: logo2 },
        { name: 'TPT', logo: logo1 },
        { name: 'Penza Group', logo: logo1 },
        { name: 'Mtandt', logo: logo2 },
        { name: 'Tirubala Group', logo: logo1 },
        { name: 'KC', logo: logo2 },
    ];

    return (
        <Space style={{
            display: "flex",
            padding: screens.lg || screens.md ? "120px" : "50px",
            background: '#0d2a4b',
        }}>
            <Row gutter={[48, 48]}>
                <Col xs={24} md={24} lg={24}>
                    <Text style={{
                        color: "#fff",
                        textTransform: "uppercase",
                        fontWeight: "300",
                        display: "block",
                        textDecoration: "underline",
                        textUnderlineOffset: "10px",
                    }}>
                        Our clients
                    </Text>
                    <Title level={2}
                        style={{
                            fontSize: screens.lg ? "2.5em" : "2em",
                            marginTop: 10,
                            lineHeight: "1.2",
                            color: "#fff",
                        }}>
                        We Have Worked For
                    </Title>
                    <Paragraph
                        style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#fff",
                            marginBottom: "32px",
                            
                        }}
                    >
                        Our clients consider us a strategic partner. From concept to iterative development, <strong>we'll help you realize your product.</strong>
                    </Paragraph>
                    <div style={{ display: 'flex', flexWrap: 'wrap', }}>

                        <Row gutter={[24, 24]}>
                            {clientRows.map((client, colIndex) => (
                                <Col xs={12} sm={12} md={6} key={`client-${colIndex}`} style={{ marginBottom: 10 }}>
                                    <div className="logo-box">
                                        <img
                                            src={client.logo}
                                            alt={`${client.name} logo`}
                                            className="client-logo"
                                        />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Space >
    );
};

export default ClientLogos;