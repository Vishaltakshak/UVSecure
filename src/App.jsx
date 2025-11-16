import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/header";
import HomePage from "@/pages/HomePage";
import Footer from "./components/footer";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutusPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./utility/ScrollToTop";
import FAQPage from "./pages/Faq";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutPage/>}/>
        <Route path="/contact-us" element={<ContactPage/>}/>
        <Route path="/faq" element={<FAQPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
