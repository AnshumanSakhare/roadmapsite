"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface LevelCardProps {
  number: number
  title: string
  description: string
  duration: string
  difficulty: string
  color: string
  onClick?: () => void
  isActive?: boolean
}

export function LevelCard({
  number,
  title,
  description,
  duration,
  difficulty,
  color,
  onClick,
  isActive = false
}: LevelCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`p-6 rounded-xl border cursor-pointer transition-all ${
        isActive
          ? 'border-orange-300 bg-orange-50 shadow-lg shadow-orange-200/50'
          : 'border-gray-200 bg-white hover:border-orange-200 hover:shadow-md hover:shadow-orange-100/50'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`text-4xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {number}
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
          {difficulty}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex items-center justify-between text-xs text-gray-600">
        <span>⏱️ {duration}</span>
        <span className="text-orange-600">→</span>
      </div>
    </motion.div>
  )
}
