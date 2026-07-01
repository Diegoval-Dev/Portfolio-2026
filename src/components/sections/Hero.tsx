'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { GradientText } from '@/components/ui/GradientText'
import { TypewriterText } from '@/components/ui/TypewriterText'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Hero() {
  const { t } = useLanguage()

  const roles = t('hero.roles').split('|')

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background glow blobs */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.18), transparent)',
          filter: 'blur(0px)',
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] pointer-events-none animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-accent-cyan text-sm md:text-base tracking-widest uppercase"
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.05]"
          >
            {t('hero.name')}
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={itemVariants} className="h-10 md:h-12">
            <TypewriterText
              texts={roles}
              className="text-2xl md:text-3xl font-semibold text-gradient"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            {t('hero.description')}
          </motion.p>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <a
              href="https://github.com/Diegoval-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-text-muted hover:text-text-primary hover:border-[rgba(99,102,241,0.4)] hover:bg-[rgba(99,102,241,0.08)] transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/diegoval-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-text-muted hover:text-text-primary hover:border-[rgba(99,102,241,0.4)] hover:bg-[rgba(99,102,241,0.08)] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:diegopablo012@gmail.com"
              className="p-2.5 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-text-muted hover:text-text-primary hover:border-[rgba(99,102,241,0.4)] hover:bg-[rgba(99,102,241,0.08)] transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-indigo to-accent-violet text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-glow-sm hover:-translate-y-0.5"
            >
              {t('hero.cta.projects')}
            </button>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[rgba(99,102,241,0.4)] text-text-primary font-semibold text-sm transition-all duration-200 hover:bg-[rgba(99,102,241,0.1)] hover:-translate-y-0.5"
            >
              {t('hero.cta.contact')}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-faint hover:text-text-muted transition-colors animate-bounce"
        aria-label={t('hero.scroll')}
      >
        <span className="text-xs font-mono tracking-wider">{t('hero.scroll')}</span>
        <ArrowDown size={16} />
      </button>
    </section>
  )
}
