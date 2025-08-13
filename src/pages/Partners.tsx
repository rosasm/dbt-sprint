import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Partners = () => {
  const partners = [
    {
      name: "Freedom Debt Relief",
      url: "https://www.freedomdebtrelief.com",
      description: "Leading debt settlement company helping consumers resolve their debt"
    },
    {
      name: "National Debt Relief",
      url: "https://www.nationaldebtrelief.com", 
      description: "Trusted debt relief services with personalized solutions"
    },
    {
      name: "Credit Karma",
      url: "https://www.creditkarma.com",
      description: "Free credit scores, reports, and financial tools"
    },
    {
      name: "YNAB",
      url: "https://www.youneedabudget.com",
      description: "Budgeting software to help you gain control of your money"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Our Partners</h1>
          <p className="text-xl text-muted-foreground mb-12">
            We've partnered with trusted financial service providers to offer you additional resources on your debt-free journey.
          </p>
          
          <div className="grid gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {partner.name}
                  </a>
                </h2>
                <p className="text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;