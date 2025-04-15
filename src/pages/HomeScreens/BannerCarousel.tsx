import { Grid, Space, Carousel } from "antd";
import "./BannerCarousel.css";

const BannersCarousel = () => {
  const screens = Grid.useBreakpoint();

  const testimonialData = [
    {
      descriptions:
        "The system has been really easy to operate and is one of our most popular attractions. We have already ordered more systems.",
      name: "Grady Hinchman",
      designation: "Operating Partner Altitude Trampoline Park Kissimmee",
      img: "src/assets/bg.png",
    },
    {
      descriptions:
        "Nowhere in the industry have I experienced the kind of support Valo Motion offers. No matter what the issue is, we get help immediately.",
      name: "Steffen Brunckhorst",
      designation: "CEO & Co-Founder of Abenteuerland",
      img: "src/assets/bg.png",
    },
    {
      descriptions:
        "Valo Motion is clear about what's next, they are proactive about their roadmap. They are focused on being the best.",
      name: "Grady Hinchman",
      designation: "Operating Partner Altitude Trampoline Park Kissimmee",
      img: "src/assets/bg.png",
    },
    {
      descriptions:
        "We LOVE the product. I love the new games and new modes that come out. There's a cool variety of games and having multiple levels make it fun.",
      name: "Dustin Pelletier",
      designation: "Franchise Owner Big Air Trampoline Park Spartanburg",
      img: "src/assets/bg.png",
    },
  ];

  // Get responsive styles based on screen size
  const getFontSize = (xl, lg, md, sm, xs) => {
    return screens.xl
      ? xl
      : screens.lg
      ? lg
      : screens.md
      ? md
      : screens.sm
      ? sm
      : screens.xs
      ? xs
      : sm;
  };

  // Container padding based on screen size
  const containerPadding = screens.lg || screens.md ? "100px" : "50px";

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
        justifyContent: "center",
        padding: containerPadding,
        backgroundColor: "#f5f7f9",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: getMaxWidth(),
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: getFontSize(
              "2.5rem",
              "2.5rem",
              "2rem",
              "1.5rem",
              "1.5rem"
            ),
            marginBottom: "30px",
          }}
        >
          Don't take our word for it. Take theirs
        </h1>
        <Carousel
          autoplay
          autoplaySpeed={3000}
          className="custom-carousel"
          style={{
            marginBottom: "40px",
          }}
          arrows
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
                <img
                  src={item.img}
                  alt="Background"
                  style={{
                    maxWidth: "400px",
                    height: "auto",
                  }}
                />
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
                <h3
                  style={{
                    color: "#5c5c5c",
                    fontSize: getFontSize(
                      "1.8rem",
                      "1.6rem",
                      "1.4rem",
                      "1.2rem",
                      "1rem"
                    ),
                    fontWeight: 400,
                    lineHeight: 1.5,
                  }}
                >
                  "{item.descriptions}"
                </h3>
              </div>

              {/* Author Name */}
              <h4
                style={{
                  fontSize: screens.md ? "1.5rem" : "1.2rem",
                  fontWeight: 600,
                  marginBottom: "8px",
                  textAlign: "center",
                }}
              >
                {item.name}
              </h4>

              {/* Role */}
              <h4
                style={{
                  color: "#5c5c5c",
                  fontSize: screens.md ? "1.2rem" : "1rem",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                {item.designation}
              </h4>
            </div>
          ))}
        </Carousel>
      </div>
    </Space>
  );
};

export default BannersCarousel;
