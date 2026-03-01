import { motion } from 'motion/react';
import { ChevronDown, Cpu, Database, Terminal, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Suspense, useState, useEffect, useRef } from 'react';
import { cn } from '../utils';

export default function Hero() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-primary/3 rounded-full blur-[150px] animate-pulse delay-1000" />

        {/* Spline 3D Scene - Ghosting technique: disable pointer events during scroll to prevent zoom, enable otherwise for interactivity */}
        <div className={cn(
          "absolute inset-0 opacity-100 scale-125 md:scale-[1.5] z-10 transition-opacity duration-300",
          isScrolling ? "pointer-events-none" : "pointer-events-auto"
        )}>
          <motion.div
            initial={{ scale: 1.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3.0, ease: "easeOut", delay: 0.1 }}
            className="w-full h-full"
          >
            <Suspense fallback={<div className="w-full h-full bg-bg-dark" />}>
              <Spline
                scene="https://prod.spline.design/AhUsaayewF2SmPsG/scene.splinecode"
                className="w-full h-full"
              />
            </Suspense>
          </motion.div>
        </div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        {/* Refined background mask - Positioned between Spline and Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-bg-dark/20 blur-[120px] -z-10 rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
          className="flex flex-col items-center pointer-events-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 relative"
          >
            <div className="absolute -inset-2 bg-brand-primary/20 rounded-full blur-xl animate-pulse" />
            <img
              src="Adip.png"
              alt="Adip Ranjan Das"
              className="relative w-20 h-20 rounded-full border-2 border-white/10 object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-primary"></span>
            </span>
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-[0.2em]">System Status: Operational</span>
          </div>

          <motion.h1
            initial={{ scale: 1.1, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 2.0 }}
            className="text-4xl md:text-7xl font-bold mb-8 tracking-[-0.04em] leading-none"
          >
            ADIP RANJAN <span className="text-brand-primary font-light">DAS</span>
          </motion.h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto mb-12 font-light leading-relaxed tracking-tight">
            PhD Candidate specializing in <span className="text-white">Robotic Manipulation</span>,
            <span className="text-white"> Deep Learning</span>, and
            <span className="text-white"> Hardware Development</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-brand-primary text-white rounded-xl font-bold tracking-tight hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 glass text-white rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all border border-white/5"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-24">
            {[
              { icon: Github, href: 'https://github.com/adipdas11', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/adip-das1998/', label: 'LinkedIn' },
              { icon: GraduationCap, href: 'https://scholar.google.com/citations?hl=en&user=vAY8uB4AAAAJ', label: 'Scholar' },
              { icon: Mail, href: 'mailto:adipdas11@gmail.com', label: 'Email' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-brand-primary/50 group-hover:bg-brand-primary/10 transition-all">
                  <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-brand-primary transition-colors" />
                </div>
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Minimal Technical Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 max-w-3xl mx-auto border-t border-white/5 pt-12 pointer-events-auto"
        >
          {[
            { label: 'Frameworks', value: 'ROS1/2' },
            { label: 'Simulation', value: 'ISAAC/Gazebo' },
            { label: 'Languages', value: 'Python/C++' },
            { label: 'Status', value: 'PhD Research' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start">
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-[0.2em] mb-1">{stat.label}</span>
              <span className="text-sm font-bold text-neutral-300 tracking-tight">{stat.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-brand-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
