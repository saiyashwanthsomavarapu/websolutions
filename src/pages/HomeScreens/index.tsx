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
import SEO from "../../components/SEO";
// import OurWork from "./OurWork";

function HomeScreen() {
  return (
    <Fragment>
      <SEO 
        title="Website Development Company in USA | Aadhya Web Solution"
        description="Aadhya Web Solution is a top website development company in the USA. We offer custom web development services, WordPress solutions, and expert digital marketing to help your business grow online."
        keywords="website development company in usa, website development agency in usa, best website design company in usa, web development services in usa, wordpress development, digital marketing, SEO, website speed optimization"
        canonical="https://aadhyawebsolution.com/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Aadhya Web Solution",
          "url": "https://aadhyawebsolution.com",
          "logo": "https://aadhyawebsolution.com/logo-wide.png",
          "description": "Aadhya Web Solution is a top website development company in the USA. We offer custom web development services, WordPress solutions, and expert digital marketing to help your business grow online.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "USA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://aadhyawebsolutions.com/shopify/",
            "https://aadhyawebsolutions.com/wordpress/"
          ],
          "serviceType": [
            "Web Development",
            "WordPress Development", 
            "Digital Marketing",
            "SEO Services",
            "Shopify Development",
            "Mobile App Development"
          ]
        }}
      />
      <Intro />
      {/* <Marquee 
    
        style={{ padding: "20px 0" , fontSize: "1.2em", backgroundColor: "#fff", }}
      >
        <strong>
        Client-Centric Excellence with 100% Satisfaction. Round-the-Clock Free Support You Can Rely On.  Strategic Solutions to Accelerate Sales Growth.  Turn Clicks into Customers with Conversion Optimization.   
        Empowering Digital Success – Let’s Grow Together.</strong>  
      </Marquee> */}
      <Marquee direction="left" style={{ padding: "20px 0" , fontSize: "1.2em", backgroundColor: "#fff", }}>
        <strong>
          🤝 Client-Centric Excellence with 100% Satisfaction &nbsp;&nbsp;&nbsp;
          🕒 Round-the-Clock Free Support You Can Rely On &nbsp;&nbsp;&nbsp;
          📈 Strategic Solutions to Accelerate Sales Growth &nbsp;&nbsp;&nbsp;
          🛒 Turn Clicks into Customers with Conversion Optimization &nbsp;&nbsp;&nbsp;
          🚀 Empowering Digital Success – Let’s Grow Together &nbsp;&nbsp;&nbsp;
        </strong>
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
