'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const directionMap = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { y: 0, x: 20 },
    right: { y: 0, x: -20 },
    none: { y: 0, x: 0 },
  }

  const { x, y } = directionMap[direction]

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
