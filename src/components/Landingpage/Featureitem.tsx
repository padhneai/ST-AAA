// src/components/FeatureItem.tsx
import { ReactNode } from "react";

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-blue-900">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}