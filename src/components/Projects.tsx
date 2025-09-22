import React from 'react';
import { Download, MapPin, TrendingUp, Leaf, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'V Farms - Kilimanjaro Macadamia Estate',
      location: 'Base of Mt. Kilimanjaro, Tanzania',
      size: '10,000 acres (scalable)',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Eco-tourism integration',
        'Carbon credits generation',
        'Regenerative farming practices',
        '50-year productive crop lifecycle',
        'Global market access',
        'Land-backed investment security'
      ],
      highlights: {
        profitSharing: '50:50 Profit Sharing Model',
        lifecycle: '50-Year Productive Crop',
        security: 'Land-Backed Investment',
        sustainability: 'Carbon Credit Generation'
      },
      pdfName: 'V Farms Brochure',
      description: 'Premium macadamia estate at the foothills of Africa\'s highest peak, combining agricultural excellence with environmental stewardship and tourism potential.',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      name: 'Kilima Maji Agro Farms (KMAF)',
      location: 'Njombe Region, Tanzania',
      size: '10,055 acres',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Fertile volcanic soils',
        'Avocado plantations',
        'Coffee cultivation',
        'Spice production',
        'Potato farming',
        'Timber plantations for carbon sequestration'
      ],
      highlights: {
        development: '4-Phase Development Model',
        roi: 'Strong ROI Potential',
        impact: 'Sustainable Environmental Impact',
        soils: 'Premium Volcanic Soils'
      },
      pdfName: 'Kilima Agro Farms Brochure',
      description: 'Diversified agricultural venture on premium volcanic soils, featuring multi-crop cultivation and sustainable timber production for maximum returns.',
      gradient: 'from-blue-400 to-cyan-600'
    }
  ];

  const handleDownload = (pdfName: string) => {
    // This would typically trigger a PDF download
    // For now, we'll show an alert since we don't have actual PDF files
    alert(`${pdfName} download would begin here. Please contact IK Group for the actual brochure.`);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <Leaf className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-700 font-medium">Flagship Projects</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Agricultural <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our flagship agricultural ventures in Tanzania, combining sustainable farming practices 
            with guaranteed returns and environmental stewardship.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 items-center`}>
              
              {/* Image Section */}
              <div className="flex-1 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}/20 to-transparent`}></div>
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 text-gray-600 mr-1" />
                      <span className="font-medium text-gray-800">{project.location}</span>
                    </div>
                  </div>

                  {/* Size Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 text-gray-600 mr-1" />
                      <span className="font-medium text-gray-800">{project.size}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{project.name}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(project.highlights).map(([key, value], idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="text-sm font-semibold text-gray-800">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-3`}></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(project.pdfName)}
                  className={`inline-flex items-center px-8 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download {project.pdfName}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Investment CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Invest in Sustainable Agriculture?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join our agricultural ventures with guaranteed principal protection, 50:50 profit sharing, 
            and land-backed security. Contact us to learn more about investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-3 bg-white text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Investment Team
            </button>
            <button
              onClick={() => handleDownload('Investment Guide')}
              className="inline-flex items-center px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Investment Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;