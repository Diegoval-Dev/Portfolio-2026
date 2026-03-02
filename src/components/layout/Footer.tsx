'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-8 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-faint text-sm">
            © {new Date().getFullYear()} Diego Pablo Valenzuela Palacios.{' '}
            {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Diegoval-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-faint hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/diego-valenzuela-palacios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-faint hover:text-text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:diegopablo012@gmail.com"
              className="text-text-faint hover:text-text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
