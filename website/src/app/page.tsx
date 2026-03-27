"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { LevelCard } from '@/components/level-card'
import { LEVELS } from '@/data/levels'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-200 bg-orange-50">
            <Image src="/icon.svg" alt="Build Fast with AI" width={16} height={16} className="h-4 w-4 object-contain" />
            <span className="text-sm font-medium text-orange-600">Master Generative AI</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Learn Generative AI & Production ML{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            A comprehensive step-by-step learning roadmap with 130+ real projects. From AI fundamentals to production systems—built to accelerate your AI journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/roadmap">
              <Button size="lg" className="gap-2 bg-orange-600 hover:bg-orange-700 text-white">
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/paths">
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50">
                Explore Career Paths
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { label: '7 Levels', value: 'Progressive Learning' },
              { label: '4 Paths', value: 'Career Tracks' },
              { label: '130+ Projects', value: 'Hands-On Building' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-gray-200">
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
              title: 'Multiple Paths',
              description: 'Choose your specialization: App Dev, Engineer, Researcher, or Product Manager.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-gray-200 bg-white hover:border-orange-200 hover:bg-orange-50/30 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Levels Overview */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Your Learning Path</h2>
          <p className="text-lg text-gray-600">
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
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="p-12 rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Ready to Master Generative AI?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start with the foundations or jump to the roadmap. Either way, you'll be building real AI applications by the end of Level 2.
          </p>
          <Link href="/roadmap">
            <Button size="lg" className="gap-2 bg-orange-600 hover:bg-orange-700 text-white">
              View Full Roadmap
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/icon.svg" alt="Build Fast with AI" width={20} height={20} className="h-5 w-5 object-contain" />
                <span className="font-bold text-gray-900">Build Fast with AI</span>
              </div>
              <p className="text-sm text-gray-600">
                A comprehensive learning path for mastering Generative AI and Production ML.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/roadmap" className="hover:text-orange-600">Roadmap</Link></li>
                <li><Link href="/projects" className="hover:text-orange-600">Resources</Link></li>
                <li><Link href="/docs" className="hover:text-orange-600">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Specializations</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/paths" className="hover:text-orange-600">View All Paths</Link></li>
                <li><Link href="/paths" className="hover:text-orange-600">App Developer</Link></li>
                <li><Link href="/paths" className="hover:text-orange-600">AI Engineer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="https://github.com/buildfastwithai/gen-ai-experiments" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">GitHub</a></li>
                <li><a href="https://www.buildfastwithai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">Official Site</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <p>&copy; 2024 Build Fast with AI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-600">Privacy Policy</a>
              <a href="#" className="hover:text-orange-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
