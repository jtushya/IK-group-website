import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '500+', label: 'Happy Investors' },
    { value: '₹100Cr+', label: 'Assets Under Management' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years of Excellence' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold">{stat.value}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;