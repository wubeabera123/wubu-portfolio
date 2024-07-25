import { Colors } from './colors';

export enum Stack {
  // Languages
  typescript,
  javascript,
  python,
  html,
  css,
  bootstrap,
  materialUI,
  tailwind,
  figma,
  // Frontend
  react,
  nextjs,
  // Backend
  node,
  django,
}

export const WorkStack = [
  Stack.nextjs,
  Stack.typescript,
  Stack.python,
  Stack.react,
  Stack.javascript,
  Stack.html,
  Stack.css,
  Stack.bootstrap,
  Stack.materialUI,
  Stack.tailwind,
  Stack.figma,
  Stack.node,
  // Stack.django,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.nextjs]: {
    value: 'Next.js',
    color: Colors.nextjs,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.html]: {
    value: 'HTML',
    color: Colors.html,
  },
  [Stack.css]: {
    value: 'CSS',
    color: Colors.css,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.bootstrap]: {
    value: 'Bootstrap',
    color: Colors.bootstrap,
  },
  [Stack.materialUI]: {
    value: 'Material UI',
    color: Colors.materialUI,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.tailwind]: {
    value: 'Tailwind',
    color: Colors.tailwind,
  },
  [Stack.figma]: {
    value: 'Figma',
    color: Colors.figma,
  },
};
