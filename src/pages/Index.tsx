import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Delivers from "@/components/Delivers";
import Community from "@/components/Community";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Delivers />
      <Community />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
