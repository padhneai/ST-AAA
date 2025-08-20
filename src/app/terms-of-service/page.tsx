import BackButton from "@/components/Landingpage/Backbutton";


export default function TermsPage() {
  return (
    <div className="max-w-4xl min-h-[85vh] mx-auto px-6 py-12">
      <BackButton label="Back to Home" />

      <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">Terms & Conditions</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to our website. By using our services, you agree to comply with and be bound by the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Use of Services</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You may not misuse our services or attempt unauthorized access. All content is provided as-is.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Limitation of Liability</h2>
      <p className="text-gray-700 leading-relaxed">
        We are not liable for any damages or losses resulting from the use of our services.
      </p>
    </div>
  );
}
