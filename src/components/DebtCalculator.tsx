import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2 } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface Debt {
  id: string;
  creditor: string;
  balance: number;
  apr: number;
}

const DebtCalculator = () => {
  const [debts, setDebts] = useState<Debt[]>([
    { id: "1", creditor: "Credit Card 1", balance: 5000, apr: 18.99 },
    { id: "2", creditor: "Auto Loan", balance: 12000, apr: 4.50 },
    { id: "3", creditor: "Credit Card 2", balance: 3500, apr: 22.00 },
  ]);
  
  const [strategy, setStrategy] = useState<"snowball" | "avalanche">("snowball");
  const [newDebt, setNewDebt] = useState({ creditor: "", balance: "", apr: "" });

  const addDebt = () => {
    if (newDebt.creditor && newDebt.balance && newDebt.apr) {
      const debt: Debt = {
        id: Date.now().toString(),
        creditor: newDebt.creditor,
        balance: parseFloat(newDebt.balance),
        apr: parseFloat(newDebt.apr),
      };
      setDebts([...debts, debt]);
      setNewDebt({ creditor: "", balance: "", apr: "" });
    }
  };

  const removeDebt = (id: string) => {
    setDebts(debts.filter(debt => debt.id !== id));
  };

  const [monthlyPayment, setMonthlyPayment] = useState(500);
  const [isCalculated, setIsCalculated] = useState(false);

  const calculatePayoffWithTimeline = () => {
    if (debts.length === 0) return { totalInterest: 0, monthsToPayoff: 0, timeline: [] };
    
    let sortedDebts = [...debts];
    if (strategy === "snowball") {
      sortedDebts.sort((a, b) => a.balance - b.balance);
    } else {
      sortedDebts.sort((a, b) => b.apr - a.apr);
    }

    let totalInterest = 0;
    let months = 0;
    let debtsCopy = sortedDebts.map(debt => ({ ...debt }));
    const timeline = [];

    while (debtsCopy.length > 0 && months < 360) { // Max 30 years
      months++;
      let paymentLeft = monthlyPayment;

      // Pay minimums first (assume $25 minimum)
      debtsCopy.forEach(debt => {
        const minimum = Math.min(25, debt.balance);
        const interest = (debt.balance * debt.apr / 100) / 12;
        totalInterest += interest;
        debt.balance += interest - minimum;
        paymentLeft -= minimum;
      });

      // Apply extra payment to first debt
      if (paymentLeft > 0 && debtsCopy.length > 0) {
        debtsCopy[0].balance = Math.max(0, debtsCopy[0].balance - paymentLeft);
      }

      // Track timeline data
      const totalDebt = debtsCopy.reduce((sum, debt) => sum + debt.balance, 0);
      timeline.push({
        month: months,
        totalDebt: Math.round(totalDebt),
        year: Math.floor((months - 1) / 12) + 1
      });

      // Remove paid off debts
      debtsCopy = debtsCopy.filter(debt => debt.balance > 0);
    }

    return { totalInterest: Math.round(totalInterest), monthsToPayoff: months, timeline };
  };

  const calculatePayoff = () => {
    const { totalInterest, monthsToPayoff } = calculatePayoffWithTimeline();
    return { totalInterest, monthsToPayoff };
  };

  const runSimulation = () => {
    setIsCalculated(true);
  };

  const { totalInterest, monthsToPayoff, timeline } = isCalculated ? calculatePayoffWithTimeline() : { totalInterest: 0, monthsToPayoff: 0, timeline: [] };
  const totalBalance = debts.reduce((sum, debt) => sum + debt.balance, 0);

  const chartConfig = {
    totalDebt: {
      label: "Total Debt",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Debt Entry */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Enter Your Debts Below
            </h2>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Your Debt Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Debt List */}
                  <div className="overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 font-semibold">Creditor</th>
                          <th className="text-right py-2 font-semibold">Balance ($)</th>
                          <th className="text-right py-2 font-semibold">APR (%)</th>
                          <th className="w-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {debts.map((debt) => (
                          <tr key={debt.id} className="border-b">
                            <td className="py-2">{debt.creditor}</td>
                            <td className="text-right py-2">{debt.balance.toLocaleString()}</td>
                            <td className="text-right py-2">{debt.apr}</td>
                            <td className="py-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeDebt(debt.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Add New Debt */}
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <Input
                        placeholder="Creditor name"
                        value={newDebt.creditor}
                        onChange={(e) => setNewDebt({...newDebt, creditor: e.target.value})}
                      />
                      <Input
                        placeholder="Balance"
                        type="number"
                        value={newDebt.balance}
                        onChange={(e) => setNewDebt({...newDebt, balance: e.target.value})}
                      />
                      <Input
                        placeholder="APR %"
                        type="number"
                        step="0.01"
                        value={newDebt.apr}
                        onChange={(e) => setNewDebt({...newDebt, apr: e.target.value})}
                      />
                    </div>
                    <Button onClick={addDebt} variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Another Debt
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategy Selection */}
            <Card className="shadow-card mt-6">
              <CardHeader>
                <CardTitle>Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Button
                    variant={strategy === "snowball" ? "cta" : "outline"}
                    onClick={() => setStrategy("snowball")}
                  >
                    Snowball
                  </Button>
                  <Button
                    variant={strategy === "avalanche" ? "cta" : "outline"}
                    onClick={() => setStrategy("avalanche")}
                  >
                    Avalanche
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold">Strategy</h4>
                  <h5 className="font-medium text-teal-primary">Snowball</h5>
                  <div className="space-y-1 text-sm">
                    {debts.map((debt, index) => (
                      <div key={debt.id} className="flex justify-between">
                        <span>{debt.creditor}</span>
                        <span>{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Monthly Payment</label>
                    <Input
                      type="number"
                      value={monthlyPayment}
                      onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                      placeholder="500"
                    />
                  </div>
                  <Button variant="cta" className="w-full" onClick={runSimulation}>
                    Run Simulation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Results */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              See Your Debt-Free Date
            </h2>
            
            <Card className="shadow-card mb-6">
              <CardContent className="p-6">
                {/* Payoff Timeline Chart */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Payoff Timeline</h3>
                  {isCalculated && timeline.length > 0 ? (
                      <ChartContainer config={chartConfig} className="h-64 w-full">
                       <AreaChart data={timeline}>
                         <XAxis 
                           dataKey="month" 
                           tickFormatter={(value) => `${value}m`}
                           className="text-xs"
                         />
                         <YAxis 
                           tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                           className="text-xs"
                         />
                         <ChartTooltip 
                           content={<ChartTooltipContent />}
                           labelFormatter={(value) => `Month ${value}`}
                           formatter={(value) => [`$${value.toLocaleString()}`, "Total Debt"]}
                         />
                         <Area
                           dataKey="totalDebt"
                           type="monotone"
                           fill="hsl(120 40% 70%)"
                           fillOpacity={0.4}
                           stroke="hsl(120 40% 50%)"
                           strokeWidth={2}
                         />
                       </AreaChart>
                     </ChartContainer>
                   ) : (
                     <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                       <p className="text-muted-foreground">Run simulation to see payoff timeline</p>
                     </div>
                   )}
                 </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      ${isCalculated ? totalInterest.toLocaleString() : '--'}
                    </div>
                    <div className="text-sm text-gray-600">Total Interest</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {isCalculated ? monthsToPayoff : '--'}
                    </div>
                    <div className="text-sm text-gray-600">Months to Pay Off</div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DebtCalculator;