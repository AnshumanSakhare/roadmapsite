import { SpecializationPath } from '@/lib/types'

export const SPECIALIZATION_PATHS: SpecializationPath[] = [
  {
    id: 'app-developer',
    name: 'AI App Developer',
    title: 'Build Full-Stack AI Applications',
    description: 'Specialize in building consumer-facing GenAI applications. Master frontend frameworks, real-time communication, and product-focused development.',
    duration: '8-10 weeks',
    skills: [
      'React/Vue for modern frontends',
      'Real-time communication (WebSockets)',
      'UI/UX for AI applications',
      'Full-stack development patterns',
      'Product iteration and analytics',
      'A/B testing and metrics'
    ],
    projects: [
      'ai-powered-editor',
      'real-time-collab-app',
      'mobile-ai-assistant',
      'production-saas-app'
    ],
    targetRole: 'Senior AI/Full-Stack Engineer'
  },
  {
    id: 'ai-engineer',
    title: 'AI Systems Engineer',
    name: 'AI Systems Engineer',
    description: 'Specialize in building scalable, efficient AI systems. Focus on system design, optimization, and infrastructure.',
    duration: '8-12 weeks',
    skills: [
      'System architecture and design',
      'Performance optimization',
      'Distributed systems basics',
      'Infrastructure as code',
      'Advanced monitoring and observability',
      'Cost optimization at scale'
    ],
    projects: [
      'scalable-rag-system',
      'llm-serving-platform',
      'distributed-agent-system',
      'optimization-framework'
    ],
    targetRole: 'ML/AI Systems Architect'
  },
  {
    id: 'researcher',
    title: 'ML Researcher',
    name: 'ML Researcher',
    description: 'Push the boundaries of AI. Conduct original research, publish papers, and explore cutting-edge techniques.',
    duration: '10-14 weeks',
    skills: [
      'Research methodology',
      'Academic writing and papers',
      'Experimentation frameworks',
      'Advanced mathematics',
      'Custom model implementations',
      'Benchmarking and evaluation'
    ],
    projects: [
      'novel-rag-technique',
      'agent-architecture-research',
      'fine-tuning-optimization',
      'explainability-study'
    ],
    targetRole: 'ML Research Scientist'
  },
  {
    id: 'product-manager',
    title: 'AI Product Manager',
    name: 'AI Product Manager',
    description: 'Lead AI products and strategy. Master customer development, metrics, and go-to-market strategy.',
    duration: '8-10 weeks',
    skills: [
      'Customer development',
      'Product metrics and analytics',
      'Market positioning',
      'Competitive analysis',
      'Go-to-market strategy',
      'AI ethics and safety'
    ],
    projects: [
      'product-research-study',
      'competitive-benchmark',
      'metrics-framework',
      'business-case-analysis'
    ],
    targetRole: 'Product Manager / AI Product Lead'
  }
]
