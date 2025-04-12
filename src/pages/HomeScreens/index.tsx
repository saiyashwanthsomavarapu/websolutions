import { Fragment } from "react";
import Intro from "./Intro";
import AboutUs from "./AboutUs";
import ServicesSectionUI from "./WhatWeDo";
import CaseStudySection from "./CaseStudy";
import BannersCarousel from "./BannerCarousel";

function HomeScreen() {
  return (
    <Fragment>
      <Intro />
      <AboutUs />
      <ServicesSectionUI />
      <CaseStudySection />
      <BannersCarousel />
    </Fragment>
  );
}

export default HomeScreen;
