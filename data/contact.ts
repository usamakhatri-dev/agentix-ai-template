import type { LucideIcon } from 'lucide-react';
import { Mail, Phone, MapPin } from 'lucide-react';

export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export const contactInfo: ContactInfoItem[] = [
  { icon: Mail, label: 'Email us', value: 'sales@agentix.ai', href: 'mailto:sales@agentix.ai' },
  { icon: Phone, label: 'Call us', value: '+1 (415) 555-0199', href: 'tel:+14155550199' },
  { icon: MapPin, label: 'Visit us', value: '548 Market St, San Francisco, CA', href: '#' },
];
