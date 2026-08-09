export const profile = {
  name: "Omar Khalifa",
  eyebrow: "Technical Project Manager Powered By AI",
  tagline:
    "Senior Technical Project Manager (PMP)® & Technical Team Leader — Validation engineering, Embedded systems and AI/LLM-driven automation, 17 years at STMicroelectronics.",
  location: "Tunis, Tunisia",
  company: "STMicroelectronics",
  linkedin: "https://www.linkedin.com/in/omar-khalifa-94050014/",
  email: "ben.khalifa.omar@gmail.com",
  pmpCredly:
    "https://www.credly.com/badges/89d33371-8787-42f6-a460-f7be96bfacb2/public_url",
};

export const stats = [
  { value: 17, suffix: "", label: "Years at STMicroelectronics" },
  { value: 4, suffix: "", label: "Engineering & leadership roles" },
  { value: 500, suffix: "+", label: "LinkedIn connections" },
  { value: 5727, suffix: "", label: "LinkedIn followers" },
];

export const about =
  "PMP®-certified Senior Technical Project Manager with 17+ years in semiconductor and embedded systems, among them 6 years in leading validation and product-development programs for global semiconductor customers (Apple, Samsung, Motorola, EchoStar…). Delivered 30+ projects across Agile and Waterfall frameworks, managing teams of up to 6 engineers, and cross-functional stakeholders across 6 countries. Reduced schedule slippage by 15% through proactive risk management. Now extending this track record with hands-on workflow-automation and AI-agent skills (n8n, GitHub Copilot, Claude Code) to modernize PM and engineering operations.";

export const aboutCoreStrengths =
  "project management, program and risk management, stakeholder management, cross-functional team leadership, and technical mentoring, combined with deep hands-on expertise in embedded systems, IC/hardware validation, and test solution architecture";

export type ExperienceItem = {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Senior Technical Project Manager (PMP)® | Technical Team Leader",
    org: "STMicroelectronics · Microcontroller Division · August 2020 – Present · 6 years · Tunis, Tunisia",
    dates: "August 2020 – Present",
    bullets: [
      "Validation Project Management with full responsibility for Scope, Schedule, Risks and Quality for digital communication IPs.",
      "Identifying different involved Stakeholders of concerned product (Program manager, SOC Lead Designer, IPs designers, Developers, Application, Marketing, ..) and gathering requirements",
      "Prioritization of IPs to validate in collaboration with involved Stakeholders to deliver value",
      "Weekly progress presentation to the wider community of internal stakeholders and management using KPIs and project dashboards to track progress",
      "Coordination and organization of technical discussions across SoC, IP architect and Application to debug and resolve critical issues",
      "Identification of any gaps early on and immediate proactive prevention to avoid issues later in project.",
      "Organizing lessons learned sessions",
      "Managing change requests",
      "Providing servant leadership to a team of 6 engineers, motivating them to meet project goals, adhere to their responsibilities and project milestones",
      "Provide technical support for the team in critical issues",
      "Mentor newcomers",
    ],
    tags: ["Project Management", "Stakeholder Management", "Risk Management"],
  },
  {
    title: "Senior Validation Engineer",
    org: "STMicroelectronics · Microcontroller Division · August 2016 – July 2020 · 4 years · Tunis, Tunisia",
    dates: "August 2016 – July 2020",
    bullets: [
      "Elaborating timing characterization plan of digital communication IPs (SPI, QSPI, I2C,...)",
      "Performing PVT timing characterization and delivering report.",
      "Reviewing results with multinational project team members.",
      "Defining and implementing test solution architecture for new supported IPs.",
      "Designing test board (schematic/layout)",
      "Supporting FAEs on hardware multinational customer requests (Apple, Samsung,..)",
      "Mentoring newcomers",
    ],
    tags: [
      "STM32",
      "LabVIEW",
      "Altium Designer",
      "IAR Embedded Workbench",
      "NI PXI",
      "ATE (Teradyne J750Ex-HD)",
      "HyperLynx SI",
    ],
  },
  {
    title: "Product/Test Engineer",
    org: "STMicroelectronics · Home Video Division · July 2011 – July 2016 · 5 years · Tunis, Tunisia",
    dates: "July 2011 – July 2016",
    bullets: [
      "Member of Set-Top Box (STB) Electrical Validation team",
      "Analysing product features and drafting electrical validation objective specifications",
      "Power characterization of STB in PVT",
      "High speed interfaces electrical validation (Local Memory Interface (LMI), USB,..)",
      "STB stability evaluation",
      "Results review with multisite project team",
      "Providing validation reports to internal teams and external multinational stakeholders (Samsung, Motorola, EchoStar…) ensuring alignment with customer requirements",
      "Test automation and test Framework delivery",
      "Non-regression tests",
      "Support customers and debug returned parts",
    ],
    tags: ["SoC Validation", "USB / DDR3", "Embedded C", "Python"],
  },
  {
    title: "Software CAD Engineer",
    org: "STMicroelectronics · R&D Division · August 2009 – June 2011 · 2 years · Tunis, Tunisia",
    dates: "August 2009 – June 2011",
    bullets: [
      "Back-End team member in Analog/Digital IC Design department.",
      "Customer assistance and needs analysis.",
      "Collaborate on specifications throughout the project lifecycle with multinational teams",
      "Support, development, tests and documentation for CAD software",
      "Delivery content and priorities",
      "Provide training for multinational customers",
      "Non regression tests and Quality Report",
    ],
    tags: [
      "Cadence Virtuoso",
      "Mentor Calibre DRC/LVS",
      "Skill (Cadence DSL)",
      "Tcl/Tk",
    ],
  },
];

