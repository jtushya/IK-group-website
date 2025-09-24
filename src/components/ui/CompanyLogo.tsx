import React from 'react';

interface CompanyLogoProps {
  companyName: string;
  className?: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ companyName, className = '' }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <img
        src="/IK_group_logo.png"
        alt="IK Group Logo"
        className="h-16 w-auto"
      />
      <h2
        className="text-3xl font-bold text-slate-900"
        style={{
          fontFamily: '"Tinos", serif',
          fontWeight: 'bold'
        }}
      >
        {companyName}
      </h2>
    </div>
  );
};

export default CompanyLogo;