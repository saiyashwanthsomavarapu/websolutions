import { Grid, Space, Carousel, ConfigProvider } from "antd";
import React from "react";
import "./BannerCarousel.css";

const BannersCarousel = () => {
  const screens = Grid.useBreakpoint();

  const contentStyle: React.CSSProperties = {
    height: screens.xl
      ? "500px"
      : screens.lg
      ? "400px"
      : screens.md
      ? "300px"
      : screens.sm
      ? "160px"
      : screens.xs
      ? "120px"
      : "100%",
    color: "#fff",
    lineHeight: screens.xl
      ? "500px"
      : screens.lg
      ? "400px"
      : screens.md
      ? "300px"
      : screens.sm
      ? "160px"
      : screens.xs
      ? "120px"
      : "100%",
    textAlign: "center",
    background: "#364d79",
    backgroundImage: "url(../src/assets/bg.png)",
    backgroundSize: "cover",
    paddingBottom: "20px",
    display: "flex",
    alignContent: "flex-end",
    justifyContent: "center",
    fontSize: screens.xl
      ? "2.5rem"
      : screens.lg
      ? "2.5rem"
      : screens.md
      ? "2rem"
      : screens.sm
      ? "1.5rem"
      : screens.xs
      ? "1.5rem"
      : "1rem",
  };

  return (
    <Space
      style={{
        display: "flex",
        justifyContent: "center",
        padding: screens.lg || screens.md ? "120px" : "50px",
        backgroundColor: "#f5f7f9",
      }}
    >
      <div
        style={{
          position: "relative",
          color: "black",
          width: "100%",
          maxWidth: screens.xl
            ? "1140px"
            : screens.lg
            ? "960px"
            : screens.md
            ? "720px"
            : screens.sm
            ? "400px"
            : screens.xs
            ? "200px"
            : "100%",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <Carousel
          autoplay={{ dotDuration: true }}
          autoplaySpeed={3000}
          className="custom-carousel"
        >
          <div>
            <h3 style={contentStyle}>Slide 1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Slide 2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Slide 3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Slide 4</h3>
          </div>
        </Carousel>

        {/* <ConfigProvider
          theme={{
            components: {
              Carousel: {
                dotWidth: 10,
                dotHeight: 10,
                dotActiveWidth: 40,
                
              },
            },
          }}
        >
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>Slide 1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>Slide 2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>Slide 3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>Slide 4</h3>
            </div>
          </Carousel>
        </ConfigProvider> */}
      </div>
    </Space>
  );
};

export default BannersCarousel;
