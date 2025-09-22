import React from 'react';
import { ArrowRight, Shield, Leaf, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-white/40"></div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-200/30 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm">
                <Leaf className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Sustainable Growth • Trusted Partnerships</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Building Trust,
                </span>
                <br />
                <span className="text-gray-800">Creating Value,</span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Sustaining the Future
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                IK Group is a diversified enterprise spanning jewelry, bullion, lifestyle, agriculture, and sustainability. 
                We're committed to transparent growth with guaranteed returns and profit-sharing opportunities.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-blue-200/30 shadow-sm hover:shadow-md transition-all duration-300">
                <Shield className="w-8 h-8 text-blue-500 mb-2" />
                <div className="text-2xl font-bold text-gray-800">100%</div>
                <div className="text-sm text-gray-600">Principal Refundable Guarantee</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-green-200/30 shadow-sm hover:shadow-md transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
                <div className="text-2xl font-bold text-gray-800">50:50</div>
                <div className="text-sm text-gray-600">Cultivation Profit Sharing</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-purple-200/30 shadow-sm hover:shadow-md transition-all duration-300">
                <Leaf className="w-8 h-8 text-purple-500 mb-2" />
                <div className="text-2xl font-bold text-gray-800">60+</div>
                <div className="text-sm text-gray-600">Months Secure Investment</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
              >
                Learn About Us
              </button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative animate-fadeInRight">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1440722/pexels-photo-1440722.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Corporate Success"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="text-2xl font-bold text-green-600">10,000+</div>
                <div className="text-sm text-gray-600">Acres Under Management</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Group Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;