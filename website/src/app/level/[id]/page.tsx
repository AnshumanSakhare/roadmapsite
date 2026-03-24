"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/main-layout'
import { Breadcrumb } from '@/components/breadcrumb'
import { ProjectCard } from '@/components/project-card'
import { LEVELS } from '@/data/levels'
import { PROJECTS } from '@/data/projects'
import { notFound } from 'next/navigation'
import { CheckCircle2, BookOpen, Target } from 'lucide-react'

export default function LevelPage({ params }: { params: { id: string } }) {
  const levelId = parseInt(params.id)
  const level = LEVELS.find(l => l.id === levelId)

  if (!level) {
    notFound()
  }

  const levelProjects = PROJECTS.filter(p => {
    if (Array.isArray(p.level)) {
      return p.level.includes(levelId)
    }
    return p.level === levelId
  })

  const nextLevel = LEVELS.find(l => l.id === levelId + 1)
  const prevLevel = LEVELS.find(l => l.id === levelId - 1)

  return (
    <MainLayout>
      <div className="px-6 py-8 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Roadmap', href: '/roadmap' },
          { label: `Level ${levelId}` }
        ]} />

        {/* Level Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={`inline-block w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold text-white bg-gradient-to-br ${level.color} mb-6`}>
            {levelId}
          </div>
          <h1 className="text-5xl font-bold mb-4">{level.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{level.description}</p>
        </motion.div>

        {/* Level Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Duration', value: level.duration, icon: '⏱️' },
            { label: 'Difficulty', value: level.difficulty, icon: '📊' },
            { label: 'Checkpoints', value: level.checkpoints, icon: '✓' },
            { label: 'Est. Hours', value: `${level.estimatedHours}h`, icon: '⚡' }
          ].map((info, index) => (
            <div key={index} className="p-4 rounded-lg border border-border bg-card/50 backdrop-blur-md">
              <div className="text-2xl mb-2">{info.icon}</div>
              <div className="text-sm text-muted-foreground">{info.label}</div>
              <div className="text-xl font-bold">{info.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6" />
            Learning Outcomes
          </h2>
          <ul className="space-y-3">
            {level.learningOutcomes.map((outcome, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Topics to Master
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {level.topics.map((topic, index) => (
              <div key={index} className="flex gap-3 p-3 rounded-lg bg-muted/50">
                <span className="text-accent font-bold">•</span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {levelProjects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
            ))}
          </div>
          {levelProjects.length > 6 && (
            <div className="text-center mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
              >
                View all {levelProjects.length} projects
              </Link>
            </div>
          )}
        </motion.div>

        {/* Checkpoints Teaser */}
        {level.checkpoints > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-xl border border-accent/30 bg-accent/5 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold mb-4">Checkpoints & Milestones</h3>
            <p className="text-muted-foreground mb-6">
              This level includes {level.checkpoints} structured checkpoints with hands-on tasks, validation criteria, and portfolio pieces. Complete these to solidify your understanding.
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              View Checkpoints →
            </Link>
          </motion.div>
        )}

        {/* Navigation */}
        <div className="flex gap-4 flex-col sm:flex-row">
          {prevLevel ? (
            <Link
              href={`/level/${prevLevel.id}`}
              className="flex-1 p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-all text-center group"
            >
              <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors">← Previous</div>
              <div className="font-semibold group-hover:text-accent transition-colors">Level {prevLevel.id}</div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextLevel ? (
            <Link
              href={`/level/${nextLevel.id}`}
              className="flex-1 p-6 rounded-lg border border-accent/50 bg-accent/10 hover:bg-accent/20 transition-all text-center group"
            >
              <div className="text-sm text-accent">Next →</div>
              <div className="font-semibold text-accent">Level {nextLevel.id}</div>
            </Link>
          ) : (
            <div className="flex-1 p-6 rounded-lg border border-border bg-card/50 text-center">
              <div className="text-sm text-muted-foreground">You've reached the end!</div>
              <div className="font-semibold">Choose Your Path</div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
