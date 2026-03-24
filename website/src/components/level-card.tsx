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
      className={`p-6 rounded-xl backdrop-blur-md border cursor-pointer transition-all ${
        isActive
          ? 'border-accent bg-accent/10'
          : 'border-border bg-card/50 hover:bg-card'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`text-4xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {number}
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
          {difficulty}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>⏱️ {duration}</span>
        <span>→</span>
      </div>
    </motion.div>
  )
}
