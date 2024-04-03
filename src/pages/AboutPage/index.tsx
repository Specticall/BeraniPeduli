import { useEffect } from "react";

import NavbarFill from "../../components/navbarFill/NavbarFill";
import Heading from "../../components/heading/Heading";
import Vision from "./components/vision/Vision";
import Mission from "./components/mission/Mission";
import Achievements from "../../components/achievements/Achievements";
import Features from "./components/features/Features";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "../../components/footer/Footer";

import headerImage from "./assets/about-header.png";
import "./aboutPage.css";

export default function AboutPage() {
  // scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="about-page">
      <NavbarFill activeNav="about" />
      <Heading image={headerImage} title="About Page" />
      <div className="container">
        <Vision />
        <Mission />
      </div>
      <Achievements />
      <div className="container">
        <Features />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}
