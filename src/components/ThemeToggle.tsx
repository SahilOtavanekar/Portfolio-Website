import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../utils/cn';

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      if ('theme' in localStorage) {
        return localStorage.theme === 'dark';
      }
      // If not in localStorage, check index.html class which we've defaulted to 'dark'
      return document.documentElement.classList.contains('dark') || true;
    }
    return true; // Default to dark on SSR / initial load
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={cn(
        "p-2 rounded-full bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 transition-colors focus-ring cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700",
        className
      )}
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
