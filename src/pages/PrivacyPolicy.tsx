import React from 'react';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Shield className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-purple-700 font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Privacy <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-slate-500 mt-4">Last updated: January 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8 lg:p-12">
          <div className="prose prose-slate max-w-none">
            
            <div className="flex items-center mb-6">
              <Eye className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-slate-800 m-0">Information We Collect</h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include:
            </p>
            
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-8">
              <li>Name, email address, and contact information</li>
              <li>Investment preferences and financial information</li>
              <li>Communication records and correspondence</li>
              <li>Usage data and website analytics</li>
            </ul>

            <div className="flex items-center mb-6">
              <Lock className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-slate-800 m-0">How We Use Your Information</h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              We use the information we collect to:
            </p>
            
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-8">
              <li>Provide and improve our investment services</li>
              <li>Communicate with you about opportunities and updates</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Protect against fraud and unauthorized access</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>

            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-slate-800 m-0">Information Sharing</h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>
            
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-8">
              <li>With service providers who assist in our operations</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, property, or safety</li>
              <li>In connection with a business transaction</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Security</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              You have the right to access, update, or delete your personal information. You may also 
              opt out of certain communications from us. To exercise these rights, please contact us 
              using the information provided below.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Cookies and Tracking</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We use cookies and similar technologies to enhance your browsing experience, analyze 
              website traffic, and understand user preferences. You can control cookie settings 
              through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            
            <div className="mt-6 p-6 bg-purple-50 rounded-xl border border-purple-100">
              <div className="space-y-2 text-slate-600">
                <p><strong>Email:</strong> privacy@ikchennai.com</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Address:</strong> Chennai, Tamil Nadu, India - 600001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;