import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'nimble',
    role: {
      en: 'Fullstack Software Engineer',
      es: 'Ingeniero de Software Fullstack',
    },
    company: 'nimble.',
    period: {
      en: 'Mar 2026 – Present',
      es: 'Mar 2026 – Presente',
    },
    location: 'Guatemala (Remote)',
    type: {
      en: 'Full-time',
      es: 'Tiempo completo',
    },
    description: {
      en: 'Building and extending a core Django/SvelteKit platform to deliver custom web applications for diverse clients, spanning backend architecture, REST APIs, and responsive frontend interfaces.',
      es: 'Desarrollo y extensión de una plataforma core en Django/SvelteKit para entregar aplicaciones web personalizadas a distintos clientes, abarcando arquitectura backend, APIs REST e interfaces frontend responsivas.',
    },
    achievements: {
      en: [
        'Develop complete full-stack applications using a shared Django and SvelteKit core platform adapted per client domain',
        'Design data models, REST API endpoints, and serialized views with Django REST Framework',
        'Build responsive UIs with SvelteKit, TypeScript, and Tailwind CSS following pixel-perfect design specs',
        'Integrate third-party services including payment gateways, social auth, and email providers',
        'Work under SCRUM with 2-week sprints, participating from planning through production deployment',
        'Enforce quality standards via pre-commit hooks, Black, Flake8, Prettier, and automated testing with pytest and Playwright',
      ],
      es: [
        'Desarrollo de aplicaciones full-stack completas usando una plataforma core compartida en Django y SvelteKit adaptada por dominio de cliente',
        'Diseño de modelos de datos, endpoints REST y vistas serializadas con Django REST Framework',
        'Construcción de interfaces responsivas con SvelteKit, TypeScript y Tailwind CSS siguiendo especificaciones de diseño al píxel',
        'Integración de servicios de terceros incluyendo pasarelas de pago, autenticación social y proveedores de email',
        'Trabajo bajo SCRUM con sprints de 2 semanas, participando desde la planificación hasta el despliegue en producción',
        'Aplicación de estándares de calidad mediante pre-commit hooks, Black, Flake8, Prettier y pruebas automatizadas con pytest y Playwright',
      ],
    },
    tags: ['Django', 'SvelteKit', 'TypeScript', 'Tailwind CSS', 'Python', 'REST APIs', 'Docker', 'pytest', 'Playwright'],
    current: true,
  },
  {
    id: 'workly',
    role: {
      en: 'Junior Full-Stack Developer',
      es: 'Full-Stack Developer Junior',
    },
    company: 'Workly',
    period: {
      en: 'Jul 2024 – Mar 2026',
      es: 'Jul 2024 – Mar 2026',
    },
    location: 'Guatemala (Hybrid)',
    type: {
      en: 'Full-time',
      es: 'Tiempo completo',
    },
    description: {
      en: 'Contributing to the development and evolution of a scalable payroll management platform, focusing on modern frontend architecture and reliable backend services.',
      es: 'Contribuyendo al desarrollo y evolución de una plataforma escalable de gestión de planillas, con enfoque en arquitectura frontend moderna y servicios backend confiables.',
    },
    achievements: {
      en: [
        'Migrated an existing MVP into a production-ready platform, improving performance, scalability, and maintainability',
        'Developed and maintained core features using React, Next.js, MUI, Node.js, and NestJS with TypeScript',
        'Designed and implemented new functionalities with efficient MongoDB integration',
        'Collaborated with cross-functional teams to enhance UI/UX and ensure reliable production deployments',
        'Contributed to architectural improvements to support system growth and long-term maintainability',
      ],
      es: [
        'Migré un MVP existente hacia una plataforma lista para producción, mejorando rendimiento, escalabilidad y mantenibilidad',
        'Desarrollé y mantuve funcionalidades clave utilizando React, Next.js, MUI, Node.js y NestJS con TypeScript',
        'Diseñé e implementé nuevas funcionalidades con integración eficiente a MongoDB',
        'Colaboré con equipos multidisciplinarios para mejorar UI/UX y garantizar despliegues confiables en producción',
        'Contribuí a mejoras arquitectónicas para soportar el crecimiento del sistema y su mantenibilidad a largo plazo',
      ],
    },
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'MongoDB', 'MUI'],
    current: false,
  },
]

export const education = [
  {
    id: 'uvg',
    degree: {
      en: 'B.S. in Computer Science & IT Engineering',
      es: 'Ingeniería en Ciencias de la Computación y Tecnologías de la Información',
    },
    institution: 'Universidad del Valle de Guatemala',
    period: '2022 – 2026',
    location: 'Guatemala City, Guatemala',
    description: {
      en: 'Comprehensive computer science program with strong foundations in algorithms, operating systems, compilers, databases, networking, artificial intelligence, and software engineering.',
      es: 'Programa integral de ciencias de la computación con bases sólidas en algoritmos, sistemas operativos, compiladores, bases de datos, redes, inteligencia artificial e ingeniería de software.',
    },
    highlights: {
      en: [
        'Advanced coursework in Compilers, Operating Systems, Parallel & Distributed Computing, and Deep Learning',
        'Built a complete compiler pipeline including lexical analysis, parsing, semantic analysis, and code generation',
        'Designed simulation and optimization models applying formal mathematical methods',
      ],
      es: [
        'Cursos avanzados en Compiladores, Sistemas Operativos, Computación Paralela y Distribuida, y Deep Learning',
        'Construcción de un compilador completo incluyendo análisis léxico, sintáctico, semántico y generación de código',
        'Diseño de modelos de simulación y optimización aplicando métodos matemáticos formales',
      ],
    },
  },
]
