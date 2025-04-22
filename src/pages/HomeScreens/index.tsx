import { Fragment } from "react";
import Intro from "./Intro";
import AboutUs from "./AboutUs";
import ServicesSectionUI from "./WhatWeDo";
// import CaseStudySection from "./CaseStudy";
import BannersCarousel from "./BannerCarousel";
import { SupportedPlatforms } from "./SupportedPlatforms";
import WhyChooseUs from "./WhyChooseUs";

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
    </Fragment>
  );
}

export default HomeScreen;
