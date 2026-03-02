import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'accent' | 'cyan'
}

export function Tag({ children, className, variant = 'default' }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-xs px-2.5 py-1 rounded-md',
        variant === 'default' &&
          'bg-[rgba(255,255,255,0.06)] text-text-muted border border-[rgba(255,255,255,0.08)]',
        variant === 'accent' &&
          'bg-[rgba(99,102,241,0.15)] text-accent-indigo border border-[rgba(99,102,241,0.25)]',
        variant === 'cyan' &&
          'bg-[rgba(6,182,212,0.1)] text-accent-cyan border border-[rgba(6,182,212,0.2)]',
        className
      )}
    >
      {children}
    </span>
  )
}
