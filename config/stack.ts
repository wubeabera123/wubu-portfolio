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
  fastAPI,
  Olama,
  Gemma,
  nextjs,
  // Backend
  node,
  django,
  prisma,
  postgres,
  ReduxToolkit,
  ReduxSaga,
}

export const WorkStack = [
  Stack.nextjs,
  Stack.react,
  Stack.typescript,
  Stack.javascript,
  Stack.html,
  Stack.css,
  Stack.bootstrap,
  Stack.materialUI,
  Stack.tailwind,
  Stack.python,
  Stack.node,
  Stack.ReduxToolkit,
  Stack.ReduxSaga,
  Stack.postgres,
  Stack.prisma,
  Stack.figma,
  Stack.fastAPI,
  Stack.Olama,
  Stack.Gemma,
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
  [Stack.prisma]: {
    value: 'Prisma',
    color: Colors.prisma,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.ReduxToolkit]: {
    value: 'Redux Toolkit',
    color: Colors.redux,
  },
  [Stack.ReduxSaga]: {
    value: 'Redux Saga',
    color: Colors.redux,
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
  [Stack.fastAPI]: {
    value: 'FastAPI',
    color: Colors.fastAPI,
  },
  [Stack.Olama]: {
    value: 'Olama',
    color: Colors.Olama,
  },
  [Stack.Gemma]: {
    value: 'Gemma',
    color: Colors.Gemma,
  },
};
