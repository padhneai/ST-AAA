"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={handleNavClick}
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500 border-b",
          scrolled
            ? "bg-white/80 backdrop-blur-lg border-blue-100 shadow-md"
            : "bg-transparent border-transparent",
          open && "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full md:h-22 ">
            {/* Logo */}
            <Link
              href="/"
              onClick={handleNavClick}
              className="flex items-center"
            >
              <Image
                src="/slogo.png"
                alt="ST-AAA LLC Logo"
                width={150}
                height={50}
                priority
                className="object-contain "
              />
            </Link>

            {/* Desktop Nav */}
            {isHomepage && (
              <nav className="hidden md:flex items-center justify-center flex-1 space-x-10">
                {["home", "services", "about", "contact"].map((section) => (
                  <Link
                    key={section}
                    href={`#${section}`}
                    className={cn(
                      "relative text-sm font-medium text-gray-600 hover:text-orange-600 transition-all capitalize",
                      activeSection === section &&
                        "text-orange-600 font-semibold"
                    )}
                  >
                    {section}
                    {activeSection === section && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 mx-auto w-6 h-0.5 bg-orange-600 rounded-full"
                      />
                    )}
                  </Link>
                ))}
              </nav>
            )}

            {/* Contact (Desktop) */}
            <div className="hidden md:flex flex-col text-right text-sm leading-tight">
              <a
                href="tel:2147331561"
                className="flex items-center justify-end gap-1 hover:text-orange-600"
              >
                <Phone size={14} /> (214) 733-1561
              </a>
              <a
                href="mailto:staaa2023@gmail.com"
                className="flex items-center justify-end gap-1 hover:text-orange-600"
              >
                <Mail size={14} /> staaa2023@gmail.com
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 
              pt-20 px-6"
            >
              <button
                onClick={handleNavClick}
                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full"
              >
                <X size={22} />
              </button>

              {/* Animated Nav Links */}
              <div className="mt-10 space-y-6">
                {["home", "services", "about", "contact"].map((section, i) => (
                  <motion.div
                    key={section}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={`#${section}`}
                      onClick={handleNavClick}
                      className="block text-xl font-medium capitalize text-gray-700 hover:text-orange-600"
                    >
                      {section}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Contact CTA */}
              <div className="mt-12 space-y-4">
                <a
                  href="tel:2147331561"
                  className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl hover:bg-orange-100"
                >
                  <Phone className="text-orange-600" /> (214) 733-1561
                </a>
                <a
                  href="mailto:staaa2023@gmail.com"
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100"
                >
                  <Mail className="text-blue-600" /> staaa2023@gmail.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>


    </>
  );
}
