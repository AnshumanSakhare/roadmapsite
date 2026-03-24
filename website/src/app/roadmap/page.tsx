"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/main-layout'
import { Breadcrumb } from '@/components/breadcrumb'
import { LEVELS } from '@/data/levels'
import { ArrowRight } from 'lucide-react'

export default function RoadmapPage() {
  return (
    <MainLayout>
      <div className="px-6 py-8 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Roadmap' }]} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4">Your Learning Roadmap</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A structured path through 7 progressive levels, taking you from understanding LLM fundamentals all the way to building production AI systems and specializing in your chosen domain.
          </p>
        </motion.div>

        {/* Roadmap Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-4 p-6 rounded-xl border border-border bg-card/50 backdrop-blur-md"
        >
          {[
            { label: 'Total Duration', value: '24-35 weeks' },
            { label: 'Time per Week', value: '10-15 hours' },
            { label: 'Total Projects', value: '130+' },
            { label: 'Checkpoints', value: '28' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Levels Timeline */}
        <div className="space-y-8">
          {LEVELS.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== LEVELS.length - 1 && (
                <div className="absolute left-12 top-32 w-1 h-16 bg-gradient-to-b from-accent to-transparent" />
              )}

              <div className="flex gap-6 mb-8">
                {/* Timeline circle */}
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center font-bold text-2xl text-white bg-gradient-to-br ${level.color}`}>
                    {level.id}
                  </div>
                </div>

                {/* Card content */}
                <Link href={`/level/${level.id}`} className="flex-1">
                  <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-md hover:bg-card hover:border-accent/50 transition-all cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold group-hover:text-accent transition-colors mb-2">
                          {level.title}
                        </h2>
                        <p className="text-muted-foreground">{level.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground group-hover:text-accent transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Topics</h4>
                        <ul className="space-y-2">
                          {level.topics.slice(0, 3).map((topic, i) => (
                            <li key={i} className="text-sm">
                              <span className="text-accent">✓</span> {topic}
                            </li>
                          ))}
                          {level.topics.length > 3 && (
                            <li className="text-sm text-muted-foreground">
                              +{level.topics.length - 3} more topics
                            </li>
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3">Learning Details</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Duration:</span>
                            <span className="ml-2 font-medium">{level.duration}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Difficulty:</span>
                            <span className="ml-2 font-medium">{level.difficulty}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Checkpoints:</span>
                            <span className="ml-2 font-medium">{level.checkpoints}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Est. Hours:</span>
                            <span className="ml-2 font-medium">{level.estimatedHours} hours</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Level 6 Specialization Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-accent/30 bg-accent/5 backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-4">Choose Your Specialization</h3>
          <p className="text-muted-foreground mb-6">
            At Level 6, you'll choose one of four specialization paths based on your career goals. Each path includes 4 specialized projects and deepens your expertise in a specific domain.
          </p>
          <Link href="/paths" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium">
            Explore Specialization Paths <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-border bg-card/50 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
          <p className="text-muted-foreground mb-6">Begin with Level 0 to set up your environment, or jump directly to Level 1 if you already have your dev setup ready.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/level/0" className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors">
              Start at Level 0
            </Link>
            <Link href="/level/1" className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium">
              Jump to Level 1
            </Link>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
}
