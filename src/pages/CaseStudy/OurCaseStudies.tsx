import { Grid, Space } from "antd";
import CaseStudyEvenCard from "../../components/CaseStudyEvenCard";
import CaseStudyOddCard from "../../components/CaseStudyOddCard";

function OurCaseStudies() {
  const screen = Grid.useBreakpoint();

  const caseStudiesData = [
    {
      title: "Web Development",
      paragraph:
        "In today's mobile-first world, having a robust mobile app is essential for business growth. Our mobile app development services cover both iOS and Android platforms, ensuring your app is user-friendly, fast, and secure. We focus on creating intuitive interfaces and seamless user experiences, backed by powerful backend systems to support your app's functionality.",
      path: "/casestudy/ecommerce",
    },
    {
      title: "Mobile APP Development",
      paragraph:
        "In today's mobile-first world, having a robust mobile app is essential for business growth. Our mobile app development services cover both iOS and Android platforms, ensuring your app is user-friendly, fast, and secure. We focus on creating intuitive interfaces and seamless user experiences, backed by powerful backend systems to support your app's functionality.",
      path: "/casestudy/mobile-apps",
    },
    {
      title: "Software Development",
      paragraph:
        "In today's mobile-first world, having a robust mobile app is essential for business growth. Our mobile app development services cover both iOS and Android platforms, ensuring your app is user-friendly, fast, and secure. We focus on creating intuitive interfaces and seamless user experiences, backed by powerful backend systems to support your app's functionality.",
      path: "/casestudy/product-development",
    },
    {
      title: "Shopify Development",
      paragraph:
        "In today's mobile-first world, having a robust mobile app is essential for business growth. Our mobile app development services cover both iOS and Android platforms, ensuring your app is user-friendly, fast, and secure. We focus on creating intuitive interfaces and seamless user experiences, backed by powerful backend systems to support your app's functionality.",
      path: "/casestudy/shopify",
    },
    {
      title: "Graphic Design",
      paragraph:
        "In today's mobile-first world, having a robust mobile app is essential for business growth. Our mobile app development services cover both iOS and Android platforms, ensuring your app is user-friendly, fast, and secure. We focus on creating intuitive interfaces and seamless user experiences, backed by powerful backend systems to support your app's functionality.",
      path: "/casestudy/graphic-design",
    },
  ];

  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding:
          screen.lg || screen.md ? "20px 120px 120px 120px" : "100px 50px",
        backgroundColor: "#fff",
      }}
    >
      {caseStudiesData.map((item, index) => {
        return index % 2 === 0 ? (
          <CaseStudyEvenCard
            title={item.title}
            paragraph={item.paragraph}
            path={item.path}
          />
        ) : (
          <CaseStudyOddCard
            title={item.title}
            paragraph={item.paragraph}
            path={item.path}
          />
        );
      })}
    </Space>
  );
}

export default OurCaseStudies;
