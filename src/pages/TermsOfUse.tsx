import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Use</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using Debt Sprint ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                Debt Sprint provides debt payoff calculation tools, educational resources, and debt management strategies. Our service is designed to help users understand and plan their debt repayment journey.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Educational Purpose Only</h2>
              <p className="text-muted-foreground mb-4">
                The information provided by Debt Sprint is for educational and informational purposes only. It should not be considered as financial advice. Users should consult with qualified financial professionals for personalized advice regarding their specific financial situations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate information when using our calculators</li>
                <li>Use the service for lawful purposes only</li>
                <li>Respect the intellectual property rights of the service</li>
                <li>Not attempt to interfere with the proper working of the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data</h2>
              <p className="text-muted-foreground mb-4">
                We respect your privacy. Any personal information collected is used solely to provide and improve our services. We do not sell or share personal information with third parties except as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-4">
                The service is provided "as is" without any representations or warranties. We make no warranties regarding the accuracy, reliability, or completeness of the information provided through our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Debt Sprint shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service. Our total liability shall not exceed the amount paid by you, if any, for using our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground mb-4">
                Our service may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of third-party sites. Users access third-party links at their own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Modifications to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use of the service constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason, including if you breach the Terms of Use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Debt Sprint operates, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Use, please contact us at support@debtsprint.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;