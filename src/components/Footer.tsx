import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const groupCompanies = [
    { name: 'IK Jewellers', url: 'https://ikjewellers.in' },
    { name: 'IK Bullion', url: 'https://ikbullion.com' },
    { name: 'IK Classiva', url: 'https://ikclassiva.com' },
    { name: 'HRML', url: 'https://hrml.in' },
    { name: 'IK7C Venture Pvt Ltd', url: '#' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-white border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/IK_group_logo.png"
                  alt="IK Group Logo"
                  className="w-12 h-12 rounded-xl shadow-lg"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-80"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                  IK GROUP
                </h3>
                <p className="text-sm text-slate-500 -mt-1 font-medium">Building Trust, Creating Value</p>
              </div>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              A diversified enterprise committed to sustainable growth, transparent investments, 
              and creating lasting value across multiple industries.
            </p>

            {/* Key Features */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-slate-600">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                100% Principal Refundable Guarantee
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Sustainable & Carbon-Positive Projects
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                50:50 Cultivation Profit Sharing
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-800">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-slate-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group Companies */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-800">Group Companies</h4>
            <ul className="space-y-3">
              {groupCompanies.map((company, index) => (
                <li key={index}>
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-slate-600 hover:text-purple-600 transition-colors text-sm ${
                      company.url === '#' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={company.url === '#' ? (e) => e.preventDefault() : undefined}
                  >
                    {company.name}
                    {company.url !== '#' && <ExternalLink className="w-3 h-3 ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-800">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                <div className="text-sm text-slate-600">
                  <p>Chennai, Tamil Nadu</p>
                  <p>India - 600001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <p className="text-sm text-slate-600">+91 98765 43210</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <a href="mailto:info@ikchennai.com" className="text-sm text-slate-600 hover:text-purple-600 transition-colors">
                  info@ikchennai.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <h5 className="text-sm font-medium text-slate-800 mb-2">Business Hours</h5>
              <div className="space-y-1 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9 AM - 6 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9 AM - 1 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-100 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-slate-500 hover:text-purple-600 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-300">|</span>
              <Link to="/terms" className="text-slate-500 hover:text-purple-600 transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-slate-300">|</span>
              <a 
                href="https://ikchennai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-purple-600 transition-colors"
              >
                ikchennai.com
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-slate-500 text-center md:text-right">
              <p className="flex items-center justify-center md:justify-end">
                © 2024 IK Group. Made with <Heart className="w-3 h-3 mx-1 text-pink-400" /> in India
              </p>
            </div>
          </div>
        </div>

        {/* Investment Disclaimer */}
        <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
          <p className="text-xs text-slate-600 text-center">
            <strong>Investment Disclaimer:</strong> All investments are subject to market risks. 
            Please read all terms and conditions carefully before investing. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;