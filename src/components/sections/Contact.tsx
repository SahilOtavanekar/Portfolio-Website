import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-white mb-6">Let's Connect</h2>
        <p className="text-slate-400 max-w-xl text-center mb-10 text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is open!
        </p>
        
        <div className="flex gap-6 mb-12">
          <a
            href="mailto:sahilotavanekar29@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl transition-colors font-medium focus-ring"
          >
            <Mail size={20} />
            Email Me
          </a>
        </div>
        
        <div className="flex gap-8 mb-8 border-t border-slate-800 pt-8 w-full max-w-sm justify-center">
          <a href="https://github.com/SahilOtavanekar" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 focus-ring rounded-full">
            <Github size={28} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/sahil-otavanekar-48aa4a272/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 focus-ring rounded-full">
            <Linkedin size={28} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Sahil Otavanekar. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
