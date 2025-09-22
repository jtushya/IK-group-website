import { useEffect } from 'react';
import { Shield, Leaf, TrendingUp, Users, Award, Globe, Building2 } from 'lucide-react';
import { updatePageSEO, pageSEOConfig } from '../utils/seo';

const About = () => {
  useEffect(() => {
    updatePageSEO(pageSEOConfig.about);
  }, []);

  const values = [
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability in every interaction.',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Award,
      title: 'Security',
      description: '100% principal refundable guarantee with land-backed investments for maximum protection.',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to environmental stewardship and carbon-positive agricultural initiatives.',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and modern practices for optimal outcomes.',
      color: 'from-orange-400 to-red-400'
    }
  ];

  const highlights = [
    {
      title: 'Principal Protection Guarantee',
      description: '100% Principal Refundable after 60 months',
      color: 'from-blue-200 to-cyan-200'
    },
    {
      title: 'Profitable Partnership',
      description: '50:50 Cultivation Profit Sharing Model',
      color: 'from-green-200 to-emerald-200'
    },
    {
      title: 'Secure Investment',
      description: 'Required land in investor name for security',
      color: 'from-purple-200 to-pink-200'
    },
    {
      title: 'Environmental Impact',
      description: 'Carbon credit projects & sustainable farming',
      color: 'from-orange-200 to-red-200'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Users className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-purple-700 font-medium">About IK Group</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Legacy</span> of Excellence
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            For generations, IK Group has been committed to growth with trust and transparency, 
            creating sustainable value across diverse industries while maintaining our core promise of security and innovation.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Building Tomorrow, Today</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                IK Group began as a vision to create lasting value through diverse business ventures, 
                each grounded in the principles of trust, innovation, and sustainable growth. Our journey 
                spans across multiple industries, from traditional jewelry craftsmanship to modern agricultural innovation.
              </p>
              <p>
                What sets us apart is our unwavering commitment to transparency and investor security. 
                Every venture we undertake is designed with clear profit-sharing models, guaranteed principal 
                protection, and sustainable practices that benefit both our partners and the environment.
              </p>
              <p>
                Today, IK Group stands as a testament to what's possible when traditional values meet 
                modern innovation, creating opportunities that are both profitable and purposeful.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="IK Group company history and legacy of sustainable investment excellence"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Highlights */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4">
              <Globe className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium">Investment Highlights</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose IK Group</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our unique investment model combines security, profitability, and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-full h-1 bg-gradient-to-r ${highlight.color} rounded-full mb-4`}></div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{highlight.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To create sustainable value through diversified investments while maintaining the highest standards 
              of transparency, security, and environmental responsibility. We strive to build lasting partnerships 
              that benefit our investors, communities, and the planet.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mb-6">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the leading diversified enterprise that sets the standard for ethical business practices, 
              sustainable growth, and investor protection. We envision a future where profitable investments 
              contribute positively to environmental and social well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;