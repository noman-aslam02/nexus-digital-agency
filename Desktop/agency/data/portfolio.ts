export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
  year?: string;
}

export const projects: Project[] = [
  {
    id: 'fintech-platform',
    title: 'FinTech Platform',
    description: 'Next-generation financial management platform with real-time analytics',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Real-time'],
    year: '2024'
  },
  {
    id: 'ecommerce-redesign',
    title: 'E-Commerce Redesign',
    description: 'Complete redesign of e-commerce platform increasing conversions by 45%',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c3?w=500&h=300&fit=crop',
    tags: ['UI/UX', 'E-commerce', 'Conversion Optimization'],
    year: '2024'
  },
  {
    id: 'mobile-health-app',
    title: 'Health & Wellness App',
    description: 'Cross-platform mobile app for fitness tracking and health monitoring',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=500&h=300&fit=crop',
    tags: ['React Native', 'iOS', 'Android', 'Health'],
    year: '2023'
  },
  {
    id: 'brand-identity',
    title: 'Tech Startup Branding',
    description: 'Complete brand identity and design system for emerging tech company',
    category: 'Brand Strategy',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    tags: ['Branding', 'Design System', 'Visual Identity'],
    year: '2024'
  },
  {
    id: 'marketing-campaign',
    title: 'Integrated Marketing Campaign',
    description: 'Multi-channel digital marketing campaign generating 200K+ leads',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=300&fit=crop',
    tags: ['Marketing', 'SEO', 'Social Media', 'Analytics'],
    year: '2023'
  },
  {
    id: 'digital-transformation',
    title: 'Enterprise Digital Transformation',
    description: 'Consulting and implementation of digital transformation strategy',
    category: 'Consulting',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    tags: ['Consulting', 'Enterprise', 'Strategy'],
    year: '2024'
  },
  {
    id: 'saas-platform',
    title: 'SaaS Platform',
    description: 'Cloud-based SaaS platform for project management with team collaboration',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    tags: ['Next.js', 'Cloud', 'SaaS'],
    year: '2023'
  },
  {
    id: 'blog-platform',
    title: 'Content Publishing Platform',
    description: 'Modern blogging platform with advanced content management features',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1517694712202-14819c9cb6c1?w=500&h=300&fit=crop',
    tags: ['CMS', 'Content', 'Publishing'],
    year: '2024'
  }
];

export const categories = ['All', 'Web Development', 'Design', 'Mobile Apps', 'Brand Strategy', 'Digital Marketing', 'Consulting'];
