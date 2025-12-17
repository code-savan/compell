import Header from "../components/Header";
import Footer from "../homecomponents/Footer";
import AcquisitionHero from "./components/AcquisitionHero";
import AcquisitionBGReveal from "./components/AcquisitionBGReveal";
import AcquisitionDetails from "./components/AcquisitionDetails";

export default function Acquisition() {
  return (
    <>
      {/* Fixed Background Image */}
      <div
        className="bg-fixed-image"
        style={{ backgroundImage: "url('/acquisitions.png')" }}
      />

      {/* Fixed Header */}
      <Header activePage="ACQUISITION" />

      {/* Hero + BG Reveal Section */}
      <div className="h-screen w-full relative flex flex-col bg-transparent">
        <AcquisitionHero />
        <AcquisitionBGReveal />
      </div>

      {/* Acquisition Details */}
      <AcquisitionDetails />

      {/* Footer */}
      <Footer />
    </>
  );
}
