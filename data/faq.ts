export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'What is Agentix AI and what does it do?',
    a: 'Agentix AI is a complete automation platform that lets you deploy intelligent AI agents, build workflows, run chatbots, and connect your favorite tools — all without writing code. It helps teams automate repetitive work, engage customers, and surface insights in one place.',
  },
  {
    q: 'Do I need technical skills to use Agentix AI?',
    a: 'No. Our visual workflow builder and prebuilt agent templates mean anyone on your team can create automations in minutes. For developers, we also offer a full API and webhooks for deeper customization.',
  },
  {
    q: 'How does the 14-day free trial work?',
    a: 'You get full access to the Professional plan for 14 days — no credit card required. At the end of your trial, you can choose a plan that fits your needs or continue on the free tier with limited usage.',
  },
  {
    q: 'Which apps and tools can Agentix integrate with?',
    a: 'Agentix integrates with over 200 apps including HubSpot, Salesforce, Slack, Notion, Gmail, Stripe, Shopify, and more. You can also connect any tool with our API or webhooks, and request custom integrations on Enterprise plans.',
  },
  {
    q: 'Is my data secure with Agentix AI?',
    a: 'Yes. We use end-to-end encryption in transit and at rest, are SOC 2 Type II compliant, and offer SSO, SAML, and on-prem deployment options for Enterprise customers. You retain full ownership of your data at all times.',
  },
  {
    q: 'Can I use my own AI models or knowledge base?',
    a: 'Absolutely. You can upload documents, connect data sources, and ground agents in your own knowledge base. Enterprise customers can also fine-tune and deploy custom AI models tailored to their domain.',
  },
  {
    q: 'What happens if I exceed my task limit?',
    a: 'We will notify you before you hit your limit so you can upgrade or purchase additional tasks. Your automations will never stop unexpectedly — we always finish in-flight work and then guide you to the right plan.',
  },
  {
    q: 'Can I cancel or change my plan anytime?',
    a: 'Yes. You can upgrade, downgrade, or cancel your subscription at any time from your dashboard. Changes take effect at the start of your next billing cycle, and we never charge cancellation fees.',
  },
  {
    q: 'Do you offer discounts for startups or nonprofits?',
    a: 'We offer 50% off Professional plans for eligible startups, nonprofits, and educational institutions. Reach out to our team and we will get you set up.',
  },
  {
    q: 'How does customer support work?',
    a: 'Starter plans include community support. Professional plans include priority email and chat support with fast response times. Enterprise customers get a dedicated success manager and custom SLAs.',
  },
];
