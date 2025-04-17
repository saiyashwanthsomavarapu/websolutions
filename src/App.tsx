import ModernHeader from './components/Layout/Header';
import FooterComponent from './components/Layout/Footer';
import HomeScreen from './pages/HomeScreens';
import { Layout } from 'antd';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AboutUsSection from './pages/AboutUs';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';

const { Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <ModernHeader />
        <Content >
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/aboutus" element={<AboutUsSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
        <FooterComponent />
      </Layout>
    </BrowserRouter>
  );
};

export default App;