export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Agentix AI replaced six tools and an entire ops workflow. We shipped our first automation in an afternoon and never looked back. The ROI was visible within the first month — our team reclaimed over 30 hours every week.',
    name: 'Sarah Chen',
    role: 'Head of Growth',
    company: 'Northwind Labs',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'The AI agents handle 80% of our support tickets autonomously. Our CSAT went up 18 points while our costs went down. It feels like magic, but the numbers are real. Onboarding took less than a day.',
    name: 'Marcus Reid',
    role: 'VP Customer Success',
    company: 'Helio Commerce',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'We automated lead scoring, enrichment, and CRM sync. Our sales team now only touches qualified opportunities. Game changer for pipeline velocity — we closed 40% more deals last quarter with the same headcount.',
    name: 'Priya Nair',
    role: 'Director of RevOps',
    company: 'Brightwave',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'The workflow builder is the best I have used — and I have used them all. It is the first tool that actually feels built for humans. Our engineers ship integrations in hours, not sprints.',
    name: 'David Okafor',
    role: 'CTO',
    company: 'Stackform',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'Agentix gave us enterprise-grade automation without an enterprise team. We scaled from 2 to 50 workflows in a quarter without hiring a single ops person. The platform grew with us seamlessly.',
    name: 'Elena Vasquez',
    role: 'COO',
    company: 'Lumen Studio',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'Reporting used to take two days. Now it is a scheduled AI report delivered every Monday at 8am. I cannot imagine going back. Our leadership team makes decisions faster because the data is always ready.',
    name: 'Tom Becker',
    role: 'Finance Lead',
    company: 'Atlas Retail',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];
