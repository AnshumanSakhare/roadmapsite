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
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Your Learning Roadmap</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A structured path through 7 progressive levels, taking you from understanding LLM fundamentals all the way to building production AI systems and specializing in your chosen domain.
          </p>
        </motion.div>

        {/* Roadmap Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-4 p-6 rounded-xl border border-gray-200 bg-white"
        >
          {[
            { label: 'Learning Pace', value: 'Self-paced' },
            { label: 'Time per Week', value: '10-15 hours' },
            { label: 'Total Projects', value: '130+' },
            { label: 'Checkpoints', value: '28' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Levels Timeline */}
        <div className="space-y-8">
          {LEVELS.map((level) => (
            <div key={level.id} className="flex gap-6">
              {/* Card content */}
              <div className="flex-1 pb-8">
                <Link href={`/level/${level.id}`} className="block">
                  <div className="p-6 rounded-xl border border-gray-200 bg-white hover:border-orange-200 hover:shadow-md hover:shadow-orange-100/50 transition-all cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold group-hover:text-orange-600 transition-colors mb-2 text-gray-900">
                          {level.title}
                        </h2>
                        <p className="text-gray-600">{level.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 group-hover:text-orange-600 transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-3">Key Topics</h4>
                        <ul className="space-y-2">
                          {level.topics.slice(0, 3).map((topic, i) => (
                            <li key={i} className="text-sm text-gray-600">
                              <span className="text-orange-600">✓</span> {topic}
                            </li>
                          ))}
                          {level.topics.length > 3 && (
                            <li className="text-sm text-gray-600">
                              +{level.topics.length - 3} more topics
                            </li>
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-3">Learning Details</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div>
                            <span className="text-gray-600">Duration:</span>
                            <span className="ml-2 font-medium">{level.duration}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Difficulty:</span>
                            <span className="ml-2 font-medium">{level.difficulty}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Checkpoints:</span>
                            <span className="ml-2 font-medium">{level.checkpoints}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Est. Hours:</span>
                            <span className="ml-2 font-medium">{level.estimatedHours} hours</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Level 6 Specialization Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-orange-200 bg-orange-50"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Choose Your Specialization</h3>
          <p className="text-gray-600 mb-6">
            At Level 6, you'll choose one of four specialization paths based on your career goals. Each path includes 4 specialized projects and deepens your expertise in a specific domain.
          </p>
          <Link href="/paths" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
            Explore Specialization Paths <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-gray-200 bg-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Start?</h3>
          <p className="text-gray-600 mb-6">Begin with Level 0 to set up your environment, or jump directly to Level 1 if you already have your dev setup ready.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/level/0" className="px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors">
              Start at Level 0
            </Link>
            <Link href="/level/1" className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors font-medium text-gray-900">
              Jump to Level 1
            </Link>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
}
