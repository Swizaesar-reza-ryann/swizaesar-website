import { Metadata } from 'next';

export interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string[];
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter?: {
    title?: string;
    description?: string;
    images?: string[];
  };
  canonical?: string;
}

export const seoConfig: Record<string, PageSEOConfig> = {
  home: {
    title: 'Swizaesar | Professional Web Development & Digital Solutions',
    description:
      'Swizaesar delivers professional web development, digital solutions, and innovative technology services. Transform your business with custom websites, applications, and cutting-edge digital strategies.',
    keywords: [
      'web development',
      'digital solutions',
      'technology services',
      'custom websites',
      'web applications',
      'digital transformation',
      'professional development',
      'software development',
      'tech consulting',
      'business solutions',
    ],
    openGraph: {
      title: 'Swizaesar | Professional Web Development & Digital Solutions',
      description:
        'Swizaesar delivers professional web development, digital solutions, and innovative technology services.',
      images: [
        {
          url: '/og-home.jpg',
          width: 1200,
          height: 630,
          alt: 'Swizaesar - Professional Web Development Services',
        },
      ],
    },
    twitter: {
      title: 'Swizaesar | Professional Web Development & Digital Solutions',
      description:
        'Swizaesar delivers professional web development, digital solutions, and innovative technology services.',
      images: ['/og-home.jpg'],
    },
    canonical: 'https://swizaesar.com',
  },

  games: {
    title: 'Mini Games | Fun Memory Card Games | Swizaesar',
    description:
      'Play exciting mini games and memory card games at Swizaesar. Test your memory skills with our interactive memory matching game. Fun, challenging, and brain-training games for all ages.',
    keywords: [
      'mini games',
      'memory games',
      'card games',
      'brain training',
      'memory matching',
      'puzzle games',
      'interactive games',
      'online games',
      'fun games',
      'memory skills',
      'cognitive games',
      'educational games',
      'memory challenge',
      'card matching game',
      'brain exercises',
    ],
    openGraph: {
      title: 'Mini Games | Fun Memory Card Games | Swizaesar',
      description:
        'Play exciting mini games and memory card games at Swizaesar. Test your memory skills with our interactive memory matching game.',
      images: [
        {
          url: '/og-games.jpg',
          width: 1200,
          height: 630,
          alt: 'Mini Games - Memory Card Games at Swizaesar',
        },
      ],
    },
    twitter: {
      title: 'Mini Games | Fun Memory Card Games | Swizaesar',
      description:
        'Play exciting mini games and memory card games at Swizaesar. Test your memory skills with our interactive memory matching game.',
      images: ['/og-games.jpg'],
    },
    canonical: 'https://swizaesar.com/games',
  },

  about: {
    title: 'About Us | Meet the Team | Swizaesar',
    description:
      'Learn about Swizaesar - our team, values, and commitment to delivering exceptional web development and digital solutions. Discover our story and expertise.',
    keywords: [
      'about swizaesar',
      'web development team',
      'tech company',
      'professional developers',
      'company story',
      'team expertise',
      'digital agency',
      'development services',
    ],
    openGraph: {
      title: 'About Us | Meet the Team | Swizaesar',
      description:
        'Learn about Swizaesar - our team, values, and commitment to delivering exceptional web development and digital solutions.',
      images: [
        {
          url: '/og-about.jpg',
          width: 1200,
          height: 630,
          alt: 'About Swizaesar - Our Team and Story',
        },
      ],
    },
    twitter: {
      title: 'About Us | Meet the Team | Swizaesar',
      description:
        'Learn about Swizaesar - our team, values, and commitment to delivering exceptional web development and digital solutions.',
      images: ['/og-about.jpg'],
    },
    canonical: 'https://swizaesar.com/about',
  },

  portfolio: {
    title: 'Portfolio | Our Work | Swizaesar',
    description:
      "Explore Swizaesar's portfolio of web development projects, custom applications, and digital solutions. See our expertise in action through real client success stories.",
    keywords: [
      'portfolio',
      'web development projects',
      'client work',
      'case studies',
      'development examples',
      'tech portfolio',
      'project showcase',
      'custom solutions',
    ],
    openGraph: {
      title: 'Portfolio | Our Work | Swizaesar',
      description:
        "Explore Swizaesar's portfolio of web development projects, custom applications, and digital solutions.",
      images: [
        {
          url: '/og-portfolio.jpg',
          width: 1200,
          height: 630,
          alt: 'Swizaesar Portfolio - Web Development Projects',
        },
      ],
    },
    twitter: {
      title: 'Portfolio | Our Work | Swizaesar',
      description:
        "Explore Swizaesar's portfolio of web development projects, custom applications, and digital solutions.",
      images: ['/og-portfolio.jpg'],
    },
    canonical: 'https://swizaesar.com/portfolio',
  },

  experience: {
    title: 'Experience | Professional Journey | Swizaesar',
    description:
      "Discover Swizaesar's professional experience, technical expertise, and journey in web development. Learn about our skills, technologies, and industry knowledge.",
    keywords: [
      'professional experience',
      'web development expertise',
      'technical skills',
      'developer journey',
      'tech experience',
      'industry knowledge',
      'professional background',
      'development skills',
    ],
    openGraph: {
      title: 'Experience | Professional Journey | Swizaesar',
      description:
        "Discover Swizaesar's professional experience, technical expertise, and journey in web development.",
      images: [
        {
          url: '/og-experience.jpg',
          width: 1200,
          height: 630,
          alt: 'Swizaesar Experience - Professional Journey and Expertise',
        },
      ],
    },
    twitter: {
      title: 'Experience | Professional Journey | Swizaesar',
      description:
        "Discover Swizaesar's professional experience, technical expertise, and journey in web development.",
      images: ['/og-experience.jpg'],
    },
    canonical: 'https://swizaesar.com/experience',
  },
};

export function createMetadata(pageKey: string): Metadata {
  const config = seoConfig[pageKey];

  if (!config) {
    throw new Error(`SEO configuration not found for page: ${pageKey}`);
  }

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(', '),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Swizaesar',
      ...config.openGraph,
      url: config.canonical,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@swizaesar',
      ...config.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: config.canonical,
    },
    authors: [{ name: 'Swizaesar' }],
    creator: 'Swizaesar',
    publisher: 'Swizaesar',
  };
}
