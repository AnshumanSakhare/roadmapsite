"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { LEVELS } from '@/data/levels'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] border-r border-gray-200 bg-white overflow-y-auto">
      <div className="p-6 space-y-8">
        {/* Roadmap Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
            Learning Path
          </h3>
          <nav className="space-y-2">
            <Link
              href="/roadmap"
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/roadmap'
                  ? 'bg-orange-100 text-orange-700 border border-orange-300'
                  : 'text-gray-700 hover:bg-gray-100'
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
                    ? 'bg-orange-100 text-orange-700 border border-orange-300'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="font-medium">Level {level.id}</span>
                <span className="text-xs text-gray-600 block">
                  {level.title}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Other Sections */}
        <div>
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
            Resources
          </h3>
          <nav className="space-y-2">
            {[
              { href: '/projects', label: 'Resources' },
              { href: '/paths', label: 'Career Paths' },
              { href: '/docs', label: 'Documentation' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  pathname === item.href
                    ? 'bg-orange-100 text-orange-700 border border-orange-300'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Progress Card */}
        <motion.div
          className="p-4 rounded-lg border border-orange-200 bg-orange-50"
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="font-semibold text-sm mb-2 text-gray-900">Your Progress</h4>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-orange-600 to-red-600 h-2 rounded-full w-1/3 transition-all"
              style={{ width: '33%' }}
            />
          </div>
          <p className="text-xs text-gray-600">Level 2 in progress</p>
        </motion.div>
      </div>
    </aside>
  )
}
