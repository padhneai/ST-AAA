"use client";

import { services } from "@/lib/data";
import ServiceCard from "./Servicecard";


export default function ServiceSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From bookkeeping to digital marketing — explore everything we offer to grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: any) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              cta={service.cta}
              benefits={service.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
