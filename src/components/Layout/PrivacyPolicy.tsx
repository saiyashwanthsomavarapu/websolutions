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
            At Aadhya Web Solution, we respect and protect your privacy. This
            Privacy Policy outlines how we collect, use, and safeguard your
            personal information when you visit our website or use our services.
            By using our website and services, you agree to the collection and
            use of information in accordance with this policy.
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
          {privacyPolicyData.map((item, index) => (
            <Paragraph
              key={index}
              style={{
                fontSize: screen.lg || screen.md ? "16px" : "14px",
                lineHeight: "1.6",
                color: "#555",

              }}
            >
              {item.subtitle && (
                <strong style={{ color: "black" }}> {item.subtitle}</strong>
              )}{" "}
              {item.content}
              {item.bulletPoints?.length ?? 0 > 1 ? (
                item.bulletPoints?.map((each, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: screen.lg || screen.md ? "16px" : "14px",
                      lineHeight: "1.6",
                      color: "#555",

                      marginLeft: "20px",
                      marginTop: "10px",
                    }}
                  >
                    {
                      <strong style={{ color: "black" }}>
                        {each.bulletTitle}
                      </strong>
                    }{" "}
                    {each.bulletContent}
                  </li>
                ))
              ) : (
                <Paragraph></Paragraph>
              )}
            </Paragraph>
          ))}
        </Col>
      </Row>
    </Space>
  );
};

export default PrivacyPolicy;
