import React, { useState, useEffect } from "react";
import { RiMenuFold4Fill } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion যোগ করা হয়েছে

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 100;
      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(item.name.toLowerCase());
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#0a0a0c]/50 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
          : "bg-[#0a0a0c] py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-16">
        
        {/* Logo with Glow Effect */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group cursor-pointer"
        >
          <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white">
            Md. <span className="text-purple-500 group-hover:text-purple-400 transition-colors drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">Hashem</span>
          </h1>
        </motion.div>

        {/* Desktop Menu - Modern Minimalist */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item, idx) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`relative text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 group ${
                    activeSection === item.name.toLowerCase()
                      ? "text-purple-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  {/* Underline Animation */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all duration-500 ${
                    activeSection === item.name.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              </motion.li>
            ))}
            
            {/* Let's Talk Button */}
            <motion.li
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
            >
              <a 
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="ml-4 px-5 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                Let's Talk
              </a>
            </motion.li>
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-purple-500 focus:outline-none"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                <FaRegWindowClose size={28} />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                <RiMenuFold4Fill size={30} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Sidebar with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md md:hidden z-[60]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-[#0a0a0c] border-l border-white/5 shadow-2xl md:hidden z-[70] p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-xs uppercase tracking-[0.3em] font-black text-gray-500">Navigation</span>
                <button onClick={() => setIsOpen(false)} className="text-purple-500">
                  <FaRegWindowClose size={24} />
                </button>
              </div>
              
              <ul className="flex flex-col space-y-8">
                {menuItems.map((item, idx) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`text-4xl font-black transition-all ${
                        activeSection === item.name.toLowerCase()
                          ? "text-purple-500 italic"
                          : "text-white/20 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-10 border-t border-white/5">
                 <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">Get in touch</p>
                 <a href="mailto:aharmanhd16@gmail.com" className="text-white text-sm mt-2 block hover:text-purple-500 transition-colors">aharmanhd16@gmail.com</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}