export type SimpleTimelineItem = {
  title: string;
  org: string;
  dates: string;
};

export const internships: SimpleTimelineItem[] = [
  {
    title: "Newtech TN",
    org: "RFID HF Reader Development (PIC18F452 + NXP Modem MFRC500)",
    dates: "January 2009 – June 2009",
  },
  {
    title: "Tunisian Company of Electricity and Gas",
    org: "Powerhouse Protection Systems Study",
    dates: "August 2008",
  },
  {
    title: "Tunisian Company of Electricity and Gas",
    org: "Optical Guard Wire (OPGW) Corrosion Phenomenon Analysis",
    dates: "January 2008",
  },
  {
    title: "Tunisian Company of Electricity and Gas",
    org: "Observation Mission",
    dates: "August 2007",
  },
];

export const education: SimpleTimelineItem[] = [
  {
    title: "Master's Degree in Electrical Engineering",
    org: "National Engineering School of Tunis (ENIT), University of Tunis El Manar",
    dates: "2009 – Present",
  },
  {
    title: "Preparatory Engineering Studies",
    org: "IPEIT — Preparatory Institute of Tunis for Engineering Studies",
    dates: "2004 – 2006",
  },
  {
    title: "Baccalaureate",
    org: "Pioneer School of Ariana (Lycée Pilote de l'Ariana)",
    dates: "2004",
  },
];

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Project management",
    skills: [
      "PMP® Methodology",
      "KPIs",
      "Scope / Schedule / Risk Management",
      "Stakeholder Management",
      "Cross-Functional Team Leadership",
      "Mentoring",
      "Quality Management",
    ],
  },
  {
    title: "AI & Automation Tools",
    skills: [
      "GitHub Copilot (AI-assisted development)",
      "n8n (Workflow Automation, AI integration and Agentic Design)",
      "ST ChatGPT",
      "Claude Code",
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      "Embedded C",
      "C/C++",
      "Qt",
      "Python",
      "LabVIEW",
      "VBA Excel",
      "Shell",
      "Tcl/Tk",
      "Skill (Cadence Design Systems Language)",
    ],
  },
  {
    title: "EDA Tools",
    skills: [
      "Cadence (Virtuoso/Icfb, Library Manager)",
      "Mentor (Calibre DRC/LVS)",
      "Altium Designer",
      "Hyperlynx",
    ],
  },
  {
    title: "High End Instruments",
    skills: [
      "National Instrument PXI",
      "Oscilloscope",
      "Logic Analyzer",
      "Pattern Generator",
      "Compliance test fixture",
      "Multimeters",
      "ThermoStream",
      "ATE (Teradyne J750Ex-HD)",
    ],
  },
  {
    title: "Version Control Systems",
    skills: ["Subversion", "Git"],
  },
  {
    title: "Operating Systems",
    skills: ["Windows", "Linux/Unix"],
  },
];

export type Certification = {
  icon: string;
  title: string;
  meta: string[];
  link?: { label: string; href: string };
};

export const certifications: Certification[] = [
  {
    icon: "🏅",
    title: "Project Management Professional (PMP)®",
    meta: ["Project Management Institute", "12 September 2024"],
    link: {
      label: "Certification Number 3920769",
      href: "https://www.credly.com/badges/89d33371-8787-42f6-a460-f7be96bfacb2/public_url",
    },
  },
  {
    icon: "📋",
    title: "Project Management Effectiveness (PMe)",
    meta: [
      "STMicroelectronics internal — PMP-like, tailored to STMicroelectronics' flow",
    ],
  },
  {
    icon: "🤖",
    title: "n8n Official Academy Certification",
    meta: ["n8n — RAG chatbots, agent-to-agent applications, workflow automation"],
  },
  {
    icon: "🔧",
    title: "J750Ex-HD Teradyne Learn Certificate",
    meta: ["Automated Test Equipment"],
  },
  {
    icon: "📊",
    title: "LabVIEW Core 1 & Core 2",
    meta: ["Equipment Bench Development"],
  },
  {
    icon: "🛠️",
    title: "Altium Designer-Advanced",
    meta: ["PCB Design"],
  },
  {
    icon: "⚙️",
    title: "Cortex-M Introduction",
    meta: ["Embedded systems fundamentals"],
  },
];

export const languages = [
  { name: "Arabic", level: "Mother Tongue" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Fluent" },
  { name: "Spanish", level: "Beginner" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#internships", label: "Internships" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#languages", label: "Languages" },
  { href: "#contact", label: "Contact" },
];
