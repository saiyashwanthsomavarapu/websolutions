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
import TermsConditions from "../../components/Layout/TermsConditions";

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
      <TermsConditions/>
      <ClientLogos />
    </Fragment>
  );
}

export default HomeScreen;
