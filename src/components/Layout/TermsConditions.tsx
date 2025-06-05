import { Row, Col, Typography, Space, Grid } from "antd";

import { TermsConditionsData } from "../../Utils/appContants";

// Ensure TermsConditionsData is properly imported and defined as an array
// addeed this code to fix the error on the console
if (!Array.isArray(TermsConditionsData)) {
  throw new Error("TermsConditionsData must be an array.");
}

const { Title, Text, Paragraph } = Typography;

const TermsConditions = () => {
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
            Terms and Conditions
          </Text>
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

            }}
          >
            Welcome to Aadhya Web Solution! By accessing or using our website,
            services, or products, you agree to comply with and be bound by the
            following terms and conditions.
          </Paragraph>
          <Paragraph
            style={{
              fontSize: screen.lg || screen.md ? "16px" : "14px",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            Please read them carefully. If you do not agree to these terms,
            please do not use our services.
          </Paragraph>
          <Paragraph
            style={{
              fontSize: screen.lg || screen.md ? "16px" : "14px",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            The following Terms of Use apply to ALL Aadhya Web Solution
            customers:
          </Paragraph>
          {TermsConditionsData.map((item, index) => (
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
              {(item.bulletPoints ?? []).length > 1 ? (
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
                    <strong style={{ color: "black" }}>
                      {each.bulletTitle}
                    </strong>
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

export default TermsConditions;
