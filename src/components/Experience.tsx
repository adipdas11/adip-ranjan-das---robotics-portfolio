import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Robotics Engineer',
    company: 'GI Healthcare Industries Ltd.',
    location: 'Bristol, UK',
    period: '2022 - Present',
    description: 'Designed and developed a pioneering Autonomous Cooking Robot prototype using ROS, sensor integration, Python, and C++. Overseeing both backend and frontend for seamless functionality.',
    skills: ['Python', 'C++', 'Fusion360', 'Tkinter'],
  },
  {
    title: 'Robotics Intern',
    company: 'Fortrax Robotics',
    location: 'Hyderabad, India',
    period: '2022 - 2022',
    description: 'End-to-end implementation of ROS1 navigation and MoveIt on a custom-built Autonomous Mobile Robot (AMR) with an attached 3DOF manipulator.',
    skills: ['ROS', 'Moveit', 'SLAM'],
  },
  {
    title: 'Robotics Intern',
    company: "Rigbetel's Lab",
    location: 'Pune, India',
    period: '2022 - 2022',
    description: 'Independently developed a complete, simulated Autonomous Waiter Robot from start to finish. Designing the robot in Fusion360, implementing the ROS1 navigation stack, and building a simulated environment in Gazebo.',
    skills: ['ROS', 'SLAM', 'Fusion360', 'PyQT5', 'Gazebo'],
  },
  {
    title: 'Software Engineer',
    company: 'Accenture Solutions Pvt. Ltd.',
    location: 'Bangalore, India',
    period: '2020 - 2022',
    description: 'Developed and implemented automation frameworks utilizing Selenium. Played a pivotal role in designing and executing automated test scenarios.',
    skills: ['Java', 'Selenium', 'Cucumber Framework'],
  },
  {
    title: 'Machine Learning Intern',
    company: 'HighRadius Corporation',
    location: 'Bhubaneswar, India',
    period: '2019 - 2020',
    description: 'Conducted comprehensive experimentation on diverse machine learning algorithms, utilizing the Scikit Learn library. Proficiently applied feature extraction and creation techniques.',
    skills: ['Machine Learning', 'Scikit Learn', 'Feature Extraction'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-brand-primary uppercase tracking-[0.3em] mb-4">02. Career Path</h2>
          <h3 className="text-4xl font-bold tracking-tight">Professional Experience</h3>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-0 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-brand-primary z-10 hidden md:block" />

              <div className="glass p-8 rounded-2xl border-white/5 hover:border-brand-primary/20 transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors mb-1">{exp.title}</h4>
                    <p className="text-neutral-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">{exp.period}</span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{exp.location}</span>
                  </div>
                </div>

                <p className="text-neutral-400 mb-8 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded bg-white/5 text-[10px] font-mono text-neutral-400 border border-white/5 uppercase tracking-tighter">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
