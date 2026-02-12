import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Exchanges from "@/components/Exchanges";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import FeeTable from "@/components/FeeTable";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <div className="section-divider" />
    <Exchanges />
    <div className="section-divider" />
    <HowItWorks />
    <div className="section-divider" />
    <Benefits />
    <div className="section-divider" />
    <FeeTable />
    <div className="section-divider" />
    <Stats />
    <div className="section-divider" />
    <Testimonials />
    <div className="section-divider" />
    <FAQ />
    <div className="section-divider" />
    <ContactForm />
    <Footer />
  </main>
);

export default Index;
