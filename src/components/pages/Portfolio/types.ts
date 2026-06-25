export type PortfolioLink = {
  labelKey: 'marketplace' | 'tenant' | 'official';
  url: string;
};

export type PortfolioType = {
  id: string;
  urlId: number;
  key: string; // Translation key for portfolio
  title?: string; // Optional fallback title
  category:
    | CategoryPortfolioEnum.WEB_APP
    | CategoryPortfolioEnum.DASHBOARD
    | CategoryPortfolioEnum.LANDING_PAGE
    | CategoryPortfolioEnum.SAAS_PLATFORM;
  description?: string; // Optional fallback description
  responsibilities?: string[]; // Optional fallback responsibilities
  techStack: string[];
  websiteUrl?: string;
  links?: PortfolioLink[];
};

export enum CategoryPortfolioEnum {
  WEB_APP = 'Web App',
  DASHBOARD = 'Dashboard',
  LANDING_PAGE = 'Landing Page',
  SAAS_PLATFORM = 'SaaS Platform',
}
