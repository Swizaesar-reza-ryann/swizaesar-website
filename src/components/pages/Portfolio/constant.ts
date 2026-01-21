import { CategoryPortfolioEnum, PortfolioType } from './types';

export const PORTFOLIO_LIST: PortfolioType[] = [
  {
    id: 'swizaesar-portfolio',
    urlId: 1,
    title: 'Personal Portfolio Website',
    category: CategoryPortfolioEnum.WEB_APP,
    description:
      'A modern, responsive personal portfolio website showcasing projects and professional experience with optimized performance.',
    responsibilities: [
      'Designed and developed portfolio website from scratch using Next.js',
      'Implemented responsive design with mobile-first approach',
      'Optimized performance with lazy loading and code splitting',
      'Created reusable UI components with TypeScript and Emotion.js',
    ],
    techStack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Emotion.js',
      'Lucide React',
    ],
    websiteUrl: 'https://swizaesar.com',
  },
  {
    id: 'fithub-website',
    urlId: 2,
    title: 'Fithub Website',
    category: CategoryPortfolioEnum.WEB_APP,
    description:
      'A responsive company website focused on performance optimization and modern UI/UX.',
    responsibilities: [
      'Improved web performance for faster load times and better responsiveness',
      'Built responsive pages optimized for multiple devices',
      'Revamped existing pages to enhance UI/UX consistency',
      'Implemented form validation and user-friendly interactions',
    ],
    techStack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Emotion.js',
      'Redux',
      'Axios',
    ],
    websiteUrl: 'https://fithub.id',
  },
  {
    id: 'fithub-dashboard',
    urlId: 3,
    title: 'Fithub Internal Dashboard',
    category: CategoryPortfolioEnum.DASHBOARD,
    description:
      'An internal dashboard used to manage content and operational data for the Fithub platform.',
    responsibilities: [
      'Designed and improved internal dashboard workflows',
      'Migrated class components to functional components using TypeScript',
      'Applied clean architecture for maintainable and scalable code',
      'Built reusable UI components and code generator tools',
      'Optimized application performance and rendering',
    ],
    techStack: [
      'React.js',
      'Vite.js',
      'TypeScript',
      'Redux',
      'Ant Design',
      'Styled Components',
      'Axios',
    ],
  },
  {
    id: 'tataskola-dashboard',
    urlId: 4,
    title: 'Tataskola Dashboard',
    category: CategoryPortfolioEnum.DASHBOARD,
    description:
      'An internal dashboard application supporting education-related operational workflows.',
    responsibilities: [
      'Developed dashboard features using Material UI',
      'Integrated RESTful APIs for backend communication',
      'Implemented real-time file upload progress using Firebase',
      'Ensured consistent and user-friendly UI across features',
    ],
    techStack: ['React.js', 'Material UI', 'Redux', 'Axios', 'Firebase'],
  },
  {
    id: 'lakugan-platform',
    urlId: 5,
    title: 'Lakugan Platform',
    category: CategoryPortfolioEnum.WEB_APP,
    description:
      'A multi-role web platform including supplier, reseller, internal dashboards, and buyer-facing websites.',
    responsibilities: [
      'Built dashboards for suppliers, resellers, and internal teams from scratch',
      'Implemented payment flow and order tracking features',
      'Collaborated with product team to design step-by-step checkout flow',
      'Defined base API contracts between frontend and backend',
    ],
    techStack: [
      'React.js',
      'Styled Components',
      'Context API',
      'Ant Design',
      'Axios',
    ],
  },
  {
    id: 'nusamed-website',
    urlId: 6,
    title: 'Nusamed Company Website',
    category: CategoryPortfolioEnum.LANDING_PAGE,
    description:
      'A fully responsive company profile website built from scratch.',
    responsibilities: [
      'Converted UI design into clean and maintainable React components',
      'Ensured responsive layout across multiple screen sizes',
      'Optimized website for mobile devices',
    ],
    techStack: ['React.js', 'Styled Components'],
    websiteUrl: 'https://nusamed.com',
  },
];
