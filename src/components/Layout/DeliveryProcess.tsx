import { Row, Col, Typography, Space, Grid } from "antd";

import { DeliveryProcessData } from "../../Utils/appContants";

// Ensure DeliveryProcessData is properly imported and defined as an array
// addeed this code to fix the error on the console
if (!Array.isArray(DeliveryProcessData)) {
    throw new Error("DeliveryProcessData must be an array.");
}


const { Title, Text, Paragraph } = Typography;

const DeliveryProcess = () => {
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
                        Delivery Process
                    </Title>
                    <Paragraph
                        style={{
                            fontSize: screen.lg || screen.md ? "16px" : "14px",
                            lineHeight: "1.6",
                            color: "#555",
                            textAlign: 'justify'
                        }}
                    >
                        At Aadya Websolution, we believe in transparency and communication throughout the entire project journey. Our delivery process is designed to ensure that you receive high-quality services on time, every time. Here’s a breakdown of our streamlined process to give you a clear understanding of how we work:
                    </Paragraph>
                    <Paragraph
                        style={{
                            fontSize: screen.lg || screen.md ? "16px" : "14px",
                            lineHeight: "1.6",
                            color: "#555",
                        }}
                    >
                    Here’s a breakdown of our streamlined process to give you a clear understanding of how we work:
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
                    {DeliveryProcessData.map((item, index) => (
                        <Paragraph
                            key={index}
                            style={{
                                fontSize: screen.lg || screen.md ? "16px" : "14px",
                                lineHeight: "1.6",
                                color: "#555",
                                textAlign: 'justify'
                            }}
                        >
                            {item.subtitle && <strong style={{color: 'black'}}> {item.subtitle}</strong>}  {item.content}
                        </Paragraph>
                    ))}
                </Col>
            </Row>
        </Space>
    );
};

export default DeliveryProcess;