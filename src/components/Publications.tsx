import { motion } from 'motion/react';
import { BookOpen, ExternalLink, Quote } from 'lucide-react';

const papers = [
  {
    title: 'Occupational Upper-Limb Exoskeleton for Enhanced Workplace Safety and Human-Robot Interaction',
    journal: 'IEEE Explore',
    year: '2024',
    description: 'Research on a wearable robotic device that assists workers in physically demanding tasks to reduce muscle strain and prevent injuries.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vAY8uB4AAAAJ&citation_for_view=vAY8uB4AAAAJ:9yKSN-GCB0IC',
  },
  {
    title: 'Advanced Control Strategies for Dual-Arm Robotic Manipulation in Dynamic Environments',
    journal: 'Google Scholar',
    year: '2023',
    description: 'Exploring coordinated motion planning and force control for complex manipulation tasks using multiple robotic arms.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vAY8uB4AAAAJ&citation_for_view=vAY8uB4AAAAJ:u5HHmVD_uO8C',
  },
  {
    title: 'Deep Learning Based Perception for Autonomous Mobile Robots in Industrial Settings',
    journal: 'Google Scholar',
    year: '2022',
    description: 'Implementation of real-time object detection and semantic segmentation for reliable AMR navigation in cluttered warehouses.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vAY8uB4AAAAJ&citation_for_view=vAY8uB4AAAAJ:d1gkVwhDpl0C',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 relative overflow-hidden bg-bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-brand-primary uppercase tracking-[0.3em] mb-4">06. Research</h2>
          <h3 className="text-4xl font-bold tracking-tight">Published Papers</h3>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {papers.map((paper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-brand-primary/20 transition-all duration-500 group relative bg-gradient-to-br from-white/[0.03] to-transparent"
            >
              <div className="absolute top-8 right-8 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/10 h-fit">
                  <BookOpen className="w-6 h-6 text-brand-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest px-2 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20">
                      {paper.year}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      {paper.journal}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                    {paper.title}
                  </h4>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-2xl">
                    {paper.description}
                  </p>
                  
                  <a 
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-brand-primary hover:text-brand-secondary transition-colors uppercase tracking-widest"
                  >
                    <span>View Publication</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
