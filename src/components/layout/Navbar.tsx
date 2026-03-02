'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useLanguage } from '@/context/LanguageContext'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.education', href: '#education' },
  { key: 'nav.contact', href: '#contact' },
]

export function Navbar() {
  const { scrolled } = useScrollProgress()
  const activeSection = useActiveSection()
  const { lang, toggle, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass border-b border-[rgba(255,255,255,0.06)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-mono text-sm font-semibold text-text-primary hover:text-accent-indigo transition-colors"
            >
              <span className="text-accent-indigo">{'<'}</span>
              DPV
              <span className="text-accent-indigo">{' />'}</span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map(({ key, href }) => {
                const sectionId = href.slice(1)
                const isActive = activeSection === sectionId
                return (
                  <button
                    key={key}
                    onClick={() => handleNavClick(href)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-sm transition-all duration-200',
                      isActive
                        ? 'text-text-primary bg-[rgba(99,102,241,0.15)] border border-[rgba(99,102,241,0.3)]'
                        : 'text-text-muted hover:text-text-primary hover:bg-[rgba(255,255,255,0.05)]'
                    )}
                  >
                    {t(key)}
                  </button>
                )
              })}
            </nav>

            {/* Right side: lang toggle + mobile menu */}
            <div className="flex items-center gap-3">
              {/* Language toggle */}
              <button
                onClick={toggle}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-text-muted hover:text-text-primary hover:border-[rgba(99,102,241,0.4)] transition-all duration-200 text-sm font-mono"
                aria-label="Toggle language"
              >
                <span className={lang === 'en' ? 'text-text-primary' : 'text-text-faint'}>EN</span>
                <span className="text-text-faint">/</span>
                <span className={lang === 'es' ? 'text-text-primary' : 'text-text-faint'}>ES</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-bg-base/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className={cn(
            'absolute top-16 left-0 right-0 glass border-b border-[rgba(255,255,255,0.06)] p-4 transition-transform duration-300',
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          )}
        >
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map(({ key, href }) => {
              const sectionId = href.slice(1)
              const isActive = activeSection === sectionId
              return (
                <button
                  key={key}
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    'px-4 py-2.5 rounded-lg text-sm text-left transition-all duration-200',
                    isActive
                      ? 'text-text-primary bg-[rgba(99,102,241,0.15)] border border-[rgba(99,102,241,0.3)]'
                      : 'text-text-muted hover:text-text-primary hover:bg-[rgba(255,255,255,0.05)]'
                  )}
                >
                  {t(key)}
                </button>
              )
            })}
          </nav>
          {/* Language toggle mobile */}
          <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.06)]">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-text-muted text-sm font-mono"
            >
              <span className={lang === 'en' ? 'text-text-primary' : 'text-text-faint'}>EN</span>
              <span className="text-text-faint">/</span>
              <span className={lang === 'es' ? 'text-text-primary' : 'text-text-faint'}>ES</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
