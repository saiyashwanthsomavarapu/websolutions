import { Grid, Space } from "antd";
import sliderImage from "../../assets/11.jpg";
import "./ourWork.css";

function OurWork() {
    const screen = Grid.useBreakpoint();
    const images = [sliderImage, sliderImage, sliderImage, sliderImage];
    return <Space
        style={{
            display: "flex",
            padding: screen.lg || screen.md ? "120px" : "50px",
            backgroundColor: "#0d2a4b",
        }}
    >
        <div style={{ width: "100%" }}>
            <h1 style={{ color: "white" }}>OUR WORK</h1>
            <div className="scroller" data-direction="right" data-speed="fast">
                <div className="scroller__inner">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="" />
                    ))}
                </div>
            </div>
        </div>
    </Space >;
}

export default OurWork;