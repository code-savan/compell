import Hero from "./homecomponents/Hero";
import BGReveal from "./homecomponents/BGReveal";
import AtOurCore from "./homecomponents/AtOurCore";
import OurProjects from "./homecomponents/OurProjects";
import KeyOfferings from "./homecomponents/KeyOfferings";
import Footer from "./homecomponents/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      {/* Fixed Background Image */}
      <div
        className="bg-fixed-image"
        style={{ backgroundImage: "url('/home.png')" }}
      />

      {/* Fixed Header */}
      <Header activePage="HOME" />

      {/* Hero Section */}
      <div className="h-screen w-full relative flex flex-col bg-transparent">
        <Hero />
        <BGReveal />
      </div>
      <AtOurCore />
      <OurProjects />
      <KeyOfferings />
      <Footer />
    </>
  );
}
