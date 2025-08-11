import { Space, Grid, Typography } from "antd";
import React from "react";
import PricingCard from "../../components/PricingCard";
const { Title, Text } = Typography;

function Pricing() {
  const screen = Grid.useBreakpoint();
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
        Pricing
      </Text>
      <Title
        level={2}
        style={{
          marginTop: "8px",
          fontSize: screen.lg ? "2.5em" : "2em",
          fontWeight: 500,
          color: "#121212",
          marginBottom: "50px",
        }}
      >
        Find the Right service for you
      </Title>
      <PricingCard />
    </Space>
  );
}

export default Pricing;
