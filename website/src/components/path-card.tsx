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
      className="p-6 rounded-xl border border-gray-200 bg-white hover:border-orange-200 hover:shadow-md hover:shadow-orange-100/50 cursor-pointer transition-all group"
    >
      <div className="text-4xl mb-3">
        {icons[name as keyof typeof icons]}
      </div>

      <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-600 transition-colors text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {description}
      </p>

      <div className="mb-4">
        <span className="text-xs font-medium text-gray-600">
          ⏱️ {duration}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded bg-orange-100 text-orange-700 border border-orange-200"
          >
            {skill}
          </span>
        ))}
        {skills.length > 3 && (
          <span className="text-xs px-2 py-1 text-gray-600">
            +{skills.length - 3} more
          </span>
        )}
      </div>
    </motion.div>
  )
}
