import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Building, ArrowRight } from 'lucide-react';
import { companies } from '../data/companies';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { updatePageSEO, pageSEOConfig } from '../utils/seo';

const GroupCompanies = () => {
  useEffect(() => {
    updatePageSEO(pageSEOConfig.companies);
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            <Building className="w-4 h-4 mr-2" />
            Our Portfolio
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Group <span className="text-slate-700">Companies</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A diversified portfolio of companies spanning traditional industries to cutting-edge ventures, 
            each committed to excellence and sustainable growth.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {companies.map((company, index) => (
            <Card key={index} hover padding="lg" className={`group relative bg-gradient-to-br ${company.bgColor} border-slate-200`}>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${company.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <company.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                    {company.name}
                  </h2>
                  <Badge variant="neutral" size="sm">
                    Est. {company.established}
                  </Badge>
                </div>
                
                <p className="text-sm text-teal-700 font-medium">
                  {company.specialty}
                </p>
                
                <p className="text-slate-600 leading-relaxed">
                  {company.description}
                </p>
              </div>

              {/* Link Button */}
              <div className="mt-6 flex gap-3">
                <Button
                  variant="outline"
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  disabled={company.url === '#'}
                  className="flex-1"
                  icon={company.url !== '#' ? ExternalLink : undefined}
                >
                  {company.url === '#' ? 'Coming Soon' : 'Visit Website'}
                </Button>
                
                <Link
                  to={`/companies/${company.id}`}
                  className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Decorative element */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${company.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Interested in Partnership Opportunities?
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Explore how our diverse portfolio of companies can create value for your investment goals 
            through strategic partnerships and collaborative growth.
          </p>
          <Button variant="primary" icon={ExternalLink}>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GroupCompanies;