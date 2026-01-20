export type PortfolioType = {
  id: string;
  urlId: number;
  title: string;
  category:
    | CategoryPortfolioEnum.WEB_APP
    | CategoryPortfolioEnum.DASHBOARD
    | CategoryPortfolioEnum.LANDING_PAGE;
  description: string;
  responsibilities: string[];
  techStack: string[];
  websiteUrl?: string;
};

export enum CategoryPortfolioEnum {
  WEB_APP = 'Web App',
  DASHBOARD = 'Dashboard',
  LANDING_PAGE = 'Landing Page',
}
