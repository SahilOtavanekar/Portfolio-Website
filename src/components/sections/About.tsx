import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Database, BrainCircuit, Code } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const introVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial="hidden"
            animate={controls}
            variants={introVariants}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.2 } } }}
            className="h-1.5 w-24 bg-primary-500 mx-auto rounded-full mb-8"
          />
          <motion.p 
            initial="hidden"
            animate={controls}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.3 } } }}
            className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            I am a Data Science student passionate about turning raw data into actionable insights. 
            My focus lies at the intersection of machine learning, analytics, and software engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.4 } } }}
            className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-800 focus-ring"
            tabIndex={0}
          >
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mb-6">
              <BrainCircuit className="text-primary-600 dark:text-primary-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Machine Learning</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Building predictive models and intelligent algorithms to uncover patterns and anticipate future trends.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={controls}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.6 } } }}
            className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-800 focus-ring"
            tabIndex={0}
          >
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mb-6">
              <Database className="text-primary-600 dark:text-primary-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Data Analytics</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Transforming complex datasets into clear, interactive dashboards that drive strategic decision-making.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={controls}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.8 } } }}
            className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-800 focus-ring"
            tabIndex={0}
          >
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mb-6">
              <Code className="text-primary-600 dark:text-primary-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Software Engineering</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Deploying robust, scalable end-to-end solutions combining data science models with modern web architectures.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
