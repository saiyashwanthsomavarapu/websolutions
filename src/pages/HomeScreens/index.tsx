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
      <Marquee 
    
        style={{ paddingTop: "20px" , fontSize: "1.2em" }}
      >
        Client-Centric Excellence with 100% Satisfaction. Round-the-Clock Free Support You Can Rely On. 
        Strategic Solutions to Accelerate Sales Growth. Turn Clicks into Customers with Conversion Optimization. 
        Empowering Digital Success – Let’s Grow Together.        
      </Marquee>
      <AboutUs />
      <ServicesSectionUI />
      <SupportedPlatforms />
      {/* <CaseStudySection /> */}
      
      <CustomComponent />
      <BannersCarousel />
      <ClientLogos />
      {/* <OurWork /> */}
      <WhyChooseUs />
    </Fragment >
  );
}

export default HomeScreen;
