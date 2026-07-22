export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: 'Bot',
    title: 'Autonomous AI Agents',
    description:
      'Deploy AI agents that handle complex workflows end-to-end — from customer support to data analysis — with minimal human oversight.',
  },
  {
    icon: 'Zap',
    title: 'Workflow Automation',
    description:
      'Build visual workflows that connect your tools and automate repetitive tasks. Trigger on events, schedule runs, or fire manually.',
  },
  {
    icon: 'Brain',
    title: 'Contextual Memory',
    description:
      'Agents remember past interactions and use that context to deliver personalized, relevant responses across every conversation.',
  },
  {
    icon: 'Plug',
    title: '200+ Integrations',
    description:
      'Connect Slack, Salesforce, HubSpot, Notion, and 200+ tools out of the box. Custom integrations via REST API and webhooks.',
  },
  {
    icon: 'BarChart3',
    title: 'Real-time Analytics',
    description:
      'Monitor agent performance, workflow throughput, and business impact with live dashboards and customizable reports.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II, GDPR, and HIPAA compliant. End-to-end encryption, SSO/SAML, role-based access, and audit logs.',
  },
];
