'use client'

import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Tag } from '@/components/ui/Tag'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { experiences } from '@/data/experience'

export function Experience() {
  const { t, lang } = useLanguage()

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title={t('experience.title')}
            subtitle={t('experience.subtitle')}
          />
        </ScrollReveal>

        <div className="mt-12 space-y-6 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-indigo/60 via-accent-violet/30 to-transparent hidden md:block" />

          {experiences.map((exp, idx) => (
            <ScrollReveal key={exp.id} delay={idx * 0.1}>
              <div className="md:pl-16 relative">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-accent-indigo border-2 border-bg-base shadow-glow-sm hidden md:block" />

                <GlassCard gradient hoverable innerClassName="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {exp.role[lang]}
                      </h3>
                      <div className="flex items-center gap-2 text-text-muted">
                        <Building2 size={15} className="text-accent-indigo shrink-0" />
                        <span className="font-semibold text-accent-indigo">{exp.company}</span>
                        <span className="text-text-faint">·</span>
                        <span className="text-sm">{exp.type[lang]}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5 text-text-muted text-sm">
                        <Calendar size={14} className="shrink-0" />
                        <span>{exp.period[lang]}</span>
                        {exp.current && (
                          <span className="ml-2 px-2 py-0.5 rounded-full bg-[rgba(6,182,212,0.15)] border border-[rgba(6,182,212,0.3)] text-accent-cyan text-xs font-mono">
                            {t('experience.present')}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-text-faint text-sm">
                        <MapPin size={14} className="shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-muted mb-4">{exp.description[lang]}</p>

                  <ul className="space-y-2 mb-5">
                    {exp.achievements[lang].map((ach, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-muted text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-indigo shrink-0" />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
