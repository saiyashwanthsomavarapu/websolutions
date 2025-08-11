import React from "react";
import { Card, Col, Typography } from "antd";
const { Paragraph } = Typography;

function TechCard(props: any) {
  const { title, industry } = props;
  return (
    <Col xs={24} md={12} lg={8}>
      <Card
        style={{
          backgroundColor: "#F6F6F6",
          padding: "15px",
          minHeight: "130px",
          display: "flex",
          alignItems: "center",
        }}
        hoverable
      >
        <Paragraph style={{ color: "black" }}>{title}</Paragraph>
        <Paragraph
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            margin: "0px",
          }}
        >
          {industry}
        </Paragraph>
      </Card>
    </Col>
  );
}

export default TechCard;
