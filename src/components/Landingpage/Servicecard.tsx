// src/components/ServiceCard.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { ServiceCardProps } from "@/types";


export default function ServiceCard({
  icon,
  title,
  description,
  cta,
  link,
  isNew,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg relative ">
      {/* New Badge */}
      {isNew && (
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          New
        </div>
      )}
      <div className="absolute top-0 w-full h-2 rounded-2xl bg-orange-500 z-10"></div>

         {/* Header - Blue Gradient */}
      <div className="bg-blue-700 p-6 flex items-center justify-center relative h-28">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-800 to-blue-600 opacity-20"></div>
        <div className="relative z-10 text-white">{icon}</div>
      </div>

      {/* Content */}
      <div className="px-6 py-10">
        <h3 className="text-3xl font-bold text-blue-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        <Link href={link}>
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            {cta}
          </button>
        </Link>
      </div>
    </div>
  );
}