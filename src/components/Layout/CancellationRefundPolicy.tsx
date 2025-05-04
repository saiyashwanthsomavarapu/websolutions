import { Row, Col, Typography, Space, Grid } from "antd";
import { cancellationRefundPolicyData } from "../../Utils/appContants";

const { Title, Text, Paragraph } = Typography;

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
            Cancellation and Refund
          </Text>
          <Title
            level={2}
            style={{
              fontSize: screen.lg ? "2.5em" : "2em",
              marginTop: 10,
              lineHeight: "1.2",
            }}
          >
            Cancellation and Refund Policy
          </Title>
          <Paragraph
            style={{
              fontSize: screen.lg || screen.md ? "16px" : "14px",
              lineHeight: "1.6",
              color: "#555",
              textAlign: "justify",
            }}
          >
            At Aadya Websolution, we strive to provide high-quality services to
            our clients. However, if for any reason you are not satisfied with
            the services we provide, we want to make the cancellation and refund
            process as clear and easy as possible. Please read our Cancellation
            and Refund Policy below.
          </Paragraph>
          <Paragraph
            style={{
              fontSize: screen.lg || screen.md ? "16px" : "14px",
              lineHeight: "1.6",
              color: "#555",
            }}
          ></Paragraph>
          {cancellationRefundPolicyData.map((item, index) => (
            <Paragraph
              key={index}
              style={{
                fontSize: screen.lg || screen.md ? "16px" : "14px",
                lineHeight: "1.6",
                color: "#555",
                textAlign: "justify",
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
                      textAlign: "justify",
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

export default CancellationRefundPolicy;
