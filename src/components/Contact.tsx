import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-brand-primary uppercase tracking-[0.3em] mb-4">05. Connection</h2>
            <h3 className="text-4xl font-bold mb-8 tracking-tight">Let's build the <span className="text-brand-primary">Future</span> together.</h3>
            <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:adipdas11@gmail.com"
                className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5 hover:border-brand-primary/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-lg font-bold text-white">adipdas11@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5">
                <div className="p-3 rounded-xl bg-brand-secondary/10">
                  <MessageSquare className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold text-white">Edinburgh, United Kingdom</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-3xl border-white/5 relative"
          >
            <form
              action="https://formspree.io/f/xwvnjavk"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary/50 text-white transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary/50 text-white transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary/50 text-white transition-all resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className={`w-full py-4 text-white rounded-xl font-bold tracking-tight transition-all flex items-center justify-center gap-2 ${status === 'success'
                  ? 'bg-green-500/80'
                  : status === 'error'
                    ? 'bg-red-500/80'
                    : 'bg-brand-primary hover:bg-brand-secondary shadow-lg shadow-brand-primary/20'
                  } ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
              >
                {status === 'submitting' ? (
                  <span>Transmitting...</span>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Transmission Successful!</span>
                  </>
                ) : status === 'error' ? (
                  <span>Transmission Failed. Try Again</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Transmission</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
