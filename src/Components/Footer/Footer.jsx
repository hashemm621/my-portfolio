import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/hashemm621", color: "hover:bg-gray-700" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/md-hashem/", color: "hover:bg-blue-600" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/hashem.hashem.56829", color: "hover:bg-blue-500" },
    { icon: <FaWhatsapp />, href: "", color: "hover:bg-green-500" },
    { icon: <BiLogoGmail />, href: "mailto:hashemm621@gmail.com", color: "hover:bg-red-500" },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-[#0a0a0c]  border-t border-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-white tracking-tight">
              Md. <span className="text-purple-500">Hashem</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Passionate <span className="text-gray-300">Fullstack Developer</span> specialized in building 
              high-performance web applications with modern tech stacks.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
             <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-gray-400 transition-all duration-300 ${link.color} hover:text-white hover:-translate-y-1 shadow-lg`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Md. Hashem. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}