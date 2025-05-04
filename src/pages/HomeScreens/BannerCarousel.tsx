import { Grid, Space, Carousel, Typography, Row, Col, Avatar } from "antd";
import "./BannerCarousel.css";
import { AntDesignOutlined } from "@ant-design/icons";
import lawyer from '../../assets/client/lawyer.webp' 
import Person from '../../assets/person1.jpg';
import Person1 from '../../assets/person1.jpg';
import founder from '../../assets/person.jpeg';

const { Title, Paragraph, Text } = Typography;
const BannersCarousel = () => {
  const screens = Grid.useBreakpoint();

  const testimonialData = [
    {
      descriptions:
        "Aadhya WebSolution and his team did a fantastic job on my WordPress website UI design. They worked with great care and professionalism, offering valuable insights throughout the project. The post-delivery support was excellent, including two days of dashboard training. I highly recommend Aadhya WebSolution for quality, reliable WordPress development services!",
      name: "Raghvendra",
      designation: "Lawyer",
      img:  lawyer,
    },
    {
      descriptions:
        "Aadhya and his team worked delicately on my project and delivered an outstanding, high-quality WordPress website UI design. He is extremely professional, treats the project like his own, and provides valuable suggestions throughout the process. I highly recommend him for WordPress development. His support is excellent — he offered two days of WordPress dashboard training and continued great service even after the delivery. I’m very happy with the results and the overall experience. Truly amazing work!",
      name: "Deborrah Lee",
      designation: "Founder of Naidvar Trust",
      img: founder,
    },
    {
      descriptions:
        "I recently worked with Aadhya and his team to set up my online store, and I’m extremely pleased with the results. Aadhya demonstrated excellent technical skills and a deep understanding of the Shopify platform. He was easy to collaborate with, communicated clearly throughout the process, and always kept me updated on the progress. His professionalism and dedication ensured that the project was completed on time and exactly how I envisioned. I highly recommend Harsh for anyone looking",
      name: "Grady Hinchman",
      designation: "Operating Partner Altitude Trampoline Park Kissimmee",
      img: Person,
    },
    {
      descriptions:
        "Amazing designer. He created different variants for particular mockups. He was very prompt and quick in completing our requirements. I will surely recommend him for all your design related UI/UX work.",
      name: "Dustin Pelletier",
      designation: "Franchise Owner Big Air Trampoline Park Spartanburg",
      img: Person1,
    },
  ];

  // Max width for responsive container
  const getMaxWidth = () => {
    if (screens.xl) return "1140px";
    if (screens.lg) return "960px";
    if (screens.md) return "720px";
    if (screens.sm) return "400px";
    if (screens.xs) return "200px";
    return "100%";
  };

  // Content height based on screen size
  const getContentHeight = () => {
    if (screens.xl) return "500px";
    if (screens.lg) return "400px";
    if (screens.md) return "300px";
    if (screens.sm) return "160px";
    if (screens.xs) return "120px";
    return "100%";
  };

  return (
    <Space
      style={{
        display: "flex",
        padding: screens.lg || screens.md ? "120px" : "50px",
        backgroundColor: "#f5f5f5",
        width: "100%",
      }}
    >
      <Row gutter={[48, 48]} justify={"center"}>
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
            TESTIMONIALS
          </Text>
          <Title
            level={2}
            style={{
              fontSize: screens.lg ? "2.5em" : "2em",
              marginTop: 10,
              lineHeight: "1.2",
            }}
          >
            Don't take our word for it. Take theirs
          </Title>
        </Col>
        <Col lg={24}>
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: getMaxWidth(),
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <Carousel
              autoplay
              autoplaySpeed={3000}
              className="custom-carousel"
              style={{
                marginBottom: "40px",
              }}
            >
              {testimonialData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    height: getContentHeight(),
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "30px 20px 60px",
                    textAlign: "center",
                    backgroundColor: "#000",
                  }}
                >
                  {/* Centered Image */}
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "20px",
                      placeContent: "center",
                    }}
                  >
                    <Avatar
                      style={{ height: 200, width: 200, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                      size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                      icon={<AntDesignOutlined />}
                      src={item.img}

                    />
                    {/* <img
                      src={item.img}
                      alt="Background"
                      style={{
                        maxWidth: "400px",
                        height: "auto",
                        borderRadius: '60%'
                      }}
                    /> */}
                  </div>

                  {/* Centered Quote - Fixed to ensure centering */}
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "800px",
                      margin: "0 auto 20px",
                      textAlign: "center",
                    }}
                  >
                    <Paragraph
                      style={{
                        fontSize: screens.lg ? "1.5em" : "1.2em",
                        color: '#555',
                        marginBottom: '32px',
                        lineHeight: '1.6'
                      }}
                    >
                      "{item.descriptions}"
                    </Paragraph>
                  </div>

                  {/* Author Name */}
                  <Title level={2}
                    style={{
                      fontSize: screens.md ? "1.5rem" : "1.2rem",
                      fontWeight: 600,
                      marginBottom: "15xpx",
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </Title>

                  {/* Role */}
                  <Text
                    style={{
                      color: "#5c5c5c",
                      fontSize: "1rem",
                      fontWeight: 400,
                      textAlign: "center",
                    }}
                  >
                    {item.designation}
                  </Text>
                </div>
              ))}
            </Carousel>
          </div>
        </Col>
      </Row>


    </Space>
  );
};

export default BannersCarousel;
