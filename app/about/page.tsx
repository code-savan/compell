import Header from "../components/Header";
import Footer from "../homecomponents/Footer";
import AboutHero from "./components/AboutHero";
import AboutBGReveal from "./components/AboutBGReveal";
import AboutAtOurCore from "./components/AboutAtOurCore";
import WhyChooseSlider from "./components/WhyChooseSlider";
import WhatWeDo from "./components/WhatWeDo";
import OurTeam from "./components/OurTeam";

export default function About() {
  return (
    <>
      {/* Fixed Background Image */}
      <div
        className="bg-fixed-image"
        style={{ backgroundImage: "url('/about.gif')" }}
      />

      {/* Fixed Header */}
      <Header activePage="ABOUT" />

      {/* Hero + BG Reveal Section */}
      <div className="h-screen w-full relative flex flex-col bg-transparent">
        <AboutHero />
        <AboutBGReveal />
      </div>

      {/* At Our Core */}
      <AboutAtOurCore />

      {/* Why Choose Compell Slider */}
      <WhyChooseSlider />

      {/* What We Do */}
      <WhatWeDo />

      {/* Our Team */}
      <OurTeam />

      {/* Footer */}
      <Footer />
    </>
  );
}
