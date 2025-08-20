"use client";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const path = usePathname()
console.log(path)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "contact"];
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow ">
      <div className="max-w-7xl  mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
      <Link href={"/"}>
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-xl text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
            ST
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              ST-AAA <span className="text-orange-600">LLC</span>
            </h1>
            <span className="text-lg text-orange-600">
              Business & Financial Services
            </span>
          </div>
        </div>
      </Link>



        {/* Contact Info */}
        <div className="hidden md:flex flex-col text-sm">
          <a href="tel:2147331561" className="flex items-center gap-1 hover:text-orange-600">
            <Phone size={14}/> (214) 733-1561
          </a>
          <a href="mailto:staaa2023@gmail.com" className="flex items-center gap-1 hover:text-orange-600">
            <Mail size={14}/> staaa2023@gmail.com
          </a>
        </div>



                {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="#home" className={cn("hover:text-orange-600", activeSection === "home" && "text-orange-600 font-bold")}>Home</Link>
          {path === "/" && 
          <>
           <Link href="#services" className={cn("hover:text-orange-600", activeSection === "services" && "text-orange-600 font-bold")}>Services</Link>
          <Link href="#about" className={cn("hover:text-orange-600", activeSection === "about" && "text-orange-600 font-bold")}>About</Link>
          <Link href="#contact" className={cn("hover:text-orange-600", activeSection === "contact" && "text-orange-600 font-bold")}>Contact</Link>
          </>
          }
         
        </nav>

        {/* Mobile Menu */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

        {/* Overlay and Mobile Nav - Slide from right */}
        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0  bg-opacity-40 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
        {/* Mobile Nav */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l z-50 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ willChange: 'transform' }}
        >
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-orange-600"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col p-6 space-y-6 text-lg mt-10">
            <Link href="#home" onClick={() => setOpen(false)} className={cn(activeSection === "home" && "text-orange-600 font-bold")}>Home</Link>

            {path === "/" && 
            <>
            <Link href="#services" onClick={() => setOpen(false)} className={cn(activeSection === "services" && "text-orange-600 font-bold")}>Services</Link>
            <Link href="#about" onClick={() => setOpen(false)} className={cn(activeSection === "about" && "text-orange-600 font-bold")}>About</Link>
            <Link href="#contact" onClick={() => setOpen(false)} className={cn(activeSection === "contact" && "text-orange-600 font-bold")}>Contact</Link>
            </>
            }
            
          </nav>
        </div>
    </header>
  );
}
