'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FilterTabs, type FilterValue } from '@/components/projects/FilterTabs'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectModal } from '@/components/projects/ProjectModal'
import { projects } from '@/data/projects'
import type { Project } from '@/types'

export function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<FilterValue>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category.includes(filter))

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title={t('projects.title')}
            subtitle={t('projects.subtitle')}
          />
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8">
            <FilterTabs active={filter} onChange={setFilter} />
          </div>
        </ScrollReveal>

        {/* Project grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
