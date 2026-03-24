"use client"

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MainLayout } from '@/components/main-layout'
import { Breadcrumb } from '@/components/breadcrumb'
import { ProjectCard } from '@/components/project-card'
import { PROJECTS } from '@/data/projects'
import { Search, X } from 'lucide-react'

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const filters = [
    { id: 'level-0', label: 'Level 0', category: 'Level' },
    { id: 'level-1', label: 'Level 1', category: 'Level' },
    { id: 'level-2', label: 'Level 2', category: 'Level' },
    { id: 'level-3', label: 'Level 3', category: 'Level' },
    { id: 'level-4', label: 'Level 4', category: 'Level' },
    { id: 'level-5', label: 'Level 5', category: 'Level' },
    { id: 'beginner', label: 'Beginner', category: 'Difficulty' },
    { id: 'intermediate', label: 'Intermediate', category: 'Difficulty' },
    { id: 'advanced', label: 'Advanced', category: 'Difficulty' },
    { id: 'complete', label: 'Complete', category: 'Status' },
    { id: 'in-progress', label: 'In Progress', category: 'Status' },
    { id: 'starter', label: 'Starter', category: 'Status' },
  ]

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesSearch = searchQuery.toLowerCase() === '' ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      if (selectedFilters.length === 0) return matchesSearch

      const matchesFilters = selectedFilters.some(filter => {
        if (filter.startsWith('level-')) {
          const levelNum = parseInt(filter.replace('level-', ''))
          if (Array.isArray(project.level)) {
            return project.level.includes(levelNum)
          }
          return project.level === levelNum
        }
        if (filter === 'beginner' || filter === 'intermediate' || filter === 'advanced') {
          return project.difficulty === filter.charAt(0).toUpperCase() + filter.slice(1)
        }
        if (filter === 'complete' || filter === 'in-progress' || filter === 'starter') {
          const statusMap = {
            'complete': 'Complete',
            'in-progress': 'In Progress',
            'starter': 'Starter'
          }
          return project.status === statusMap[filter as keyof typeof statusMap]
        }
        return true
      })

      return matchesSearch && matchesFilters
    })
  }, [searchQuery, selectedFilters])

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    )
  }

  return (
    <MainLayout>
      <div className="px-6 py-8 space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Projects' }]} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4">130+ Projects</h1>
          <p className="text-xl text-muted-foreground">
            Real-world projects spanning all levels, from foundations to specializations.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects, tags, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card/50 backdrop-blur-md focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="space-y-3">
            {['Level', 'Difficulty', 'Status'].map((category) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {filters
                    .filter(f => f.category === category)
                    .map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => toggleFilter(filter.id)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          selectedFilters.includes(filter.id)
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted hover:bg-muted/80 text-foreground'
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Active Filters */}
          <AnimatePresence>
            {selectedFilters.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap gap-2 p-3 rounded-lg bg-accent/10 border border-accent/30"
              >
                <span className="text-xs text-muted-foreground self-center">Active filters:</span>
                {selectedFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className="flex items-center gap-1 px-2 py-1 rounded bg-accent/20 text-accent text-xs font-medium hover:bg-accent/30 transition-colors"
                  >
                    {filters.find(f => f.id === filter)?.label}
                    <X className="w-3 h-3" />
                  </button>
                ))}
                <button
                  onClick={() => setSelectedFilters([])}
                  className="ml-auto text-xs text-accent hover:text-accent/80 font-medium"
                >
                  Clear all
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredProjects.length} of {PROJECTS.length} projects
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/project/${project.id}`}>
                    <ProjectCard
                      name={project.name}
                      description={project.description}
                      level={project.level}
                      difficulty={project.difficulty}
                      tags={project.tags}
                      status={project.status}
                    />
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-2 text-center py-12"
              >
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </MainLayout>
  )
}
