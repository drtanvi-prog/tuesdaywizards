import { WorkspaceIcon, AutomationIcon, IntegrationIcon, CRMIcon, TrainingIcon } from '../components/services/ServiceIcons'

import zapierLogo     from '../assets/logos/zapier.png'
import n8nLogo        from '../assets/logos/n8n.png'
import slackLogo      from '../assets/logos/slack.png'
import hubspotLogo    from '../assets/logos/hubspot.webp'
import salesforceLogo from '../assets/logos/salesforce.jpg'
import gmailLogo      from '../assets/logos/gmail.png'
import gcalLogo       from '../assets/logos/gcal.png'
import outlookLogo    from '../assets/logos/outlook.png'
import teamsLogo      from '../assets/logos/teams.png'
import zoomLogo       from '../assets/logos/zoom.png'
import linkedinLogo   from '../assets/logos/linkedin.png'

export const SERVICES = [
  {
    id:      'workspace',
    Icon:    WorkspaceIcon,
    label:   'Workspace Setup',
    tagline: 'Tailored monday.com environments',
    title:   'Monday.com Workspace Setup & Customization',
    desc:    'We design and build tailored monday.com workspaces that match your exact business workflows — from project tracking and CRM to HR and operations. Every board, column, and permission is built for your team.',
    features: [
      'Custom board architecture & column setup',
      'Automated status triggers & notifications',
      'Role-based dashboards & user permissions',
      'CRM, HR, and project tracking templates',
    ],
    stat: { value: '2×', label: 'Faster team adoption' },
  },
  {
    id:      'automation',
    Icon:    AutomationIcon,
    label:   'Workflow Automation',
    tagline: 'Eliminate repetitive manual work',
    title:   'Workflow Automation & Optimization',
    desc:    'We build smart automations inside monday.com that cut manual work, reduce errors, and keep your team focused. From simple triggers to complex multi-step flows — we handle every detail.',
    features: [
      'Cross-board automation rules & triggers',
      'Slack, email & calendar auto-notifications',
      'Recurring task & deadline automation',
      'Approval workflows & status pipelines',
    ],
    stat: { value: '80%', label: 'Less manual work' },
  },
  {
    id:      'integrations',
    Icon:    IntegrationIcon,
    label:   'Third-Party Integrations',
    tagline: 'Connect all your tools seamlessly',
    title:   'Third-Party Integrations & API Solutions',
    desc:    'We connect monday.com to every tool your team uses — via native integrations, Zapier, Make, n8n, or fully custom API development. One source of truth, zero data silos.',
    features: [
      'Google Workspace, Slack & Microsoft 365',
      'Zapier, Make & n8n automation flows',
      'HubSpot, Salesforce & CRM connections',
      'Custom API builds & webhook setups',
    ],
    logos: [
      { src: zapierLogo,     alt: 'Zapier'      },
      { src: n8nLogo,        alt: 'n8n'         },
      { src: slackLogo,      alt: 'Slack', large: true },
      { src: hubspotLogo,    alt: 'HubSpot'     },
      { src: salesforceLogo, alt: 'Salesforce'  },
      { src: gmailLogo,      alt: 'Gmail'       },
      { src: gcalLogo,       alt: 'Google Cal'  },
      { src: outlookLogo,    alt: 'Outlook'     },
      { src: teamsLogo,      alt: 'MS Teams'    },
      { src: zoomLogo,       alt: 'Zoom'        },
      { src: linkedinLogo,   alt: 'LinkedIn'    },
    ],
    stat: { value: '50+', label: 'Tools we connect' },
  },
  {
    id:      'crm',
    Icon:    CRMIcon,
    label:   'CRM Solutions',
    tagline: 'Sales pipelines built to convert',
    title:   'Monday.com CRM Setup & Optimization',
    desc:    'We configure monday CRM so your sales team gets complete pipeline visibility — from first contact to closed deal. Track leads, automate follow-ups, and close more with a system built around your process.',
    features: [
      'Lead capture & pipeline stage design',
      'Contact, deal & activity management',
      'Sales reporting & conversion dashboards',
      'Automated follow-up & email sequences',
    ],
    stat: { value: '3×', label: 'More pipeline visibility' },
  },
  {
    id:      'training',
    Icon:    TrainingIcon,
    label:   'Training & Onboarding',
    tagline: 'Get your team confident, fast',
    title:   'Team Training & Onboarding',
    desc:    'We run live 1-on-1 or group training sessions so your entire team confidently uses monday.com from day one. Includes custom SOPs, recorded walkthroughs, and ongoing support so adoption actually sticks.',
    features: [
      'Live 1-on-1 & group training sessions',
      'Custom SOPs & recorded walkthroughs',
      'Hands-on board navigation workshops',
      'Post-training support & Q&A access',
    ],
    stat: { value: '100%', label: 'Team adoption rate' },
  },
]
