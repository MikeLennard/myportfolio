export const personalInfo = {
  name: "Mike Lennard Dela Cruz",
  title: "Full-Stack Web Developer",
  tagline: "Crafting scalable web applications and intuitive digital experiences with modern React.",
  bio: "I am a passionate developer focused on building clean, high-performance web applications. I specialize in the modern JavaScript ecosystem, React architecture, and responsive user interfaces that delight users.",
  location: "Metro Manila, Philippines",
  email: "lennarddelacruz27@gmail.com",
  phone: "+63 (912) 345-6789",
  avatar: "/profile.jpg",
  availableForHire: true,
  socialLinks: {
    github: "https://github.com/MikeLennard",
    linkedin: "https://www.linkedin.com/in/mike-lennard-dela-cruz-0816381b8",
    twitter: "https://twitter.com",
    discord: "https://discord.com"
  }
};

export const dashboardStats = [
  { id: 1, label: "Projects Completed", value: "15+", description: "Production & academic builds", icon: "🚀" },
  { id: 2, label: "Technologies Mastered", value: "12+", description: "Languages & modern frameworks", icon: "⚡" },
  { id: 3, label: "GitHub Contributions", value: "480+", description: "Commits in the past year", icon: "💻" },
  { id: 4, label: "Client / User Rating", value: "99%", description: "Positive peer & client feedback", icon: "⭐" }
];

export const projectsData = [
  {
    id: "proj-1",
    title: "DevPulse - Developer Social Dashboard",
    category: "Groupings",
    shortDesc: "A real-time developer community hub with post feeds, tech discussions, code snippet sharing, and user profiles.",
    fullDesc: "DevPulse is a full-featured collaborative platform built for developers to connect, showcase their work, and share code snippets with syntax highlighting. Includes user authentication, live comments, upvotes, and markdown support.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    featured: true,
    github: "https://github.com",
    demo: "https://example.com/demo1",
    highlights: ["Real-time feed updates", "Markdown syntax highlighting", "Dark/light responsive layout"]
  },
  {
    id: "proj-2",
    title: "ApexShop - Modern E-Commerce Experience",
    category: "Personal",
    shortDesc: "Sleek e-commerce storefront with product filters, dynamic cart management, and seamless mock checkout flow.",
    fullDesc: "ApexShop features a fluid product catalog with instant category filtering, price range sorting, dynamic cart drawer, and responsive product detail views. Built with optimized component re-rendering and accessible UI patterns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "Context API", "Vite"],
    featured: true,
    github: "https://github.com",
    demo: "https://example.com/demo2",
    highlights: ["Dynamic cart state management", "Product filtering & search", "Glassmorphism UI elements"]
  },
  {
    id: "proj-3",
    title: "CryptoTrack - Real-Time Crypto Analytics",
    category: "Personal",
    shortDesc: "Interactive financial dashboard tracking live cryptocurrency prices, market caps, and interactive trend charts.",
    fullDesc: "A high-performance crypto tracking dashboard consuming live WebSocket and REST APIs. Features sparkline market trends, portfolio tracking calculator, and price alert simulations.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "REST API", "Chart.js", "Tailwind CSS"],
    featured: true,
    github: "https://github.com",
    demo: "https://example.com/demo3",
    highlights: ["Live CoinGecko API integration", "Interactive trend visualization", "Currency conversion calculator"]
  },
  {
    id: "proj-4",
    title: "TaskFlow - Kanban Project Board",
    category: "Groupings",
    shortDesc: "Agile project board with drag-and-drop workflow stages, task prioritization, and team activity logs.",
    fullDesc: "A productivity management tool designed for fast-paced software teams. Allows creating sprint boards, assigning priority tags, tracking deadlines, and filtering tasks by assignee.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Custom CSS", "Drag & Drop", "REST API"],
    featured: false,
    github: "https://github.com",
    demo: "https://example.com/demo4",
    highlights: ["Custom drag-and-drop state", "Priority color coding", "Persistent localStorage cache"]
  },
  {
    id: "proj-5",
    title: "AuraUI - Modern Component Design System",
    category: "Personal",
    shortDesc: "A crafted collection of accessible, glassmorphic React UI components and micro-interactions.",
    fullDesc: "AuraUI is an open-source design system focusing on fluid animations, glassmorphic card overlays, accessible modal systems, and responsive navigations. Includes interactive documentation and copy-paste code snippets.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Figma", "CSS Modules", "Tailwind CSS"],
    featured: false,
    github: "https://github.com",
    demo: "https://example.com/demo5",
    highlights: ["Accessible ARIA compliance", "Interactive live playground", "Custom CSS animation library"]
  },
  {
    id: "proj-6",
    title: "WeatherSphere - Global Radar & Forecasts",
    category: "Groupings",
    shortDesc: "Geolocation weather station providing hourly forecasts, UV index, wind maps, and atmospheric alerts.",
    fullDesc: "A clean, data-driven weather application utilizing OpenWeatherMap API and browser geolocation. Features dynamic gradient backgrounds that adjust based on current local weather conditions and time of day.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "OpenWeather API", "Geolocation", "Tailwind CSS"],
    featured: false,
    github: "https://github.com",
    demo: "https://example.com/demo6",
    highlights: ["Dynamic daytime/nighttime styling", "Geolocation support", "7-day meteorological forecast"]
  }
];

