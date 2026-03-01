import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Research', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/adipdas11', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/adip-das1998/', label: 'LinkedIn' },
  { icon: GraduationCap, href: 'https://scholar.google.com/citations?hl=en&user=vAY8uB4AAAAJ', label: 'Google Scholar' },
  { icon: Mail, href: 'mailto:adipdas11@gmail.com', label: 'Email' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/Adip.png"
                alt="Adip"
                className="relative w-8 h-8 rounded-full object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xl font-bold font-mono tracking-tighter text-white">
              ADIP<span className="text-brand-primary">.</span>DAS
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-neutral-400 hover:text-brand-primary px-2 py-2 rounded-md text-xs font-medium transition-colors font-mono uppercase tracking-widest"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="h-4 w-px bg-white/10" />

            <div className="flex items-center gap-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="text-neutral-500 hover:text-brand-primary transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden glass"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium font-mono"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
