export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechVenture Inc',
    content: 'NEXUS Digital transformed our entire digital presence. Their team is professional, creative, and truly understands business goals. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    id: 'testimonial-2',
    name: 'Michael Chen',
    role: 'Product Director',
    company: 'InnovateLab',
    content: 'Working with NEXUS was a game-changer for our company. They delivered our project on time and exceeded our expectations in every way.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: 'testimonial-3',
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    company: 'BrandForward',
    content: 'The team at NEXUS went above and beyond to ensure our brand vision came to life. Their creative solutions and attention to detail are outstanding.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 'testimonial-4',
    name: 'David Park',
    role: 'Founder',
    company: 'CloudSync',
    content: 'We partnered with NEXUS for our platform redesign and the results speak for themselves. Our user engagement increased by 150% in just 3 months.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  }
];
