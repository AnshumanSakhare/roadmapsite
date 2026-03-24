"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { LEVELS } from '@/data/levels'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] border-r border-border bg-card/50 backdrop-blur-md overflow-y-auto">
      <div className="p-6 space-y-8">
        {/* Roadmap Section */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Learning Path
          </h3>
          <nav className="space-y-2">
            <Link
              href="/roadmap"
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/roadmap'
                  ? 'bg-accent/20 text-accent border border-accent/50'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              Overview
            </Link>
            {LEVELS.map((level) => (
              <Link
                key={level.id}
                href={`/level/${level.id}`}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  pathname === `/level/${level.id}`
                    ? 'bg-accent/20 text-accent border border-accent/50'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <span className="font-medium">Level {level.id}</span>
                <span className="text-xs text-muted-foreground block">
                  {level.title}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Other Sections */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Resources
          </h3>
          <nav className="space-y-2">
            {[
              { href: '/projects', label: 'Projects' },
              { href: '/paths', label: 'Specializations' },
              { href: '/docs', label: 'Documentation' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  pathname === item.href
                    ? 'bg-accent/20 text-accent border border-accent/50'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Progress Card */}
        <motion.div
          className="p-4 rounded-lg border border-accent/30 bg-accent/5"
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="font-semibold text-sm mb-2">Your Progress</h4>
          <div className="w-full bg-muted rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-accent to-violet-600 h-2 rounded-full w-1/3 transition-all"
              style={{ width: '33%' }}
            />
          </div>
          <p className="text-xs text-muted-foreground">Level 2 in progress</p>
        </motion.div>
      </div>
    </aside>
  )
}
