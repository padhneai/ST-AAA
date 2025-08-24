import { ReactNode } from "react";
import {
  Calculator,
  HeartPulse,
  FileText,
  Briefcase,
  ClipboardList,
  DollarSign,
  Code,
  BarChart,
} from "lucide-react";

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

export const services: Service[] = [
  {
    id: "bookkeeping",
    title: "Bookkeeping & Accounting",
    description: "Professional record keeping, tax preparation, payroll services, and financial reporting.",
    details:
      "Our bookkeeping and accounting services help businesses maintain accurate financial records, manage payroll, prepare taxes, and generate reports for better decision-making. Services include monthly bookkeeping, accounts payable/receivable, payroll processing, tax filing, and financial statement preparation.",
    link: "/service/bookkeeping",
    icon: <Calculator className="w-10 h-10" />,
    cta: "LEARN MORE",
    benefits: [
      "Accurate financial record keeping",
      "Tax preparation and filing",
      "Payroll management",
      "Custom financial reports",
    ],
  },
  {
    id: "insurance",
    title: "Health & Life Insurance",
    description: "Comprehensive insurance plans for businesses and individuals.",
    details:
      "We provide tailored health and life insurance solutions to protect you, your family, and your employees. Our team helps you choose the best policies, from individual life coverage to group health insurance plans for businesses, including claims assistance and renewals.",
    link: "/service/insurance",
    icon: <HeartPulse className="w-10 h-10" />,
    cta: "GET COVERAGE",
    benefits: [
      "Custom insurance solutions",
      "Group & individual plans",
      "Claims support",
      "Peace of mind for employees",
    ],
  },
  {
    id: "registration",
    title: "Business Registration",
    description: "Complete registration services for LLCs, corporations, partnerships, and sole proprietorships.",
    details:
      "Starting a business begins with proper registration. We assist entrepreneurs in registering LLCs, corporations, partnerships, or sole proprietorships. Our experts simplify the paperwork, explain legal requirements, and ensure your business is compliant from day one.",
    link: "/service/registration",
    icon: <FileText className="w-10 h-10" />,
    cta: "GET STARTED",
    benefits: [
      "Complete business registration",
      "Simplified paperwork",
      "Legal compliance ensured",
      "Fast and reliable process",
    ],
  },

  {
    id: "ein",
    title: "Federal EIN Acquisition",
    description: "Quick and efficient assistance with obtaining your Federal Employer Identification Number.",
    details:
      "An Employer Identification Number (EIN) is essential for hiring employees, opening bank accounts, and filing taxes. We handle the entire process of obtaining your EIN quickly and accurately.",
    link: "/service/ein",
    icon: <DollarSign className="w-10 h-10" />,
    cta: "GET EIN",
    benefits: [
      "Fast EIN application",
      "Accurate federal filing",
      "Hassle-free process",
      "Essential for business compliance",
    ],
  },
  {
    id: "software",
    title: "Software Development",
    description: "Custom web and mobile applications built to scale your business efficiently.",
    details:
      "Our software development team builds scalable, secure, and user-friendly web and mobile applications. From concept to deployment, we collaborate with you to create technology that supports your business goals.",
    link: "/service/software",
    icon: <Code className="w-10 h-10" />,
    cta: "BUILD WITH US",
    benefits: [
      "Custom web & mobile apps",
      "Secure and scalable solutions",
      "Full-stack development",
      "Continuous support and updates",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, social media, content strategy, and online advertising to grow your brand.",
    details:
      "Our digital marketing services help businesses build strong online visibility and attract more customers. We offer SEO optimization, pay-per-click advertising, social media management, email campaigns, and content marketing strategies.",
    link: "/service/digital-marketing",
    icon: <BarChart className="w-10 h-10" />,
    cta: "LAUNCH CAMPAIGN",
    benefits: [
      "SEO optimization",
      "Social media management",
      "Content & email marketing",
      "Data-driven campaigns",
    ],
  },
];
