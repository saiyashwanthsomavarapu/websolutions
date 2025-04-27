import { Fragment } from "react";
import Intro from "./Intro";
import AboutUs from "./AboutUs";
import ServicesSectionUI from "./WhatWeDo";
// import CaseStudySection from "./CaseStudy";
import BannersCarousel from "./BannerCarousel";
import { SupportedPlatforms } from "./SupportedPlatforms";
import WhyChooseUs from "./WhyChooseUs";
import CustomComponent from "./CustomComponent";
import ClientLogos from "./ClientLogos";
import Marquee from "react-fast-marquee";
// import OurWork from "./OurWork";

function HomeScreen() {
  return (
    <Fragment>
      <Intro />
      <Marquee style={{ backgroundColor: "#fff", color: "#000", fontSize: "1.2em", padding: "10px" }}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
      <AboutUs />
      <ServicesSectionUI />
      <SupportedPlatforms />
      {/* <CaseStudySection /> */}
      <BannersCarousel />
      <WhyChooseUs />
      <CustomComponent />
      <ClientLogos />
      {/* <OurWork /> */}
    </Fragment >
  );
}

export default HomeScreen;
