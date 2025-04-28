import { Row, Col, Typography, Space, Grid } from "antd";
import { privacyPolicyData } from "../../Utils/appContants";

const { Title, Text, Paragraph } = Typography;

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
            }}
        >
            <Row gutter={[48, 48]}>
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
                        Privacy
                    </Text>
                    <Title
                        level={2}
                        style={{
                            fontSize: screen.lg ? "2.5em" : "2em",
                            marginTop: 10,
                            lineHeight: "1.2",
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
                    <Paragraph
                        style={{
                            fontSize: screen.lg || screen.md ? "16px" : "14px",
                            lineHeight: "1.6",
                            color: "#555",
                        }}
                    >
                        The following Terms of Use apply to ALL Web Indore customers:
                    </Paragraph>
                    {privacyPolicyData.map((item, index) => (
                        <Paragraph
                            key={index}
                            style={{
                                fontSize: screen.lg || screen.md ? "16px" : "14px",
                                lineHeight: "1.6",
                                color: "#555",
                                textAlign: 'justify'
                            }}
                        >
                            {item.subtitle && <strong style={{color: 'black'}}> {item.subtitle}</strong>} {item.content}
                        </Paragraph>
                    ))}
                </Col>
            </Row>
        </Space>
    );
};

export default PrivacyPolicy;
