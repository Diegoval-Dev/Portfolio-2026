'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  texts: string[]
  className?: string
  speed?: number
  pause?: number
}

export function TypewriterText({
  texts,
  className,
  speed = 80,
  pause = 2000,
}: TypewriterTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = texts[currentIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pause)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(fullText.slice(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts, speed, pause])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse ml-0.5 text-accent-indigo">|</span>
    </span>
  )
}
