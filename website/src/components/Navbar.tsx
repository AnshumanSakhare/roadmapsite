"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, BookOpen } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-border bg-background/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-violet-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">GenAI Roadmap</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/roadmap', label: 'Roadmap' },
              { href: '/projects', label: 'Projects' },
              { href: '/paths', label: 'Paths' },
              { href: '/docs', label: 'Docs' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/roadmap"
              className="px-4 py-2 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors"
            >
              Start Learning
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-border bg-card/50"
          >
            <div className="px-6 py-4 space-y-3">
              {[
                { href: '/roadmap', label: 'Roadmap' },
                { href: '/projects', label: 'Projects' },
                { href: '/paths', label: 'Paths' },
                { href: '/docs', label: 'Docs' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/roadmap"
                className="block px-3 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Start Learning
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
