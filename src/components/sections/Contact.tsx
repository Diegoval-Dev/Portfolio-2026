'use client'

import { useState } from 'react'
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const EMAIL = 'diegopablo012@gmail.com'

export function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <GlassCard gradient innerClassName="p-8 md:p-12 mt-12">
            <div className="flex flex-col items-center text-center gap-6">
              {/* Email */}
              <div className="flex flex-col items-center gap-3">
                <p className="text-text-muted text-sm">{t('contact.email_cta')}</p>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-xl font-semibold text-text-primary hover:text-accent-indigo transition-colors"
                  >
                    {EMAIL}
                  </a>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg text-text-faint hover:text-text-primary hover:bg-[rgba(255,255,255,0.06)] transition-all"
                    aria-label={copied ? t('contact.copied') : t('contact.copy_email')}
                  >
                    {copied ? (
                      <Check size={16} className="text-accent-cyan" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
                {copied && (
                  <span className="text-xs text-accent-cyan font-mono">{t('contact.copied')}</span>
                )}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 w-full max-w-xs">
                <div className="flex-1 h-px bg-[rgba(255,255,255,0.06)]" />
                <span className="text-text-faint text-xs">{t('contact.or')}</span>
                <div className="flex-1 h-px bg-[rgba(255,255,255,0.06)]" />
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Diegoval-Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-text-muted hover:text-text-primary hover:border-[rgba(99,102,241,0.4)] hover:bg-[rgba(99,102,241,0.08)] transition-all duration-200"
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/diegoval-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-text-muted hover:text-text-primary hover:border-[rgba(99,102,241,0.4)] hover:bg-[rgba(99,102,241,0.08)] transition-all duration-200"
                >
                  <Linkedin size={18} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
