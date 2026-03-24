"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { LevelCard } from '@/components/level-card'
import { LEVELS } from '@/data/levels'
import { ArrowRight, BookOpen, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card/30">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-full border border-accent/30 bg-accent/10">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Learn by Building</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master Generative AI in{' '}
            <span className="bg-gradient-to-r from-accent to-violet-600 bg-clip-text text-transparent">
              24-35 Weeks
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            A comprehensive step-by-step learning roadmap taking you from fundamentals to production systems, with 130+ real projects and clear specialization paths.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/roadmap">
              <Button size="lg" className="gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/paths">
              <Button size="lg" variant="outline">
                Explore Paths
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { label: '7 Levels', value: 'Progressive Learning' },
              { label: '4 Paths', value: 'Specializations' },
              { label: '130+ Projects', value: 'Real-World Code' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-y border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: '🎯',
              title: 'Clear Progression',
              description: 'From prerequisites to specialization in a logical progression with clear milestones.'
            },
            {
              icon: '💻',
              title: 'Hands-On Learning',
              description: 'Every concept includes code. Build real projects and deploy to production.'
            },
            {
              icon: '📈',
              title: 'Career Paths',
              description: 'Choose your specialization: App Dev, Engineer, Researcher, or Product Manager.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-md hover:bg-card transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Levels Overview */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Your Learning Path</h2>
          <p className="text-lg text-muted-foreground">
            Progress through 7 carefully designed levels, each building on the previous one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEVELS.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/level/${level.id}`}>
                <LevelCard
                  number={level.id}
                  title={level.title}
                  description={level.description}
                  duration={level.duration}
                  difficulty={level.difficulty}
                  color={level.color}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="p-12 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/10 to-violet-600/10 backdrop-blur-md text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Master Generative AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with the foundations or jump to the roadmap. Either way, you'll be building real AI applications by the end of Level 2.
          </p>
          <Link href="/roadmap">
            <Button size="lg" className="gap-2">
              View Full Roadmap
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-md mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-accent" />
                <span className="font-bold">GenAI Roadmap</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A comprehensive learning path for mastering Generative AI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/roadmap" className="hover:text-foreground">Roadmap</Link></li>
                <li><Link href="/projects" className="hover:text-foreground">Projects</Link></li>
                <li><Link href="/docs" className="hover:text-foreground">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Specializations</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/paths" className="hover:text-foreground">View All Paths</Link></li>
                <li><Link href="/paths" className="hover:text-foreground">App Developer</Link></li>
                <li><Link href="/paths" className="hover:text-foreground">AI Engineer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com/buildfastwithai/gen-ai-experiments" className="hover:text-foreground">GitHub</a></li>
                <li><a href="https://twitter.com" className="hover:text-foreground">Twitter</a></li>
                <li><a href="https://discord.com" className="hover:text-foreground">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2024 GenAI Roadmap. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground">Privacy Policy</a>
              <a href="#" className="hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
