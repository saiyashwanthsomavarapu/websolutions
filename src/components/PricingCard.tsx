import React from "react";
import { Card, Col, Row, Tag, Progress, Typography, Button } from "antd";
import {
  CloudOutlined,
  AppstoreOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import Paragraph from "antd/es/skeleton/Paragraph";

const { Title, Text } = Typography;

const plans = [
  {
    key: "web",
    tag: "FOR SMALL TO MEDIUM WEBSITES",
    title: "Web hosting",
    description:
      "Perfect for beginners. Everything you need to take your idea online.",
    ecommerce: "600 products",
    icon: <AppstoreOutlined style={{ fontSize: 24 }} />,
    pricing: "$3.99/mo",
    ratings: {
      Simplicity: 100,
      "Server control": 30,
      Scalability: 60,
    },
  },
  {
    key: "wordpress",
    tag: "FOR FANS OF WORDPRESS",
    title: "Hosting for WordPress",
    description:
      "Optimized hosting for the world’s most popular CMS. For medium size websites.",
    ecommerce: "5,000 products",
    icon: <GlobalOutlined style={{ fontSize: 24 }} />,
    pricing: "$6.99/mo",
    ratings: {
      Simplicity: 100,
      "Server control": 30,
      Scalability: 60,
    },
  },
  {
    key: "cloud",
    tag: "FOR LARGE SCALE PROJECTS",
    title: "Cloud hosting",
    description:
      "Take your business to the next level. Perfect for client website management.",
    ecommerce: "5,000 products",
    icon: <CloudOutlined style={{ fontSize: 24 }} />,
    pricing: "$12.99/mo",
    ratings: {
      Simplicity: 100,
      "Server control": 30,
      Scalability: 100,
    },
  },
];

function PricingCard() {
  return (
    <div>
      <Row gutter={[48, 48]}>
        {plans.map((plan) => (
          <Col xs={24} sm={12} md={24} lg={8} key={plan.key}>
            <Card
              style={{
                borderRadius: 16,
                minHeight: 400,
                padding: "30px",
                backgroundColor: "#F6F6F6",
                minWidth: "260px",
              }}
              hoverable
            >
              <Text
                style={{
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  backgroundColor: "#1a1a1a",
                  borderRadius: 12,
                  padding: "8px",
                  color: "white",
                }}
              >
                {plan.tag}
              </Text>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: "30px",
                  marginBottom: "15px",
                }}
              >
                {plan.icon}
                <Title level={4} style={{ margin: 0 }}>
                  {plan.title}
                </Title>
              </div>

              <Text type="secondary">{plan.description}</Text>

              <div style={{ marginTop: 20, marginBottom: 10 }}>
                <Text strong>Ecommerce</Text> &nbsp; 🔒{" "}
                <Text strong>{plan.ecommerce}</Text>
              </div>

              {Object.entries(plan.ratings).map(([label, value]) => (
                <div key={label} style={{ marginTop: 12 }}>
                  <Text>
                    {label}{" "}
                    <Text strong>
                      {value >= 90 ? "High" : value >= 50 ? "Medium" : "Low"}
                    </Text>
                  </Text>
                  <Progress
                    percent={value}
                    showInfo={false}
                    strokeColor="#1a1a1a"
                    trailColor="#e0e0e0"
                  />
                </div>
              ))}

              <div
                style={{
                  marginTop: 20,
                  fontSize: "2.1rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {plan.pricing}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#1a1a1a",
                    color: "white",
                    padding: "20px",
                    minWidth: "200px",
                  }}
                >
                  Choose Plan
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PricingCard;
