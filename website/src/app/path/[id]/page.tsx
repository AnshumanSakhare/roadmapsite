"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/main-layout'
import { Breadcrumb } from '@/components/breadcrumb'
import { SPECIALIZATION_PATHS } from '@/data/paths'
import { PROJECTS } from '@/data/projects'
import { notFound } from 'next/navigation'
import { CheckCircle2, Target, Users, TrendingUp } from 'lucide-react'

export default function PathPage({ params }: { params: { id: string } }) {
  const path = SPECIALIZATION_PATHS.find(p => p.id === params.id)

  if (!path) {
    notFound()
  }

  const projectNames = path.projects.map(name =>
    PROJECTS.find(p => p.id === name)
  ).filter(Boolean)

  return (
    <MainLayout>
      <div className="px-6 py-8 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Paths', href: '/paths' },
          { label: path.title }
        ]} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-6xl mb-6">
            {path.name === 'AI App Developer' && '🚀'}
            {path.name === 'AI Systems Engineer' && '⚙️'}
            {path.name === 'ML Researcher' && '🔬'}
            {path.name === 'AI Product Manager' && '📊'}
          </div>
          <h1 className="text-5xl font-bold mb-4">{path.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{path.description}</p>
        </motion.div>

        {/* Path Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {[
            { label: 'Duration', value: path.duration, icon: '⏱️' },
            { label: 'Target Role', value: path.targetRole, icon: '🎯' },
            { label: 'Specialization Projects', value: path.projects.length, icon: '📁' }
          ].map((info, index) => (
            <div key={index} className="p-4 rounded-lg border border-border bg-card/50 backdrop-blur-md">
              <div className="text-2xl mb-2">{info.icon}</div>
              <div className="text-sm text-muted-foreground">{info.label}</div>
              <div className="text-xl font-bold">{info.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Prerequisites */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6" />
            Prerequisites
          </h2>
          <p className="text-muted-foreground mb-6">
            Before starting this specialization path, you should have completed:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'All of Levels 0-5', desc: 'Complete foundation and advanced skills' },
              { label: '130+ Projects', desc: 'Hands-on experience building AI apps' },
              { label: '24-35 weeks', desc: 'Or equivalent self-study experience' },
              { label: 'Python Proficiency', desc: 'Strong Python programming skills' }
            ].map((prereq, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                <div className="font-semibold text-sm mb-1">{prereq.label}</div>
                <div className="text-xs text-muted-foreground">{prereq.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Skills You'll Master
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {path.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">{skill.split(' - ')[0]}</div>
                  <div className="text-xs text-muted-foreground">{skill.split(' - ')[1] || ''}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialization Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-6">Specialization Projects</h2>
          <p className="text-muted-foreground mb-6">
            These 4 projects form the core of your specialization. Each builds on previous knowledge and produces a portfolio-worthy addition.
          </p>

          <div className="space-y-4">
            {projectNames.map((project, index) => (
              project && (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-sm font-medium text-accent">Project {index + 1}</div>
                      <h3 className="text-xl font-bold">{project.name}</h3>
                    </div>
                    <Link
                      href={`/project/${project.id}`}
                      className="px-4 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 transition-colors font-medium text-sm"
                    >
                      View →
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </motion.div>
              )
            ))}
          </div>
        </motion.div>

        {/* Career Progression */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-accent/30 bg-accent/5 backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Career Progression
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Your Target Role</h3>
              <p className="text-foreground font-bold text-xl">{path.targetRole}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Career Paths</h3>
              <ul className="space-y-2">
                {path.name === 'AI App Developer' && (
                  <>
                    <li className="flex gap-2"><span className="text-accent">→</span>Senior AI/Full-Stack Engineer</li>
                    <li className="flex gap-2"><span className="text-accent">→</span>AI Product Designer</li>
                    <li className="flex gap-2"><span className="text-accent">→</span>Founder of AI Startup</li>
                  </>
                )}
                {path.name === 'AI Systems Engineer' && (
                  <>
                    <li className="flex gap-2"><span className="text-accent">→</span>ML/AI Systems Architect</li>
                    <li className="flex gap-2"><span className="text-accent">→</span>MLOps Engineer</li>
                    <li className="flex gap-2"><span className="text-accent">→</span>Infrastructure Lead</li>
                  </>
                )}
                {path.name === 'ML Researcher' && (
                  <>
                    <li className="flex gap-2"><span className="text-accent">→</span>ML Research Scientist</li>
                    <li className="flex gap-2"><span className="text-accent">→</span>PhD Program</li>
                    <li className="flex gap-2"><span className="text-accent">→</span>AI Labs/Research Institutes</li>
                  </>
                )}
                {path.name === 'AI Product Manager' && (
                  <>
                    <li className="flex gap-2"><span className="text-accent">→</span>Senior Product Manager</li>
                    <li className="flex gap-2"><span className="text-accent">→</span>AI Product Lead</li>
                    <li className="flex gap-2"><span className="text-accent">→</span>VP of Product</li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Typical Compensation (US Market)</h3>
              <p className="text-foreground font-bold">
                {path.name === 'AI App Developer' && '$150K - $300K+'}
                {path.name === 'AI Systems Engineer' && '$160K - $340K+'}
                {path.name === 'ML Researcher' && '$140K - $320K+'}
                {path.name === 'AI Product Manager' && '$160K - $350K+'}
              </p>
              <p className="text-xs text-muted-foreground mt-1">(Varies by location, company size, and experience)</p>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold mb-6">Your Path Forward</h2>

          <div className="space-y-4">
            {[
              { step: 1, title: 'Complete Levels 0-5', desc: 'Master core GenAI concepts and skills (24-35 weeks)' },
              { step: 2, title: 'Review This Specialization', desc: 'Understand skills, projects, and career goals' },
              { step: 3, title: 'Start Project 1', desc: 'Begin the first specialization project' },
              { step: 4, title: 'Build & Share', desc: 'Complete all 4 projects and build your portfolio' },
              { step: 5, title: 'Career Transition', desc: 'Apply skills to job search or entrepreneurship' }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start This Specialization?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            First, complete the main roadmap levels. Then come back here to dive into these specialization projects.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/roadmap"
              className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              Go to Roadmap
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>

        {/* Other Paths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="border-t border-border pt-12"
        >
          <h2 className="text-2xl font-bold mb-6">Other Specialization Paths</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {SPECIALIZATION_PATHS.filter(p => p.id !== path.id).map((otherPath) => (
              <Link
                key={otherPath.id}
                href={`/path/${otherPath.id}`}
                className="p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <div className="text-3xl mb-3">
                  {otherPath.name === 'AI App Developer' && '🚀'}
                  {otherPath.name === 'AI Systems Engineer' && '⚙️'}
                  {otherPath.name === 'ML Researcher' && '🔬'}
                  {otherPath.name === 'AI Product Manager' && '📊'}
                </div>
                <h3 className="font-semibold">{otherPath.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{otherPath.duration}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
}
