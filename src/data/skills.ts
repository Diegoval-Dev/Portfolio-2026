import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [

  {
    id: 'frontend',
    label: { en: 'Frontend', es: 'Frontend' },
    icon: '🎨',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'MUI',
      'Tailwind CSS',
      'State Management',
      'REST Integration',
    ],
  },
  {
    id: 'backend',
    label: { en: 'Backend & APIs', es: 'Backend & APIs' },
    icon: '⚙️',
    skills: [
      'Node.js',
      'NestJS',
      'Express',
      'REST APIs',
      'WebSockets',
      'MongoDB',
      'PostgreSQL',
      'API Design',
    ],
  },
  {
    id: 'languages',
    label: { en: 'Languages', es: 'Lenguajes' },
    icon: '💻',
    skills: [
      'Python',
      'TypeScript',
      'JavaScript',
      'C++',
      'C',
      'Go',
      'SQL',
      'Bash',
      'Java',
      'Rust'
    ],
  },
  {
    id: 'ai-ml',
    label: { en: 'AI & Machine Learning', es: 'IA & Machine Learning' },
    icon: '🤖',
    skills: [
      'PyTorch',
      'Hugging Face Transformers',
      'LangChain',
      'OpenAI API',
      'Sentence Transformers',
      'Fine-tuning (LoRA)',
      'RAG Pipelines',
      'Prompt Engineering',
      'Vector Databases',
    ],
  },
  {
    id: 'cloud',
    label: { en: 'Cloud & DevOps', es: 'Cloud & DevOps' },
    icon: '☁️',
    skills: [
      'AWS (EC2, S3, RDS, VPC)',
      'Docker',
      'GitHub Actions',
      'Linux',
      'Nginx',
      'CI/CD',
    ],
  },
  {
    id: 'systems',
    label: { en: 'Systems & Networking', es: 'Sistemas & Redes' },
    icon: '🔧',
    skills: [
      'POSIX Sockets',
      'Multithreading',
      'TCP/UDP',
      'Protocol Design',
      'Memory Management',
      'Operating Systems Internals',
      'Concurrency Control',
    ],
  },
]