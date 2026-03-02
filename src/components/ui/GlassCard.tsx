import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  hoverable?: boolean
  gradient?: boolean
}

export function GlassCard({
  children,
  className,
  innerClassName,
  hoverable = false,
  gradient = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl p-px',
        gradient
          ? 'bg-gradient-to-br from-[rgba(99,102,241,0.4)] via-[rgba(139,92,246,0.2)] to-[rgba(6,182,212,0.1)]'
          : 'bg-[rgba(255,255,255,0.06)]',
        hoverable && 'transition-all duration-300 hover:shadow-card-hover hover:bg-gradient-to-br hover:from-[rgba(99,102,241,0.4)] hover:via-[rgba(139,92,246,0.2)] hover:to-[rgba(6,182,212,0.1)]',
        className
      )}
    >
      <div
        className={cn(
          'rounded-[15px] bg-bg-card h-full w-full',
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  )
}
