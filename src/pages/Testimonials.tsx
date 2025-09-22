import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, User } from 'lucide-react';
import { updatePageSEO, pageSEOConfig } from '../utils/seo';

const Testimonials = () => {
  useEffect(() => {
    updatePageSEO(pageSEOConfig.testimonials);
  }, []);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Investment Partner',
      company: 'Chennai',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'IK Group\'s transparency and commitment to secure investments is unmatched. The 50:50 profit sharing model and principal guarantee gave me confidence to invest in their agricultural ventures. Excellent returns and professional management.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      company: 'Mumbai',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The V Farms project exceeded my expectations. The team\'s expertise in sustainable agriculture and their commitment to environmental stewardship makes this investment both profitable and purposeful. Highly recommended.',
      rating: 5
    },
    {
      name: 'Dr. Anil Mehta',
      role: 'Investor',
      company: 'Bangalore',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Working with IK Group has been a remarkable experience. Their diversified portfolio approach and focus on land-backed investments provides the security I was looking for. The regular updates and transparent communication is exceptional.',
      rating: 5
    },
    {
      name: 'Sunita Patel',
      role: 'Family Office',
      company: 'Delhi',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'IK Group\'s commitment to sustainability while maintaining strong returns aligns perfectly with our investment philosophy. The Kilima Maji project showcases their expertise in agricultural innovation and environmental responsibility.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Private Investor',
      company: 'Hyderabad',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The principal refundable guarantee and the transparent profit-sharing model made IK Group stand out among investment opportunities. Their professional approach and regular communication builds trust and confidence.',
      rating: 5
    },
    {
      name: 'Kavitha Reddy',
      role: 'Investment Advisor',
      company: 'Pune',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'I\'ve recommended IK Group to several clients. Their focus on secure, land-backed investments with clear exit strategies and profit sharing makes them a reliable partner for long-term wealth creation.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <User className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-purple-700 font-medium">Client Testimonials</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            What Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Partners</span> Say
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our valued investors and partners about their experience with IK Group's 
            commitment to transparency, security, and sustainable growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
              
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-purple-400 group-hover:text-purple-500 transition-colors duration-300" />
                
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-slate-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-100 group-hover:border-purple-200 transition-colors duration-300"
                />
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-xs text-purple-600 font-medium">{testimonial.company}</p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">500+</div>
              <div className="text-purple-100">Happy Investors</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">₹100Cr+</div>
              <div className="text-purple-100">Assets Under Management</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">98%</div>
              <div className="text-purple-100">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">10+</div>
              <div className="text-purple-100">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Ready to Join Our Growing Community?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Experience the same level of trust, transparency, and returns that our partners enjoy. 
            Start your investment journey with IK Group today.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Investment Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;