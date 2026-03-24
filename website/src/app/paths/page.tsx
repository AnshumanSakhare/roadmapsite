"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/main-layout'
import { Breadcrumb } from '@/components/breadcrumb'
import { PathCard } from '@/components/path-card'
import { SPECIALIZATION_PATHS } from '@/data/paths'

export default function PathsPage() {
  return (
    <MainLayout>
      <div className="px-6 py-8 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Specialization Paths' }]} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4">Choose Your Specialization</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            After completing Level 5, choose one of four specialization paths aligned with your career goals. Each path includes deep expertise, 4 specialized projects, and clear career progression.
          </p>
        </motion.div>

        {/* Paths Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {SPECIALIZATION_PATHS.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/path/${path.id}`}>
                <PathCard
                  title={path.title}
                  name={path.name}
                  description={path.description}
                  duration={path.duration}
                  skills={path.skills}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Path Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 space-y-12"
        >
          <h2 className="text-4xl font-bold">Deep Dive Into Each Path</h2>

          {SPECIALIZATION_PATHS.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h3 className="text-3xl font-bold mb-4">{path.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{path.description}</p>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold">Core Skills You'll Master:</h4>
                  <ul className="space-y-2">
                    {path.skills.map((skill, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent font-bold">✓</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold">Specialization Projects:</h4>
                  <ul className="space-y-2">
                    {path.projects.map((project, i) => (
                      <li key={i} className="text-sm text-muted-foreground pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-accent">
                        {project.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Expected Career Role:</div>
                  <div className="text-lg font-semibold">{path.targetRole}</div>
                </div>

                <Link
                  href={`/path/${path.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
                >
                  Learn More →
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="aspect-square rounded-xl border border-accent/30 bg-gradient-to-br from-accent/20 to-violet-600/20 backdrop-blur-md flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-8xl mb-4">
                      {index === 0 && '🚀'}
                      {index === 1 && '⚙️'}
                      {index === 2 && '🔬'}
                      {index === 3 && '📊'}
                    </div>
                    <h4 className="text-2xl font-bold">{path.title}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I switch paths after choosing one?',
                a: 'Yes! While we recommend committing to a path for 8-12 weeks, you can always pivot. Your Level 0-5 knowledge applies across all paths.'
              },
              {
                q: 'Do I need to complete all levels before specializing?',
                a: 'We recommend completing through Level 5. However, if you have strong fundamentals, you can jump into a specialization path earlier.'
              },
              {
                q: 'What if I want to do multiple specializations?',
                a: 'Absolutely! Many advanced practitioners complete 2-3 specialization paths sequentially. Plan 16-30 additional weeks if pursuing multiple paths.'
              },
              {
                q: 'Can I contribute my projects back to the community?',
                a: 'Yes! We encourage open-source contributions. Check our GitHub for contribution guidelines for each path.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Specialize?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your learning journey from Level 0, and you'll reach specialization in 24-35 weeks of focused study.
          </p>
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors text-lg"
          >
            Begin the Roadmap →
          </Link>
        </motion.div>
      </div>
    </MainLayout>
  )
}
