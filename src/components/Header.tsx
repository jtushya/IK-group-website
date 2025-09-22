import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const groupCompanies = [
    { name: 'IK Jewellers', url: 'https://ikjewellers.in', id: 'ik-jewellers' },
    { name: 'IK Bullion', url: 'https://ikbullion.com', id: 'ik-bullion' },
    { name: 'IK Classiva', url: 'https://ikclassiva.com', id: 'ik-classiva' },
    { name: 'HRML', url: 'https://hrml.in', id: 'hrml' },
    { name: 'IK7C Venture Pvt Ltd', url: '#', id: 'ik7c-venture' }
  ];

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown('companies');
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay before closing
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/IK_group_logo.png"
                  alt="IK Group Logo"
                  className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-90"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  IK GROUP
                </h1>
                <p className="text-xs text-slate-500 -mt-1 font-medium">Building Trust, Creating Value</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              About Us
            </Link>
            
            {/* Group Companies Dropdown */}
            <div className="relative">
              <div
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Link 
                  to="/companies"
                  className={`flex items-center font-medium transition-colors ${
                    isActive('/companies') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Group Companies
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              {activeDropdown === 'companies' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  {groupCompanies.map((company, index) => (
                    <a
                      key={index}
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm"
                    >
                      {company.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/projects" 
              className={`font-medium transition-colors ${
                isActive('/projects') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/testimonials" 
              className={`font-medium transition-colors ${
                isActive('/testimonials') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Testimonials
            </Link>
            <Link 
              to="/news" 
              className={`font-medium transition-colors ${
                isActive('/news') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              News
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-slate-200">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className={`block font-medium py-2 transition-colors ${
                  isActive('/') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className={`block font-medium py-2 transition-colors ${
                  isActive('/about') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                About Us
              </Link>
              
              <div className="border-l-2 border-slate-200 pl-4">
                <p className="text-sm font-medium text-slate-500 mb-2">Group Companies</p>
                {groupCompanies.map((company, index) => (
                  <a
                    key={index}
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-600 hover:text-slate-900 transition-colors py-1 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {company.name}
                  </a>
                ))}
              </div>

              <Link 
                to="/projects" 
                onClick={() => setIsOpen(false)}
                className={`block font-medium py-2 transition-colors ${
                  isActive('/projects') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Projects
              </Link>
              <Link 
                to="/testimonials" 
                onClick={() => setIsOpen(false)}
                className={`block font-medium py-2 transition-colors ${
                  isActive('/testimonials') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Testimonials
              </Link>
              <Link 
                to="/news" 
                onClick={() => setIsOpen(false)}
                className={`block font-medium py-2 transition-colors ${
                  isActive('/news') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                News
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className={`block font-medium py-2 transition-colors ${
                  isActive('/contact') ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;