'use client'

import { Github, ExternalLink, Star, Cloud } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

const categoryColors: Record<string, string> = {
  AI: 'text-accent-violet border-[rgba(139,92,246,0.4)] bg-[rgba(139,92,246,0.1)]',
  Backend: 'text-accent-cyan border-[rgba(6,182,212,0.4)] bg-[rgba(6,182,212,0.1)]',
  Systems: 'text-orange-400 border-[rgba(251,146,60,0.4)] bg-[rgba(251,146,60,0.1)]',
  Compilers: 'text-yellow-400 border-[rgba(250,204,21,0.4)] bg-[rgba(250,204,21,0.1)]',
  Cloud: 'text-blue-400 border-[rgba(96,165,250,0.4)] bg-[rgba(96,165,250,0.1)]',
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { t, lang } = useLanguage()

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      className="group relative rounded-2xl p-px cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-indigo/70
        bg-[rgba(255,255,255,0.06)]
        hover:bg-gradient-to-br hover:from-[rgba(99,102,241,0.4)] hover:via-[rgba(139,92,246,0.2)] hover:to-[rgba(6,182,212,0.1)]
        transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
    >
      <div className="rounded-[15px] bg-bg-card p-5 h-full flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1.5">
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
            <h3 className="font-bold text-text-primary text-base leading-tight group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>

          {/* GitHub / No Repo icon */}
          {project.noRepo ? (
            <div
              className="shrink-0 p-2 rounded-lg bg-[rgba(255,255,255,0.04)] text-text-faint"
              title={t('projects.no_repo')}
            >
              <Cloud size={16} />
            </div>
          ) : project.github ? (
            <a
              href={`https://github.com/${project.github}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 p-2 rounded-lg bg-[rgba(255,255,255,0.04)] text-text-faint hover:text-text-primary hover:bg-[rgba(99,102,241,0.1)] transition-all duration-200"
              aria-label={`GitHub: ${project.title}`}
            >
              <Github size={16} />
            </a>
          ) : null}
        </div>

        {/* Description */}
        <p className="text-text-muted text-sm leading-relaxed flex-1">
          {project.shortDesc[lang]}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
          {project.tags.length > 5 && (
            <span className="text-text-faint text-xs py-1">+{project.tags.length - 5}</span>
          )}
        </div>

        {/* Year + View details hint */}
        <div className="flex items-center justify-between pt-1 border-t border-[rgba(255,255,255,0.05)]">
          <span className="font-mono text-xs text-text-faint">{project.year}</span>
          <span className="text-xs text-text-faint group-hover:text-accent-indigo transition-colors flex items-center gap-1">
            {t('projects.view_details')}
            <ExternalLink size={11} />
          </span>
        </div>
      </div>
    </div>
  )
}
