import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DebtCalculator from "@/components/DebtCalculator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DebtCalculator />
      <Footer />
    </div>
  );
};

export default Index;
