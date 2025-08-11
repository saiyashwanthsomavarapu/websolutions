import React from "react";
import { Space, Grid, Row, Col, Typography, Card, Button } from "antd";
import { useParams } from "react-router-dom";
import { caseStudiesdata } from "../../Utils/appContants";
import CaseStudyEvenCard from "../../components/CaseStudyEvenCard";
import TechCard from "../../components/TechCard";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Text, Title, Paragraph } = Typography;

function CaseStudyOverview() {
  const { title } = useParams();
  const screen = Grid.useBreakpoint();
  const navigateTo = useNavigate();
  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding: screen.lg || screen.md ? "120px" : "100px 50px",
        backgroundColor: "#fff",
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
        {title} CASE STUDY
      </Text>
      <div style={{ marginTop: "40px" }}></div>
      {caseStudiesdata.map(
        (item) =>
          item.projectName === title && (
            <>
              <CaseStudyEvenCard
                title={item.projectName}
                paragraph={item.description}
              />
              <Row gutter={[48, 48]}>
                <Col
                  xs={24}
                  md={24}
                  lg={24}
                  style={{
                    backgroundColor: "#F6F6F6",
                    borderRadius: "20px",
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    padding: "20px 50px 50px 50px",
                    border: "1px solid #e9e9e9ff",
                  }}
                >
                  <Title style={{ textAlign: "center" }}>{item.title}</Title>
                  <Text style={{ textAlign: "center", fontSize: "16px" }}>
                    {item.description}
                  </Text>
                </Col>
                <Col xs={24} md={24} lg={24}>
                  <Title>Client Requirements</Title>
                  {item.clientRequirements.map((i) => {
                    return (
                      <li style={{ fontSize: "16px", lineHeight: 3 }}>{i}</li>
                    );
                  })}
                </Col>
                <Col xs={24} md={24} lg={24}>
                  <Title>Approach We Followed for Development</Title>
                  <Text style={{ textAlign: "center", fontSize: "16px" }}>
                    We followed a structured agile development process to ensure
                    transparency, flexibility, and optimal delivery. It began
                    with.
                  </Text>
                </Col>
                {item.approach.map((eachScenario) => {
                  return (
                    <Col xs={24} md={24} lg={12}>
                      <Card
                        hoverable
                        style={{
                          paddingLeft: "20px",
                          paddingBottom: "20px",
                          border: "1px solid #e9e9e9ff",
                          backgroundColor: "#f1f6f6",
                        }}
                      >
                        <Row>
                          <Col
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginRight: "20px",
                            }}
                          >
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              style={{
                                width: "120px",
                                height: "120px",
                                objectFit: "cover",
                                alignItems: "center",
                              }}
                              onCanPlay={(e) => e.currentTarget.play()}
                            >
                              <source
                                src={eachScenario.icon}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          </Col>
                          <Col>
                            <Title>{eachScenario.title}</Title>

                            {eachScenario.requirements.map((i) => {
                              return (
                                <li style={{ fontSize: "16px", lineHeight: 2 }}>
                                  {i}
                                </li>
                              );
                            })}
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  );
                })}

                <Col xs={24} md={24} lg={24}>
                  <Title>Project Challenges</Title>
                  <Row gutter={[48, 48]}>
                    {item.challenges.map((i) => {
                      return (
                        <Col
                          xs={24}
                          md={24}
                          lg={11}
                          style={{
                            backgroundColor: "#F6F6F6",
                            borderRadius: "20px",
                            flexDirection: "column",
                            display: "flex",
                            alignContent: "center",
                            padding: "20px",
                            // gap: 10,
                            margin: "10px",
                          }}
                        >
                          <Paragraph style={{ fontSize: "16px" }}>
                            <span style={{ fontWeight: "bold" }}>Title :</span>{" "}
                            {i.title}
                          </Paragraph>
                          <Paragraph style={{ fontSize: "16px" }}>
                            <span style={{ fontWeight: "bold" }}>
                              Description :
                            </span>{" "}
                            {i.description}
                          </Paragraph>
                          <Paragraph style={{ fontSize: "16px" }}>
                            <span style={{ fontWeight: "bold" }}>
                              Solution :
                            </span>{" "}
                            {i.solution}
                          </Paragraph>
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
                <Col xs={24} md={24} lg={24}>
                  <Title style={{ marginBottom: "0px" }}>Tech Details</Title>
                </Col>
                <TechCard title="Industry :" industry={item.industry} />
                <TechCard title="Service :" industry={item.services} />
                <TechCard title="Client :" industry={item.client} />
                <TechCard title="Location :" industry={item.location} />
                <TechCard title="Project Duration :" industry={item.duration} />
                <TechCard
                  title="Technology stack :"
                  industry={item.technologyStack}
                />
                <Col xs={24} md={24} lg={24}>
                  <Card
                    hoverable
                    style={{
                      backgroundColor: "#F6F6F6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Title style={{ textAlign: "center" }}>
                      Client Appreciation
                    </Title>
                    <Paragraph style={{ fontSize: "16px", margin: "5px" }}>
                      "{item.testimonial.quote} "
                    </Paragraph>
                    <Paragraph
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        margin: "0px",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      {item.testimonial.author}
                    </Paragraph>
                    <Paragraph style={{ textAlign: "center" }}>
                      {item.testimonial.position}
                    </Paragraph>
                  </Card>
                </Col>
                <Col
                  xs={24}
                  md={24}
                  lg={24}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    className="custom-hover-button"
                    onClick={() =>
                      navigateTo(`/casestudy/${item.projectName}${item.path}`)
                    }
                  >
                    Want to know the pricing
                    <ArrowRightOutlined className="hover-arrow" />
                  </Button>
                </Col>
              </Row>
            </>
          )
      )}
    </Space>
  );
}

export default CaseStudyOverview;
