import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RequestsSlider } from "@/components/RequestsSlider";
import { ResultsSlider } from "@/components/ResultsSlider";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { TrustAndReviews } from "@/components/TrustAndReviews";
import { Services } from "@/components/Services";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { CTAModal } from "@/components/CTAModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCTAClick = () => {
    if (isMobile) {
      window.location.href = "tel:+79215925158";
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCTAClick={handleCTAClick} />
      <Hero onCTAClick={handleCTAClick} />
      <RequestsSlider />
      <ResultsSlider />
      <Benefits />
      <Process />
      <About />
      <Booking onCTAClick={handleCTAClick} />
      <TrustAndReviews />
      <Services />
      <FAQ />
      <Footer />
      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
