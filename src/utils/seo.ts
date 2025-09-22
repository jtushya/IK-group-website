// SEO utility functions for dynamic meta tag management

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export const updatePageSEO = (seoData: SEOData) => {
  // Update document title
  document.title = seoData.title;

  // Update or create meta tags
  updateMetaTag('description', seoData.description);
  
  if (seoData.keywords) {
    updateMetaTag('keywords', seoData.keywords);
  }

  // Update Open Graph tags
  updateMetaTag('og:title', seoData.title, 'property');
  updateMetaTag('og:description', seoData.description, 'property');
  
  if (seoData.ogImage) {
    updateMetaTag('og:image', seoData.ogImage, 'property');
  }

  // Update Twitter Card tags
  updateMetaTag('twitter:title', seoData.title);
  updateMetaTag('twitter:description', seoData.description);
  
  if (seoData.ogImage) {
    updateMetaTag('twitter:image', seoData.ogImage);
  }

  // Update canonical URL
  if (seoData.canonical) {
    updateCanonicalLink(seoData.canonical);
  }

  // Handle noindex
  if (seoData.noindex) {
    updateMetaTag('robots', 'noindex, nofollow');
  } else {
    updateMetaTag('robots', 'index, follow');
  }
};

const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.content = content;
    document.head.appendChild(element);
  }
};

const updateCanonicalLink = (href: string) => {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (element) {
    element.href = href;
  } else {
    element = document.createElement('link');
    element.rel = 'canonical';
    element.href = href;
    document.head.appendChild(element);
  }
};

// Page-specific SEO configurations
export const pageSEOConfig = {
  home: {
    title: 'IK Group - Building Trust, Creating Value, Sustaining the Future',
    description: 'IK Group is a diversified enterprise offering secure investments in agriculture, jewelry, real estate with 100% principal guarantee and 50:50 profit sharing. Sustainable growth opportunities in Tanzania and India.',
    keywords: 'IK Group, sustainable investment, agricultural investment, principal guarantee, profit sharing, Chennai investment, Tanzania agriculture, macadamia farming',
    canonical: 'https://ikchennai.com/'
  },
  about: {
    title: 'About IK Group - Our Legacy of Excellence in Sustainable Investment',
    description: 'Learn about IK Group\'s commitment to transparent growth, sustainable practices, and secure investments. Discover our values, mission, and decades of experience in creating lasting value.',
    keywords: 'IK Group about, company history, sustainable investment, transparent growth, investment values, Chennai company',
    canonical: 'https://ikchennai.com/about'
  },
  projects: {
    title: 'Agricultural Projects - V Farms Kilimanjaro & Kilima Maji Agro Farms',
    description: 'Explore IK Group\'s flagship agricultural projects in Tanzania: V Farms Macadamia Estate at Mt. Kilimanjaro and Kilima Maji Agro Farms. Sustainable farming with guaranteed returns.',
    keywords: 'V Farms, Kilima Maji, Tanzania agriculture, macadamia farming, sustainable agriculture, agricultural investment, carbon credits',
    canonical: 'https://ikchennai.com/projects'
  },
  companies: {
    title: 'Group Companies - IK Jewellers, Bullion, Classiva, HRML & IK7C Venture',
    description: 'Discover IK Group\'s diversified portfolio: IK Jewellers, IK Bullion, IK Classiva, HRML real estate, and IK7C Venture. Excellence across multiple industries.',
    keywords: 'IK Jewellers, IK Bullion, IK Classiva, HRML, IK7C Venture, group companies, diversified portfolio',
    canonical: 'https://ikchennai.com/companies'
  },
  testimonials: {
    title: 'Client Testimonials - What Our Investment Partners Say About IK Group',
    description: 'Read testimonials from satisfied investors and partners about IK Group\'s transparent investment approach, secure returns, and professional service excellence.',
    keywords: 'IK Group testimonials, client reviews, investor feedback, investment testimonials, customer satisfaction',
    canonical: 'https://ikchennai.com/testimonials'
  },
  news: {
    title: 'Latest News & Announcements - IK Group Updates and Achievements',
    description: 'Stay updated with IK Group\'s latest developments, project milestones, sustainability achievements, and investment opportunities across our diverse portfolio.',
    keywords: 'IK Group news, company updates, investment news, sustainability achievements, project milestones',
    canonical: 'https://ikchennai.com/news'
  },
  contact: {
    title: 'Contact IK Group - Get in Touch for Investment Opportunities',
    description: 'Contact IK Group for investment opportunities, project information, and partnership inquiries. Located in Chennai, Tamil Nadu. Phone: +91 98765 43210',
    keywords: 'contact IK Group, Chennai investment company, investment inquiries, partnership opportunities, IK Group contact details',
    canonical: 'https://ikchennai.com/contact'
  }
};