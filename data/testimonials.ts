export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Agentix AI transformed our support operations. Response times dropped 80% and CSAT went from 82% to 97% in three months.',
    name: 'Sarah Chen',
    role: 'VP of Customer Experience',
    company: 'Nebula',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop',
    rating: 5,
  },
  {
    quote:
      'We automated 70% of our onboarding workflow with Agentix. What used to take two weeks now completes in under an hour.',
    name: 'Marcus Rodriguez',
    role: 'Head of Operations',
    company: 'Quantix',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop',
    rating: 5,
  },
  {
    quote:
      'The contextual memory feature is a game-changer. Our agents actually remember customer history and provide relevant answers.',
    name: 'Priya Patel',
    role: 'Director of Product',
    company: 'Flowbase',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop',
    rating: 5,
  },
  {
    quote:
      'We replaced six different tools with Agentix. The ROI was clear within the first month — we saved $40K in annual software costs.',
    name: 'James O\u2019Sullivan',
    role: 'CTO',
    company: 'Vertex',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop',
    rating: 5,
  },
  {
    quote:
      'The analytics dashboard gives us insights we never had before. We can see exactly where workflows bottleneck and fix them.',
    name: 'Elena Volkov',
    role: 'Head of Data',
    company: 'Cobalt',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop',
    rating: 5,
  },
  {
    quote:
      'Setup took a single afternoon. By the end of week one, our agents were handling 3,000 conversations a day with 99% accuracy.',
    name: 'David Kim',
    role: 'VP of Engineering',
    company: 'Lumen',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop',
    rating: 5,
  },
];
