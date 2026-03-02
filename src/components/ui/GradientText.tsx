import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: 'indigo-violet' | 'indigo-cyan'
}

export function GradientText({
  children,
  className,
  variant = 'indigo-violet',
}: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-clip-text text-transparent',
        variant === 'indigo-violet'
          ? 'bg-gradient-to-r from-accent-indigo to-accent-violet'
          : 'bg-gradient-to-r from-accent-indigo to-accent-cyan',
        className
      )}
    >
      {children}
    </span>
  )
}