export const skillsData = {
  frontend: [
    { name: "React.js / Next.js", level: 92, icon: "⚛️" },
    { name: "JavaScript (ES6+)", level: 90, icon: "🟨" },
    { name: "HTML5 & Semantic Web", level: 95, icon: "🌐" },
    { name: "Tailwind CSS & Vanilla CSS", level: 94, icon: "🎨" },
    { name: "TypeScript", level: 80, icon: "🔷" }
  ],
  backend: [
    { name: "Node.js & Express", level: 85, icon: "🟢" },
    { name: "RESTful APIs", level: 88, icon: "🔌" },
    { name: "MongoDB & Mongoose", level: 82, icon: "🍃" },
    { name: "SQL & PostgreSQL", level: 75, icon: "🗄️" }
  ],
  tools: [
    { name: "Git & GitHub Workflow", level: 90, icon: "🐙" },
    { name: "Vite & Modern Bundlers", level: 88, icon: "⚡" },
    { name: "Figma UI/UX Prototyping", level: 82, icon: "📐" },
    { name: "Postman API Testing", level: 86, icon: "📮" }
  ]
};

export const educationAndTimeline = [
  {
    id: "t1",
    year: "2024 - Present",
    role: "BS in Information Technology / Computer Science",
    institution: "College of Computer Studies",
    description: "Specializing in Web Development, Software Engineering, and Database Systems. Consistently top of batch in programming and interactive system design.",
    type: "education"
  },
  {
    id: "t2",
    year: "2023 - 2024",
    role: "Junior Web Developer & UI Lead",
    institution: "Freelance & University Projects",
    description: "Developed custom web applications, responsive landing pages, and interactive client portals using React, Tailwind CSS, and RESTful APIs.",
    type: "experience"
  },
  {
    id: "t3",
    year: "2022 - 2023",
    role: "Frontend Development Immersion",
    institution: "Self-Directed & Tech Certifications",
    description: "Completed intensive courses in Modern JavaScript, React Component Architecture, State Management, and CSS Design Systems.",
    type: "milestone"
  }
];

export const certificatesData = [
  {
    id: "cert-1",
    title: "Meta Front-End Developer Specialization",
    issuer: "Meta / Coursera",
    issuerLogo: "meta",
    issueDate: "2024",
    credentialId: "META-FE-984210",
    verifyUrl: "https://www.coursera.org",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    skills: ["React", "JavaScript", "HTML5", "Tailwind CSS"],
    description: "Comprehensive 9-course specialization covering modern React architecture, UI/UX principles, version control, and interactive front-end development.",
    featured: true
  },
  {
    id: "cert-2",
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    issuerLogo: "fcc",
    issueDate: "2024",
    credentialId: "FCC-FEDL-78391",
    verifyUrl: "https://www.freecodecamp.org",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    skills: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    description: "Mastery of modern component state, lifecycle hooks, Redux architecture, and reactive web applications verified through 5 core production projects.",
    featured: true
  },
  {
    id: "cert-3",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    issuerLogo: "fcc",
    issueDate: "2023",
    credentialId: "FCC-JS-49201",
    verifyUrl: "https://www.freecodecamp.org",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    skills: ["JavaScript", "Node.js", "REST APIs"],
    description: "In-depth validation of ES6+ syntax, algorithmic problem solving, object-oriented programming, and functional programming methodologies.",
    featured: true
  },
  {
    id: "cert-4",
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    issuerLogo: "fcc",
    issueDate: "2023",
    credentialId: "FCC-RWD-31092",
    verifyUrl: "https://www.freecodecamp.org",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    skills: ["HTML5", "Tailwind CSS", "Figma"],
    description: "Semantic HTML5, CSS Grid, Flexbox, media queries, and responsive web design patterns across mobile, tablet, and desktop viewports.",
    featured: false
  },
  {
    id: "cert-5",
    title: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    issuerLogo: "fcc",
    issueDate: "2024",
    credentialId: "FCC-BEA-66103",
    verifyUrl: "https://www.freecodecamp.org",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    skills: ["Node.js", "MongoDB", "Express", "REST APIs"],
    description: "Hands-on microservice development, Express server architecture, MongoDB schema modeling, and RESTful API engineering with robust error handling.",
    featured: false
  },
  {
    id: "cert-6",
    title: "Git & GitHub Version Control Masterclass",
    issuer: "Udemy / Global Tech",
    issuerLogo: "git",
    issueDate: "2023",
    credentialId: "UC-GIT-18302",
    verifyUrl: "https://www.udemy.com",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    skills: ["Git", "GitHub"],
    description: "Collaborative Git branching strategies, rebasing, pull requests, merge conflict resolutions, and automated CI/CD workflows.",
    featured: false
  }
];
