import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "Debt Snowball vs Avalanche: Which Method is Right for You?",
    excerpt: "Discover the key differences between these two popular debt payoff strategies and learn which one aligns with your financial goals and personality.",
    date: "December 15, 2024",
    category: "Strategy",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "10 Ways to Find Extra Money for Debt Payments",
    excerpt: "Practical tips to free up money in your budget and accelerate your debt payoff journey without sacrificing your quality of life.",
    date: "December 10, 2024",
    category: "Budgeting",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "The Psychology of Debt: Why We Struggle and How to Overcome It",
    excerpt: "Understanding the mental and emotional aspects of debt can help you develop healthier financial habits and stay motivated during your payoff journey.",
    date: "December 5, 2024",
    category: "Psychology",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "How to Negotiate with Creditors: A Step-by-Step Guide",
    excerpt: "Learn effective strategies for negotiating with creditors to potentially reduce your debt, lower interest rates, or create more manageable payment plans.",
    date: "November 28, 2024",
    category: "Negotiation",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Emergency Fund vs Debt Payoff: Finding the Right Balance",
    excerpt: "Should you build an emergency fund first or focus on paying off debt? Here's how to strike the right balance for your financial security.",
    date: "November 20, 2024",
    category: "Financial Planning",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Common Debt Payoff Mistakes and How to Avoid Them",
    excerpt: "Learn from the most common pitfalls that derail debt payoff plans and discover how to stay on track toward becoming debt-free.",
    date: "November 15, 2024",
    category: "Tips",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 px-6 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Debt Sprint Blog
          </h1>
          <p className="text-xl text-white/90">
            Expert advice, strategies, and insights to help you become debt-free faster
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="shadow-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="text-sm text-gray-500">
                    {post.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="shadow-card bg-primary text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                <p className="text-lg mb-6 text-white/90">
                  Get the latest debt payoff strategies and financial tips delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                  />
                  <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
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

export default Blog;