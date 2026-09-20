export const personalInfo = {
  name: "Mike Lennard Dela Cruz",
  title: "BSIT Student & Web Developer",
  tagline: "I’m a University Scholar studying IT at Central Luzon State University, dedicated to building web applications that solve real-world problems.",
  location: "Science City of Muñoz, Nueva Ecija, Philippines",
  email: "lennarddelacruz27@gmail.com",
  phone: "+63 9380937982",
  avatar: "/profile.jpg",
  availableForHire: true,
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mike-lennard-dela-cruz-0816381b8",
    facebook: "https://www.facebook.com/mikelennard.delacruz/"
  }
};

export const projectsData = [
  {
    id: "proj-capstone",
    title: "Enhanced Web-Based Record Management System for Indigenous People in Nueva Ecija",
    category: "Capstone",
    year: "2026 (Ongoing)",
    shortDesc: "A secure web system to store, organize, and protect official records for indigenous communities in Nueva Ecija.",
    fullDesc: "My ongoing college capstone project built to help indigenous communities manage their records online. It replaces manual paperwork with a secure web system where admins can register members, manage family records, search community data quickly, and control who can view sensitive information.",
    images: [
      "public/projects/ncip1.png",
      "public/projects/ncip2.png",
      "public/projects/ncip3.png",
      "public/projects/ncip4.png",
      "public/projects/ncip5.png"
    ],
    tags: ["Laravel", "Vite", "TailwindCSS", "MySQL"],
    featured: true,
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
      "public/projects/nbl1.png",
      "public/projects/nbl2.png",
      "public/projects/nbl3.png",
      "public/projects/nbl4.png",
      "public/projects/nbl5.png"
    ],
    tags: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
    featured: true,
    demo: null,
    highlights: [
      "Browse clothing with quick category filters",
      "Add-to-cart and order summary checkout flow",
      "Clean and responsive design built with Bootstrap"
    ]
  },
  {
    id: "proj-patient",
    title: "Clinical Management System",
    year: "2025",
    role: "Group Project Developer",
    shortDesc: "A web app for clinics to manage patient records, doctor appointments, and checkup history.",
    fullDesc: "A web-based system built to help clinic staff track patient visits and medical logs digitally. Doctors and staff can register new patients, schedule checkup appointments, save medical notes, and find past records in seconds.",
    images: [
      "public/projects/pms1.png",
      "public/projects/pms2.png",
      "public/projects/pms3.png",
      "public/projects/pms4.png",
      "public/projects/pms5.png"
    ],
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    featured: true,
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
      "public/projects/Itour1.png",
      "public/projects/Itour2.png",
      "public/projects/Itour3.png",
      "public/projects/Itour4.png"
    ],
    tags: ["Flutter", "Dart", "Mobile App"],
    featured: false,
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
    images: [
      "public/projects/library1.png",
      "public/projects/library2.png",
      "public/projects/library3.png"
    ],
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    featured: false,
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
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "REST APIs" },
    { name: "WordPress" },
    { name: "Figma" },
    { name: "Python" },
    { name: "Java" },
    { name: "C" }
  ],
  frontend: [
    { name: "React.js" },
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "Figma" },
    { name: "WordPress" }
  ],
  backend: [
    { name: "Laravel" },
    { name: "PHP" },
    { name: "MySQL" },
    { name: "REST APIs" },
    { name: "Python" },
    { name: "Java" },
    { name: "C" }
  ]
};

export const educationAndTimeline = [
  // Education
  {
    id: "t-clsu",
    year: "Aug 2023 - Present",
    sortOrder: 2023.8,
    role: "Bachelor of Science in Information Technology (Major in System Development)",
    institution: "Central Luzon State University (CLSU)",
    description: "Consistent University Scholar. Major coursework in programming, systems development, database management. Actively developing the Capstone project.",
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
    description: "Specialized in Computer System Servicing, computer networking, hardware diagnostics, and IT productivity tools.",
    type: "education"
  },

  // Web Development
  {
    id: "t-capstone",
    year: "2026 (Ongoing)",
    sortOrder: 2026.3,
    role: "Capstone Developer",
    institution: "Central Luzon State University",
    description: "Developer of the university capstone project: Enhanced Web-Based Record Management System for Indigenous People in Nueva Ecija, alongside NBL Apparel E-commerce platform.",
    type: "development"
  },
  {
    id: "t-dev-2025",
    year: "2025",
    sortOrder: 2025.2,
    role: "School Project Developer",
    institution: "CLSU BSIT Academic Projects",
    description: "Collaborated on academic web projects: Patient Management System, Library Management System, Coffee Shop System, and ITour Booking Web Platform.",
    type: "development"
  }
];

