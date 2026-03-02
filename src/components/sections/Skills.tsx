'use client'

import { useLanguage } from '@/context/LanguageContext'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Tag } from '@/components/ui/Tag'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { skillCategories } from '@/data/skills'

export function Skills() {
  const { t, lang } = useLanguage()

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title={t('skills.title')}
            subtitle={t('skills.subtitle')}
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <ScrollReveal key={cat.id} delay={idx * 0.06}>
              <GlassCard hoverable innerClassName="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" role="img" aria-label={cat.label[lang]}>
                    {cat.icon}
                  </span>
                  <h3 className="font-semibold text-text-primary text-sm">
                    {cat.label[lang]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
