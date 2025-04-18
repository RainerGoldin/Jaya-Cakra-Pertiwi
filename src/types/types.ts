export interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PortfolioItem {
  name: string;
  location: string;
  image: string;
}

export interface StatItem {
  icon: JSX.Element;
  value: string;
  label: string;
}