import Header from "../components/Header";
import Footer from "../homecomponents/Footer";
import PricingHero from "./components/PricingHero";
import PricingBGReveal from "./components/PricingBGReveal";
import PricingDetails from "./components/PricingDetails";

export default function Pricing() {
  return (
    <>
      {/* Fixed Background Image */}
      <div
        className="bg-fixed-image"
        style={{ backgroundImage: "url('/pricing.png')" }}
      />

      {/* Fixed Header */}
      <Header activePage="PRICING" />

      {/* Hero + BG Reveal Section */}
      <div className="h-screen w-full relative flex flex-col bg-transparent">
        <PricingHero />
        <PricingBGReveal />
      </div>

      {/* Pricing Details */}
      <PricingDetails />

      {/* Footer */}
      <Footer />
    </>
  );
}
