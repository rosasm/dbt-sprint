import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 px-6 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Debt Payoff Strategies Work
          </h1>
          <p className="text-xl text-white/90">
            Choose the right strategy to accelerate your journey to becoming debt-free
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary">
                  Debt Snowball Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">How it works:</h3>
                <ul className="space-y-2">
                  <li>• List all debts from smallest to largest balance</li>
                  <li>• Pay minimums on all debts</li>
                  <li>• Put any extra money toward the smallest debt</li>
                  <li>• Once smallest debt is paid off, roll that payment to the next smallest</li>
                  <li>• Repeat until all debts are eliminated</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-6">Best for:</h3>
                <ul className="space-y-2">
                  <li>• People who need psychological wins</li>
                  <li>• Those struggling with motivation</li>
                  <li>• Anyone who wants to see quick progress</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6">Pros:</h3>
                <ul className="space-y-2">
                  <li>• Quick wins boost motivation</li>
                  <li>• Simplifies your debt situation faster</li>
                  <li>• Creates momentum</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6">Cons:</h3>
                <ul className="space-y-2">
                  <li>• May pay more interest overall</li>
                  <li>• Takes longer if largest debts have highest rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary">
                  Debt Avalanche Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">How it works:</h3>
                <ul className="space-y-2">
                  <li>• List all debts from highest to lowest interest rate</li>
                  <li>• Pay minimums on all debts</li>
                  <li>• Put any extra money toward the highest rate debt</li>
                  <li>• Once highest rate debt is paid off, roll that payment to the next highest</li>
                  <li>• Repeat until all debts are eliminated</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-6">Best for:</h3>
                <ul className="space-y-2">
                  <li>• People focused on saving money</li>
                  <li>• Those comfortable with slower initial progress</li>
                  <li>• Anyone wanting to minimize total interest paid</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6">Pros:</h3>
                <ul className="space-y-2">
                  <li>• Saves the most money in interest</li>
                  <li>• Mathematically optimal approach</li>
                  <li>• Faster payoff if high-rate debts are large</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6">Cons:</h3>
                <ul className="space-y-2">
                  <li>• May take longer to see progress</li>
                  <li>• Can be demotivating initially</li>
                  <li>• Requires discipline to stick with it</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="shadow-card bg-primary text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Which Strategy Should You Choose?</h2>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Choose Snowball if you:</h3>
                    <ul className="space-y-2">
                      <li>• Need motivation and quick wins</li>
                      <li>• Have struggled to stick with debt payoff plans</li>
                      <li>• Have several small debts to eliminate</li>
                      <li>• Value psychological benefits over mathematical optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Choose Avalanche if you:</h3>
                    <ul className="space-y-2">
                      <li>• Want to minimize total interest paid</li>
                      <li>• Are disciplined and don't need quick wins</li>
                      <li>• Have high-interest debt (credit cards, personal loans)</li>
                      <li>• Prefer the mathematically optimal approach</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;