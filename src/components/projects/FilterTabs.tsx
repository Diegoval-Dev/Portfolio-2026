'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/LanguageContext'
import type { ProjectCategory } from '@/types'

type FilterValue = 'All' | ProjectCategory

const FILTERS: { value: FilterValue; key: string }[] = [
  { value: 'All', key: 'projects.filter.all' },
  { value: 'AI', key: 'projects.filter.ai' },
  { value: 'Backend', key: 'projects.filter.backend' },
  { value: 'Systems', key: 'projects.filter.systems' },
  { value: 'Compilers', key: 'projects.filter.compilers' },
  { value: 'Cloud', key: 'projects.filter.cloud' },
]

interface FilterTabsProps {
  active: FilterValue
  onChange: (value: FilterValue) => void
}

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  const { t } = useLanguage()

  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
      {FILTERS.map(({ value, key }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={cn(
            'flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            active === value
              ? 'bg-gradient-to-r from-accent-indigo to-accent-violet text-white shadow-glow-sm'
              : 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-text-muted hover:text-text-primary hover:border-[rgba(99,102,241,0.3)]'
          )}
        >
          {t(key)}
        </button>
      ))}
    </div>
  )
}

export type { FilterValue }
