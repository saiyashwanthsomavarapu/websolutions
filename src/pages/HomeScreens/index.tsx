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
// import OurWork from "./OurWork";

function HomeScreen() {
  return (
    <Fragment>
      <Intro />
      <AboutUs />
      <ServicesSectionUI />
      <SupportedPlatforms />
      {/* <CaseStudySection /> */}
      <BannersCarousel />
      <WhyChooseUs />
      <CustomComponent />
      <ClientLogos />
      {/* <OurWork /> */}
    </Fragment>
  );
}

export default HomeScreen;
