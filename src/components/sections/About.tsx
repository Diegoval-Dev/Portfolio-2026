'use client'

import Image from 'next/image'
import { MapPin, Zap } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Tag } from '@/components/ui/Tag'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function About() {
  const { t } = useLanguage()

  const traits = t('about.traits').split('|')

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title={t('about.title')}
            subtitle={t('about.subtitle')}
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Gradient border wrapper */}
                <div className="p-px rounded-2xl bg-gradient-to-br from-[rgba(99,102,241,0.5)] via-[rgba(139,92,246,0.3)] to-[rgba(6,182,212,0.2)]">
                  <div className="rounded-[15px] overflow-hidden w-64 h-64 md:w-72 md:h-72 bg-bg-card">
                    <Image
                      src="/PP.jpeg"
                      alt="Diego Pablo Valenzuela Palacios"
                      width={288}
                      height={288}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Glow behind */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl -z-10 blur-2xl opacity-40"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)',
                  }}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Bio content */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="space-y-5">
              <p className="text-text-muted text-lg leading-relaxed">{t('about.bio1')}</p>
              <p className="text-text-muted text-lg leading-relaxed">{t('about.bio2')}</p>

              {/* Location & status */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <MapPin size={16} className="text-accent-indigo shrink-0" />
                  <span>{t('about.location')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap size={16} className="text-accent-cyan shrink-0" />
                  <span className="text-accent-cyan">{t('about.status')}</span>
                </div>
              </div>

              {/* Traits */}
              <div className="flex flex-wrap gap-2 pt-2">
                {traits.map((trait) => (
                  <Tag key={trait} variant="accent">
                    {trait}
                  </Tag>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
