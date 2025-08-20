export type Service = {
  id: string;
  title: string;
  description: string;
  details: string;
  link: string;
  icon: ReactNode;
  cta: string;
  benefits: string[];
};


interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  link: string;
  isNew?: boolean;
}