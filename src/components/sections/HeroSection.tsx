import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Leaf, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const HeroSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: '100%',
      subtitle: 'Principal Refundable Guarantee',
      color: 'text-slate-600'
    },
    {
      icon: TrendingUp,
      title: '50:50',
      subtitle: 'Cultivation Profit Sharing',
      color: 'text-teal-600'
    },
    {
      icon: Leaf,
      title: '60+',
      subtitle: 'Months Secure Investment',
      color: 'text-emerald-600'
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-slate-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-slate-300/20 rounded-full blur-xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="inline-flex items-center">
                <Leaf className="w-4 h-4 mr-2" />
                Sustainable Growth • Trusted Partnerships
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Building Trust,
                <br />
                <span className="text-slate-700">Creating Value,</span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Sustaining the Future
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                IK Group is a diversified enterprise spanning jewelry, bullion, lifestyle, agriculture, and sustainability. 
                We're committed to transparent growth with guaranteed returns and profit-sharing opportunities.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <highlight.icon className={`w-8 h-8 ${highlight.color} mb-2`} />
                  <div className="text-2xl font-bold text-slate-800">{highlight.title}</div>
                  <div className="text-sm text-slate-600">{highlight.subtitle}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" icon={ArrowRight} size="lg">
                <Link to="/projects">Explore Projects</Link>
              </Button>
              
              <Button variant="outline" size="lg">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Corporate Success"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-slate-200">
                <div className="text-2xl font-bold text-emerald-600">10,000+</div>
                <div className="text-sm text-slate-600">Acres Under Management</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-slate-200">
                <div className="text-2xl font-bold text-slate-700">5+</div>
                <div className="text-sm text-slate-600">Group Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;