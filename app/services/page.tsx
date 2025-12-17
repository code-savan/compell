import Header from "../components/Header";
import Footer from "../homecomponents/Footer";
import KeyOfferings from "../homecomponents/KeyOfferings";
import ServicesHero from "./components/ServicesHero";
import ServicesBGReveal from "./components/ServicesBGReveal";

export default function Services() {
  return (
    <>
      {/* Fixed Background Image */}
      <div
        className="bg-fixed-image"
        style={{ backgroundImage: "url('/services.png')" }}
      />

      {/* Fixed Header */}
      <Header activePage="SERVICES" />

      {/* Hero + BG Reveal Section */}
      <div className="h-screen w-full relative flex flex-col bg-transparent">
        <ServicesHero />
        <ServicesBGReveal />
      </div>

      {/* Key Offerings */}
      <KeyOfferings />

      {/* Footer */}
      <Footer />
    </>
  );
}
