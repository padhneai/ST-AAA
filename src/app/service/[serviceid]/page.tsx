import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import BackButton from "@/components/Landingpage/Backbutton";

interface ServicePageProps {
  params: { serviceid: string };
}

export default async function Page({ params }: ServicePageProps) {
  const { serviceid } = params;

  const service = services.find((s) => s.link.split("/").pop() === serviceid);
  if (!service) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Back Button */}
      <div className="mb-8">
        <BackButton label="← Back to Services" />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-200 via-blue-200 to-orange-100 p-12 rounded-3xl shadow-lg mb-16 text-center">
        <div className="flex justify-center mb-6 text-blue-600 text-6xl">{service.icon}</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          {service.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Details Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          About this service
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">{service.details}</p>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
          Why choose this service?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="bg-gradient-to-r from-orange-100 via-orange-50 to-blue-50 p-5 rounded-2xl shadow hover:shadow-lg transition flex items-start space-x-4"
            >
              <span className="text-orange-500 font-bold mt-1 text-2xl">✔</span>
              <span className="text-gray-800 text-lg">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      {/* <div className="text-center mb-20">
        <Button
          size="lg"
          className="rounded-full px-12 py-4 text-lg bg-blue-600 hover:bg-orange-500 text-white font-semibold shadow-lg transition-colors"
        >
          {service.cta}
        </Button>
      </div> */}

   
    </div>
  );
}
