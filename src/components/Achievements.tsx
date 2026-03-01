import { motion } from 'motion/react';
import { Award, CheckCircle, ShieldCheck, Trophy } from 'lucide-react';

const achievements = [
  {
    title: 'Bristol Plus Award',
    issuer: 'University of Bristol',
    description: 'Recognized for commitment to personal and professional development, leadership, and community impact.',
    icon: Trophy,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
  {
    title: 'ROS2 Certification',
    issuer: 'RigBetel Labs',
    description: 'Advanced robotics concepts including navigation, perception, and control in ROS2.',
    icon: ShieldCheck,
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
  },
  {
    title: 'ROS1 Certification',
    issuer: 'RigBetel Labs',
    description: 'Foundational skills in robotics development, navigation, and control using ROS1.',
    icon: ShieldCheck,
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/10',
  },
  {
    title: 'Fusion360 Certification',
    issuer: 'LinkedIn Learning',
    description: 'Proficiency in CAD design, assembly, and engineering drawings for robotic systems.',
    icon: CheckCircle,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    title: 'Python Certification',
    issuer: 'LinkedIn Learning',
    description: 'Demonstrated expertise in Python fundamentals, syntax, and libraries.',
    icon: CheckCircle,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-brand-primary uppercase tracking-[0.3em] mb-4">05. Recognition</h2>
          <h3 className="text-4xl font-bold tracking-tight">Achievements & Certifications</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border-white/5 hover:border-brand-primary/20 transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${item.bg} border border-white/5 group-hover:border-brand-primary/20 transition-colors`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">{item.title}</h4>
                  <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">{item.issuer}</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
