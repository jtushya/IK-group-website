import React from 'react';
import { Calendar, ArrowRight, Newspaper, TrendingUp } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: 'V Farms Macadamia Estate Achieves Carbon Neutrality Milestone',
      excerpt: 'Our flagship Kilimanjaro project has successfully offset 10,000 tons of CO2 through innovative regenerative farming practices and reforestation initiatives.',
      date: '2024-01-15',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'IK Group Announces ₹50 Crore Investment in Sustainable Agriculture',
      excerpt: 'Expanding our agricultural portfolio with new investments in organic farming and renewable energy infrastructure across Tanzania and India.',
      date: '2024-01-10',
      category: 'Investment',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Kilima Maji Agro Farms Enters Phase 3 Development',
      excerpt: 'KMAF project successfully completes Phase 2 with record avocado yields. Phase 3 expansion to include coffee processing facility and eco-tourism center.',
      date: '2024-01-05',
      category: 'Development',
      image: 'https://images.pexels.com/photos/1440722/pexels-photo-1440722.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'IK Jewellers Wins Heritage Craftsmanship Award 2024',
      excerpt: 'Our jewelry division recognized for preserving traditional Indian craftsmanship while innovating with sustainable precious metal sourcing practices.',
      date: '2023-12-28',
      category: 'Recognition',
      image: 'https://images.pexels.com/photos/1454444/pexels-photo-1454444.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'New Partnership with Global Macadamia Distributors',
      excerpt: 'Strategic alliance secured for direct export of premium macadamia nuts to European and North American markets, ensuring better returns for investors.',
      date: '2023-12-20',
      category: 'Partnership',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'IK Group Investor Meet 2024: Record Attendance',
      excerpt: 'Our annual investor conference saw 300+ attendees with presentations on portfolio performance, new opportunities, and sustainability initiatives.',
      date: '2023-12-15',
      category: 'Events',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-red-400 to-pink-500'
    }
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <Newspaper className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-indigo-700 font-medium">Latest Updates</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            News & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Announcements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments, achievements, and opportunities across 
            the IK Group ecosystem.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Featured News
                </div>
                <h3 className="text-3xl font-bold leading-tight">{newsItems[0].title}</h3>
                <p className="text-indigo-100 text-lg leading-relaxed">{newsItems[0].excerpt}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-indigo-200">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(newsItems[0].date)}
                  </div>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{newsItems[0].category}</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="rounded-2xl w-full h-64 object-cover shadow-2xl"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-300/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(1).map((item, index) => (
            <article key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient}/20 to-transparent`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-gray-800`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(item.date)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.excerpt}
                </p>
                
                <button className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors group-hover:translate-x-1 duration-300">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Informed with Our Newsletter
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest updates on our projects, investment opportunities, and company announcements 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;