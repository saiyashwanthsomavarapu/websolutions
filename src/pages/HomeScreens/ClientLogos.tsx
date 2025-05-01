import { Typography, Row, Col, Space, Grid } from 'antd';
import BabyStep from '../../assets/Brand/Baby-Step-Products.jpg';
import BasicHealth from '../../assets/Brand/Basic-Health-Care-Supplies.jpg';
import FlightRisen from '../../assets/Brand/Flight_risen_travels.png';
import NaidvarTrust from '../../assets/Brand/Naidvar_Trust.png';
import Sadhvi from '../../assets/Brand/Sadhvi.png';
import Suger from '../../assets/Brand/Suger.png';
import Alekhya from '../../assets/Brand/Alekhya.png';
import AmantroAgro from '../../assets/Brand/AmantroAgro.jpg';
import Lifewonderful from '../../assets/Brand/Lifewonderful.png';
import cropped from '../../assets/Brand/cropped-Logo-Main.png';
import './ClientLogos.css';

const { Title, Text, Paragraph } = Typography;

const ClientLogos = () => {
    const screens = Grid.useBreakpoint();
    const clientRows = [
        { name: 'Baby Step Products', logo: BabyStep },
        { name: 'Basic Health Care Supplies', logo: BasicHealth },
        { name: 'Flight risen travels', logo: FlightRisen },
        { name: 'Naidvar Trust', logo: NaidvarTrust },
        { name: 'Sadhvi', logo: Sadhvi },
        { name: 'Suger', logo: Suger },
        { name: 'Alekhya', logo: Alekhya },
        { name: 'Amantro Agro', logo: AmantroAgro },
        { name: 'Life wonderful', logo: Lifewonderful },
        { name: 'cropped', logo: cropped },
        // { name: 'Tirubala Group', logo: logo1 },
        // { name: 'KC', logo: logo2 },
    ];

    return (
        <Space style={{
            display: "flex",
            padding: screens.lg || screens.md ? "120px" : "50px",
            background: '#fff',
        }}>
            <Row gutter={[48, 48]}>
                <Col xs={24} md={24} lg={24}>
                    <Text style={{
                        color: "#000",
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
                            color: "#000",
                        }}>
                        We Have Worked For
                    </Title>
                    <Paragraph
                        style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#000",
                            marginBottom: "32px",

                        }}
                    >
                        Our clients consider us a strategic partner. From concept to iterative development, <strong>we'll help you realize your product.</strong>
                    </Paragraph>
                    <div style={{ display: 'flex', flexWrap: 'wrap'}}>

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