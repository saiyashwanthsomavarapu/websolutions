import { Fragment } from "react";
import OurHistory from "./OurHistory";
import Aboutus from "./Aboutus";
import TeamSection from "../HomeScreens/Team";
import SEO from "../../components/SEO";
// import TrustedClients from './Client';

const AboutUsSection = () => {
  // const tabStyle = {
  //     paddingBottom: '10px',
  //     marginRight: '20px',
  //     borderBottom: '2px solid transparent',
  //     cursor: 'pointer',
  //     transition: 'all 0.3s',
  // };

  return (
    <Fragment>
      <SEO 
        title="About Aadhya Web Solution | Trusted Website Design Company"
        description="Aadhya Web Solution is a trusted website development company in the USA. We are committed to delivering innovative, scalable, and high-performance digital solutions with a focus on client satisfaction."
        keywords="website development company in usa, best website design company in usa, about us, aadhya web solution, our team, client satisfaction"
        canonical="https://aadhyawebsolution.com/aboutus"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Aadhya Web Solution",
          "url": "https://aadhyawebsolution.com",
          "logo": "https://aadhyawebsolution.com/logo-wide.png",
          "description": "Aadhya Web Solution is a trusted website development company in the USA. We are committed to delivering innovative, scalable, and high-performance digital solutions with a focus on client satisfaction.",
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
      <Aboutus />
      {/* <TrustedClients /> */}
      <OurHistory />
      <TeamSection />
    </Fragment>
  );
};

export default AboutUsSection;
