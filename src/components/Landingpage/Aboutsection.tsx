import Image from "next/image";
import FeatureItem from "./Featureitem";


export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
            About <span className="text-orange-500">ST-AAA LLC</span>
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your trusted partner in Garland, Texas for comprehensive business
            solutions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              Why Choose Our Business Services?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ST-AAA LLC is a premier business services provider located in
              Garland, Texas. With over a decade of experience, we've helped
              hundreds of entrepreneurs and established businesses navigate the
              complexities of business formation, compliance, and financial
              management.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our comprehensive approach combines business registration services
              with financial solutions and insurance services, creating a
              one-stop solution for all your business needs.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <FeatureItem
                icon="✅"
                title="Expert Guidance"
                description="Deep knowledge of Texas regulations"
              />
              <FeatureItem
                icon="⏳"
                title="Time Saving"
                description="Streamlined processes and efficient service"
              />
              <FeatureItem
                icon="💰"
                title="Cost Effective"
                description="Competitive pricing with no hidden fees"
              />
              <FeatureItem
                icon="🤝"
                title="Ongoing Support"
                description="Continued assistance after service completion"
              />
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team working together"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
