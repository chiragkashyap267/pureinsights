import { Navbar } from "./components/Navbar";
import { ScrollProgress, FloatingWhatsApp } from "./components/Chrome";
import { SmoothScroll } from "./components/SmoothScroll";
import { Preloader } from "./components/Preloader";
import { GrainOverlay } from "./components/Texture";
import { Ribbon } from "./components/Ribbon";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { VisionMission } from "./sections/VisionMission";
import { Services } from "./sections/Services";
import { Process } from "./sections/Process";
import { Founder } from "./sections/Founder";
import { Team } from "./sections/Team";
import { Portfolio } from "./sections/Portfolio";
import { Projects } from "./sections/Projects";
import { Clients } from "./sections/Clients";
import { Testimonials } from "./sections/Testimonials";
import { Goals } from "./sections/Goals";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <GrainOverlay />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Ribbon />
        <Process />
        <Founder />
        <Team />
        <Portfolio />
        <Projects />
        <Clients />
        <Testimonials />
        <Ribbon
          words={[
            "Residential",
            "Commercial",
            "Retail",
            "Hospitality",
            "Corporate",
            "Modular",
          ]}
        />
        <Goals />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
