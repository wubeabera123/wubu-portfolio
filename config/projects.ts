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
      'Car Spare Parts Sell System is a web application designed to facilitate the buying and selling of car spare parts. The platform provides a user-friendly interface for both buyers and sellers, allowing them to easily list, search, and purchase spare parts for various car models. With features such as secure payment processing, real-time inventory management, and customer support, the Car Spare Parts Sell System aims to streamline the process of acquiring essential components for vehicle maintenance and repair.',
    shortDescription:
      'Car Spare Parts Sell System is a web application designed to facilitate the buying and selling of car spare parts.',
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
    title: 'AI Powered Task Management System',
    slug: 'TASK',
    banner: '/static/projects/task1.jpg',
    website: 'https://vimeo.com/1195268100/3c70cbacd9?fl=pl&fe=sh',
    description:
      'Built TaskFlow AI, a full-stack productivity app using FastAPI, Next.js, and TypeScript. It features secure JWT auth, task CRUD, and AI tools to generate tasks, break work into subtasks, prioritize backlog items, and create deadline-based schedules. I delivered end-to-end API integration, typed frontend architecture, responsive UI/UX redesign, profile-based navigation, and usability upgrades like delete confirmation, stable pagination, newest-first ordering, and scrollable task workspace sections.',
    shortDescription:
      'Built TaskFlow AI, a full-stack productivity app using FastAPI, Next.js, and TypeScript.',
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
      Stack.Olama,
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
      'Welcome to HST Consulting PLC, your trusted partner in business excellence. Our website provides insights into our key services, including audit services to ensure accurate, transparent, and compliant financial statements; talent management to attract, retain, and develop top talent with tailored solutions; tax services to optimize your tax position with strategic planning and compliance; strategy and organization consulting to develop effective strategies and enhance organizational performance; and technology solutions to leverage cutting-edge technologies for improved efficiency and growth. Discover how HST Consulting PLC can support your business and help you achieve your goals.',
    shortDescription:
      'Welcome to HST Consulting PLC, your trusted partner in business excellence.',
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
      'Welcome to the HST Office Automation System, designed to streamline your business operations and enhance efficiency. Our system offers a range of services, including room booking to manage meeting spaces effortlessly, a help desk for timely support and issue resolution, and asset management to track and maintain your valuable resources. Discover how the HST Office Automation System can optimize your office processes and improve productivity.',
    shortDescription:
      'Welcome to the HST Office Automation System, designed to streamline your business operations',
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
      'Pay My Fees (PMF) is a secure and efficient money exchange platform designed to simplify cross‑border payments. With PMF, users can request or send money between countries seamlessly, ensuring fast and reliable transfers. The platform operates as an escrow system, providing an added layer of protection for both senders and receivers. Whether paying fees, supporting family, or handling international transactions, PMF makes global money movement easy, transparent, and trustworthy.',
    shortDescription:
      'Pay My Fees (PMF) is a secure money exchange platform for sending and receiving funds across countries using an escrow system.',
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
      'The Recruitment Management System is a comprehensive platform designed to simplify and automate the entire hiring process. From posting job vacancies and managing applications to scheduling interviews and tracking candidate progress, the system ensures a smooth and efficient recruitment workflow. Employers can easily evaluate applicants, collaborate with team members, and make informed hiring decisions, while candidates benefit from a clear and user‑friendly application experience. The Recruitment Management System enhances transparency, reduces manual effort, and helps organizations find the right talent quickly and effectively.',
    shortDescription:
      'A streamlined platform that automates job posting, applicant tracking, and hiring workflows to help organizations recruit talent efficiently.',
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
      'Insight Bridge AI is an intelligent data platform designed to help enterprises unlock the full value of their information. Built with advanced AI capabilities, it democratizes access to data, enabling teams across all skill levels to explore insights, uncover opportunities, and make evidence‑based decisions with confidence.The platform empowers organizations across industries—including finance, healthcare, retail, manufacturing, telecom, education, energy, the public sector, and aviation—to improve performance, streamline operations, and drive measurable outcomes through actionable analytics. Insight Bridge AI is guided by core values: security first, ensuring data privacy and trust; democratizing access so anyone can interact with data effortlessly; enabling informed decision‑making through clear insights; and fostering collaboration among enterprises, governments, and communities. Our mission is to transform raw information into meaningful intelligence and build an inclusive AI‑powered future for Africa and beyond.',
    shortDescription:
      'Insight Bridge AI is an AI-powered data platform that democratizes access to insights, helping enterprises make smarter, evidence-based decisions with clarity and confidence.',
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
