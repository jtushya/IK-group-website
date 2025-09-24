import { Gem, Coins, Crown, Building, Rocket } from 'lucide-react';

export interface Company {
  id: string;
  name: string;
  url: string;
  icon: any;
  description: string;
  fullDescription: string;
  color: string;
  bgColor: string;
  established: string;
  specialty: string;
  location: string;
  employees: string;
  image: string;
  services: string[];
  achievements: string[];
  logo?: string;
}

export const companies: Company[] = [
  {
    id: 'ik-jewellers',
    name: 'IK Jewellers',
    url: 'https://ikjewellers.in',
    icon: Gem,
    description: 'Heritage jewelry brand blending tradition and modern craftsmanship.',
    fullDescription: 'IK Jewellers has been a trusted name in the jewelry industry for over three decades, combining traditional Indian craftsmanship with contemporary design aesthetics. We specialize in creating exquisite pieces that celebrate both heritage and innovation.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50 to-orange-50',
    established: '1985',
    specialty: 'Traditional & Contemporary Jewelry',
    location: 'Chennai, Tamil Nadu',
    employees: '50+',
    image: 'https://blogapi.perrian.com/wp-content/uploads/2022/03/5-Must-Have-Diamond-Jewellery-Pieces-You-Cant-Ignore.jpg',
    services: [
      'Custom Jewelry Design',
      'Traditional Indian Jewelry',
      'Contemporary Collections',
      'Jewelry Repair & Maintenance',
      'Precious Stone Setting',
      'Wedding Collections'
    ],
    achievements: [
      'Heritage Craftsmanship Award 2024',
      '35+ Years of Excellence',
      'Trusted by 10,000+ Families',
      'Sustainable Sourcing Practices'
    ]
  },
  {
    id: 'ik-bullion',
    name: 'IK Bullion',
    url: 'https://ikbullion.com',
    icon: Coins,
    description: 'Trusted bullion and precious metals trading.',
    fullDescription: 'IK Bullion specializes in precious metals trading with transparent pricing, secure transactions, and expert market insights for both individual and institutional clients. We maintain the highest standards of integrity and security in all our operations.',
    color: 'from-slate-500 to-slate-700',
    bgColor: 'from-slate-50 to-gray-50',
    established: '1992',
    specialty: 'Precious Metals Trading',
    location: 'Chennai, Tamil Nadu',
    employees: '25+',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    services: [
      'Gold & Silver Trading',
      'Precious Metals Investment',
      'Market Analysis & Insights',
      'Secure Storage Solutions',
      'Institutional Trading',
      'Portfolio Management'
    ],
    achievements: [
      'Trusted Trading Partner',
      '30+ Years Market Experience',
      'Transparent Pricing Model',
      'Secure Transaction Record'
    ]
  },
  {
    id: 'ik-classiva',
    name: 'IK Classiva',
    url: 'https://ikclassiva.com',
    icon: Crown,
    description: 'Premium lifestyle and luxury ventures.',
    fullDescription: 'IK Classiva curates premium lifestyle experiences and luxury products, catering to discerning clientele who appreciate quality and exclusivity. We focus on delivering exceptional value through carefully selected partnerships and services.',
    color: 'from-slate-600 to-slate-800',
    bgColor: 'from-slate-50 to-slate-100',
    established: '2010',
    specialty: 'Luxury Lifestyle & Experiences',
    location: 'Chennai, Tamil Nadu',
    employees: '30+',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    services: [
      'Luxury Product Curation',
      'Exclusive Event Management',
      'Premium Travel Experiences',
      'Lifestyle Consulting',
      'Corporate Gifting',
      'Concierge Services'
    ],
    achievements: [
      'Premium Service Excellence',
      'Exclusive Brand Partnerships',
      'High-End Client Portfolio',
      'Luxury Market Expertise'
    ]
  },
  {
    id: 'hrml',
    name: 'HRML',
    url: 'https://hrml.in',
    icon: Building,
    description: 'Real estate, infrastructure, and land management solutions.',
    fullDescription: 'HRML provides comprehensive real estate, infrastructure, and land management solutions, focusing on sustainable development and strategic growth. We combine industry expertise with innovative approaches to deliver exceptional results.',
    color: 'from-teal-600 to-teal-800',
    bgColor: 'from-teal-50 to-cyan-50',
    established: '2005',
    specialty: 'Real Estate & Infrastructure',
    location: 'Chennai, Tamil Nadu',
    employees: '75+',
    image: 'https://images.pexels.com/photos/1440722/pexels-photo-1440722.jpeg?auto=compress&cs=tinysrgb&w=800',
    services: [
      'Real Estate Development',
      'Infrastructure Projects',
      'Land Management',
      'Property Investment',
      'Construction Management',
      'Urban Planning'
    ],
    achievements: [
      'Sustainable Development Focus',
      '100+ Projects Completed',
      'Infrastructure Excellence',
      'Strategic Land Portfolio'
    ]
  },
  {
    id: 'ik7c-venture',
    name: 'IK7C Venture Pvt Ltd',
    url: '#',
    icon: Rocket,
    description: 'New-age venture arm focusing on innovation and sustainable growth.',
    fullDescription: 'IK7C Venture is our new-age venture arm, focusing on innovation, technology, and sustainable growth opportunities in emerging markets. We identify and nurture promising ventures that align with our values of sustainability and growth.',
    color: 'from-emerald-600 to-emerald-800',
    bgColor: 'from-emerald-50 to-green-50',
    established: '2020',
    specialty: 'Innovation & Technology Ventures',
    location: 'Chennai, Tamil Nadu',
    employees: '20+',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    services: [
      'Technology Innovation',
      'Startup Incubation',
      'Digital Transformation',
      'Sustainable Solutions',
      'Market Research',
      'Strategic Partnerships'
    ],
    achievements: [
      'Innovation Leadership',
      'Emerging Market Focus',
      'Technology Integration',
      'Sustainable Growth Model'
    ]
  }
];

export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(company => company.id === id);
};