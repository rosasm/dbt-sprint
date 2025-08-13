import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ExcelPlanner = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to download the Excel planner.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    
    toast({
      title: "Success!",
      description: "Check your email for the download link to the Excel planner.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 px-6 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Excel Debt Payoff Planner
          </h1>
          <p className="text-xl text-white/90">
            Get our comprehensive Excel spreadsheet to plan and track your debt payoff journey
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What's Included</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Complete debt inventory worksheet
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Automated snowball vs avalanche comparison
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Monthly payment schedule generator
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Interest savings calculator
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Progress tracking charts
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Lump-sum payment impact analysis
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Printable payoff timeline
                </li>
              </ul>
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-center">
                  {isSubmitted ? "Check Your Email!" : "Download the Excel Planner"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center space-y-4">
                    <div className="text-6xl">📧</div>
                    <p className="text-lg">
                      We've sent the Excel planner to your email address. Check your inbox (and spam folder) for the download link.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setEmail("");
                      }}
                    >
                      Download Another Copy
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" variant="cta" className="w-full">
                      Get Free Excel Planner
                    </Button>
                    <p className="text-sm text-gray-600 text-center">
                      We'll never spam you. Unsubscribe at any time.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Use Our Excel Planner?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold mb-2">Visual Progress</h3>
                  <p>See your debt decrease over time with beautiful charts and graphs that keep you motivated.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
                  <p>Compare different payoff strategies and find the one that works best for your situation.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold mb-2">Save Money</h3>
                  <p>Calculate exactly how much interest you'll save with different payment amounts and strategies.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExcelPlanner;