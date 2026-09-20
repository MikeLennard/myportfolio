export const personalInfo = {
  name: "Mike Lennard Dela Cruz",
  title: "BSIT Developer & Multimedia Specialist",
  tagline: "I’m a University Scholar studying IT at Central Luzon State University, dedicated to building web applications that solve real-world problems.",
  location: "Science City of Muñoz, Nueva Ecija, Philippines",
  email: "lennarddelacruz27@gmail.com",
  avatar: "/profile.jpg",
  availableForHire: true,
  socialLinks: {
    github: "https://github.com/MikeLennard",
    linkedin: "https://www.linkedin.com/in/mike-lennard-dela-cruz-0816381b8",
    facebook: "https://www.facebook.com/mikelennard.delacruz/"
  }
};

export const dashboardStats = [
  { id: 1, label: "Academic & Capstone Projects", value: "5+", description: "Web platforms & database systems", icon: "🚀" },
  { id: 2, label: "Academic Standing", value: "Scholar", description: "Consistent College - University Scholar", icon: "🎓" },
  { id: 3, label: "Specialization", value: "Web Dev", description: "Full-stack & database architecture", icon: "💻" },
  { id: 4, label: "Technology Breadth", value: "Multi-Stack", description: "PHP, Laravel, React, MySQL", icon: "⚡" }
];

export const projectsData = [
  {
    id: "proj-capstone",
    title: "Enhanced Web-Based Record Management System for Indigenous People in Nueva Ecija",
    category: "Capstone",
    year: "2026 (Ongoing)",
    shortDesc: "A secure web system to store, organize, and protect official records for indigenous communities in Nueva Ecija.",
    fullDesc: "My ongoing college capstone project built to help indigenous communities manage their records online. It replaces manual paperwork with a secure web system where admins can register members, manage family records, search community data quickly, and control who can view sensitive information.",
    images: [
      "/projects/ncip1.png",
      "/projects/ncip2.png",
      "/projects/ncip3.png",
      "/projects/ncip4.png",
      "/projects/ncip5.png"
    ],
    tags: ["Laravel", "Vite", "TailwindCSS", "MySQL"],
    featured: true,
    github: "https://github.com/MikeLennard",
    demo: null,
    highlights: [
      "Easy search and digital storage for community records",
      "Role-based accounts to keep private data secure",
      "Ongoing university capstone project at CLSU"
    ]
  },
  {
    id: "proj-nbl",
    title: "NBL Apparel - E-Commerce Platform",
    year: "2026",
    role: "Group Project Developer",
    shortDesc: "An online clothing shop where users can browse apparel, filter products, and place orders.",
    fullDesc: "A group web project built for a clothing brand. Customers can view apparel collections, filter items by category, add clothes to their cart, and see their order summary on a clean, mobile-friendly website.",
    images: [
      "/projects/nbl1.png",
      "/projects/nbl2.png",
      "/projects/nbl3.png",
      "/projects/nbl4.png",
      "/projects/nbl5.png"
    ],
    tags: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
    featured: true,
    github: "https://github.com/MikeLennard",
    demo: null,
    highlights: [
      "Browse clothing with quick category filters",
      "Add-to-cart and order summary checkout flow",
      "Clean and responsive design built with Bootstrap"
    ]
  },
  {
    id: "proj-patient",
    title: "Patient Management System",
    year: "2025",
    role: "Group Project Developer",
    shortDesc: "A web app for clinics to manage patient records, doctor appointments, and checkup history.",
    fullDesc: "A web-based system built to help clinic staff track patient visits and medical logs digitally. Doctors and staff can register new patients, schedule checkup appointments, save medical notes, and find past records in seconds.",
    images: [
      "/projects/pms1.png",
      "/projects/pms2.png",
      "/projects/pms3.png",
      "/projects/pms4.png",
      "/projects/pms5.png"
    ],
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    featured: true,
    github: "https://github.com/MikeLennard",
    demo: null,
    highlights: [
      "Digital patient registration and medical records",
      "Appointment scheduling and clinic visit tracking",
      "Fast search to find patient files instantly"
    ]
  },
  {
    id: "proj-itour",
    title: "ITour - Tourist Spots Booking Application",
    year: "2025",
    role: "Group Project Developer",
    shortDesc: "A mobile app built with Flutter to explore popular tourist spots and book trips easily.",
    fullDesc: "A mobile app developed with Flutter and Dart to help people find and visit local tourist destinations. Users can explore travel spots, read details, view photos, and book their visits directly from their phones.",
    images: [
      "/projects/Itour1.png",
      "/projects/Itour2.png",
      "/projects/Itour3.png",
      "/projects/Itour4.png"
    ],
    tags: ["Flutter", "Dart", "Mobile App"],
    featured: false,
    github: "https://github.com/MikeLennard",
    demo: null,
    highlights: [
      "Explore local tourist attractions with photos and guides",
      "Simple booking and trip reservation flow",
      "Smooth mobile user experience built with Flutter"
    ]
  },
  {
    id: "proj-library",
    title: "Library Management System",
    year: "2025",
    role: "Group Project Developer",
    shortDesc: "A web-based library system to track book inventory, student borrowing, and return dates.",
    fullDesc: "A library management system built with PHP and MySQL for schools. It lets librarians add and organize books, manage student library accounts, record borrowed and returned books, and track overdue fines.",
    image: "/projects/library1.png",
    images: [
      "/projects/library1.png",
      "/projects/library2.png",
      "/projects/library3.png"
    ],
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    featured: false,
    github: "https://github.com/MikeLennard",
    demo: null,
    highlights: [
      "Track book inventory and who borrowed each book",
      "Search books easily by title, author, or category",
      "Dashboard showing total books and active borrowed items"
    ]
  }
];

