import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, MapPin, Users, Award } from 'lucide-react';
import { getCompanyById } from '../data/companies';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { updatePageSEO } from '../utils/seo';

const CompanyDetail = () => {
  const { companyId } = useParams();
  const company = getCompanyById(companyId || '');

  useEffect(() => {
    if (company) {
      updatePageSEO({
        title: `${company.name} - ${company.specialty} | IK Group`,
        description: `${company.fullDescription} Established in ${company.established}, located in ${company.location}.`,
        keywords: `${company.name}, ${company.specialty}, IK Group, ${company.location}`,
        canonical: `https://ikchennai.com/companies/${company.id}`
      });
    }
  }, [company]);

  if (!company) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Company Not Found</h1>
          <Link to="/companies" className="text-teal-600 hover:text-teal-700">
            ← Back to Group Companies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          to="/companies"
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Group Companies
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              {company.name}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {company.fullDescription}
            </p>
            
            {/* Company Stats */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-sm text-slate-500">Established</div>
                  <div className="font-semibold text-slate-900">{company.established}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-sm text-slate-500">Location</div>
                  <div className="font-semibold text-slate-900">{company.location}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-sm text-slate-500">Team Size</div>
                  <div className="font-semibold text-slate-900">{company.employees}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-sm text-slate-500">Specialty</div>
                  <div className="font-semibold text-slate-900">{company.specialty}</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                variant="primary"
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                disabled={company.url === '#'}
                icon={company.url !== '#' ? ExternalLink : undefined}
                size="lg"
              >
                {company.url === '#' ? 'Coming Soon' : 'Visit Website'}
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={company.image}
              alt={company.name}
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${company.color}/20 to-transparent rounded-2xl`}></div>
          </div>
        </div>

        {/* Services & Achievements */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Services */}
          <Card padding="lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Services</h2>
            <div className="space-y-3">
              {company.services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-2 h-2 bg-gradient-to-r ${company.color} rounded-full mr-3`}></div>
                  <span className="text-slate-600">{service}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card padding="lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Achievements</h2>
            <div className="space-y-4">
              {company.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <Award className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{achievement}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Interested in Our Services?
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Get in touch with our team to learn more about how {company.name} can help 
            meet your specific needs and requirements.
          </p>
          <Button variant="primary">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;