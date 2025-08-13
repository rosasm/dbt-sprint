import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Crush Your Debt. Choose Your Path.
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto">
          Automated payoff planner using Snowball or Avalanche strategies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/excel-planner">
            <Button variant="outline-white" size="lg" className="text-lg px-8 py-4">
              Download the Excel Planner
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;