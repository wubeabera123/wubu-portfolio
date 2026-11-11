import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Car Spare Parts Sell System',
    slug: 'CAR',
    banner: '/static/projects/car-spare.png',
    website: 'https://car-spare-part.vercel.app',
    description:
      'A web application for buying and selling car spare parts, with product listings, search, purchasing flows, and inventory-oriented features. Built to make it straightforward for buyers to find parts and for sellers to manage their offerings.',
    shortDescription:
      'A marketplace for listing, finding, and purchasing car spare parts.',
    repository: '#',
    stack: [
      Stack.nextjs,
      Stack.react,
      Stack.tailwind,
      Stack.prisma,
      Stack.postgres,
      Stack.node,
    ],
    dimensions: [320, 640],
    screenshots: [
      '/static/projects/car-spare.png',
      '/static/projects/car-spare2.png',
      '/static/projects/car-spare3.png',
      '/static/projects/car-spare4.png',
      '/static/projects/car-spare5.png',
      '/static/projects/car-spare6.png',
      '/static/projects/car-spare7.png',
      '/static/projects/car-spare8.png',
      '/static/projects/car-spare9.png',
      '/static/projects/car-spare10.png',
    ],
    deployment: {
      web: 'https://car-spare-part.vercel.app',
    },
    subProjects: [],
  },
  {
    title: 'AI Powered Task Management System (TaskFlow AI)',
    slug: 'TASK',
    banner: '/static/projects/task1.jpg',
    website: 'https://vimeo.com/1195268100/3c70cbacd9?fl=pl&fe=sh',
    description:
      'TaskFlow AI is a full-stack productivity platform built with FastAPI, Next.js, and TypeScript. It includes secure JWT authentication, task management, AI task generation, subtask breakdown, backlog prioritization, and deadline-based scheduling. The product also features typed API integration, responsive UI, profile-based navigation, stable pagination, and scrollable workspace sections.',
    shortDescription:
      'An AI-powered productivity platform for creating, breaking down, prioritizing, and scheduling tasks.',
    repository: '#',
    stack: [
      Stack.nextjs,
      Stack.react,
      Stack.tailwind,
      Stack.python,
      Stack.fastAPI,
      Stack.prisma,
      Stack.postgres,
      Stack.node,
      Stack.Ollama,
      Stack.Gemma,
    ],
    dimensions: [320, 640],
    screenshots: [
      '/static/projects/task1.jpg',
      '/static/projects/task2.jpg',
      '/static/projects/task3.jpg',
      '/static/projects/task4.jpg',
    ],
    deployment: {
      web: 'https://vimeo.com/1195268100/3c70cbacd9?fl=pl&fe=sh',
    },
    subProjects: [],
  },
  {
    title: 'HST Website',
    slug: 'HST',
    banner: '/static/projects/ScreenshotWeb.png',
    website: 'https://www.hst-et.com/',
    description:
      'A business website presenting HST Consulting PLC services across audit, talent management, tax, strategy, organization, and technology solutions.',
    shortDescription:
      'A business website for HST Consulting PLC and its professional services.',
    repository: '#',
    stack: [Stack.nextjs, Stack.react, Stack.tailwind],
    dimensions: [320, 640],
    screenshots: [
      '/static/projects/ScreenshotWeb.png',
      '/static/projects/ScreenshotWeb2.png',
      '/static/projects/ScreenshotWeb3.png',
      '/static/projects/ScreenshotWeb4.png',
      '/static/projects/ScreenshotWeb5.png',
      '/static/projects/ScreenshotWeb6.png',
      '/static/projects/ScreenshotWeb7.png',
    ],
    deployment: {
      web: 'https://www.hst-et.com/',
    },
    subProjects: [],
  },
  {
    title: 'HST Office Automation',
    slug: 'HST OA',
    banner: '/static/projects/ScreenshotOA1.png',
    website: 'https://myoffice.hst-et.com/',
    description:
      'An office automation platform supporting room booking, help desk workflows, and asset management to improve internal operational efficiency.',
    shortDescription:
      'An internal operations platform for room booking, help desk, and asset management.',
    repository: '#',
    stack: [
      Stack.nextjs,
      Stack.react,
      Stack.materialUI,
      Stack.python,
      Stack.django,
    ],
    dimensions: [320, 640],
    screenshots: [
      '/static/projects/ScreenshotOA1.png',
      '/static/projects/ScreenshotOA2.png',
      '/static/projects/ScreenshotOA3.png',
      '/static/projects/ScreenshotOA4.png',
      '/static/projects/ScreenshotOA5.png',
    ],
    deployment: {
      web: 'https://myoffice.hst-et.com/',
    },
    subProjects: [],
  },

  {
    title: 'Pay My Fees',
    slug: 'PMF',
    banner: '/static/projects/ScreenshotPMF1.png',
    website: 'https://pmf-demo.vercel.app/',
    description:
      'A secure cross-border payment platform supporting money transfers and escrow-style flows for international payments and financial transactions.',
    shortDescription:
      'A cross-border payments platform with money transfer and escrow-style flows.',
    repository: '#',
    stack: [
      Stack.nextjs,
      Stack.react,
      Stack.materialUI,
      Stack.tailwind,
      Stack.python,
      Stack.django,
    ],
    dimensions: [320, 640],
    screenshots: [
      '/static/projects/ScreenshotPMF2.png',
      '/static/projects/ScreenshotPMF3.png',
      '/static/projects/ScreenshotPMF4.png',
      '/static/projects/ScreenshotPMF5.png',
      '/static/projects/ScreenshotPMF6.png',
      '/static/projects/ScreenshotPMF7.png',
      '/static/projects/ScreenshotPMF8.png',
      '/static/projects/ScreenshotPMF9.png',
    ],
    deployment: {
      web: 'https://pmf-demo.vercel.app/',
    },
    subProjects: [],
  },
  {
    title: 'Recruitment Management System',
    slug: 'Recruitment MS',
    banner: '/static/projects/ScreenshotRMF1.png',
    website: 'https://staging.sira.hst-et.com',
    description:
      'A hiring workflow platform for job posting, application management, interview coordination, and candidate tracking, built to streamline recruitment operations.',
    shortDescription:
      'A recruitment platform for managing vacancies, applications, interviews, and candidates.',
    repository: '#',
    stack: [
      Stack.nextjs,
      Stack.react,
      Stack.materialUI,
      Stack.tailwind,
      Stack.python,
      Stack.django,
    ],
    dimensions: [320, 640],
    screenshots: [
      '/static/projects/ScreenshotRMF2.png',
      '/static/projects/ScreenshotRMF3.png',
      '/static/projects/ScreenshotRMF4.png',
      '/static/projects/ScreenshotRMF5.png',
      '/static/projects/ScreenshotRMF6.png',
      '/static/projects/ScreenshotRMF7.png',
    ],
    deployment: {
      web: 'https://staging.sira.hst-et.com',
    },
    subProjects: [],
  },
  {
    title: 'Insight Bridge AI',
    slug: 'IBAI',
    banner: '/static/projects/ScreenshotIB1.png',
    website: 'https://www.insight-bridge.ai',
    description:
      'Contributed to an AI-powered enterprise data platform that helps organizations access insights, improve decision-making, and support analytics-driven business outcomes.',
    shortDescription:
      'An enterprise data platform that helps teams turn information into useful insights and better decisions.',
    repository: '#',
    stack: [Stack.nextjs, Stack.react, Stack.materialUI, Stack.tailwind],
    dimensions: [320, 640],
    screenshots: [
      '/static/projects/ScreenshotIB1.png',
      '/static/projects/ScreenshotIB2.png',
      '/static/projects/ScreenshotIB3.png',
      '/static/projects/ScreenshotIB4.png',
      '/static/projects/ScreenshotIB5.png',
      '/static/projects/ScreenshotIB6.png',
      '/static/projects/Insight Bridge.mp4',
    ],
    deployment: {
      web: 'https://www.insight-bridge.ai/',
    },
    subProjects: [],
  },
];
