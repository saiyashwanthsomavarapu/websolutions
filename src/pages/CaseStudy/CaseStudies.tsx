import { Space, Grid, Row, Col, Typography } from "antd";
const { Title, Text, Paragraph } = Typography;

function CaseStudyIntro() {
  const screen = Grid.useBreakpoint();
  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding:
          screen.lg || screen.md ? "120px 120px 50px 120px" : "100px 50px",
        backgroundColor: "#fff",
      }}
    >
      <Row gutter={[48, 48]} style={{ rowGap: "0px" }}>
        <Col
          xs={24}
          md={24}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: "#121212",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: "300",
              textDecoration: "underline",
              textUnderlineOffset: "10px",
            }}
          >
            CASE STUDY
          </Text>
          <Title
            level={2}
            style={{
              marginTop: "8px",
              fontSize: screen.lg ? "2.5em" : "2em",
              fontWeight: 500,
              color: "#121212",
            }}
          >
            Our Case Studies
          </Title>
        </Col>
        <Col
          xs={24}
          md={24}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Title
            level={3}
            style={{
              marginBottom: "24px",
              fontSize: "42px",
              lineHeight: "120%",
              color: "#121212",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Creating Digital Excellence, Disrupting Modern Businesses with Tech
            Innovation
          </Title>
          <Paragraph
            style={{
              fontSize: "16px",
              marginBottom: "40px",
              color: "#555",
              textAlign: "center",
              maxWidth: "60%",
            }}
          >
            We create projects with absolute perfection and that is the driving
            force. We have developed a wide range of projects for clients from
            different industries and business niches. Find out some of the top
            grosser projects which we created for startups, enterprises and
            Fortune 500 leaders.
          </Paragraph>
        </Col>
      </Row>
    </Space>
  );
}

export default CaseStudyIntro;
