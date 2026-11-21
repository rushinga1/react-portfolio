import { Project, SkillCategory, FocusAreaItem } from '../types';

export const HERO_PORTRAIT = '/assets/aistudio/WhatsApp_Image_2026-11-21_at_21.30.50_2563126a.jpeg';

export const PROJECTS_DATA: Project[] = [
  // LIVE PROJECTS (6)
  {
    id: 'skycast',
    title: 'SkyCast',
    slug: 'skycast',
    subtitleType: 'Personal Project — Weather App',
    tagline: 'A real-time weather application where users input a location to view detailed meteorological data.',
    category: 'Web Apps',
    status: 'Live',
    year: '2026',
    featured: true,
    image: '/src/assets/images/project_skycast_1795282167675.jpg',
    imageAlt: 'SkyCast real-time weather application displaying temperature, humidity, wind speed, and atmospheric pressure',
    description: 'A real-time weather application where users input a location to view detailed meteorological data.',
    longDescription: 'SkyCast is a responsive real-time weather web application designed for instant meteorological clarity. Users can search any city or location worldwide to retrieve live temperature readings, relative humidity percentages, wind speed metrics, and atmospheric pressure sourced from a RESTful Weather API.',
    client: 'Personal Project',
    role: 'Web Developer & UI Designer',
    impact: 'Live on Vercel with real-time REST API integration and responsive cross-device layout.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'REST APIs', 'Responsive Design', 'Vercel'],
    liveUrl: 'https://day1-internship-47k7.vercel.app',
    highlights: [
      'Displays temperature, humidity, wind speed, and atmospheric pressure using a Weather API',
      'Clean location search input with immediate asynchronous client-server fetching',
      'Responsive card hierarchy adapting seamlessly from mobile screens to desktop displays'
    ]
  },
  {
    id: 'mrdevgame',
    title: 'MRDEVGAME',
    slug: 'mrdevgame',
    subtitleType: 'Game Development — Platformer',
    tagline: 'A platformer game built with multiple levels and challenging gameplay mechanics.',
    category: 'Game Development',
    status: 'Live',
    year: '2026',
    featured: true,
    image: '/src/assets/images/project_platformer_1795282168705.jpg',
    imageAlt: 'MRDEVGAME browser-based platformer game showing multi-level gameplay mechanics',
    description: 'A platformer game built with multiple levels and challenging gameplay mechanics.',
    longDescription: 'MRDEVGAME is a browser-based 2D platformer built to deliver tight player controls, multi-stage progression, and engaging level obstacles directly in the browser without external plugins. Focused on responsive collision physics and playful game feel.',
    client: 'Personal Game Project',
    role: 'Game Developer & Designer',
    impact: 'Deployed on Vercel with multi-level progression and engaging browser-based gameplay.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Game Physics', 'Web Deployment', 'Vercel'],
    liveUrl: 'https://mrdevgame.vercel.app',
    highlights: [
      'Multiple handcrafted levels with progressive challenge and obstacle pacing',
      'Smooth browser-based rendering loop and responsive player movement mechanics',
      'Deployed on Vercel and focused on engaging, accessible game design'
    ]
  },
  {
    id: 'mrdev-puzzle',
    title: 'Mrdev puzzle',
    slug: 'mrdev-puzzle',
    subtitleType: 'Game Development — Puzzle Game',
    tagline: 'A logic-based puzzle game featuring multiple challenges and levels.',
    category: 'Game Development',
    status: 'Live',
    year: '2026',
    featured: true,
    image: '/src/assets/images/project_ai_canvas_1794418766266.jpg',
    imageAlt: 'Mrdev puzzle interactive logic-based puzzle game workspace',
    description: 'A logic-based puzzle game featuring multiple challenges and levels.',
    longDescription: 'Mrdev puzzle challenges players with progressive brainteasers and structured spatial/logic mechanics. Designed around crisp visual feedback and escalating difficulty curves that test problem-solving and logical thinking skills.',
    client: 'Personal Game Project',
    role: 'Game Developer & UI Designer',
    impact: 'Live interactive puzzle experience deployed on Vercel with multi-stage logic challenges.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'UI/UX Design', 'Responsive Design', 'Vercel'],
    liveUrl: 'https://day2-puzzle.vercel.app',
    highlights: [
      'Logic-based puzzle mechanics across multiple structured challenges and levels',
      'Designed specifically to test problem-solving and logical thinking skills',
      'Clean interactive interface with immediate state validation and level progression'
    ]
  },
  {
    id: 'igisoro',
    title: 'Igisoro',
    slug: 'igisoro',
    subtitleType: 'Game Development — Traditional Game',
    tagline: 'A digital adaptation of the traditional Rwandan board game Igisoro.',
    category: 'Game Development',
    status: 'Live',
    year: '2026',
    featured: true,
    image: '/src/assets/images/project_igisoro_1795282168900.jpg',
    imageAlt: 'Igisoro digital adaptation of the traditional Rwandan board game with modern UI',
    description: 'A digital adaptation of the traditional Rwandan board game Igisoro.',
    longDescription: 'Igisoro brings the beloved traditional Rwandan mancala-style strategy game to modern web browsers. Built with faithful rule enforcement, strategic turn-based gameplay, built-in AI opponent logic, and an approachable, modern visual interface.',
    client: 'Cultural Game Adaptation',
    role: 'Full-Stack & Game Logic Developer',
    impact: 'Preserves traditional Rwandan strategic gameplay online with built-in AI logic.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Client-Server Systems', 'UI/UX Design'],
    liveUrl: 'https://mrdevigisoro.onrender.com',
    highlights: [
      'Faithful digital adaptation of traditional Rwandan Igisoro board rules',
      'Features strategic turn-based gameplay and built-in AI opponent logic',
      'Clean, modern interface making complex board states easy to read and play'
    ]
  },
  {
    id: 'smartcompany',
    title: 'SmartCompany',
    slug: 'smartcompany',
    subtitleType: 'Business Tool — Stock Management',
    tagline: 'A stock management platform built to streamline company operations.',
    category: 'Business & Commerce',
    status: 'Live',
    year: '2026',
    featured: true,
    image: '/src/assets/images/project_smartcompany_1795282169859.jpg',
    imageAlt: 'SmartCompany stock management platform displaying inventory tracking and product tables',
    description: 'A stock management platform built to streamline company operations.',
    longDescription: 'SmartCompany is a practical business operations tool engineered to eliminate manual spreadsheet inventory tracking. Teams can monitor stock counts, add or update products, and oversee day-to-day company inventory workflows through an intuitive, responsive web interface.',
    client: 'Business Operations Platform',
    role: 'Full-Stack Web Developer',
    impact: 'Streamlines company stock tracking and product management in a unified web app.',
    technologies: ['React', 'JavaScript', 'Node.js', 'REST APIs', 'Responsive Design', 'Vercel'],
    liveUrl: 'https://smartcompanyltd.vercel.app',
    highlights: [
      'Helps businesses track inventory levels and manage product catalogs efficiently',
      'Intuitive web interface designed for everyday operational speed and clarity',
      'Client-server data synchronization deployed on Vercel'
    ]
  },
  {
    id: 'kigali-tech-store',
    title: 'Kigali Tech Store',
    slug: 'kigali-tech-store',
    subtitleType: 'E-Commerce',
    tagline: 'A Rwanda-inspired electronics and gadget shop built with Vue.js.',
    category: 'Business & Commerce',
    status: 'Live',
    year: '2026',
    featured: true,
    image: '/src/assets/images/project_kigalitech_1795282169411.jpg',
    imageAlt: 'Kigali Tech Store electronics and gadget e-commerce storefront interface',
    description: 'A Rwanda-inspired electronics and gadget shop built with Vue.js, featuring a responsive, modern UI and detailed product listings.',
    longDescription: 'Kigali Tech Store is a modern e-commerce storefront crafted with Vue.js and tailored for electronics and gadget shoppers in Rwanda. It features structured product categories, detailed product listings, responsive browsing across devices, and a streamlined storefront UI.',
    client: 'E-Commerce Showcase',
    role: 'Frontend Developer & UI Designer',
    impact: 'Responsive Vue.js e-commerce experience deployed live on Vercel.',
    technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Vercel'],
    liveUrl: 'https://kgltech-8s6g.vercel.app',
    highlights: [
      'Built with Vue.js for reactive product filtering and seamless storefront browsing',
      'Features a responsive, modern UI tailored for desktop and mobile shoppers',
      'Detailed product listings showcasing electronics and tech accessories'
    ]
  },

  // COMING SOON / IN DEVELOPMENT (4)
  {
    id: 'onthego',
    title: 'OnTheGo',
    slug: 'onthego',
    subtitleType: 'Group Project — Docks Corporation',
    tagline: 'An online ticket booking and transport platform.',
    category: 'Web Apps',
    status: 'In Development',
    year: '2026',
    featured: false,
    image: '/src/assets/images/project_fintech_1794418765636.jpg',
    imageAlt: 'OnTheGo transport and online ticket booking platform interface preview',
    description: 'An online ticket booking and transport platform built to let users book transport tickets through an accessible web interface.',
    longDescription: 'Developed in collaboration with Docks Corporation as a group project, OnTheGo streamlines commuter and intercity travel reservations. The platform focuses on an accessible, reliable client-server booking workflow that allows passengers to discover routes and reserve transport tickets online.',
    client: 'Docks Corporation (Group Project)',
    role: 'Frontend & Client-Server Developer',
    impact: 'In active development — streamlining online transport reservations and route accessibility.',
    technologies: ['React', 'Node.js', 'REST APIs', 'Client-Server Systems', 'Agile', 'GitHub'],
    highlights: [
      'Built to let users search routes and book transport tickets through an accessible web interface',
      'Collaborative team workflow using Git, GitHub, and Agile sprint practices',
      'Structured client-server booking architecture designed for reliability'
    ]
  },
  {
    id: 'incognito',
    title: 'Incognito',
    slug: 'incognito',
    subtitleType: 'Design Prototype',
    tagline: "A Figma UI/UX prototype inspired by Instagram's social feed experience.",
    category: 'UI/UX & Prototypes',
    status: 'In Development',
    year: '2026',
    featured: false,
    image: '/src/assets/images/project_ecommerce_1794418767076.jpg',
    imageAlt: 'Incognito Figma UI/UX social feed prototype visual showcase',
    description: "A Figma UI/UX prototype inspired by Instagram's social feed experience, focusing on clean UI patterns and smooth user flows.",
    longDescription: "Incognito explores modern mobile and web social interaction design in Figma. Inspired by Instagram's feed experience, the prototype refines visual hierarchy, navigation ergonomics, and interactive screen transitions to establish a cohesive, distraction-free social sharing aesthetic.",
    client: 'UI/UX Design Exploration',
    role: 'UI/UX Designer & Prototyper',
    impact: 'Interactive Figma prototype demonstrating refined social feed flows and clean UI patterns.',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Responsive Design'],
    highlights: [
      'Focuses on clean UI patterns, smooth user flows, and a modern social sharing aesthetic',
      'Interactive clickable Figma screens modeling feed browsing, stories, and profile navigation',
      'Consistent spacing, typography, and component reuse across views'
    ]
  },
  {
    id: 'agruni',
    title: 'Agruni',
    slug: 'agruni',
    subtitleType: 'Company-Commissioned Group Project',
    tagline: 'A collaborative web application built for a client to address specific business needs.',
    category: 'Web Apps',
    status: 'In Development',
    year: '2026',
    featured: false,
    image: '/src/assets/images/project_smartcompany_1795282169859.jpg',
    imageAlt: 'Agruni collaborative web application architecture preview',
    description: 'A collaborative web application built for a client to address specific business needs, engineered with scalability in mind.',
    longDescription: 'Agruni is a company-commissioned group engineering project tailored to solve concrete operational requirements for a real-world client. Built with modular frontend components, structured REST API integration, and scalable client-server patterns suited for production deployment.',
    client: 'Company-Commissioned Client',
    role: 'Full-Stack Team Contributor',
    impact: 'Engineered collaboratively with scalability and real-world deployment in mind.',
    technologies: ['React', 'Node.js', 'REST APIs', 'Client-Server Systems', 'Git', 'Agile'],
    highlights: [
      'Collaborative web application engineered to address tailored client business workflows',
      'Designed with scalability, maintainability, and real-world deployment in mind',
      'Coordinated development with Postman API testing, Git branching, and Agile milestones'
    ]
  },
  {
    id: 'pulse-news',
    title: 'Pulse News',
    slug: 'pulse-news',
    subtitleType: 'Personal Project — Search & News App',
    tagline: 'A personalized news aggregator and search engine organizing articles across multiple sections.',
    category: 'Web Apps',
    status: 'In Development',
    year: '2026',
    featured: false,
    image: '/src/assets/images/project_skycast_1795282167675.jpg',
    imageAlt: 'Pulse News personalized news aggregator and search interface preview',
    description: 'A personalized news aggregator and search engine that organizes articles across multiple sections tailored to user preferences.',
    longDescription: 'Pulse News combines fast keyword search with topic-based curation to help readers cut through information noise. Built as a personal web application integrating external news REST APIs, multi-section article filtering, and responsive reading layouts.',
    client: 'Personal Project',
    role: 'Frontend & API Integration Developer',
    impact: 'In active development — multi-section news curation and responsive search.',
    technologies: ['React', 'JavaScript', 'REST APIs', 'Responsive Design', 'CSS', 'Vercel'],
    highlights: [
      'Organizes articles across multiple topic sections tailored to user preferences',
      'Fast search filtering powered by RESTful news API endpoints',
      'Distraction-free editorial reading typography across desktop and mobile viewports'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Crafting responsive, interactive web interfaces and browser-based experiences.',
    skills: [
      {
        name: 'HTML',
        description: 'Semantic document structure, accessible landmarks, forms, and clean markup.',
      },
      {
        name: 'CSS',
        description: 'Modern Grid & Flexbox layouts, responsive breakpoints, transitions, and visual polish.',
      },
      {
        name: 'JavaScript',
        description: 'ES6+ application logic, DOM orchestration, asynchronous API calls, and game loops.',
      },
      {
        name: 'React',
        description: 'Modular component architecture, hooks, state management, and client-side routing.',
      },
      {
        name: 'Vue.js',
        description: 'Reactive storefronts and structured single-file components powering e-commerce UIs.',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Building structured server logic, API integrations, and dependable data flows.',
    skills: [
      {
        name: 'Node.js',
        description: 'Server-side JavaScript runtime for scalable web services and application backends.',
      },
      {
        name: 'REST APIs',
        description: 'Designing, consuming, and testing structured HTTP endpoints for live data feeds.',
      },
      {
        name: 'Client-Server Systems',
        description: 'Connecting responsive frontends cleanly to backend services, state, and business logic.',
      },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Shaping clear user journeys, clean interfaces, and interactive product prototypes.',
    skills: [
      {
        name: 'Figma',
        description: 'Component libraries, wireframes, high-fidelity screens, and collaborative design handoffs.',
      },
      {
        name: 'UI/UX Design',
        description: 'Information hierarchy, intuitive user flows, accessibility, and cohesive visual systems.',
      },
      {
        name: 'Prototyping',
        description: 'Interactive clickable flows for testing layouts and user journeys before implementation.',
      },
    ],
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description: 'Shipping reliable applications from local development to live production URLs.',
    skills: [
      {
        name: 'Web Deployment',
        description: 'Production build pipelines, environment configuration, and live hosting workflows.',
      },
      {
        name: 'Vercel',
        description: 'Zero-downtime frontend and full-stack deployments with automated preview URLs.',
      },
      {
        name: 'Git',
        description: 'Version control, feature branching, clean commit histories, and collaborative merges.',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Daily engineering environment for coding, version collaboration, and API verification.',
    skills: [
      {
        name: 'GitHub',
        description: 'Repository hosting, pull request reviews, issue tracking, and team code collaboration.',
      },
      {
        name: 'VS Code',
        description: 'Primary development editor configured for TypeScript, React, Vue.js, and Node.js.',
      },
      {
        name: 'Postman',
        description: 'Testing REST API requests, inspecting payloads, and verifying backend endpoints.',
      },
    ],
  },
  {
    id: 'other',
    title: 'Other',
    description: 'Cross-cutting engineering practices that keep projects adaptable and collaborative.',
    skills: [
      {
        name: 'Responsive Design',
        description: 'Fluid interfaces engineered to adapt gracefully across phones, tablets, and desktops.',
      },
      {
        name: 'Agile',
        description: 'Iterative sprint delivery, collaborative group workflows, and adaptive problem solving.',
      },
    ],
  },
];

export const FOCUS_AREAS_DATA: FocusAreaItem[] = [
  {
    number: '01',
    title: 'Web Development',
    summary: 'Building practical, scalable web applications—from real-time weather utilities and news aggregators to business stock management platforms and Vue.js e-commerce stores.',
    highlights: [
      'Component-driven UI engineering with React, Vue.js, HTML, CSS, and JavaScript',
      'Live production deployments on Vercel and Render with responsive mobile-first layouts',
      'Practical business tools like SmartCompany and storefronts like Kigali Tech Store'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Vercel']
  },
  {
    number: '02',
    title: 'UI/UX Design & Prototyping',
    summary: 'Designing clean interfaces and intuitive user journeys in Figma before writing code, balancing aesthetics with everyday usability.',
    highlights: [
      'Interactive Figma prototypes such as Incognito focusing on clean UI patterns and smooth user flows',
      'Consistent visual hierarchy, dark/light theme parity, and accessible navigation',
      'Translating user requirements directly into responsive, interactive web layouts'
    ],
    technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Responsive Design']
  },
  {
    number: '03',
    title: 'Client-Server Systems & APIs',
    summary: 'Architecting dependable communication between client interfaces and backend services for real-world group and company-commissioned applications.',
    highlights: [
      'Integrating REST APIs for live data platforms like SkyCast and Pulse News',
      'Developing collaborative client-server applications including OnTheGo and Agruni',
      'Testing endpoints and data contracts thoroughly with Node.js and Postman'
    ],
    technologies: ['Node.js', 'REST APIs', 'Client-Server Systems', 'Postman', 'GitHub']
  },
  {
    number: '04',
    title: 'Browser-Based Games',
    summary: 'Crafting interactive browser games that blend engaging game mechanics, strategic logic, and clean interfaces—including cultural adaptations.',
    highlights: [
      'Igisoro: Digital adaptation of the traditional Rwandan board game with built-in AI logic',
      'MRDEVGAME: Multi-level platformer focused on engaging mechanics and responsive controls',
      'Mrdev puzzle: Logic-based puzzle challenges designed to test problem-solving skills'
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Game Logic', 'AI Logic', 'Web Deployment']
  }
];

export const FAQS_DATA = [
  {
    q: 'What types of projects do you build?',
    a: 'I build practical, scalable web applications (business inventory systems, e-commerce stores, API-driven web apps), interactive Figma UI/UX prototypes, client-server group systems, and browser-based games.'
  },
  {
    q: 'What is your primary development stack?',
    a: 'On the frontend I work with HTML, CSS, JavaScript, React, and Vue.js. On the backend I build with Node.js, REST APIs, and Client-Server architectures, alongside Figma for UI/UX design and Vercel, Git, GitHub, VS Code, and Postman for deployment and tooling.'
  },
  {
    q: 'Can I preview your live deployed projects?',
    a: 'Yes! Six live applications—SkyCast, MRDEVGAME, Mrdev puzzle, Igisoro, SmartCompany, and Kigali Tech Store—are deployed online and accessible directly from the Work section cards and detail modals.'
  },
  {
    q: 'Are you open to group projects and client commissions?',
    a: 'Yes. Alongside personal builds, I collaborate on group initiatives (such as OnTheGo with Docks Corporation) and company-commissioned web applications (such as Agruni) using Agile workflows and GitHub.'
  }
];
