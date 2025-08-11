import { Col, Row, Typography, Button, Card, Grid } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;
import "../App.css";

function CaseStudyEvenCard(props: any) {
  const screen = Grid.useBreakpoint();
  const { title, paragraph, path } = props;
  const navigateTo = useNavigate();
  return (
    <Row gutter={[48, 48]} style={{ marginBottom: "80px" }}>
      <Col
        xs={{ span: 24, order: 1 }}
        md={{ span: 12, order: 2 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
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
            width: "100%",
          }}
        />
      </Col>
      <Col
        xs={{ span: 24, order: 2 }}
        md={{ span: 12, order: 1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
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
          {title}
        </Title>

        <Row gutter={[24, 24]}>
          <Col xs={24} md={24} lg={24}>
            <Paragraph
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#5c5c5c",
                marginBottom: "32px",
              }}
            >
              {paragraph}
            </Paragraph>

            {path === undefined ? null : (
              <Button
                className="custom-hover-button"
                onClick={() => navigateTo(path)}
              >
                <span className="button-label">View Case Study</span>
                <ArrowRightOutlined className="hover-arrow" />
              </Button>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CaseStudyEvenCard;
