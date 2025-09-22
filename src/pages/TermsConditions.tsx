import React from 'react';
import { FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <FileText className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-purple-700 font-medium">Terms & Conditions</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Terms & <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Conditions</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our services or making any investments.
          </p>
          <p className="text-sm text-slate-500 mt-4">Last updated: January 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8 lg:p-12">
          <div className="prose prose-slate max-w-none">
            
            <div className="flex items-center mb-6">
              <CheckCircle className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-slate-800 m-0">Acceptance of Terms</h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              By accessing and using IK Group's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>

            <div className="flex items-center mb-6">
              <Scale className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-slate-800 m-0">Investment Terms</h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              All investments with IK Group are subject to the following terms:
            </p>
            
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-8">
              <li>Minimum investment period of 60 months for agricultural projects</li>
              <li>100% principal refundable guarantee upon completion of investment term</li>
              <li>50:50 profit sharing model for cultivation returns</li>
              <li>Land ownership requirement in investor's name for security</li>
              <li>Regular quarterly updates on project progress and returns</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Investment Risks</h3>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    All investments carry inherent risks including market volatility, agricultural risks, 
                    and regulatory changes. Past performance does not guarantee future results. Please 
                    consult with financial advisors before making investment decisions.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Use of Services</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              You may use our services for lawful purposes only. You agree not to use the services:
            </p>
            
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-8">
              <li>For any unlawful purpose or to solicit others to unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The service and its original content, features, and functionality are and will remain the 
              exclusive property of IK Group and its licensors. The service is protected by copyright, 
              trademark, and other laws.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your 
              use of the service, to understand our practices.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Termination</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We may terminate or suspend your account and bar access to the service immediately, without 
              prior notice or liability, under our sole discretion, for any reason whatsoever and without 
              limitation, including but not limited to a breach of the Terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Disclaimer</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The information on this website is provided on an "as is" basis. To the fullest extent 
              permitted by law, this Company excludes all representations, warranties, conditions and 
              terms whether express or implied.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Governing Law</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              These Terms shall be interpreted and governed by the laws of India. Any disputes arising 
              under these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, 
              Tamil Nadu.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any changes 
              by posting the new Terms of Service on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Information</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            
            <div className="mt-6 p-6 bg-purple-50 rounded-xl border border-purple-100">
              <div className="space-y-2 text-slate-600">
                <p><strong>Email:</strong> legal@ikchennai.com</p>
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

export default TermsConditions;