"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background with animated zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/90 via-[#002b5c]/85 to-[#001f3f]/95" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
        >
          Get Licensed. Stay Compliant. <br />
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
            Succeed in Garland, TX.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto mb-10"
        >
          We streamline the business licensing process for entrepreneurs and
          small businesses — from application to approval. Trusted by hundreds
          across North Texas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8"
        >
          <Link href="#services">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore Licensing Services
            </Button>
          </Link>
          <a href="https://calendly.com/staaa2023/30min">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white text-lg px-8 py-6 rounded-lg hover:bg-white/10 hover:shadow-xl transition-all duration-200 backdrop-blur-sm"
            >
              Schedule Free Consultation
            </Button>
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4 text-sm"
        >
          {[
            "✅ Fast Processing",
            "🏛️ State-Compliant",
            "🤝 Expert Support",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Decorative Shape Divider */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-20 text-white"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64L48,58.7C96,53,192,43,288,69.3C384,96,480,160,576,170.7C672,181,768,139,864,122.7C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L0,0Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}
