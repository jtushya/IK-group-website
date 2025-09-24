import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Building2 } from 'lucide-react';
import { companies } from '../../data/companies';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const CompanyGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            Our Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Group <span className="text-slate-700">Companies</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A diversified portfolio spanning traditional industries to cutting-edge ventures
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {companies.map((company, index) => (
            <Card key={index} hover className={`bg-gradient-to-br ${company.bgColor} border-slate-200`}>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/IK_group_logo.png"
                  alt="IK Group Logo"
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-lg font-bold text-slate-900">{company.name}</h3>
              </div>
              
              <p className="text-sm text-slate-600 mb-4">{company.description}</p>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  disabled={company.url === '#'}
                  className="flex-1 text-xs"
                >
                  {company.url === '#' ? 'Coming Soon' : 'Visit'}
                  {company.url !== '#' && <ExternalLink className="w-3 h-3 ml-1" />}
                </Button>
                
                <Link
                  to={`/companies/${company.id}`}
                  className="inline-flex items-center justify-center px-3 py-2 bg-slate-700 text-white text-xs font-semibold rounded-md hover:bg-slate-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" icon={ArrowRight}>
            <Link to="/companies">View All Companies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompanyGrid;