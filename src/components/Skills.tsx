import { motion } from 'motion/react';
import { Code, Cpu, Database, Layout, Monitor, Settings } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming',
    icon: Code,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C++', level: 85 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    title: 'Frameworks',
    icon: Cpu,
    skills: [
      { name: 'ROS1', level: 90 },
      { name: 'ROS2', level: 80 },
      { name: 'Moveit2', level: 85 },
    ],
  },
  {
    title: 'CAD & Design',
    icon: Settings,
    skills: [
      { name: 'Fusion360', level: 95 },
      { name: 'Blender', level: 70 },
      { name: 'OnShape', level: 75 },
    ],
  },
  {
    title: 'Simulators',
    icon: Monitor,
    skills: [
      { name: 'ISAAC Sim', level: 85 },
      { name: 'Gazebo', level: 90 },
    ],
  },
  {
    title: 'Front-End',
    icon: Layout,
    skills: [
      { name: 'Tkinter', level: 90 },
      { name: 'PyQT5', level: 85 },
      { name: 'HTML/CSS', level: 80 },
    ],
  },
  {
    title: 'Machine Learning',
    icon: Database,
    skills: [
      { name: 'Scikit Learn', level: 85 },
      { name: 'Computer Vision', level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-brand-primary uppercase tracking-[0.3em] mb-4">04. Capabilities</h2>
          <h3 className="text-4xl font-bold tracking-tight">Technical Arsenal</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-brand-primary/20 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2.5 rounded-xl bg-brand-primary/5 border border-brand-primary/10 group-hover:bg-brand-primary/10 transition-colors">
                  <group.icon className="w-5 h-5 text-brand-primary" />
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">{group.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-neutral-400 hover:text-brand-primary hover:border-brand-primary/30 transition-all cursor-default"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
