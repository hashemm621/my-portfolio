import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {  FaJsSquare, FaReact, FaNodeJs, } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";


const skillsData = [
  { name: "React", level: "85%", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", level: "75%", icon: <FaNodeJs className="text-green-500" /> },
  { name: "JavaScript", level: "80%", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "TailwindCSS", level: "90%", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "MongoDB", level: "70%", icon: <SiMongodb className="text-green-600" /> },
  { name: "Express.js", level: "75%", icon: <SiExpress className="text-gray-400" /> },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-[#0a0a0c] text-gray-300">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center md:text-left">
          Technical <span className="text-purple-500">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, idx) => (
            <div key={skill.name} className="relative">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-semibold text-lg">{skill.name}</span>
                <span className="ml-auto text-purple-400 font-bold">{skill.level}</span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-gray-700">
                {/* Framer Motion Layout Animation */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: skill.level } : { width: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                  className="h-full rounded-full bg-linear-to-r from-purple-600 to-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}