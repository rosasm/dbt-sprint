const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="/excel-planner" className="hover:text-white transition-colors">Excel Planner</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Debt Relief</h3>
            <p className="text-gray-300 text-sm mb-2">
              Get personalized debt relief from our <a href="/partners" className="text-blue-400 hover:text-blue-300 transition-colors">partners</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Debt Sprint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;