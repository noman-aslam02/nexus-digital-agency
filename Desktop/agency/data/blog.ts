export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'web-design-trends-2024',
    title: 'Web Design Trends in 2024',
    excerpt: 'Discover the latest web design trends that are shaping the digital landscape this year.',
    content: `Web design continues to evolve at a rapid pace. In 2024, we're seeing a shift towards more immersive experiences, with designers leveraging advanced animations, 3D elements, and interactive components to create memorable user experiences.

Key trends include:
- Dark mode as standard
- Minimalist typography
- Micro-interactions and animations
- AI-powered personalization
- Accessibility-first design

These trends focus on creating more engaging, accessible, and performant web experiences that users love.`,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    readTime: 5
  },
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Learn how to optimize your React applications for better performance and user experience.',
    content: `Performance is crucial for user experience. In this article, we explore proven techniques for optimizing React applications.

Optimization strategies include:
- Code splitting and lazy loading
- Memoization with React.memo
- useCallback and useMemo hooks
- Image optimization
- Bundle size analysis
- Server-side rendering

By implementing these techniques, you can significantly improve your application's performance metrics and user satisfaction.`,
    author: 'Michael Chen',
    date: '2024-02-20',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1517694712202-14819c9cb6c1?w=500&h=300&fit=crop',
    readTime: 8
  },
  {
    id: 'digital-marketing-strategy',
    title: 'Building a Digital Marketing Strategy',
    excerpt: 'A comprehensive guide to developing an effective digital marketing strategy for your business.',
    content: `Digital marketing is essential for business growth in 2024. A well-crafted strategy can dramatically increase your reach and ROI.

Components of a successful strategy:
- Clear audience targeting
- Content marketing excellence
- SEO optimization
- Social media engagement
- Email marketing campaigns
- Analytics and measurement

We'll guide you through each step of creating a strategy that aligns with your business goals and resonates with your audience.`,
    author: 'Emily Rodriguez',
    date: '2024-02-28',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c3?w=500&h=300&fit=crop',
    readTime: 6
  },
  {
    id: 'mobile-first-design',
    title: 'Mobile-First Design Principles',
    excerpt: 'Why mobile-first design is crucial and how to implement it effectively in your projects.',
    content: `With over 70% of web traffic coming from mobile devices, mobile-first design is no longer optional—it's essential.

Core principles include:
- Start with mobile constraints
- Progressive enhancement
- Touch-friendly interfaces
- Fast loading times
- Readable typography
- Intuitive navigation

This approach ensures your designs work beautifully across all devices and prioritize user experience on mobile devices.`,
    author: 'David Park',
    date: '2024-03-05',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=500&h=300&fit=crop',
    readTime: 7
  },
  {
    id: 'future-of-web-technology',
    title: 'The Future of Web Technology',
    excerpt: 'Exploring emerging technologies that will shape the future of web development.',
    content: `The web is evolving faster than ever. New technologies and frameworks continue to emerge, offering developers more powerful tools and capabilities.

Emerging technologies to watch:
- WebAssembly for high-performance computing
- Progressive Web Apps (PWAs)
- Edge computing and serverless architecture
- AI and machine learning integration
- Real-time communication protocols
- Web3 and blockchain

Understanding these technologies positions you to stay ahead of the curve and build more innovative solutions.`,
    author: 'Sarah Johnson',
    date: '2024-03-10',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1517694712202-14819c9cb6c1?w=500&h=300&fit=crop',
    readTime: 9
  }
];
