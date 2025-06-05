import {
  Row,
  Col,
  Typography,
  Button,
  Card,
  Space,
  Grid,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const BusinessSolutionsUI = () => {
  const screen = Grid.useBreakpoint();
  const navigateTo = useNavigate();
  return (
    <Space
      style={{
        display: "flex",
        padding: screen.lg || screen.md ? "120px" : "50px",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Row gutter={[48, 48]}>
        <Col xs={24} sm={24} md={12} lg={16}>
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
            ABOUT US
          </Text>
          <Title
            level={2}
            style={{
              fontSize: screen.lg ? "2.5em" : "2em",
              fontWeight: 500,
              lineHeight: "1.2",
              marginTop: 10,
              whiteSpace: "pre-line",
            }}
          >
            {`Your Trusted Partner for Scalable Digital Growth`}
          </Title>
          <Row style={{ marginTop: "48px" }} gutter={[24, 24]}>
            <Col xs={24} md={24} lg={24}>
              <Paragraph
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#5c5c5c",
                  marginBottom: "32px",

                }}
              >
                Aadhya Web Solution, we specialize in crafting high-performance websites and digital solutions that drive real business results. From Shopify and WordPress development to custom design and marketing, our expert team is committed to delivering quality, innovation, and 100% client satisfaction. We don't just build websites — we build long-term partnerships for success.
              </Paragraph>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "none",
                  borderRadius: "4px",
                  height: "48px",
                  padding: "0 24px",
                  cursor: "pointer",
                }}
                onClick={() => navigateTo("/aboutus")}
              >
                About Us
              </Button>
            </Col>
            {/* <Col xs={24} md={24} lg={12}>
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <Text strong>Business Analysis</Text>
                  <Text>80%</Text>
                </div>
                <Progress percent={80} showInfo={false} strokeColor="#555" />
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <Text strong>Achievement</Text>
                  <Text>90%</Text>
                </div>
                <Progress percent={90} showInfo={false} strokeColor="#555" />
              </div>
            </Col> */}
          </Row>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <Card
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              height: "400px",
              backgroundImage:
                'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "32px",
            }}
          >
            <div style={{ position: "relative", zIndex: 2 }}>
              <Title
                level={1}
                style={{
                  color: "white",
                  fontSize: "64px",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                85k+
              </Title>
              <Paragraph
                style={{ color: "white", fontSize: "18px", marginBottom: 0 }}
              >
                Unique & new business tips for our clients
              </Paragraph>
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                zIndex: 1,
              }}
            />
          </Card>
        </Col>
      </Row>
    </Space>
  );
};

export default BusinessSolutionsUI;
