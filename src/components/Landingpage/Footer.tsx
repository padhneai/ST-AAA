import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Link from "next/link";
import { services } from "@/lib/data";


export default function Footer() {
  return (
    <footer className="bg-[#212529] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* About */}
        <div>
          <h4 className="text-[var(--accent)] text-2xl font-bold mb-2">
            About ST-AAA LLC
          </h4>
          <div className="w-24 h-1 bg-[var(--accent)] mb-6" />
          <p className="text-gray-300 mb-8">
            Providing comprehensive business services in Garland, Texas and surrounding areas. 
            Your trusted partner for business formation, compliance, and financial solutions.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="bg-[#343a40] rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-[var(--accent)] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-[#343a40] rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-[var(--accent)] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-[#343a40] rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-[var(--accent)] transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-[#343a40] rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-[var(--accent)] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[var(--accent)] text-2xl font-bold mb-2">
            Our Services
          </h4>
          <div className="w-24 h-1 bg-[var(--accent)] mb-6" />
          <ul className="space-y-2 text-gray-300">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={service.link}
                  className="hover:text-[var(--accent)] transition"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[var(--accent)] text-2xl font-bold mb-2">
            Quick Links
          </h4>
          <div className="w-24 h-1 bg-[var(--accent)] mb-6" />
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-[var(--accent)] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-[var(--accent)] transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-[var(--accent)] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-[var(--accent)] transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-[var(--accent)] transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-[var(--accent)] transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[var(--accent)] text-2xl font-bold mb-2">
            Contact Info
          </h4>
          <div className="w-24 h-1 bg-[var(--accent)] mb-6" />
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt /> Garland, Texas
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt /> (214) 733-1561
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope /> staaa2023@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaClock /> Mon-Fri: 9:00 AM - 6:00 PM
            </li>
            <li className="ml-8">Sat: 10:00 AM - 2:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-lg">
        &copy; {new Date().getFullYear()} ST-AAA LLC. All Rights Reserved. | Business Services in Garland, Texas
      </div>
    </footer>
  );
}
