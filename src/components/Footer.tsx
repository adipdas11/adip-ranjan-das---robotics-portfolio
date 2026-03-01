import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src="Adip.png"
              alt="Adip"
              className="w-8 h-8 rounded-full object-cover border border-white/10"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg font-bold font-mono tracking-tighter text-white">
              ADIP<span className="text-brand-primary">.</span>DAS
            </span>
          </div>

          <div className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Adip Ranjan Das. PhD Robotics Candidate.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/adip-das1998/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-brand-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/adipdas11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-brand-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://scholar.google.com/citations?hl=en&user=vAY8uB4AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-brand-primary transition-colors"
            >
              <GraduationCap className="w-5 h-5" />
            </a>
            <a
              href="mailto:adipdas11@gmail.com"
              className="text-neutral-500 hover:text-brand-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
