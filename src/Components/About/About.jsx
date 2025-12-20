import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaServer, FaTools } from "react-icons/fa"; // আইকন ইমপোর্ট করুন

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaCode />,
    skills: ["React.js", "Next.js", "TailwindCSS", "Framer Motion","Bootstrap"],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: ["Git & GitHub","NextAuth","Auth0", "Firebase", "Postman", "Vercel"],
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gray-950 text-gray-300 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Story & Text */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariant}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              About <span className="text-purple-500">Me</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-400">
              I am a <span className="text-purple-400 font-semibold">Fullstack Developer</span> with a passion for building complete web solutions. 
              From crafting beautiful, high-performance user interfaces to architecting scalable backend systems, I enjoy the challenge of full-cycle development.
            </p>
            <p className="text-lg leading-relaxed text-gray-400 mb-8">
              My goal is to create digital experiences that are not only visually stunning but also technically robust and user-centric.
            </p>
            
            {/* Quick Stats or Experience */}
            <div className="flex gap-10 border-t border-gray-800 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-white">10+</h4>
                <p className="text-sm text-purple-500">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">MERN</h4>
                <p className="text-sm text-purple-500">Stack Expert</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Skills Infographic */}
          <div className="grid gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-md border border-gray-700 hover:text-purple-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}