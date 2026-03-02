'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { translations } from '@/data/translations'
import type { Language } from '@/types'

interface LanguageContextType {
  lang: Language
  toggle: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggle: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'))
  }, [])

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key]
      if (!entry) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Missing translation key: "${key}"`)
        }
        return key
      }
      return entry[lang]
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
