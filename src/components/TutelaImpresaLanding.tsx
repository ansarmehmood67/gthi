import { useEffect, useState } from "react";
import Header from "./landing/Header";
import HeroSection from "./landing/HeroSection";
import MandatorySection from "./landing/MandatorySection";
import ELearningSection from "./landing/ELearningSection";
import WhatYouLearnSection from "./landing/WhatYouLearnSection";
import VideoSection from "./landing/VideoSection";
import CourseDetailsSection from "./landing/CourseDetailsSection";
import PricingSection from "./landing/PricingSection";
import ContactFormSection from "./landing/ContactFormSection";
import SocialMediaSection from "./landing/SocialMediaSection";
import Footer from "./landing/Footer";

export default function TutelaImpresaLanding() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <MandatorySection />
      <ELearningSection />
      <WhatYouLearnSection />
      <VideoSection />
      <CourseDetailsSection />
      <PricingSection />
      <ContactFormSection />
      <SocialMediaSection />
      <Footer />
    </div>
  );
}