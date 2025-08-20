
import { services } from "@/lib/data";
import ServiceCard from "./Servicecard";


export default function Home() {
  return (
    <div id="services" className="min-h-screen bg-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Professional Services
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your business needs - from formation to compliance and financial management
          </p>
        </div>


        {/* Cards Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service) => (
    <ServiceCard key={service.id} {...service} />
  ))}
</div>
      </div>
    </div>
  );
}