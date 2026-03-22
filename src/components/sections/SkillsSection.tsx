import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillsData } from '../../data/skills';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <div className="h-1.5 w-24 bg-primary-500 mx-auto rounded-full mb-8" />
          <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit for data manipulation, analysis, and deploying machine learning models.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-medium text-sm rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
