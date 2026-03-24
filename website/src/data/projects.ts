import { Project } from '@/lib/types'

export const PROJECTS: Project[] = [
  // Level 0 - Foundations
  {
    id: 'python-basics',
    name: 'Python Basics & Environment Setup',
    description: 'Set up Python, virtual environments, and learn basic syntax for data science.',
    level: 0,
    category: 'Foundations',
    tags: ['setup', 'python', 'beginner'],
    folder: '100-os-libraries/',
    difficulty: 'Beginner',
    status: 'Complete'
  },
  {
    id: 'api-explorer',
    name: 'REST API Explorer',
    description: 'Build a CLI tool to explore REST APIs and understand HTTP requests/responses.',
    level: 0,
    category: 'Foundations',
    tags: ['api', 'http', 'cli'],
    folder: 'experiment/',
    difficulty: 'Beginner',
    status: 'Complete'
  },
  {
    id: 'jupyter-setup',
    name: 'Jupyter Notebook Exploration',
    description: 'Learn to use Jupyter notebooks for interactive data science and experimentation.',
    level: 0,
    category: 'Foundations',
    tags: ['jupyter', 'notebooks', 'interactive'],
    folder: 'experiment/',
    difficulty: 'Beginner',
    status: 'Complete'
  },

  // Level 1 - LLM Basics
  {
    id: 'prompt-engineer',
    name: 'Prompt Engineering Fundamentals',
    description: 'Learn prompt engineering techniques and create effective prompts for different tasks.',
    level: 1,
    category: 'LLM Basics',
    tags: ['prompting', 'llm', 'techniques'],
    folder: 'experiment/',
    difficulty: 'Beginner',
    status: 'Complete'
  },
  {
    id: 'llm-cli-app',
    name: 'Build an LLM CLI Application',
    description: 'Create a command-line application that interacts with ChatGPT or Claude APIs.',
    level: 1,
    category: 'LLM Basics',
    tags: ['api', 'cli', 'llm'],
    folder: 'ai-apps-collection/',
    difficulty: 'Beginner',
    status: 'Complete'
  },
  {
    id: 'api-wrapper',
    name: 'LLM API Wrapper Library',
    description: 'Build a library that simplifies interactions with multiple LLM APIs.',
    level: 1,
    category: 'LLM Basics',
    tags: ['library', 'api', 'abstraction'],
    folder: 'llm-testing/',
    difficulty: 'Intermediate',
    status: 'Complete'
  },

  // Level 2 - Simple Apps
  {
    id: 'chatbot-app',
    name: 'Interactive Chatbot with Streamlit',
    description: 'Build an interactive chatbot UI using Streamlit with conversation memory.',
    level: 2,
    category: 'Simple Apps',
    tags: ['streamlit', 'chatbot', 'ui'],
    folder: 'ai-apps-collection/',
    difficulty: 'Intermediate',
    status: 'Complete'
  },
  {
    id: 'code-generator',
    name: 'AI Code Generator',
    description: 'Create an application that generates code based on natural language descriptions.',
    level: 2,
    category: 'Simple Apps',
    tags: ['code-generation', 'llm', 'langchain'],
    folder: 'ai-apps-collection/',
    difficulty: 'Intermediate',
    status: 'Complete'
  },
  {
    id: 'summarizer-app',
    name: 'Document Summarizer',
    description: 'Build an app that extracts and summarizes key information from documents.',
    level: 2,
    category: 'Simple Apps',
    tags: ['summarization', 'rag', 'document-processing'],
    folder: 'rag/',
    difficulty: 'Intermediate',
    status: 'Complete'
  },

  // Level 3 - RAG & Agents
  {
    id: 'rag-chatbot',
    name: 'RAG-Powered Chatbot',
    description: 'Build a chatbot that retrieves and references documents in its responses.',
    level: 3,
    category: 'RAG & Agents',
    tags: ['rag', 'vector-db', 'retrieval'],
    folder: 'rag/',
    difficulty: 'Intermediate',
    status: 'Complete'
  },
  {
    id: 'web-researcher-agent',
    name: 'Web Research Agent',
    description: 'Create an autonomous agent that can search the web and synthesize information.',
    level: 3,
    category: 'RAG & Agents',
    tags: ['agent', 'tools', 'web-search'],
    folder: 'ai-agents/',
    difficulty: 'Intermediate',
    status: 'Complete'
  },
  {
    id: 'document-analyzer',
    name: 'Multi-Document Analysis System',
    description: 'Build a system to analyze and extract patterns across multiple documents.',
    level: 3,
    category: 'RAG & Agents',
    tags: ['rag', 'analysis', 'multi-doc'],
    folder: 'rag/',
    difficulty: 'Advanced',
    status: 'Complete'
  },

  // Level 4 - Production
  {
    id: 'production-api',
    name: 'Production-Ready API',
    description: 'Build a FastAPI-based API for serving an LLM application at scale.',
    level: 4,
    category: 'Production',
    tags: ['fastapi', 'api', 'deployment'],
    folder: 'ai-apps-collection/',
    difficulty: 'Advanced',
    status: 'Complete'
  },
  {
    id: 'monitoring-dashboard',
    name: 'Monitoring & Observability Dashboard',
    description: 'Create monitoring tools to track performance, costs, and errors in production.',
    level: 4,
    category: 'Production',
    tags: ['monitoring', 'observability', 'devops'],
    folder: 'experiment/',
    difficulty: 'Advanced',
    status: 'Complete'
  },
  {
    id: 'async-job-processor',
    name: 'Async Job Processing System',
    description: 'Implement a scalable async job queue for long-running LLM tasks.',
    level: 4,
    category: 'Production',
    tags: ['async', 'celery', 'scalability'],
    folder: 'experiment/',
    difficulty: 'Advanced',
    status: 'Complete'
  },

  // Level 5 - Advanced
  {
    id: 'fine-tuned-model',
    name: 'Fine-Tuned LLM Deployment',
    description: 'Fine-tune an LLM on domain-specific data and deploy for inference.',
    level: 5,
    category: 'Advanced',
    tags: ['fine-tuning', 'lora', 'custom-models'],
    folder: 'fine-tuning/',
    difficulty: 'Advanced',
    status: 'Complete'
  },
  {
    id: 'vision-app',
    name: 'Multimodal Vision Application',
    description: 'Build an app using vision models (GPT-4V, Claude Vision) for image understanding.',
    level: 5,
    category: 'Advanced',
    tags: ['vision', 'multimodal', 'gpt-4v'],
    folder: 'ai-apps-collection/',
    difficulty: 'Advanced',
    status: 'Complete'
  },
  {
    id: 'multimodal-agent',
    name: 'Advanced Multimodal Agent',
    description: 'Create a sophisticated agent that combines vision, text, and action capabilities.',
    level: 5,
    category: 'Advanced',
    tags: ['agent', 'multimodal', 'advanced'],
    folder: 'ai-agents/',
    difficulty: 'Advanced',
    status: 'Complete'
  },

  // Specialization Projects
  {
    id: 'ai-powered-editor',
    name: 'AI-Powered Code Editor',
    description: 'Full-stack application with AI code completion and intelligent suggestions.',
    level: [2, 3, 4, 5],
    category: 'Specialization',
    tags: ['app-dev', 'frontend', 'full-stack'],
    folder: 'ai-apps-collection/',
    difficulty: 'Advanced',
    status: 'In Progress'
  },
  {
    id: 'real-time-collab-app',
    name: 'Real-Time Collaborative AI App',
    description: 'Build a collaborative app with WebSockets and AI features supporting multiple users.',
    level: [2, 3, 4],
    category: 'Specialization',
    tags: ['app-dev', 'websockets', 'collab'],
    folder: 'ai-apps-collection/',
    difficulty: 'Advanced',
    status: 'In Progress'
  },
  {
    id: 'mobile-ai-assistant',
    name: 'Mobile AI Assistant',
    description: 'Create a mobile app (iOS/Android) powered by GenAI with offline capabilities.',
    level: [3, 4, 5],
    category: 'Specialization',
    tags: ['app-dev', 'mobile', 'offline'],
    folder: 'ai-apps-collection/',
    difficulty: 'Advanced',
    status: 'Starter'
  },
  {
    id: 'production-saas-app',
    name: 'Production SaaS Product',
    description: 'Build and deploy a complete SaaS application with AI features, billing, and analytics.',
    level: [4, 5],
    category: 'Specialization',
    tags: ['app-dev', 'saas', 'production'],
    folder: 'ai-apps-collection/',
    difficulty: 'Advanced',
    status: 'Starter'
  },
  {
    id: 'scalable-rag-system',
    name: 'Scalable RAG Platform',
    description: 'Engineer a large-scale RAG system supporting millions of documents and high QPS.',
    level: [3, 4, 5],
    category: 'Specialization',
    tags: ['engineer', 'rag', 'scalability'],
    folder: 'rag/',
    difficulty: 'Advanced',
    status: 'In Progress'
  },
  {
    id: 'llm-serving-platform',
    name: 'LLM Serving & Inference Platform',
    description: 'Build infrastructure for serving multiple LLMs with caching, batching, and optimization.',
    level: [4, 5],
    category: 'Specialization',
    tags: ['engineer', 'llm-serving', 'infrastructure'],
    folder: 'experiment/',
    difficulty: 'Advanced',
    status: 'Starter'
  },
  {
    id: 'distributed-agent-system',
    name: 'Distributed Multi-Agent System',
    description: 'Design and implement distributed agents orchestrating complex workflows.',
    level: [3, 4, 5],
    category: 'Specialization',
    tags: ['engineer', 'agents', 'distributed'],
    folder: 'ai-agents/',
    difficulty: 'Advanced',
    status: 'Starter'
  },
  {
    id: 'optimization-framework',
    name: 'AI System Optimization Framework',
    description: 'Create tools for benchmarking, profiling, and optimizing AI application performance.',
    level: [4, 5],
    category: 'Specialization',
    tags: ['engineer', 'optimization', 'tools'],
    folder: 'experiment/',
    difficulty: 'Advanced',
    status: 'Starter'
  },
  {
    id: 'novel-rag-technique',
    name: 'Novel RAG Architecture Research',
    description: 'Research and implement innovative RAG approaches with published benchmarks.',
    level: [3, 4, 5],
    category: 'Specialization',
    tags: ['research', 'rag', 'novel'],
    folder: 'rag/',
    difficulty: 'Advanced',
    status: 'Starter'
  },
  {
    id: 'agent-architecture-research',
    name: 'Agent Architecture Research',
    description: 'Research optimal agent architectures for different problem classes.',
    level: [3, 5],
    category: 'Specialization',
    tags: ['research', 'agents', 'architecture'],
    folder: 'ai-agents/',
    difficulty: 'Advanced',
    status: 'Starter'
  },
  {
    id: 'fine-tuning-optimization',
    name: 'Fine-Tuning Optimization Study',
    description: 'Research and publish findings on efficient fine-tuning methods.',
    level: [5],
    category: 'Specialization',
    tags: ['research', 'fine-tuning', 'optimization'],
    folder: 'fine-tuning/',
    difficulty: 'Advanced',
    status: 'Starter'
  },
  {
    id: 'explainability-study',
    name: 'LLM Explainability Research',
    description: 'Investigate interpretability and explainability in large language models.',
    level: [5],
    category: 'Specialization',
    tags: ['research', 'explainability', 'safety'],
    folder: 'experiment/',
    difficulty: 'Advanced',
    status: 'Starter'
  },
  {
    id: 'product-research-study',
    name: 'AI Product Market Research',
    description: 'Comprehensive user and market research for AI product positioning.',
    level: [2, 3, 4],
    category: 'Specialization',
    tags: ['product', 'research', 'market'],
    folder: 'experiment/',
    difficulty: 'Intermediate',
    status: 'Starter'
  },
  {
    id: 'competitive-benchmark',
    name: 'Competitive Benchmarking Study',
    description: 'Analyze competitive AI products and create detailed feature benchmarks.',
    level: [3, 4],
    category: 'Specialization',
    tags: ['product', 'competitive-analysis', 'benchmarking'],
    folder: 'experiment/',
    difficulty: 'Intermediate',
    status: 'Starter'
  },
  {
    id: 'metrics-framework',
    name: 'AI Product Metrics Framework',
    description: 'Design comprehensive metrics and analytics frameworks for AI products.',
    level: [4, 5],
    category: 'Specialization',
    tags: ['product', 'metrics', 'analytics'],
    folder: 'experiment/',
    difficulty: 'Advanced',
    status: 'Starter'
  },
  {
    id: 'business-case-analysis',
    name: 'AI Business Case Analysis',
    description: 'Develop detailed business cases for AI product investments.',
    level: [4],
    category: 'Specialization',
    tags: ['product', 'business', 'analysis'],
    folder: 'experiment/',
    difficulty: 'Advanced',
    status: 'Starter'
  }
]
