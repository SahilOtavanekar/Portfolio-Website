import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type ProjectData } from '../../data/projects';
import { ExternalLink, Github, X } from 'lucide-react';

export function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  
  const ref = useRef(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-primary-500 mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all focus-ring ${
                  filter === category
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-8 pb-0 flex-grow">
                  <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/40 rounded-2xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                    <project.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-3 mb-6">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6 pt-0 mt-auto flex justify-between items-center border-t border-slate-100 dark:border-slate-800 mt-6 pt-6">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-semibold focus-ring rounded-lg px-2 py-1 -ml-2 transition-colors"
                  >
                    View Details
                  </button>
                  <div className="flex gap-3 text-slate-400 dark:text-slate-500">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors focus-ring rounded-full p-1">
                      <Github size={20} />
                    </a>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors focus-ring rounded-full p-1">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950/50 sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                    <selectedProject.icon size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white truncate">
                    {selectedProject.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-full transition-colors focus-ring"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-5 sm:p-8 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-8">
                    <section>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Problem Statement</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {selectedProject.problemStatement}
                      </p>
                    </section>
                    
                    <section>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Approach</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {selectedProject.approach}
                      </p>
                    </section>
                    
                    <section>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3">Key Results</h3>
                      <ul className="space-y-2">
                        {selectedProject.keyResults.map((result, i) => (
                          <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                            <span className="text-primary-500 mt-1">•</span>
                            <span className="leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                  
                  <div className="space-y-8 lg:border-l border-slate-100 dark:border-slate-800 lg:pl-10">
                    <section>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </section>
                    
                    <section>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Methods</h3>
                      <div className="flex flex-col gap-2">
                        {selectedProject.techniques.map(tech => (
                          <div key={tech} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 px-4 py-2 flex items-center rounded-xl text-sm text-slate-700 dark:text-slate-300">
                            {tech}
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="pt-6 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex flex-col gap-3">
                        {selectedProject.liveLink && (
                          <a 
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium rounded-xl transition-all shadow-md flex items-center justify-center gap-2 focus-ring"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </a>
                        )}
                        <a 
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white font-medium rounded-xl transition-all shadow-md flex items-center justify-center gap-2 focus-ring"
                        >
                          <Github size={18} />
                          Source Code
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
