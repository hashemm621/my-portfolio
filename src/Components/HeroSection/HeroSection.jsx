import React, { useState } from "react";
import {
  FaReact,
  FaBolt,
  FaPaintBrush,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import BannerBg from "../../assets/banner-bg.jpg";
import ProfileImageSrc from "../../assets/protfolioImage.png";
import { BiLogoGmail } from "react-icons/bi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HeroSection() {
  const [shapes] = useState(() => {
    return [...Array(6)].map(() => ({
      size: 20 + Math.random() * 40,
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      color: "#a855f7",
      duration: 10 + Math.random() * 10,
    }));
  });

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/hashemm621" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/md-hashem/" },
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/hashem.hashem.56829",
    },
    { icon: <FaWhatsapp />, href: "https://wa.me/8801315315449" },
    { icon: <BiLogoGmail />, href: "mailto:hashemm621@gmail.com" },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 pt-32 pb-20 overflow-hidden bg-[#0a0a0c]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${BannerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(40px)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a0a0c]/80 to-[#0a0a0c]" />
      </div>

      {/* Animated Shapes */}
      {shapes.map((shape, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{
            width: shape.size * 4,
            height: shape.size * 4,
            top: shape.top,
            left: shape.left,
            backgroundColor: shape.color,
          }}
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <motion.div
          className="text-center lg:text-left flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}>
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for New Projects
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
            Md. <span className="text-purple-500">Hashem</span> <br />
            <span className="text-3xl md:text-5xl text-gray-400">
              Fullstack Developer
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I craft scalable web solutions using the{" "}
            <span className="text-white font-semibold">MERN Stack</span>.
            Focused on building high-performance applications with clean code
            and great user experiences.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 my-8 justify-center lg:justify-start">
            {[
              { num: "10+", label: "Projects" },
              { num: "MERN", label: "Specialist" },
              { num: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group">
                <p className="text-2xl font-bold text-white group-hover:text-purple-500 transition-colors">
                  {stat.num}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center gap-2 group">
              Explore Projects{" "}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1Coitb1DT-PVgL-WRra9zUxLsWiAi1RhY/view?usp=sharing"
              className="px-8 py-4 bg-gray-900 border border-gray-800 text-gray-300 font-bold rounded-xl hover:bg-gray-800 transition-all">
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-10 justify-center lg:justify-start">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:border-purple-500 hover:text-white transition-all shadow-lg">
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <div className="relative flex-1 flex justify-center lg:justify-end">
          <motion.div
            className="relative w-72 h-72 md:w-[400px] md:h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full animate-pulse" />

            {/* Rotating Border */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-purple-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-800 bg-[#16161a]">
              <img
                src={ProfileImageSrc}
                alt="Md Hashem"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-gray-900 border border-gray-800 p-4 rounded-2xl shadow-2xl">
              <FaReact className="text-4xl text-blue-400 animate-spin-slow" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-800 p-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <FaBolt className="text-purple-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold">
                  Performance
                </p>
                <p className="text-sm font-bold text-white">100% Optimized</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
