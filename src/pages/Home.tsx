import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import CompanyGrid from '../components/sections/CompanyGrid';
import StatsSection from '../components/sections/StatsSection';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { updatePageSEO, pageSEOConfig } from '../utils/seo';

const Home = () => {
  useEffect(() => {
    updatePageSEO(pageSEOConfig.home);
  }, []);

  const projects = [
    {
      name: 'V Farms - Kilimanjaro Macadamia Estate',
      location: 'Base of Mt. Kilimanjaro, Tanzania',
      size: '10,000 acres',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Eco-tourism integration', 'Carbon credits generation', '50-year productive crop']
    },
    {
      name: 'Kilima Maji Agro Farms',
      location: 'Njombe Region, Tanzania',
      size: '10,055 acres',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Fertile volcanic soils', 'Multi-crop cultivation', 'Sustainable timber']
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      <CompanyGrid />

      {/* Flagship Projects Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="success" className="mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Flagship Projects
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Agricultural <span className="text-emerald-600">Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover our flagship agricultural ventures in Tanzania, combining sustainable farming with guaranteed returns
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
                  <p className="text-slate-600 mb-4">{project.location} • {project.size}</p>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <StatsSection />
    </div>
  );
};

export default Home;