import { cn } from '@/lib/utils'
import { GradientText } from './GradientText'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  title,
  subtitle,
  className,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
        <GradientText>{title}</GradientText>
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg">{subtitle}</p>
      )}
      <div
        className={cn(
          'mt-4 h-px bg-gradient-to-r from-accent-indigo/50 via-accent-violet/30 to-transparent',
          align === 'center' ? 'mx-auto max-w-[120px]' : 'max-w-[80px]'
        )}
      />
    </div>
  )
}
