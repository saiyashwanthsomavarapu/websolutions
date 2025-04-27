import { Row, Col, Typography, Space, Grid } from "antd";
import { privacyPolicyData } from "../../Utils/appContants";

const { Title, Paragraph } = Typography;

const PrivacyPolicy = () => {
    const { useBreakpoint } = Grid;
    const screen = useBreakpoint();

    return (
        <Space
            style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            backgroundColor: "#fff",
            padding: screen.lg || screen.md ? "120px" : "100px 50px",
            fontFamily: "Poppins', sans-serif !important",
            }}
        >
            <Row gutter={[48, 48]}>
                <Col xs={24} md={24} lg={24}>
                <Title
                level={2}
                style={{
                    fontSize: screen.lg ? "2.5em" : "2em",
                    marginTop: 10,
                    lineHeight: "1.2",
                    fontFamily: "Poppins', sans-serif !important",
                }}
                >
                Privacy Policy
                </Title>
                <Paragraph
                style={{
                    fontSize: screen.lg || screen.md ? "16px" : "14px",
                    lineHeight: "1.6",
                    color: "#555",
                    fontFamily: "Poppins', sans-serif !important",
                }}
                >
                This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
                </Paragraph>
                <p
                style={{
                    fontSize: screen.lg || screen.md ? "16px" : "14px",
                    lineHeight: "1.6",
                    color: "#555",
                    fontFamily: "Poppins', sans-serif !important",
                }}
                >
                The following Privacy Policy of Use apply to ALL Aadhya Web Solution customers:
                </p>
                {privacyPolicyData.map((item, index) => (
                <Paragraph
                    key={index}
                    style={{
                    fontSize: screen.lg || screen.md ? "16px" : "14px",
                    lineHeight: "1.6",
                    color: "#555",
                    textAlign: 'justify',
                    fontFamily: "Poppins', sans-serif !important",
                    }}
                >
                    {item.subtitle && <strong> {item.subtitle}</strong>} {item.content}
                </Paragraph>
                ))}
                        </Col>
                    </Row>
            </Space>
    );
};

export default PrivacyPolicy;
