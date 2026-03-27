"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-border bg-background/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/icon.svg" alt="Build Fast with AI" width={40} height={40} className="h-8 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/roadmap', label: 'Roadmap' },
              { href: '/projects', label: 'Resources' },
              { href: '/paths', label: 'Career Paths' },
              { href: '/docs', label: 'Documentation' },
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
              className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors"
            >
              Get Started
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
                { href: '/projects', label: 'Resources' },
                { href: '/paths', label: 'Career Paths' },
                { href: '/docs', label: 'Documentation' },
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
                className="block px-3 py-2 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
