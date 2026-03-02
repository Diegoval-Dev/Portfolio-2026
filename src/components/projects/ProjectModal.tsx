'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Cloud, Star } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const categoryColors: Record<string, string> = {
  AI: 'text-accent-violet border-[rgba(139,92,246,0.4)] bg-[rgba(139,92,246,0.1)]',
  Backend: 'text-accent-cyan border-[rgba(6,182,212,0.4)] bg-[rgba(6,182,212,0.1)]',
  Systems: 'text-orange-400 border-[rgba(251,146,60,0.4)] bg-[rgba(251,146,60,0.1)]',
  Compilers: 'text-yellow-400 border-[rgba(250,204,21,0.4)] bg-[rgba(250,204,21,0.1)]',
  Cloud: 'text-blue-400 border-[rgba(96,165,250,0.4)] bg-[rgba(96,165,250,0.1)]',
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, lang } = useLanguage()

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full sm:max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl
                bg-bg-card2 border border-[rgba(255,255,255,0.08)] shadow-[0_-8px_60px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 pb-4 bg-bg-card2 border-b border-[rgba(255,255,255,0.06)]">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className={cn(
                          'inline-block font-mono text-[10px] px-2 py-0.5 rounded border',
                          categoryColors[cat] ?? 'text-text-muted border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)]'
                        )}
                      >
                        {cat}
                      </span>
                    ))}
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded border border-[rgba(250,204,21,0.4)] bg-[rgba(250,204,21,0.08)] text-yellow-400">
                        <Star size={9} />
                        {t('projects.featured')}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
                  <p className="font-mono text-xs text-text-faint mt-1">{project.year}</p>
                </div>
                <button
                  onClick={onClose}
                  className="shrink-0 p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-[rgba(255,255,255,0.06)] transition-all"
                  aria-label={t('projects.close')}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                {/* Long description */}
                <p className="text-text-muted leading-relaxed">{project.longDesc[lang]}</p>

                {/* Tags */}
                <div>
                  <h3 className="text-xs font-mono text-text-faint uppercase tracking-wider mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.noRepo ? (
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[rgba(96,165,250,0.1)] border border-[rgba(96,165,250,0.3)] text-blue-400 text-sm font-medium">
                      <Cloud size={16} />
                      {t('projects.no_repo')}
                    </div>
                  ) : project.github ? (
                    <a
                      href={`https://github.com/${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-indigo to-accent-violet text-white text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <Github size={16} />
                      {t('projects.view_github')}
                      <ExternalLink size={14} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
