"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface PathCardProps {
  title: string
  name: string
  description: string
  duration: string
  skills: string[]
  onClick?: () => void
}

export function PathCard({
  title,
  name,
  description,
  duration,
  skills,
  onClick
}: PathCardProps) {
  const icons = {
    'AI App Developer': '🚀',
    'AI Systems Engineer': '⚙️',
    'ML Researcher': '🔬',
    'AI Product Manager': '📊'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="p-6 rounded-xl backdrop-blur-md border border-border bg-card/50 hover:bg-card cursor-pointer transition-all group"
    >
      <div className="text-4xl mb-3">
        {icons[name as keyof typeof icons]}
      </div>

      <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {description}
      </p>

      <div className="mb-4">
        <span className="text-xs font-medium text-muted-foreground">
          ⏱️ {duration}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded bg-accent/10 text-accent border border-accent/30"
          >
            {skill}
          </span>
        ))}
        {skills.length > 3 && (
          <span className="text-xs px-2 py-1 text-muted-foreground">
            +{skills.length - 3} more
          </span>
        )}
      </div>
    </motion.div>
  )
}
