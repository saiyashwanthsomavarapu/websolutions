import ModernHeader from './components/Layout/Header';
import FooterComponent from './components/Layout/Footer';
import HomeScreen from './pages/HomeScreens';
import { Layout } from 'antd';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AboutUsSection from './pages/AboutUs';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/Unknown/NotFound';
import PrivacyPolicy from './components/Layout/PrivacyPolicy';
import CancellationRefundPolicy from './components/Layout/CancellationRefundPolicy';
import DeliveryProcess from './components/Layout/DeliveryProcess';
import TermsConditions from './components/Layout/TermsConditions';


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
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<CancellationRefundPolicy />} />
            <Route path="/delivery_process" element={<DeliveryProcess />} />
            <Route path="/terms_conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <FooterComponent />
      </Layout>
    </BrowserRouter>
  );
};

export default App;