import React from 'react';
import { ExternalLink, Gem, Coins, Crown, Building, Rocket } from 'lucide-react';

const GroupCompanies = () => {
  const companies = [
    {
      name: 'IK Jewellers',
      url: 'https://ikjewellers.in',
      icon: Gem,
      description: 'Heritage jewelry brand blending traditional craftsmanship with modern design excellence. Trusted for generations.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      name: 'IK Bullion',
      url: 'https://ikbullion.com',
      icon: Coins,
      description: 'Trusted bullion and precious metals trading with transparent pricing and secure transactions.',
      color: 'from-gray-400 to-gray-600',
      bgColor: 'from-gray-50 to-slate-50'
    },
    {
      name: 'IK Classiva',
      url: 'https://ikclassiva.com',
      icon: Crown,
      description: 'Premium lifestyle and luxury ventures curating exceptional experiences and products.',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      name: 'HRML',
      url: 'https://hrml.in',
      icon: Building,
      description: 'Comprehensive real estate, infrastructure, and land management solutions for sustainable development.',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      name: 'IK7C Venture Pvt Ltd',
      url: '#',
      icon: Rocket,
      description: 'New-age venture arm focusing on innovation, technology, and sustainable growth opportunities.',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <Building className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Group <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Companies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A diversified portfolio of companies spanning traditional industries to cutting-edge ventures, 
            each committed to excellence and sustainable growth.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {companies.map((company, index) => (
            <div key={index} className={`group relative bg-gradient-to-br ${company.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50`}>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${company.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <company.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                  {company.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {company.description}
                </p>
              </div>

              {/* Link Button */}
              <div className="mt-6">
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-lg shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 group-hover:scale-105 ${
                    company.url === '#' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={company.url === '#' ? (e) => e.preventDefault() : undefined}
                >
                  {company.url === '#' ? 'Coming Soon' : 'Visit Website'}
                  {company.url !== '#' && <ExternalLink className="w-4 h-4 ml-2" />}
                </a>
              </div>

              {/* Decorative element */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${company.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Interested in Partnership Opportunities?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore how our diverse portfolio of companies can create value for your investment goals 
            through strategic partnerships and collaborative growth.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
            <ExternalLink className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;