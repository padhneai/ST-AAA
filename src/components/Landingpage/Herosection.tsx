import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Herosection() {
  return (
 
    <section
     style={{
    backgroundImage: `linear-gradient(rgba(0, 84, 179, 0.85), rgba(0, 51, 102, 0.9)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
  }}
    id="home" className="min-h-[65vh] relative bg-cover bg-center text-white py-24 text-center">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Comprehensive Business Solutions in Garland, TX
        </h2>
        <p className="mt-6 text:lg md:text-xl opacity-90">
          Your one-stop partner for business formation, compliance, and financial services. 
          Serving entrepreneurs and businesses with expertise and dedication.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <Link href="#services">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg">
            Explore Our Services
          </Button>
          </Link>
          <Button size="lg" variant="outline" className="text-white text-lg border-white hover:bg-white/10">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
