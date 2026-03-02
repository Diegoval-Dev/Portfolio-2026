'use client'

import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { education } from '@/data/experience'

export function Education() {
  const { t, lang } = useLanguage()

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title={t('education.title')}
            subtitle={t('education.subtitle')}
          />
        </ScrollReveal>

        <div className="mt-12 space-y-6">
          {education.map((edu, idx) => (
            <ScrollReveal key={edu.id} delay={idx * 0.1}>
              <GlassCard gradient hoverable innerClassName="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[rgba(99,102,241,0.15)] border border-[rgba(99,102,241,0.3)] shrink-0">
                      <GraduationCap size={22} className="text-accent-indigo" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {edu.degree[lang]}
                      </h3>
                      <p className="text-accent-indigo font-semibold">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1 shrink-0 ml-14 sm:ml-0">
                    <div className="flex items-center gap-1.5 text-text-muted text-sm">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-faint text-sm">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-text-muted mb-4 ml-0 sm:ml-14">{edu.description[lang]}</p>

                <ul className="space-y-2 ml-0 sm:ml-14">
                  {edu.highlights[lang].map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-violet shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