export const skillsData = {
  all: [
    { name: "Laravel" },
    { name: "PHP" },
    { name: "React.js" },
    { name: "MySQL" },
    { name: "HTML" },
    { name: "Python" },
    { name: "Java" },
    { name: "C" },
    { name: "Flutter" },
    { name: "Dart" },
    { name: "CSS" },
    { name: "WordPress" },
    { name: "Figma" },
    { name: "REST APIs" },
    { name: "JavaScript" },
    { name: "Bootstrap" },
    { name: "Tailwind CSS" }
  ],
  frontend: [
    { name: "React.js" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "WordPress" },
    { name: "Figma" },
    { name: "JavaScript" },
    { name: "Bootstrap" },
    { name: "Tailwind CSS" }
  ],
  backend: [
    { name: "Laravel" },
    { name: "PHP" },
    { name: "MySQL" },
    { name: "Python" },
    { name: "Java" },
    { name: "C" },
    { name: "REST APIs" }
  ],
  mobile: [
    { name: "Flutter" },
    { name: "Dart" }
  ]
};

export const educationAndTimeline = [
  // Education
  {
    id: "t-clsu",
    year: "Aug 2023 - Present",
    sortOrder: 2023.8,
    role: "Bachelor of Science in Information Technology (Computer Programming)",
    institution: "Central Luzon State University (CLSU)",
    description: "Grade: Consistent College Scholar - University Scholar. Major coursework in programming, systems analysis, database management, and software architecture. Actively developing the Capstone project.",
    type: "education"
  },
  {
    id: "t-prog-found",
    year: "2023 - 2024",
    sortOrder: 2023.2,
    role: "Programming Foundations",
    institution: "Central Luzon State University",
    description: "Built rigorous programming foundations covering algorithms, object-oriented concepts, logic formulation, and web engineering principles.",
    type: "education"
  },
  {
    id: "t-mnhs",
    year: "Sep 2021 - Jul 2023",
    sortOrder: 2021.9,
    role: "Information and Communications Technology (Computer System Servicing)",
    institution: "Muñoz National High School Main",
    description: "Specialized in Computer System Servicing, Computer Networking, hardware diagnostics, and Microsoft Office productivity suites.",
    type: "education"
  },

  // Development
  {
    id: "t-capstone",
    year: "2026 (Ongoing)",
    sortOrder: 2026.3,
    role: "Capstone Developer",
    institution: "Central Luzon State University",
    description: "Developer of the Capstone project: Enhanced Web-Based Record Management System for Indigenous People in Nueva Ecija, alongside NBL Apparel E-commerce platform.",
    type: "development"
  },
  {
    id: "t-dev-2025",
    year: "2025",
    sortOrder: 2025.2,
    role: "Group Project Developer",
    institution: "CLSU BSIT Academic Projects",
    description: "Collaborated on multi-platform software projects: Patient Management System, Library Management System, Coffee Shop App, and ITour Tourist Spot Booking App.",
    type: "development"
  },

  // Video Editing
  {
    id: "t-img",
    year: "Feb 2026 - Apr 2026",
    sortOrder: 2026.1,
    role: "Video Editor (Creative Division)",
    institution: "IMG (ITSC Media Group) · Seasonal",
    description: "Edited and produced multimedia coverage for BSIT events, with final outputs published on the official Facebook page of the CLSU Information Technology Student Council.",
    type: "video-editing"
  },
  {
    id: "t-bsit-head",
    year: "Jul 2025 - Feb 2026",
    sortOrder: 2025.7,
    role: "Head Video Editor",
    institution: "Central Luzon State University BSIT Council",
    description: "Head of Video Editing for the CLSU BSIT Multimedia Team. Led video production workflows, mentored editors, and directed multimedia coverage across BSIT Council events.",
    type: "video-editing"
  },
  {
    id: "t-bsit-editor",
    year: "Aug 2024 - Jul 2025",
    sortOrder: 2024.8,
    role: "Video Editor",
    institution: "Central Luzon State University BSIT Council",
    description: "Produced engaging video edits, event recaps, promotional trailers, and multimedia assets for the CLSU BSIT Multimedia Team.",
    type: "video-editing"
  }
];

export const certificatesData = [
  {
    id: "cert-scholar",
    title: "Consistent College Scholar - University Scholar",
    issuer: "Central Luzon State University",
    issuerLogo: "clsu",
    issueDate: "2023 - Present",
    credentialId: "CLSU-SCHOLAR-BSIT",
    verifyUrl: "https://clsu.edu.ph",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    skills: ["Software Engineering", "Database Management System (DBMS)", "Web Development"],
    description: "Awarded by Central Luzon State University for consistent scholastic distinction, maintaining top-tier academic honors semester after semester in the BS Information Technology curriculum.",
    featured: true
  },
  {
    id: "cert-css-ncii",
    title: "Computer Systems Servicing NC II",
    issuer: "TESDA: Technical Education and Skills Development Authority",
    issuerLogo: "tesda",
    issueDate: "2023",
    credentialId: "TESDA-CSS-NCII-PH",
    verifyUrl: "https://www.tesda.gov.ph",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    skills: ["Network Administration", "Windows System Administration", "Computer Networking"],
    description: "National Certificate II validating technical competency in computer hardware assembly, OS installation and configuration, setup of computer networks and servers, and maintenance and repair of computer systems.",
    featured: true
  },
  {
    id: "cert-webdev-dict",
    title: "Web Development",
    issuer: "Department of Information and Communications Technology - Philippines (DICT)",
    issuerLogo: "dict",
    issueDate: "Nov 2024",
    credentialId: "DICT-WD-2024-NOV",
    verifyUrl: "https://dict.gov.ph",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    skills: ["Web Development", "WordPress Design", "HTML", "Cascading Style Sheets (CSS)", "JavaScript"],
    description: "Government-accredited ICT training series covering WebDev via Cloud (WD008), Basic JavaScript for WebDev (WD003), and Designing a Web Page using HTML and CSS (WD002).",
    featured: true
  },
  {
    id: "cert-dataviz-coursera",
    title: "Data Visualization using Bokeh and Plotly",
    issuer: "Coursera",
    issuerLogo: "coursera",
    issueDate: "Mar 2026",
    credentialId: "COURSERA-DATAVIZ-BOKEH-PLOTLY",
    verifyUrl: "https://www.coursera.org",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    skills: ["Data Scalability and Analytics", "Python (Programming Language)"],
    description: "Hands-on data visualization specialization focused on building interactive web-based charts, exploratory dashboards, and statistical plots with Python Bokeh and Plotly.",
    featured: true
  },
  {
    id: "cert-packet-tracer",
    title: "Cisco Packet Tracer",
    issuer: "Cisco",
    issuerLogo: "cisco",
    issueDate: "Feb 2025",
    credentialId: "CISCO-PACKET-TRACER-2025",
    verifyUrl: "https://www.netacad.com",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    skills: ["Packet Tracer", "Computer Networking", "Network Administration"],
    description: "Explored advanced network topology design, simulation of enterprise LAN/WAN environments, routing tables, and real-time packet flow verification using Cisco Packet Tracer.",
    featured: true
  },
  {
    id: "cert-it-support-sec",
    title: "IT Support Security and Connectivity Support",
    issuer: "Cisco",
    issuerLogo: "cisco",
    issueDate: "Mar 2026",
    credentialId: "CISCO-IT-SEC-CONNECT-2026",
    verifyUrl: "https://www.netacad.com",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    skills: ["Network Administration", "Windows System Administration", "Computer Networking"],
    description: "Validation in enterprise security fundamentals, secure remote workstation connectivity, firewall policies, endpoint hardening, and network troubleshooting.",
    featured: false
  },
  {
    id: "cert-it-customer-support",
    title: "IT Customer Support Basics",
    issuer: "Cisco",
    issuerLogo: "cisco",
    issueDate: "Feb 2026",
    credentialId: "CISCO-IT-SUPPORT-CREDELY-2026",
    verifyUrl: "https://www.credly.com",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    skills: ["Windows System Administration", "Computer Networking"],
    description: "Industry-aligned validation verified via Credly covering core IT support methodologies, customer issue ticketing, triage workflows, and operating system diagnostics.",
    featured: false
  },
  {
    id: "cert-wordpress-dict",
    title: "Wordpress",
    issuer: "Department of Information and Communications Technology - Philippines (DICT)",
    issuerLogo: "dict",
    issueDate: "Jun 2024",
    credentialId: "DICT-WP-ESSENTIALS-2024",
    verifyUrl: "https://dict.gov.ph",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    skills: ["WordPress Design", "Web Development", "PHP", "MySQL"],
    description: "Wordpress Essentials training covering installation, cloud hosting deployment, custom theme styling, plugin ecosystem, and web content administration.",
    featured: false
  },
  {
    id: "cert-ircite",
    title: "IRCITE 2026 - Certificate of Participation in Short Animation",
    issuer: "Philippine Society of Information Technology Education (PSITE)",
    issuerLogo: "psite",
    issueDate: "Mar 2026",
    credentialId: "IRCITE-2026-ANIMATION",
    verifyUrl: "https://psite.org",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    skills: ["Adobe Photoshop", "Software Engineering"],
    description: "Certificate of Participation and competitive multimedia presentation in short animation at the Regional Conference in Information Technology Education (IRCITE 2026).",
    featured: false
  },
  {
    id: "cert-cisco-reports",
    title: "Creating Compelling Reports",
    issuer: "Cisco",
    issuerLogo: "cisco",
    issueDate: "2025",
    credentialId: "CISCO-REPORTING-2025",
    verifyUrl: "https://www.netacad.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    skills: ["Data Scalability and Analytics", "Software Engineering"],
    description: "Coursework in structured data synthesis, analytical reporting, technical documentation standards, and stakeholder communication.",
    featured: false
  }
];


