"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

interface ProjectCardProps {
  name: string
  description: string
  level: number | number[]
  difficulty: string
  tags: string[]
  status: string
  onClick?: () => void
}

export function ProjectCard({
  name,
  description,
  level,
  difficulty,
  tags,
  status,
  onClick
}: ProjectCardProps) {
  const statusColors = {
    'Complete': 'bg-green-500/20 text-green-400',
    'In Progress': 'bg-blue-500/20 text-blue-400',
    'Starter': 'bg-yellow-500/20 text-yellow-400'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="p-5 rounded-lg border border-gray-200 bg-white hover:border-orange-200 hover:shadow-md hover:shadow-orange-100/30 cursor-pointer transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold line-clamp-2 group-hover:text-orange-600 transition-colors text-gray-900">
          {name}
        </h3>
        <div className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ml-2 ${statusColors[status as keyof typeof statusColors]}`}>
          {status}
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-2">
        <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700 hover:bg-orange-200">
          {difficulty}
        </Badge>
        <Badge variant="outline" className="text-xs border-gray-300">
          Level {Array.isArray(level) ? level[0] : level}
        </Badge>
      </div>

      <div className="flex flex-wrap gap-1">
        {tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700"
          >
            #{tag}
          </span>
        ))}
        {tags.length > 3 && (
          <span className="text-xs px-2 py-1 text-gray-600">
            +{tags.length - 3}
          </span>
        )}
      </div>
    </motion.div>
  )
}
