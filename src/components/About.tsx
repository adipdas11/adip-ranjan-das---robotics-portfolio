import { motion } from 'motion/react';
import { Bot, Code, Cpu, Layers } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-brand-primary uppercase tracking-[0.3em] mb-4">01. Background</h2>
            <h3 className="text-4xl font-bold mb-8 tracking-tight">
              Bridging the gap between <span className="text-brand-primary">Hardware</span> and <span className="text-brand-primary">Intelligence</span>.
            </h3>
            <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
              <p>
                I am a Robotics PhD candidate specializing in robotic manipulation, deep learning, and hardware development.
                With a strong foundation in machine learning and computer vision, I design and implement advanced robotic systems that push the boundaries of innovation.
              </p>
              <p>
                My work focuses on dual-robot manipulation, human-robot collaboration, and applying machine-learning algorithms to solve complex industrial challenges.
                I believe in creating robots that are not just tools, but intelligent partners in our daily lives.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { icon: Bot, label: 'Dual-Robot Manipulation' },
                { icon: Cpu, label: 'Hardware Prototyping' },
                { icon: Code, label: 'Deep Learning' },
                { icon: Layers, label: 'Computer Vision' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
                    <item.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-sm font-medium text-neutral-300">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden p-1 bg-gradient-to-br from-brand-primary/20 via-white/5 to-brand-secondary/20 group">
              <div className="absolute inset-0 bg-bg-dark/40 backdrop-blur-sm z-0" />

              <div className="relative h-full w-full rounded-[22px] overflow-hidden z-10">
                <img
                  src="/Adip.png"
                  alt="Adip Ranjan Das"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />

                {/* Technical HUD Overlays */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-primary/40 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand-secondary/40 rounded-br-xl" />

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/0 via-brand-primary/10 to-brand-primary/0 h-[20%] w-full top-[-20%] animate-[scan_4s_linear_infinite] opacity-0 group-hover:opacity-100 pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest">Identity Verified</span>
                      <span className="text-[8px] font-mono text-neutral-500 uppercase">PhD Candidate #0982-DAS</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-brand-primary/40 rounded-full" />
                      <div className="w-1 h-4 bg-brand-primary/60 rounded-full" />
                      <div className="w-1 h-4 bg-brand-primary rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
