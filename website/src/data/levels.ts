import { Level } from '@/lib/types'

export const LEVELS: Level[] = [
  {
    id: 0,
    name: 'foundations',
    title: 'Environment & Foundations',
    description: 'Set up your development environment and learn the basics of APIs and Python.',
    duration: '4 hours',
    difficulty: 'Beginner',
    topics: [
      'Python setup and virtual environments',
      'Command line basics',
      'API fundamentals',
      'Working with JSON and HTTP',
      'Jupyter notebooks',
      'Git and GitHub basics'
    ],
    learningOutcomes: [
      'Set up a complete Python development environment',
      'Make API requests using REST principles',
      'Use Jupyter notebooks for experimentation',
      'Understand request/response cycles',
      'Version control with Git'
    ],
    projects: ['python-basics', 'api-explorer', 'jupyter-setup'],
    checkpoints: 4,
    estimatedHours: 4,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 1,
    name: 'llm-basics',
    title: 'LLM Fundamentals & APIs',
    description: 'Understand how LLMs work and start building with OpenAI/Anthropic APIs.',
    duration: '1-2 weeks',
    difficulty: 'Beginner',
    topics: [
      'How LLMs work internally',
      'Tokenization and context windows',
      'Prompt engineering techniques',
      'Temperature and sampling parameters',
      'Using OpenAI ChatGPT API',
      'Using Claude API',
      'Cost optimization and rate limits',
      'Error handling and retries'
    ],
    learningOutcomes: [
      'Understand transformer architecture basics',
      'Master prompt engineering patterns',
      'Build scripts that call LLM APIs',
      'Manage API costs and tokens effectively',
      'Handle errors gracefully'
    ],
    projects: ['prompt-engineer', 'llm-cli-app', 'api-wrapper'],
    checkpoints: 4,
    estimatedHours: 15,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    name: 'simple-apps',
    title: 'Building Simple GenAI Applications',
    description: 'Create interactive GenAI apps using LangChain and Streamlit.',
    duration: '2-3 weeks',
    difficulty: 'Intermediate',
    topics: [
      'LangChain fundamentals',
      'Chains and agents basics',
      'Streamlit for UI building',
      'Output parsing and validation',
      'Memory and conversation history',
      'Basic deployment strategies',
      'Debugging LLM outputs'
    ],
    learningOutcomes: [
      'Build end-to-end GenAI applications',
      'Create interactive web UIs with Streamlit',
      'Chain LLM calls together effectively',
      'Handle and parse structured outputs',
      'Deploy applications to the cloud'
    ],
    projects: ['chatbot-app', 'code-generator', 'summarizer-app'],
    checkpoints: 4,
    estimatedHours: 20,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    name: 'rag-agents',
    title: 'RAG Systems & Intelligent Agents',
    description: 'Build retrieval-augmented generation systems and multi-step autonomous agents.',
    duration: '3-4 weeks',
    difficulty: 'Intermediate',
    topics: [
      'Vector databases (Pinecone, Weaviate, Qdrant)',
      'Embeddings and semantic search',
      'Retrieval-augmented generation (RAG)',
      'Agent architectures and decision trees',
      'Tool calling and function execution',
      'Multi-agent orchestration',
      'Memory strategies for agents',
      'Evaluation metrics'
    ],
    learningOutcomes: [
      'Implement RAG systems from scratch',
      'Build intelligent agents that make decisions',
      'Orchestrate multiple agents working together',
      'Evaluate RAG and agent performance',
      'Handle complex multi-step reasoning'
    ],
    projects: ['rag-chatbot', 'web-researcher-agent', 'document-analyzer'],
    checkpoints: 4,
    estimatedHours: 25,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    name: 'production',
    title: 'Production Systems & Deployment',
    description: 'Deploy GenAI applications at scale with monitoring and robustness.',
    duration: '3-4 weeks',
    difficulty: 'Advanced',
    topics: [
      'FastAPI for building APIs',
      'Docker containerization',
      'Database integration (PostgreSQL, MongoDB)',
      'Asynchronous processing with Celery',
      'Logging and monitoring',
      'Rate limiting and load balancing',
      'Cost optimization strategies',
      'Testing and CI/CD pipelines',
      'Security best practices'
    ],
    learningOutcomes: [
      'Build production-grade APIs',
      'Deploy and scale applications',
      'Monitor and debug production systems',
      'Optimize costs at scale',
      'Implement robust testing strategies'
    ],
    projects: ['production-api', 'monitoring-dashboard', 'async-job-processor'],
    checkpoints: 4,
    estimatedHours: 30,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 5,
    name: 'advanced',
    title: 'Advanced GenAI Techniques',
    description: 'Master fine-tuning, multimodal systems, and advanced optimization.',
    duration: '4-5 weeks',
    difficulty: 'Advanced',
    topics: [
      'Fine-tuning LLMs on custom data',
      'Instruction tuning and LoRA',
      'Multimodal models (vision, audio)',
      'Advanced prompting techniques',
      'Retrieval optimization and reranking',
      'Alignment and safety fine-tuning',
      'Building domain-specific models',
      'Performance benchmarking',
      'Cost-benefit analysis of approaches'
    ],
    learningOutcomes: [
      'Fine-tune models for specialized tasks',
      'Work with multimodal AI systems',
      'Optimize model performance for your use case',
      'Build and benchmark specialized systems',
      'Understand model safety and alignment'
    ],
    projects: ['fine-tuned-model', 'vision-app', 'multimodal-agent'],
    checkpoints: 4,
    estimatedHours: 35,
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 6,
    name: 'specialization',
    title: 'Choose Your Specialization Path',
    description: 'Deep dive into your specific domain of interest: App Development, Engineering, Research, or Product.',
    duration: '8-14 weeks',
    difficulty: 'Advanced',
    topics: [
      'Specialization paths available',
      'AI App Developer - Full-stack GenAI apps',
      'AI Engineer - System design and optimization',
      'ML Researcher - Advanced techniques and papers',
      'AI Product Manager - Market strategy and metrics'
    ],
    learningOutcomes: [
      'Choose a specialization aligning with your goals',
      'Develop deep expertise in your chosen path',
      'Build portfolio projects specific to your domain',
      'Understand career progression in your field'
    ],
    projects: ['specialized-project-1', 'specialized-project-2'],
    checkpoints: 0,
    estimatedHours: 60,
    color: 'from-violet-500 to-purple-500'
  }
]

export const LEVEL_MAP = {
  [LEVELS[0].id]: LEVELS[0],
  [LEVELS[1].id]: LEVELS[1],
  [LEVELS[2].id]: LEVELS[2],
  [LEVELS[3].id]: LEVELS[3],
  [LEVELS[4].id]: LEVELS[4],
  [LEVELS[5].id]: LEVELS[5],
  [LEVELS[6].id]: LEVELS[6],
}
