'use client'

import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0

      setScrolled(scrollTop > 20)
      setProgress(Math.min(1, scrollProgress))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrolled, progress }
}
