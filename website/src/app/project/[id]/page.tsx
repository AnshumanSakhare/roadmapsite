"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/main-layout'
import { Breadcrumb } from '@/components/breadcrumb'
import { PROJECTS } from '@/data/projects'
import { LEVELS } from '@/data/levels'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  const projectLevelIds = Array.isArray(project.level) ? project.level : [project.level]
  const levels = LEVELS.filter(l => projectLevelIds.includes(l.id))

  return (
    <MainLayout>
      <div className="px-6 py-8 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Projects', href: '/projects' },
          { label: project.name }
        ]} />

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-4">
            <Badge className="mb-3">{project.status}</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">{project.name}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </motion.div>

        {/* Project Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Category', value: project.category },
            { label: 'Difficulty', value: project.difficulty },
            {
              label: 'Applicable Levels',
              value: levels.map(l => `Level ${l.id}`).join(', ')
            },
            { label: 'Status', value: project.status }
          ].map((meta, index) => (
            <div key={index} className="p-4 rounded-lg border border-border bg-card/50 backdrop-blur-md">
              <div className="text-sm text-muted-foreground mb-1">{meta.label}</div>
              <div className="font-semibold">{meta.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            {/* Overview */}
            <div className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This project is part of the {project.category} category and is recommended for learners at{' '}
                <span className="font-semibold text-foreground">
                  {Array.isArray(project.level) ? `Levels ${project.level[0]}-${project.level[project.level.length - 1]}` :
                    `Level ${project.level}`}
                </span>
                . Expected difficulty: <span className="font-semibold text-foreground">{project.difficulty}</span>
              </p>
            </div>

            {/* Learning Outcomes */}
            <div className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
              <ul className="space-y-3">
                {[
                  'How to', // This would be dynamic in a real app
                  'Understanding',
                  'Implementing',
                  'Best practices',
                  'Production considerations'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>{item} related to {project.name.toLowerCase()}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-4">Technologies & Topics</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* GitHub Link */}
            <div className="p-6 rounded-xl border border-accent/30 bg-accent/5 backdrop-blur-md">
              <h3 className="font-semibold mb-4">Get Started</h3>
              <a
                href={`https://github.com/buildfastwithai/gen-ai-experiments/tree/main/${project.folder}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Related Levels */}
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-md">
              <h3 className="font-semibold mb-4">Related Levels</h3>
              <div className="space-y-2">
                {levels.map((level) => (
                  <Link
                    key={level.id}
                    href={`/level/${level.id}`}
                    className="block p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all"
                  >
                    <div className="font-medium text-sm">Level {level.id}</div>
                    <div className="text-xs text-muted-foreground">{level.title}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-md">
              <h3 className="font-semibold mb-4">Project Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-medium">{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Difficulty:</span>
                  <span className="font-medium">{project.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tags:</span>
                  <span className="font-medium">{project.tags.length}</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-md">
              <h3 className="font-semibold mb-4">Next Steps</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">1</span>
                  <span>Clone the repository</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">2</span>
                  <span>Follow the README</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">3</span>
                  <span>Complete the tasks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">4</span>
                  <span>Share your work</span>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>

        {/* More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="border-t border-border pt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {PROJECTS.filter(p => {
              if (p.id === project.id) return false
              const candidateLevels = Array.isArray(p.level) ? p.level : [p.level]
              return candidateLevels.some(levelId => projectLevelIds.includes(levelId))
            })
              .slice(0, 3)
              .map((p) => (
                <Link key={p.id} href={`/project/${p.id}`} className="p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all">
                  <h3 className="font-semibold text-sm mb-1">{p.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{p.description}</p>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
}
