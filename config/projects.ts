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
    title: 'To do',
    slug: 'Task Management',
    banner: '/static/projects/todo/main .png',
    website:
      'https://task-management-wubeabera123gmailcoms-projects.vercel.app/',
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
      '/static/projects/todo/2.png',
      '/static/projects/todo/3.png',
      '/static/projects/todo/4.png',
    ],
    deployment: {
      web: 'https://task-management-wubeabera123gmailcoms-projects.vercel.app/',
    },
    subProjects: [],
  },
  // {
  //   title: 'Peapods',
  //   slug: 'peapods',
  //   banner: '/static/projects/peapods/banner.png',
  //   website: 'https://peapods.com',
  //   description: `Peapods is a new type of decentralized social network that values real human interaction. The platform helps you become closer with your friends and make new ones. We value kindness, friendship, user privacy, and genuine connection. Together we can cure boredom, conquer loneliness, and fulfill the original promise of the internet to connect us in ways that matter.`,
  //   shortDescription:
  //     'Peapods is a new type of decentralized social network that values real human interaction.',
  //   repository: null,
  //   stack: [Stack.javascript, Stack.react, Stack.node],
  //   screenshots: [],
  //   deployment: {
  //     web: 'https://peapods.com',
  //   },
  //   subProjects: [],
  // },
  // {
  //   title: 'Proximity',
  //   slug: 'proximity',
  //   website: 'https://proximity-mobile.web.app',
  //   banner: '/static/projects/proximity/banner.jpeg',
  //   description:
  //     'An open source social media app that does not use your data against you.',
  //   repository: 'https://github.com/karanpratapsingh/Proximity',
  //   stack: [Stack.typescript, Stack.node],
  //   screenshots: [
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=a9b5a094-8a16-4c84-af16-65bf2378d7d9',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fca4c07e-c922-445e-a259-a06c038e0974',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=31dafec8-fc20-4d6f-96e7-312a4c847ac5',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-4-.png?alt=media&token=4067a226-5b7b-4ffa-859e-401323a864c4',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=c349a959-ab54-4e2d-8f8e-2393466bb5c0',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=f2c25e34-38e8-4886-b247-dc6f270c36d0',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=2af284b0-4266-4072-a900-cc9ef8521f74',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=e041e4bd-50fc-49a7-8a22-f6e98d3e1bc6',
  //   ],
  //   deployment: {
  //     web: 'https://proximity-mobile.web.app',
  //     android:
  //       'https://play.google.com/store/apps/details?id=com.proximity.app',
  //     ios: 'https://apps.apple.com/us/app/proximity-app/id1489041006',
  //   },
  //   subProjects: [],
  // },
  // {
  //   title: 'Velvet Live',
  //   slug: 'velvet-live',
  //   banner: '/static/projects/velvet-live/banner.png',
  //   website: 'https://boom.london',
  //   description: `Connect with shoppers who need your advice and expertise when they're shopping online. Assist and sell to customers the same way you would in-store, but now through chat and video straight from the app.`,
  //   repository: null,
  //   stack: [Stack.javascript, Stack.react],
  //   screenshots: [
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=b9b044ce-a3af-402f-a1db-1ae61621bb18',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=f551d87b-4f74-4d06-b81e-50ea8bf7feba',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=4f68239e-db81-43cc-b3a4-1a8642cfe4eb',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=5655d6e8-99d4-4c40-9782-ce12efeab256',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=32c12b1e-8e32-4d45-9001-9482d26bdaaf',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=609b7e74-8349-48ec-bcc0-4b0071dfb9b6',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=91880856-7288-420c-abb9-c1923f7ccd57',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=3dcdc3bd-cbb7-4d8e-9368-306158cce40d',
  //   ],
  //   deployment: {
  //     web: 'https://boom.london',
  //     android: 'https://play.google.com/store/apps/details?id=app.boom.mobile',
  //   },
  //   subProjects: [],
  // },
  // {
  //   title: 'Stewards',
  //   slug: 'stewards',
  //   website: 'https://stewards.app',
  //   repository: null,
  //   banner: '/static/projects/stewards/banner.png',
  //   description:
  //     'Mobile ordering solution with robot delivery. Stewards also provides variety of tools like staff application to manage orders, self checkout solution and admin dashboard.',
  //   stack: [Stack.javascript, Stack.react],
  //   screenshots: [
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=ba9d7163-8df6-43ae-b804-01cd221cc593',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=c8194dc7-08cf-4b8c-a3ad-f6c643291a95',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=37c14308-767c-41c7-a064-df8b63cd18e8',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=6ad6b4f6-ba09-423d-bd3f-b06ae093113a',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=cd2945c0-af97-4b3d-a503-d52174232a8e',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=6fcaeab6-d539-4f39-9985-e6ee85e28f0a',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=3c1fcd3e-4d93-4275-8d87-94a9b9236a9d',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=9733914a-61a9-41ed-b715-3334ca425588',
  //   ],
  //   deployment: {
  //     web: 'https://stewards.app',
  //     android:
  //       'https://play.google.com/store/apps/details?id=app.stewards.customer',
  //     ios: 'https://apps.apple.com/in/app/stewards-order-to-your-desk/id1479412118',
  //   },
  //   subProjects: [
  //     {
  //       title: 'Staff Management',
  //       repository: null,
  //       description:
  //         'Staff app for stewards restaurant staff, easily update menu, product availability and take live orders from customers.',
  //       deployment: {
  //         android:
  //           'https://play.google.com/store/apps/details?id=app.stewards.staff&hl=en',
  //       },
  //     },
  //     {
  //       title: 'Admin Dashboard',
  //       repository: null,
  //       description:
  //         'Staff administration app for stewards restaurant partners. This helps restaurant administrators to easily manage orders, receipts, tables, restaurant info etc.',
  //       deployment: {
  //         web: 'https://manage.stewards.app',
  //       },
  //     },
  //     {
  //       title: 'Self Checkout',
  //       repository: null,
  //       description:
  //         "Stewards self checkout solution for customers who don't like waiting. Available on demand for iPad and tablets.",
  //       deployment: {},
  //     },
  //   ],
  // },
  // {
  //   title: 'Celebrify',
  //   slug: 'celebrify',
  //   website: 'https://celebrify.in',
  //   banner: '/static/projects/celebrify/banner.jpeg',
  //   description:
  //     'Get personalized videos from your favorite celebrities at just one click. Request personalized video messages for your friends, family, loved ones or even yourself. Be it a doubt or even a special wish from your favorite celebrity.',
  //   repository: null,
  //   stack: [Stack.react, Stack.django],
  //   dimensions: [450, 270],
  //   screenshots: [
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=93fffd15-08ca-4ffc-8fce-47bc269237ee',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fd597baf-3aaa-4ad8-abe9-1d42c628285f',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=779ea419-adb0-4f62-8ef7-dcfa8d9a4228',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=e77b8603-4885-4eed-b108-f9f4bb751796',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=94f43db6-c835-404d-ab35-85ddad624a06',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=7794ae58-7e3a-45c5-a47a-6c86b909e423',
  //   ],
  //   deployment: {
  //     web: 'https://celebrify.in',
  //     android:
  //       'https://play.google.com/store/apps/details?id=com.celebrify.app',
  //     ios: 'https://apps.apple.com/us/app/celebrify-app/id1469588198',
  //   },
  //   subProjects: [],
  // },
  // {
  //   title: 'KCards',
  //   slug: 'kcards',
  //   banner: '/static/projects/kcards/banner.jpeg',
  //   description:
  //     'KCards is your one-stop replacement for paper cards. KCards help you to easily share your cards with other users and get real-time analytics on the shared cards.',
  //   repository: 'https://github.com/karanpratapsingh/KCards',
  //   stack: [Stack.react, Stack.node],
  //   dimensions: [450, 270],
  //   screenshots: [
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
  //   ],
  //   deployment: {
  //     web: 'https://kcards-server.herokuapp.com',
  //     android: 'https://play.google.com/store/apps/details?id=com.kcards',
  //     ios: 'https://itunes.apple.com/us/app/kcards/id1461733524',
  //   },
  //   website: 'https://kcards-server.herokuapp.com',
  //   subProjects: [],
  // },
];
