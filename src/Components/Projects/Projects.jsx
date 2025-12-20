import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../../../public/data.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" } 
  },
  exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.2 } }
};

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0a0c] text-gray-300 min-h-screen">
      <div className="container mx-auto px-6 md:px-16">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Selected <span className="text-purple-500">Works</span>
            </h2>
            <p className="text-gray-400 mt-2 tracking-widest uppercase text-xs font-bold">
               Viewing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, projectsData.length)} of {projectsData.length} Projects
            </p>
          </div>
          <a href="https://github.com/hashemm621" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors font-bold text-sm uppercase tracking-tighter">
            View All GitHub Repos →
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* সমাধান: AnimatePresence কে loop এর বাইরে না রেখে, 
              AnimatePresence এর ভেতরে সরাসরি map ব্যবহার করা হয়েছে 
              এবং mode="popLayout" দেওয়া হয়েছে।
          */}
          <AnimatePresence mode="popLayout">
            {currentProjects.map((project) => (
              <motion.div
                key={project.id} // key must be unique
                layout // layout প্রপসটি দিলে কার্ডগুলো সুন্দরভাবে পজিশন চেঞ্জ করবে
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative bg-[#16161a] rounded-2xl border border-gray-800/50 overflow-hidden hover:border-purple-500/40 transition-all duration-500 shadow-2xl flex flex-col h-full"
              >
                {/* Project Image Wrapper */}
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0a0a0c]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-xl hover:bg-purple-500 hover:text-white transition-all shadow-lg active:scale-90">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    )}
                    {project.codeLink && (
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 text-white rounded-xl hover:bg-purple-500 transition-all shadow-lg border border-gray-700 active:scale-90">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-5 flex flex-col grow">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-1">{project.title}</h3>
                  <p className="text-gray-500 text-xs mt-2 line-clamp-2 leading-relaxed grow">{project.description}</p>
                  
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="text-[9px] uppercase tracking-tighter font-black px-2 py-1 bg-white/5 text-gray-400 border border-white/10 rounded-md group-hover:border-purple-500/30 group-hover:text-purple-400 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-20 gap-3">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all ${currentPage === 1 ? 'border-gray-800 text-gray-700 cursor-not-allowed' : 'border-gray-700 text-white hover:bg-purple-500 hover:border-purple-500 active:scale-95'}`}
            >
              ←
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-12 h-12 rounded-xl font-black text-sm transition-all ${currentPage === i + 1 ? 'bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' : 'bg-gray-900 text-gray-500 hover:text-white border border-gray-800'}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all ${currentPage === totalPages ? 'border-gray-800 text-gray-700 cursor-not-allowed' : 'border-gray-700 text-white hover:bg-purple-500 hover:border-purple-500 active:scale-95'}`}
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}