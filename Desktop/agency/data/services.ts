export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and applications built with modern technologies',
    icon: '🚀',
    details: [
      'Next.js & React Development',
      'Full-stack Applications',
      'Progressive Web Apps',
      'API Development',
      'Performance Optimization',
      'Security Best Practices'
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Beautiful, user-centric designs that drive engagement and conversions',
    icon: '🎨',
    details: [
      'User Interface Design',
      'User Experience Research',
      'Wireframing & Prototyping',
      'Design Systems',
      'Brand Identity',
      'Responsive Design'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic campaigns to grow your online presence and reach',
    icon: '📊',
    details: [
      'SEO Optimization',
      'Content Strategy',
      'Social Media Management',
      'Email Marketing',
      'Analytics & Reporting',
      'Conversion Rate Optimization'
    ]
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    description: 'Build a powerful brand that resonates with your audience',
    icon: '✨',
    details: [
      'Brand Positioning',
      'Market Research',
      'Competitive Analysis',
      'Brand Guidelines',
      'Messaging Strategy',
      'Brand Evolution'
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications',
    icon: '📱',
    details: [
      'iOS Development',
      'Android Development',
      'React Native',
      'App Store Optimization',
      'Push Notifications',
      'Mobile Analytics'
    ]
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Expert guidance for your digital transformation journey',
    icon: '💡',
    details: [
      'Technology Assessment',
      'Architecture Planning',
      'Team Augmentation',
      'Process Optimization',
      'Cloud Migration',
      'Digital Strategy'
    ]
  }
];
