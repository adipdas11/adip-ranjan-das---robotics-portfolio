import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology in Electronics and Communication',
    institution: 'KIIT University',
    location: 'Bhubaneswar, India',
    period: '2016 - 2020',
    description: 'Foundation in electronics, embedded systems, and signal processing. Active member of the robotics society.',
    details: ['Embedded Systems', 'Microcontrollers', 'Signal Processing'],
  },
  {
    degree: 'MSc in Robotics',
    institution: 'University of Bristol',
    location: 'Bristol, United Kingdom',
    period: '2021 - 2022',
    description: 'Specialized in robot control systems, computer vision, and autonomous navigation. Graduated with Distinction. Recipient of the Bristol Plus Award.',
    details: ['ROS1/2', 'Computer Vision', 'Control Systems'],
  },
  {
    degree: 'PhD in Robotics and Autonomous Systems',
    institution: 'Heriot-Watt University',
    location: 'Edinburgh, United Kingdom',
    period: '2022 - Present',
    description: 'Research focusing on advanced robotic manipulation, dual-arm coordination, and human-robot interaction.',
    details: ['Robotic Manipulation', 'Deep Learning', 'Human-Robot Collaboration'],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-brand-primary uppercase tracking-[0.3em] mb-4">03. Academic Journey</h2>
          <h3 className="text-4xl font-bold tracking-tight">Education</h3>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

          {education.map((edu, idx) => (
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

              <div className="glass p-8 rounded-2xl border-white/5 hover:border-brand-primary/20 transition-all duration-500 group bg-gradient-to-br from-white/[0.03] to-transparent">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-brand-primary mb-2">
                      <GraduationCap className="w-5 h-5" />
                      <h4 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">{edu.degree}</h4>
                    </div>
                    <p className="text-neutral-300 font-medium text-lg">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-primary uppercase tracking-widest">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      <MapPin className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-400 mb-8 leading-relaxed text-sm md:text-base">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 px-3 py-1 rounded bg-brand-primary/5 border border-brand-primary/10 text-[10px] font-mono text-brand-primary uppercase tracking-tighter">
                      <Award className="w-3 h-3" />
                      {detail}
                    </div>
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
