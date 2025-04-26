import { Row, Col, Typography, Space, Grid } from "antd";

import { TermConditionData } from "../../Utils/appContants";


const { Title, Paragraph } = Typography;

const TermCondition = () => {
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
                            fontSize: screen.lg || screen.md ? "16px" : "14px",
                            lineHeight: "1.6",
                            color: "#555",
                            textAlign: 'justify'
                        }}
                    >
                        Please read these terms and conditions carefully before using our
                        website. By accessing or using our services, you agree to be bound
                        by these terms. If you disagree with any part of the terms, you may
                        not access the service.
                    </Paragraph>
                    <Paragraph
                        style={{
                            fontSize: screen.lg || screen.md ? "16px" : "14px",
                            lineHeight: "1.6",
                            color: "#555",
                        }}
                    >
                        The following Terms of Use apply to ALL Aadhya Web Solution customers:
                    </Paragraph>
                    {TermConditionData.map((item, index) => (
                        <Paragraph
                            key={index}
                            style={{
                                fontSize: screen.lg || screen.md ? "16px" : "14px",
                                lineHeight: "1.6",
                                color: "#555",
                                textAlign: 'justify'
                            }}
                        >
                            {item.subtitle && <strong> {item.subtitle}</strong>}  {item.content}
                        </Paragraph>
                    ))}
                </Col>
            </Row>
        </Space>
    );
};

export default TermCondition;
