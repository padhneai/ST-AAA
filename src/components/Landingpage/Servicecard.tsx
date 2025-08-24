import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link:string;
}

export default function ServiceCard({ icon, title, description,link }: ServiceCardProps) {
  return (
 <Link href={link}>
    <Card className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <CardHeader className="flex flex-col items-center text-center space-y-3 relative z-10">
        <div className="p-4 rounded-full bg-orange-100 text-orange-600 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-gray-600 relative z-10">
        <p>{description}</p>
      </CardContent>
    </Card>
 </Link>
  );
}
