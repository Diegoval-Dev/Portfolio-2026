export type TranslationKey = string

export const translations: Record<string, { en: string; es: string }> = {
  // Navbar
  'nav.about': { en: 'About', es: 'Sobre mí' },
  'nav.experience': { en: 'Experience', es: 'Experiencia' },
  'nav.skills': { en: 'Skills', es: 'Habilidades' },
  'nav.projects': { en: 'Projects', es: 'Proyectos' },
  'nav.education': { en: 'Education', es: 'Educación' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },

  // Hero
  'hero.greeting': { en: "Hi, I'm", es: 'Hola, soy' },
  'hero.name': { en: 'Diego Valenzuela', es: 'Diego Valenzuela' },
  'hero.roles': {
    en: 'AI Engineer|Software Engineer|LLM Specialist|Backend Developer|Systems Programmer',
    es: 'Ingeniero de IA|Ingeniero de Software|Especialista en LLMs|Desarrollador Backend|Programador de Sistemas',
  },
'hero.description': {
  en: 'I design and engineer scalable full-stack and AI systems, blending formal computer science foundations, distributed architectures, and modern LLM tooling into production-grade solutions.',
  es: 'Diseño e implemento sistemas full-stack y de inteligencia artificial escalables, integrando fundamentos formales de ciencias de la computación, arquitecturas distribuidas y tecnologías modernas de LLM en soluciones de nivel productivo.',
},
  'hero.cta.projects': { en: 'View Projects', es: 'Ver Proyectos' },
  'hero.cta.contact': { en: "Let's Talk", es: 'Hablemos' },
  'hero.scroll': { en: 'Scroll to explore', es: 'Desplázate para explorar' },

  // About
  'about.title': { en: 'About Me', es: 'Sobre Mí' },
  'about.subtitle': {
    en: 'Engineer, maker, and lifelong learner',
    es: 'Ingeniero, creador y aprendiz constante',
  },
'about.bio1': {
  en: "I'm a Computer Science Engineer from Universidad del Valle de Guatemala focused on building scalable systems at the intersection of backend architecture and applied AI. My work combines strong formal foundations with hands-on experience delivering production-ready full-stack solutions.",
  es: "Soy Ingeniero en Ciencias de la Computación de la Universidad del Valle de Guatemala, enfocado en construir sistemas escalables en la intersección entre arquitectura backend e inteligencia artificial aplicada. Mi trabajo combina fundamentos formales sólidos con experiencia práctica desarrollando soluciones full-stack listas para producción.",
},
'about.bio2': {
  en: "Currently working as a Full-Stack Developer at Workly, contributing to a scalable payroll management platform. My primary focus is on building robust, performant frontend applications with React and Next.js, while also collaborating on backend services and architectural decisions to ensure reliable, production-grade systems.",
  es: "Actualmente trabajo como Full-Stack Developer en Workly, contribuyendo a una plataforma escalable de gestión de planillas. Mi enfoque principal está en desarrollar aplicaciones frontend robustas y de alto rendimiento con React y Next.js, colaborando también en servicios backend y decisiones arquitectónicas para garantizar sistemas confiables de nivel productivo.",
},
'about.traits': {
  en: 'Problem Solver | Systems Thinker | Production-Oriented Engineer | AI Practitioner',
  es: 'Solucionador de Problemas | Pensador de Sistemas | Ingeniero Orientado a Producción | Practicante de IA'
},
  'about.location': { en: 'Guatemala City, Guatemala', es: 'Ciudad de Guatemala, Guatemala' },
  'about.status': { en: 'Open to opportunities', es: 'Abierto a oportunidades' },

  // Experience
  'experience.title': { en: 'Experience', es: 'Experiencia' },
  'experience.subtitle': {
    en: 'Where I have applied my skills professionally',
    es: 'Donde he aplicado mis habilidades profesionalmente',
  },
  'experience.present': { en: 'Present', es: 'Presente' },

  // Skills
  'skills.title': { en: 'Skills', es: 'Habilidades' },
  'skills.subtitle': {
    en: 'Technologies and tools I work with',
    es: 'Tecnologías y herramientas con las que trabajo',
  },

  // Projects
  'projects.title': { en: 'Projects', es: 'Proyectos' },
  'projects.subtitle': {
    en: 'A selection of what I have built',
    es: 'Una selección de lo que he construido',
  },
  'projects.filter.all': { en: 'All', es: 'Todos' },
  'projects.filter.ai': { en: 'AI', es: 'IA' },
  'projects.filter.backend': { en: 'Backend', es: 'Backend' },
  'projects.filter.systems': { en: 'Systems', es: 'Sistemas' },
  'projects.filter.compilers': { en: 'Compilers', es: 'Compiladores' },
  'projects.filter.cloud': { en: 'Cloud', es: 'Cloud' },
  'projects.view_github': { en: 'View on GitHub', es: 'Ver en GitHub' },
  'projects.close': { en: 'Close', es: 'Cerrar' },
  'projects.featured': { en: 'Featured', es: 'Destacado' },
  'projects.no_repo': { en: 'AWS Architecture — No Code Repo', es: 'Arquitectura AWS — Sin Repositorio' },
  'projects.view_details': { en: 'View Details', es: 'Ver Detalles' },

  // Education
  'education.title': { en: 'Education', es: 'Educación' },
  'education.subtitle': {
    en: 'My academic background',
    es: 'Mi formación académica',
  },

  // Contact
  'contact.title': { en: "Let's Connect", es: 'Conectemos' },
  'contact.subtitle': {
    en: "I'm always open to discussing new projects, creative ideas, or opportunities.",
    es: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades.',
  },
  'contact.email_cta': { en: 'Send me an email', es: 'Envíame un correo' },
  'contact.or': { en: 'or find me on', es: 'o encuéntrame en' },
  'contact.copy_email': { en: 'Copy email', es: 'Copiar email' },
  'contact.copied': { en: 'Copied!', es: '¡Copiado!' },

  // Footer
  'footer.built': { en: 'Built with', es: 'Construido con' },
  'footer.by': { en: 'by Diego Valenzuela', es: 'por Diego Valenzuela' },
  'footer.rights': { en: 'All rights reserved', es: 'Todos los derechos reservados' },
}
