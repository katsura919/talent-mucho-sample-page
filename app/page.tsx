import Header from "./components/Header";
import Hero from "./components/Hero";
import ChallengeSection from "./components/ChallengeSection";
import PhilosophySection from "./components/PhilosophySection";
import ServicesSection from "./components/ServicesSection";
import WhyUsSection from "./components/WhyUsSection";
import ClientsSection from "./components/ClientsSection";
import ProcessSection from "./components/ProcessSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ChallengeSection />
        <PhilosophySection />
        <ServicesSection />
        <WhyUsSection />
        <ClientsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