export const certificatesData = [
  {
    id: "cert-scholar",
    title: "Consistent College Scholar - University Scholar",
    issuer: "Central Luzon State University",
    issuerLogo: "clsu",
    issueDate: "2023 - Present",
    image: "/certificates/scholar1.png",
    images: [
      "public/certificates/scholar1.png",
      "public/certificates/scholar2.png",
      "public/certificates/scholar3.png",
      "public/certificates/scholar4.png",
      "public/certificates/scholar5.png"
    ],
    skills: ["Software Development", "Web Development"],
    description: "Awarded by Central Luzon State University for consistent scholastic distinction, maintaining academic honors every semester in the BS Information Technology curriculum.",
    featured: true
  },
  {
    id: "cert-ircite",
    title: "IRCITE 2nd Runner Up Video Editing",
    issuer: "PSITE (Philippine Society of Information Technology Educators)",
    issuerLogo: "psite",
    issueDate: "Apr 2025",
    images: [
      "public/certificates/irciteve2.png",
      "public/certificates/irciteve1.png",
      "public/certificates/irciteve4.png",
      "public/certificates/irciteve3.png",
      "public/certificates/irciteanimation1.png"
    ],
    skills: ["Video Editing", "Animation"],
    description: "Certificate of Participation and competitive multimedia presentation in video editing at the Regional Conference in Information Technology Education (IRCITE 2026).",
    featured: true
  },
  {
    id: "cert-css-ncii",
    title: "Computer Systems Servicing NC II",
    issuer: "TESDA",
    issuerLogo: "tesda",
    issueDate: "2023",
    image: "public/certificates/NC2.png",
    skills: ["Network Administration", "Computer Network"],
    description: "National Certificate II validating technical competency in computer hardware assembly, OS installation and configuration, setup of computer networks and servers, and maintenance and repair of computer systems.",
    featured: true
  },
  {
    id: "cert-webdev-dict",
    title: "Web Development",
    issuer: "DICT",
    issuerLogo: "dict",
    issueDate: "Mar 2026",
    images: [
      "public/certificates/web4.png",
      "public/certificates/web3.png",
      "public/certificates/web2.png",
      "public/certificates/web1.png"
    ],
    skills: ["HTML", "CSS", "JavaScript"],
    description: "Government-accredited ICT training series covering WebDev via Cloud (WD008), Basic JavaScript for WebDev (WD003), and Designing a Web Page using HTML and CSS (WD002).",
    featured: true
  },
  {
    id: "cert-dataviz-coursera",
    title: "Data Visualization using Bokeh and Plotly",
    issuer: "Coursera",
    issuerLogo: "coursera",
    issueDate: "Mar 2026",
    images: [
      "public/certificates/datavisualization1.png",
      "public/certificates/datavisualization2.png"
    ],
    skills: ["Data Scalability and Analytics", "Python"],
    description: "Hands-on data visualization specialization focused on building interactive web-based charts, exploratory dashboards, and statistical plots with Python Bokeh and Plotly.",
    featured: false
  },
  {
    id: "cert-packet-tracer",
    title: "Cisco Packet Tracer",
    issuer: "Cisco",
    issuerLogo: "cisco",
    issueDate: "Feb 2025",
    images: [
      "public/certificates/packettracer1.png",
      "public/certificates/packettracer2.png"
    ],
    skills: ["Packet Tracer", "Network Administration"],
    description: "Explored advanced network topology design, simulation of enterprise LAN/WAN environments, routing tables, and real-time packet flow verification using Cisco Packet Tracer.",
    featured: true
  },
  {
    id: "cert-it-support-sec",
    title: "IT Support Security and Connectivity Support",
    issuer: "Cisco",
    issuerLogo: "cisco",
    issueDate: "Mar 2026",
    image: "public/certificates/ITSupport.png",
    skills: ["Network Administration", "Computer Networking"],
    description: "Validation in enterprise security fundamentals, secure remote workstation connectivity, firewall policies, endpoint hardening, and network troubleshooting.",
    featured: false
  },
  {
    id: "cert-it-customer-support",
    title: "IT Customer Support Basics",
    issuer: "Cisco",
    issuerLogo: "cisco",
    issueDate: "Feb 2026",
    images: [
      "public/certificates/basics1.png",
      "public/certificates/basics2.png"
    ],
    skills: ["Network Administration", "Computer Networking"],
    description: "Industry-aligned validation verified via Credly covering core IT support methodologies, customer issue ticketing, triage workflows, and operating system diagnostics.",
    featured: false
  },
  {
    id: "cert-wordpress-dict",
    title: "Wordpress",
    issuer: "DICT",
    issuerLogo: "dict",
    issueDate: "Jun 2024",
    image: "public/certificates/wordpress.png",
    skills: ["WordPress Design", "Web Development"],
    description: "Wordpress Essentials training covering installation, cloud hosting deployment, custom theme styling, plugin ecosystem, and web content administration.",
    featured: false
  },
  {
    id: "cert-cisco-reports",
    title: "Creating Compelling Reports",
    issuer: "Cisco",
    issuerLogo: "cisco",
    issueDate: "2025",
    image: "public/certificates/reports.png",
    skills: ["Create Reports", "Communication "],
    description: "Coursework in structured data synthesis, analytical reporting, technical documentation standards, and stakeholder communication.",
    featured: false
  }
];


