import { Row, Col, Card, Typography, Layout, Space } from 'antd';
import ModernHeader from './components/Layout/Header';
import AboutUs from './pages/AboutUs';
import ServicesSectionUI from './pages/WhatWeDo';
import CaseStudySection from './pages/CaseStudy';
import TeamSection from './pages/Team';
import FooterComponent from './components/Layout/Footer';
import Intro from './pages/Intro';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const App = () => {
  // Background image style
  const backgroundStyle = {
    // backgroundImage: 'url("../src/assets/bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // padding: '40px 0',
    minHeight: '100vh',
  };

  // Content container style for better readability
  // const contentContainerStyle = {
  //   maxWidth: '1200px',
  //   margin: '0 auto',
  //   padding: '0 16px',
  // };

  return (
    <Layout>
      <ModernHeader />
      <Content >
       <Intro/>
      
      <AboutUs />
      <ServicesSectionUI />
      <CaseStudySection />
      <TeamSection />
      <FooterComponent/>
      </Content>
    </Layout>
  );
};

export default App;