import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900 py-20 md:py-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 opacity-90" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/30 dark:bg-slate-800/50 backdrop-blur-lg border border-white/40 dark:border-slate-700/50 p-6 md:p-12 rounded-3xl shadow-2xl max-w-3xl w-full"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4"
          >
            Portfolio
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Sahil Otavanekar
          </motion.h1>
          
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 font-medium mb-6 flex flex-col sm:flex-row justify-center gap-1 sm:gap-2 items-center"
          >
            <span>Data Scientist</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
            <span>ML Engineer</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Building data-driven solutions and intelligent algorithms to solve complex, real-world problems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium transition-all shadow-lg hover:shadow-primary-500/30 focus-ring"
            >
              View Projects
            </a>
            <div className="flex items-center gap-4 px-6">
              <a href="https://github.com/SahilOtavanekar" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-2 focus-ring rounded-full">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/sahil-otavanekar-48aa4a272/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-2 focus-ring rounded-full">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:sahilotavanekar29@gmail.com" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-2 focus-ring rounded-full">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-slate-400 dark:text-slate-500 text-sm mb-2 font-medium">Scroll down</span>
        <ChevronDown size={24} className="text-slate-400 dark:text-slate-500" />
      </motion.div>
    </section>
  );
}
