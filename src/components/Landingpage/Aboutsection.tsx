// src/app/page.tsx
// import FeatureItem from "@/components/FeatureItem";
import Image from "next/image";
import FeatureItem from "./Featureitem";

export default function Home() {
  return (
    <div id="about" className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">About ST-AAA LLC</h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in Garland, Texas for comprehensive business solutions
          </p>
        </div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              Why Choose Our Business Services?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ST-AAA LLC is a premier business services provider located in Garland, Texas. With over a decade of experience, we've helped hundreds of entrepreneurs and established businesses navigate the complexities of business formation, compliance, and financial management.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our comprehensive approach combines business registration services with financial solutions and insurance services, creating a one-stop solution for all your business needs.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <FeatureItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                }
                title="Expert Guidance"
                description="Deep knowledge of Texas regulations"
              />
              <FeatureItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                }
                title="Time Saving"
                description="Streamlined processes and efficient service"
              />
              <FeatureItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.844V15h4.001c.042 0 .084-.006.126-.019a4.768 4.768 0 001.513-1.216c.09-.138.175-.282.253-.431a4.74 4.74 0 00.164-.372c.033-.088.06-.178.08-.268.022-.101.037-.204.045-.307.009-.11.013-.221.013-.332 0-.111-.004-.222-.013-.332-.008-.103-.023-.206-.045-.307-.02-.09-.047-.18-.08-.268a4.74 4.74 0 00-.164-.372c-.078-.149-.163-.293-.253-.431a4.768 4.768 0 00-1.513-1.216c-.042-.013-.084-.019-.126-.019H11v2.156zM11 10.586v1.253h3.795c.042 0 .084-.006.126-.019a4.768 4.768 0 001.513-1.216c.09-.138.175-.282.253-.431a4.74 4.74 0 00.164-.372c.033-.088.06-.178.08-.268.022-.101.037-.204.045-.307.009-.11.013-.221.013-.332 0-.111-.004-.222-.013-.332-.008-.103-.023-.206-.045-.307-.02-.09-.047-.18-.08-.268a4.74 4.74 0 00-.164-.372c-.078-.149-.163-.293-.253-.431a4.768 4.768 0 00-1.513-1.216c-.042-.013-.084-.019-.126-.019H11v2.156zM11 8.34v1.253h3.795c.042 0 .084-.006.126-.019a4.768 4.768 0 001.513-1.216c.09-.138.175-.282.253-.431a4.74 4.74 0 00.164-.372c.033-.088.06-.178.08-.268.022-.101.037-.204.045-.307.009-.11.013-.221.013-.332 0-.111-.004-.222-.013-.332-.008-.103-.023-.206-.045-.307-.02-.09-.047-.18-.08-.268a4.74 4.74 0 00-.164-.372c-.078-.149-.163-.293-.253-.431a4.768 4.768 0 00-1.513-1.216c-.042-.013-.084-.019-.126-.019H11v2.156z" />
                  </svg>
                }
                title="Cost Effective"
                description="Competitive pricing with no hidden fees"
              />
              <FeatureItem
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.122a1 1 0 00-.363 1.118l1.519 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.122a1 1 0 00-1.175 0l-3.976 2.122c-.784.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.363-1.118l-3.976-2.122c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                }
                title="Ongoing Support"
                description="Continued assistance after service completion"
              />
            </div>

            {/* Button */}
            <div className="mt-10">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-lg">
                SCHEDULE CONSULTATION
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Replace with actual image path
              alt="Team working together in office"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}