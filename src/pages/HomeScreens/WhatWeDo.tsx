import { Row, Col, Typography, Button, Space, Grid } from "antd";
import ServiceCard from "../../components/ServiceCard";
import { services } from "../../Utils/appContants";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const ServicesSectionUI = () => {
    const screens = Grid.useBreakpoint();
    const navigateTo = useNavigate();

    return (
        <Space
            style={{
                display: "flex",
                padding: screens.lg || screens.md ? "120px" : "50px",
                justifyContent: "center",
                backgroundColor: "#f5f7f9",
            }}
        >
            <Row gutter={[48, 48]}>
                <Col
                    xs={24}
                    md={12}
                    lg={12}
                    style={{
                        position: screens.lg ? "sticky" : "relative",
                        top: "72px",
                        height: "100%",
                        marginBottom: screens.xs || screens.sm ? "48px" : 0,
                    }}
                >
                    <div>
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
                            WHAT WE DO
                        </Text>
                        <Title
                            level={2}
                            style={{
                                fontSize: screens.lg ? "2.5em" : "2em",
                                marginTop: 10,
                                lineHeight: "1.2",
                            }}
                        >
                            Our Services
                        </Title>
                        <Paragraph
                            style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                color: "#5c5c5c",
                                marginBottom: "32px",
                                textAlign: "justify",
                            }}
                        >
                            Our range of services is crafted to deliver strategic insights,
                            and foster sustainable growth for businesses across various
                            industries.
                        </Paragraph>
                    </div>
                    <Button
                        type="primary"
                        style={{
                            backgroundColor: "#1a1a1a",
                            border: "none",
                            borderRadius: "4px",
                            height: "48px",
                            padding: "0 24px",
                        }}
                        onClick={() => navigateTo("/services")}
                    >
                        View All Services
                    </Button>
                </Col>

                {/* Right Side - Cards with Hover Effect */}
                <Col xs={24} md={12} lg={12}>
                    <Space direction="vertical" size={24} style={{ width: "100%" }}>
                        {services.slice(0, 3).map(({ title, img, description, Icon }, index) => (
                            <ServiceCard
                                key={index}
                                img={img}
                                icon={<Icon />}
                                title={title}
                                description={description}
                            />
                        ))}
                    </Space>
                </Col>
            </Row>
        </Space>
    );
};

export default ServicesSectionUI;
