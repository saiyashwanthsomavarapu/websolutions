import { Row, Col, Typography, Space, Grid } from "antd";
import { cancellationRefundPolicyData } from "../../Utils/appContants";

const { Title, Paragraph } = Typography;

const CancellationRefundPolicy = () => {
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
                  Cancellation Refund Policy
                </Title>
                {cancellationRefundPolicyData.map((item, index) => (
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
                    {item.subtitle && <strong> {item.subtitle}</strong>}  {item.content}
                </Paragraph>
                ))}
            </Col>
            </Row>
        </Space>
    );
};

export default CancellationRefundPolicy;
