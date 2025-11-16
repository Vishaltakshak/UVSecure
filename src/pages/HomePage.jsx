import HeroSection from "@/components/HeroSection";
import HomeSections from "@/components/HomeSections";
import WhoWeHelp from "@/components/WoWeHelp";
import ProductPage from "./ProductPage";
import CyberCategoryGrid from "@/components/ProductSection";
import ServiceSection from "@/components/ServiceSection";
export default function HomePage() {
  return (
    <div className="py-0">
     <HeroSection/>
     <div style={{
        background: "radial-gradient(circle at top left, #4b2fb3 0%, #07101eff 70%)",
      }}>
        <WhoWeHelp/>
     </div>
     <div style={{
       background: "radial-gradient(circle at top left,  #0f1d34ff 0% #020617 60%)",
      }}>
        <CyberCategoryGrid/>
        <ServiceSection/>
        <HomeSections/>
      </div>
    </div>
  );
}
