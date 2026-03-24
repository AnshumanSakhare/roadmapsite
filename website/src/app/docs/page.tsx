"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/main-layout'
import { Breadcrumb } from '@/components/breadcrumb'
import { BookOpen, FileText, ExternalLink } from 'lucide-react'

export default function DocsPage() {
  return (
    <MainLayout>
      <div className="px-6 py-8 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Documentation' }]} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4">Documentation & Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive guides, references, and learning materials to support your journey through the GenAI roadmap.
          </p>
        </motion.div>

        {/* Documentation Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {[
            {
              icon: '📖',
              title: 'Full Curriculum Guide',
              description: 'Complete markdown documentation of all 7 levels, topics, and learning outcomes.',
              href: 'https://github.com/buildfastwithai/gen-ai-experiments/blob/main/docs/roadmap/ROADMAP.md'
            },
            {
              icon: '📝',
              title: 'Level Guides',
              description: 'Detailed guides for each level with prerequisites, topics, projects, and checkpoints.',
              href: 'https://github.com/buildfastwithai/gen-ai-experiments/tree/main/docs/roadmap'
            },
            {
              icon: '🎯',
              title: 'Specialization Paths',
              description: 'In-depth content for each of the 4 specialization paths with skill requirements.',
              href: 'https://github.com/buildfastwithai/gen-ai-experiments/tree/main/docs/paths'
            },
            {
              icon: '✅',
              title: 'Checkpoints & Milestones',
              description: '28 structured checkpoints across all levels with tasks and validation criteria.',
              href: 'https://github.com/buildfastwithai/gen-ai-experiments/blob/main/docs/checkpoints/checkpoints.md'
            }
          ].map((doc, index) => (
            <motion.a
              key={index}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-accent/50 backdrop-blur-md transition-all group cursor-pointer"
            >
              <div className="text-4xl mb-4">{doc.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {doc.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>
              <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-8 h-8" />
            Quick Reference
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'How to Use This Roadmap',
                content: [
                  'Start with Level 0 to set up your environment',
                  'Progress sequentially through Levels 1-5',
                  'Complete checkpoints at each level to solidify learning',
                  'Choose a specialization path at Level 6'
                ]
              },
              {
                title: 'Learning Best Practices',
                content: [
                  'Dedicate 10-15 hours per week for steady progress',
                  'Complete projects in order - each builds on previous',
                  'Share your work and get community feedback',
                  'Take breaks and don\'t rush through levels'
                ]
              },
              {
                title: 'Project Submission',
                content: [
                  'Push projects to your GitHub account',
                  'Create a portfolio repository linking all projects',
                  'Document your learning in README files',
                  'Share your progress via social media or community'
                ]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent font-bold text-lg">→</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-8 h-8" />
            External Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'OpenAI API Documentation',
                icon: '🤖',
                description: 'Official API docs for ChatGPT and GPT-4',
                link: 'https://openai.com/docs'
              },
              {
                title: 'Claude API Documentation',
                icon: '🔗',
                description: 'Anthropic Claude API reference',
                link: 'https://docs.anthropic.com'
              },
              {
                title: 'LangChain Documentation',
                icon: '🔗',
                description: 'Framework for building with LLMs',
                link: 'https://langchain.readthedocs.io'
              },
              {
                title: 'Vector Database Guides',
                icon: '📊',
                description: 'Pinecone, Weaviate, Qdrant docs',
                link: 'https://www.pinecone.io/docs'
              },
              {
                title: 'FastAPI Documentation',
                icon: '⚡',
                description: 'Modern web framework for Python',
                link: 'https://fastapi.tiangolo.com'
              },
              {
                title: 'Docker & Kubernetes',
                icon: '📦',
                description: 'Containerization and orchestration',
                link: 'https://docs.docker.com'
              }
            ].map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all group"
              >
                <div className="text-3xl mb-3">{resource.icon}</div>
                <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'How long will it take to complete the roadmap?',
                a: '24-35 weeks with 10-15 hours per week of dedicated study. You can go faster or slower depending on your pace.'
              },
              {
                q: 'Do I need prior machine learning experience?',
                a: 'No! Level 0 covers all prerequisites. However, familiarity with Python and basic programming is helpful.'
              },
              {
                q: 'Can I learn offline?',
                a: 'Most content can be studied offline using the markdown documentation. Some APIs require internet access for API calls.'
              },
              {
                q: 'Are there community resources?',
                a: 'Join our Discord community, contribute to GitHub, and share your projects on social media using our hashtag.'
              },
              {
                q: 'Can I get a certificate?',
                a: 'This is a self-paced curriculum. Certificates come from completing projects and building your portfolio.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border border-border hover:border-accent/30 transition-all"
              >
                <h3 className="font-semibold mb-2 text-lg">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Head to the roadmap to begin your learning journey. Start with Level 0 or jump to where you are now.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/roadmap"
              className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              View Roadmap
            </Link>
            <a
              href="https://github.com/buildfastwithai/gen-ai-experiments"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
            >
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
}
