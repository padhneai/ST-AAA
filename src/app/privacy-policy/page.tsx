import BackButton from "@/components/Landingpage/Backbutton";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl min-h-[85vh] mx-auto px-6 py-12">
      <BackButton label="Back to Home" />

      <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">Privacy Policy</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        We value your privacy. This policy explains how we collect, use, and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Information Collection</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We may collect information such as your name, email, and usage data to improve our services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Use of Information</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your information is used to provide services, send updates, and improve your experience. We do not sell your personal data.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Data Security</h2>
      <p className="text-gray-700 leading-relaxed">
        We implement appropriate measures to protect your data from unauthorized access or disclosure.
      </p>
    </div>
  );
}
