import {
  Button,
  Card,
  Col,
  Grid,
  Row,
  Tag,
  Typography,
} from "antd";
import {
  ArrowRightOutlined,
  CheckCircleOutlined,
  CrownOutlined,
  GlobalOutlined,
  RiseOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const { Title, Paragraph, Text } = Typography;

type PricePlan = {
  name: string;
  price: string;
  detail: string;
};

type PriceCategory = {
  title: string;
  eyebrow: string;
  description: string;
  icon: React.ReactNode;
  plans: PricePlan[];
};

const priceCategories: PriceCategory[] = [
  {
    title: "WordPress Static Development",
    eyebrow: "Website Build",
    description: "Clean, responsive WordPress pages for business websites, service pages, and campaign landing pages.",
    icon: <GlobalOutlined />,
    plans: [
      { name: "Static Website", price: "$450", detail: "10 pages" },
      { name: "Single Page", price: "$100", detail: "1 page" },
    ],
  },
  {
    title: "Shopify Development",
    eyebrow: "Ecommerce",
    description: "Theme customization and product-ready storefront setup for growing ecommerce brands.",
    icon: <ShopOutlined />,
    plans: [
      { name: "Basic Theme Customization", price: "$500", detail: "Up to 40 products" },
      { name: "Advanced Customization", price: "$1000", detail: "Up to 100 products" },
    ],
  },
  {
    title: "Social Media Handling",
    eyebrow: "Content Management",
    description: "SEO optimized Instagram and Facebook page handling with post planning and publishing support.",
    icon: <RiseOutlined />,
    plans: [
      { name: "Starter Social", price: "$250", detail: "14 posts for Instagram and Facebook" },
      { name: "Growth Social", price: "$400", detail: "25 posts for Instagram and Facebook" },
    ],
  },
  {
    title: "Digital Marketing",
    eyebrow: "Ads Management",
    description: "Campaign support for paid ads across high intent platforms with clear channel coverage.",
    icon: <RiseOutlined />,
    plans: [
      { name: "Meta Starter", price: "$300", detail: "Ads running on Meta and WhatsApp" },
      { name: "Multi-channel Ads", price: "$450", detail: "Ads running on Meta, WhatsApp, and Google Ads" },
    ],
  },
  {
    title: "SEO",
    eyebrow: "Search Growth",
    description: "Keyword-focused optimization for visibility, search relevance, and steady organic growth.",
    icon: <CrownOutlined />,
    plans: [
      { name: "SEO Foundation", price: "$250", detail: "10 keywords" },
      { name: "Additional Keywords", price: "+$50", detail: "For extra keyword coverage" },
    ],
  },
  {
    title: "Framer",
    eyebrow: "No-code Website",
    description: "Modern Framer websites with responsive layouts and advanced customization options.",
    icon: <GlobalOutlined />,
    plans: [
      { name: "Framer Website", price: "$500", detail: "10-page website" },
      { name: "Advanced Framer", price: "$750", detail: "Advanced customization" },
    ],
  },
  {
    title: "Wix",
    eyebrow: "Website Builder",
    description: "Fast Wix website setup for service brands, portfolios, and small business websites.",
    icon: <GlobalOutlined />,
    plans: [
      { name: "Wix Website", price: "$600", detail: "5 pages" },
    ],
  },
  {
    title: "Webflow",
    eyebrow: "Visual Development",
    description: "Polished Webflow websites with flexible page counts and scalable structure.",
    icon: <GlobalOutlined />,
    plans: [
      { name: "Webflow Starter", price: "$450", detail: "5 pages" },
      { name: "Webflow Growth", price: "$800", detail: "8+ pages" },
    ],
  },
  {
    title: "React Native Website",
    eyebrow: "Custom Development",
    description: "Custom React Native website packages for more advanced product and brand experiences.",
    icon: <CrownOutlined />,
    plans: [
      { name: "React Native Standard", price: "$1500", detail: "6 pages" },
      { name: "React Native Advanced", price: "$2000", detail: "10 pages" },
    ],
  },
];

const Price = () => {
  const screen = Grid.useBreakpoint();
  const navigateTo = useNavigate();
  const isWide = Boolean(screen.lg || screen.md);

  return (
    <main style={{ backgroundColor: "#fff", overflow: "hidden" }}>
      <section
        style={{
          padding: isWide ? "160px 120px 90px" : "130px 28px 64px",
          backgroundColor: "#f5f7f9",
        }}
      >
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} lg={15}>
            <Text
              style={{
                color: "#121212",
                textTransform: "uppercase",
                fontWeight: 300,
                display: "block",
                textDecoration: "underline",
                textUnderlineOffset: "10px",
              }}
            >
              Pricing
            </Text>
            <Title
              level={1}
              style={{
                marginTop: 10,
                marginBottom: 24,
                color: "#121212",
                fontSize: screen.lg ? "3em" : "2.2em",
                fontWeight: 500,
                lineHeight: 1.15,
              }}
            >
              Simple service packages for websites, marketing, and growth.
            </Title>
            <Paragraph
              style={{
                color: "#5c5c5c",
                fontSize: "16px",
                maxWidth: 760,
                marginBottom: 32,
              }}
            >
              Choose a starting package that fits your business stage. Every plan can be adjusted around scope, timelines, content needs, and platform requirements.
            </Paragraph>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{
                backgroundColor: "#1a1a1a",
                border: "none",
                borderRadius: "4px",
                height: "48px",
                padding: "0 24px",
              }}
              onClick={() => navigateTo("/contact")}
            >
              Discuss Your Project
            </Button>
          </Col>
          <Col xs={24} lg={9}>
            <div
              style={{
                backgroundColor: "#121212",
                borderRadius: "8px",
                padding: isWide ? "36px" : "28px",
                color: "#fff",
                minHeight: "260px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 18px 40px rgba(0,0,0,0.14)",
              }}
            >
              <Text style={{ color: "#F47F20", textTransform: "uppercase" }}>
                Starting From
              </Text>
              <div>
                <Title level={1} style={{ color: "#fff", fontSize: screen.lg ? "4em" : "3em", margin: "12px 0 0" }}>
                  $100
                </Title>
                <Paragraph style={{ color: "#cfcfcf", fontSize: "16px", marginBottom: 0 }}>
                  Single-page website development packages are available for lean launches and focused landing pages.
                </Paragraph>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section className="price-grid-section">
        <div className="price-section-inner">
          <Row gutter={[28, 28]} className="price-card-row">
            {priceCategories.map((category) => (
              <Col xs={24} lg={12} xl={8} key={category.title}>
                <Card
                  className="price-card"
                  styles={{ body: { padding: isWide ? "28px" : "22px" } }}
                >
                  <div className="price-card-content">
                    <div className="price-card-heading">
                      <div className="price-card-icon">
                        {category.icon}
                      </div>
                      <div className="price-card-title-wrap">
                        <Tag className="price-card-tag">
                          {category.eyebrow}
                        </Tag>
                        <Title level={4} className="price-card-title">
                          {category.title}
                        </Title>
                      </div>
                    </div>

                    <div className="price-card-summary">
                      <Paragraph className="price-card-description">
                        {category.description}
                      </Paragraph>
                    </div>

                    <div className="price-plan-list">
                      {category.plans.map((plan) => (
                        <div
                          key={plan.name}
                          className="price-plan-row"
                        >
                          <CheckCircleOutlined className="price-plan-check" />
                          <div className="price-plan-copy">
                            <Text strong className="price-plan-name">
                              {plan.name}
                            </Text>
                            <Text className="price-plan-detail">{plan.detail}</Text>
                          </div>
                          <Text strong className="price-plan-price">
                            {plan.price}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section style={{ padding: isWide ? "0 120px 100px" : "0 28px 64px" }}>
        <div
          style={{
            backgroundColor: "#f5f7f9",
            borderRadius: "8px",
            padding: isWide ? "48px" : "28px",
          }}
        >
          <Row gutter={[32, 24]} align="middle">
            <Col xs={24} lg={16}>
              <Text
                style={{
                  color: "#121212",
                  textTransform: "uppercase",
                  fontWeight: 300,
                  display: "block",
                  textDecoration: "underline",
                  textUnderlineOffset: "10px",
                }}
              >
                Custom Scope
              </Text>
              <Title level={2} style={{ marginTop: 10, marginBottom: 12, fontWeight: 500 }}>
                Need a package tailored to your business?
              </Title>
              <Paragraph style={{ color: "#5c5c5c", marginBottom: 0 }}>
                Share your goals, pages, platform, and marketing requirements. We will recommend the right package and clarify any add-ons before work begins.
              </Paragraph>
            </Col>
            <Col xs={24} lg={8} style={{ display: "flex", justifyContent: screen.lg ? "flex-end" : "flex-start" }}>
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "none",
                  borderRadius: "4px",
                  height: "48px",
                  padding: "0 24px",
                }}
                onClick={() => navigateTo("/contact")}
              >
                Get a Quote
              </Button>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Price;
