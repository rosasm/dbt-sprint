import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-hero text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <TrendingUp className="h-8 w-8" />
          <span className="text-2xl font-bold">Debt Sprint</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {/* Navigation items removed as requested */}
        </nav>
      </div>
    </header>
  );
};

export default Header;