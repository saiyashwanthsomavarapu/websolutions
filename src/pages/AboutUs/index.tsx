import { Fragment } from "react";
import OurHistory from "./OurHistory";
import Aboutus from "./Aboutus";
import TeamSection from "../HomeScreens/Team";
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
      <Aboutus />
      {/* <TrustedClients /> */}
      <OurHistory />
      <TeamSection />
    </Fragment>
  );
};

export default AboutUsSection;
