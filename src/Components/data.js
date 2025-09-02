import { ChevronDown, Menu, X, ArrowRight, Users, Building, Briefcase, Phone, Shield, Zap, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

// Professional menu data with icons and descriptions
export const menuItems = [
  {
    title: "Services",
    icon: Shield,
    subMenu: [
      {
        heading: "Security Solutions",
        description: "Enterprise-grade security tools",
        items: [
          {
            title: "Identity Management",
            description: "Secure user authentication & authorization",
            icon: Users,
            // subMenu: ["Single Sign-On", "Multi-Factor Auth", "Identity Analytics"]
          },
          {
            title: "Data Protection",
            description: "Encrypt and secure your data",
            icon: Shield
          },
        ],
      },
      {
        heading: "Performance Tools",
        description: "Optimize your infrastructure",
        items: [
          {
            title: "Cloud Analytics",
            description: "Real-time performance insights",
            icon: Zap,
            // subMenu: ["Monitoring Dashboard", "Custom Alerts", "API Analytics"]
          },
          {
            title: "Load Balancing",
            description: "Distribute traffic efficiently",
            icon: Building
          },
        ],
      },
    ],
    featured: {
      title: "New: AI-Powered Security",
      description: "Revolutionary threat detection using machine learning algorithms",
      image: "🛡️",
      link: "#"
    }
  },
  {
    title: "Projects",
    icon: Building,
    subMenu: [
      {
        heading: "By Industry",
        description: "Tailored solutions for your sector",
        items: [
          {
            title: "Financial Services",
            description: "Banking & fintech solutions",
            icon: Building
          },
          {
            title: "Healthcare",
            description: "HIPAA-compliant tools",
            icon: Shield,
            // subMenu: ["Patient Data Security", "Compliance Tools", "Integration APIs"]
          },
        ],
      },
      {
        heading: "By Company Size",
        description: "Scale with your business",
        items: [
          {
            title: "Enterprise",
            description: "For large organizations",
            icon: Building
          },
          {
            title: "SMB",
            description: "Small to medium business",
            icon: Users,
            // subMenu: ["Starter Package", "Growth Plan", "24/7 Support"]
          },
        ],
      },
    ],
    featured: {
      title: "Customer Success Story",
      description: "How TechCorp increased security by 300% with our platform",
      image: "📊",
      link: "#"
    }
  },
  {
    title: "Insights",
    icon: Briefcase,
    subMenu: [
      {
        heading: "Learn",
        description: "Knowledge base & tutorials",
        items: [
          {
            title: "Documentation",
            description: "Complete API reference",
            icon: Shield
          },
          {
            title: "Tutorials",
            description: "Step-by-step guides",
            icon: Users
          },
        ],
      },
      {
        heading: "Support",
        description: "Get help when you need it",
        items: [
          {
            title: "Help Center",
            description: "FAQs and troubleshooting",
            icon: Phone
          },
          {
            title: "Community",
            description: "Connect with other users",
            icon: Users
          },
        ],
      },
    ],
    featured: {
      title: "Weekly Webinar",
      description: "Join us for 'Advanced Security Patterns' this Thursday",
      image: "🎥",
      link: "#"
    }
  },
  { title: "About", icon: Zap, link: '/about' },
  { title: "Contact", icon: Phone,link:'/contact' },
];


// Social media links
export const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
];



// data.js
export const tabbedCardListData = [
  {
    id: "Commercial",
    title: "Commercial",
    icon: "📊",
    cards: [
      {
        id: 1,
        title: "AI-Powered Threat Detection",
        description: "Comprehensive analysis of machine learning algorithms in cybersecurity threat identification and prevention.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        category: "Artificial Intelligence",
        date: "2024-08-01",
        readTime: "8 min read",
        link: "#research-ai-threat",
        featured: true
      },
      {
        id: 2,
        title: "Zero-Trust Architecture Study",
        description: "Enterprise implementation strategies and performance metrics for zero-trust security frameworks.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
        category: "Network Security",
        date: "2024-07-28",
        readTime: "12 min read",
        link: "#research-zero-trust",
        featured: false
      },
      {
        id: 3,
        title: "Blockchain Security Protocols",
        description: "Analysis of consensus mechanisms and their impact on distributed ledger security implementations.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
        category: "Blockchain",
        date: "2024-07-25",
        readTime: "15 min read",
        link: "#research-blockchain",
        featured: false
      },
      {
        id: 4,
        title: "Cloud Security Assessment",
        description: "Multi-cloud environment security evaluation and best practices for enterprise deployments.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        category: "Cloud Computing",
        date: "2024-07-22",
        readTime: "10 min read",
        link: "#research-cloud-security",
        featured: false
      },
      {
        id: 5,
        title: "Quantum Cryptography Future",
        description: "Preparing for post-quantum cryptography: algorithms, implementation challenges, and timeline projections.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
        category: "Cryptography",
        date: "2024-07-18",
        readTime: "20 min read",
        link: "#research-quantum-crypto",
        featured: true
      },
      {
        id: 6,
        title: "IoT Security Framework",
        description: "Comprehensive security protocols for Internet of Things devices in industrial and consumer environments.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
        category: "IoT Security",
        date: "2024-07-15",
        readTime: "14 min read",
        link: "#research-iot-security",
        featured: false
      }
    ]
  },
  {
    id: "Residential",
    title: "Residential",
    icon: "✍️",
    cards: [
      {
        id: 7,
        title: "5 Security Mistakes That Cost Companies Millions",
        description: "Learn from real-world security breaches and discover how to avoid common pitfalls that lead to costly incidents.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
        category: "Security Best Practices",
        date: "2024-08-05",
        readTime: "6 min read",
        author: "Sarah Chen",
        authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        link: "#blog-security-mistakes",
        featured: true
      },
      {
        id: 8,
        title: "The Remote Work Security Playbook",
        description: "Essential strategies for securing distributed teams and maintaining productivity without compromising security.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
        category: "Remote Security",
        date: "2024-08-03",
        readTime: "9 min read",
        author: "Michael Rodriguez",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        link: "#blog-remote-security",
        featured: false
      },
      {
        id: 9,
        title: "Password Management in 2024",
        description: "Why traditional passwords are failing and how to implement modern authentication strategies for your organization.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=250&fit=crop",
        category: "Authentication",
        date: "2024-07-31",
        readTime: "7 min read",
        author: "Emma Thompson",
        authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        link: "#blog-password-management",
        featured: false
      },
      {
        id: 10,
        title: "Building a Security-First Culture",
        description: "Transforming your organization's mindset to prioritize security in every decision and process.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
        category: "Corporate Culture",
        date: "2024-07-29",
        readTime: "11 min read",
        author: "David Park",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        link: "#blog-security-culture",
        featured: true
      },
      {
        id: 11,
        title: "API Security: Beyond Authentication",
        description: "Advanced techniques for securing APIs including rate limiting, input validation, and threat monitoring.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
        category: "API Security",
        date: "2024-07-26",
        readTime: "13 min read",
        author: "Lisa Zhang",
        authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
        link: "#blog-api-security",
        featured: false
      },
      {
        id: 12,
        title: "Incident Response: Lessons Learned",
        description: "Real stories from security incidents and the actionable insights that emerged from crisis management.",
        image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=250&fit=crop",
        category: "Incident Response",
        date: "2024-07-23",
        readTime: "16 min read",
        author: "James Wilson",
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
        link: "#blog-incident-response",
        featured: false
      }
    ]
  },
  // {
  //   id: "media",
  //   title: "Media",
  //   icon: "🎥",
  //   cards: [
  //     {
  //       id: 13,
  //       title: "SecurePro Summit 2024 Keynote",
  //       description: "Watch our CEO discuss the future of cybersecurity and unveil our latest AI-powered security platform.",
  //       image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
  //       category: "Conference",
  //       date: "2024-08-06",
  //       duration: "45 min",
  //       views: "12.5K views",
  //       type: "video",
  //       link: "#media-summit-keynote",
  //       featured: true
  //     },
  //     {
  //       id: 14,
  //       title: "Zero-Trust Implementation Workshop",
  //       description: "Step-by-step guide to implementing zero-trust architecture in your organization with live demonstrations.",
  //       image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=250&fit=crop",
  //       category: "Workshop",
  //       date: "2024-08-04",
  //       duration: "1h 15min",
  //       views: "8.7K views",
  //       type: "video",
  //       link: "#media-zero-trust-workshop",
  //       featured: false
  //     },
  //     {
  //       id: 15,
  //       title: "Cybersecurity Trends Podcast",
  //       description: "Industry experts discuss emerging threats, regulatory changes, and the evolving cybersecurity landscape.",
  //       image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop",
  //       category: "Podcast",
  //       date: "2024-08-01",
  //       duration: "52 min",
  //       views: "15.2K listens",
  //       type: "audio",
  //       link: "#media-trends-podcast",
  //       featured: false
  //     },
  //     {
  //       id: 16,
  //       title: "Product Demo: Identity Manager",
  //       description: "Comprehensive walkthrough of our identity management solution with real-world use case scenarios.",
  //       image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
  //       category: "Product Demo",
  //       date: "2024-07-30",
  //       duration: "28 min",
  //       views: "6.3K views",
  //       type: "video",
  //       link: "#media-identity-demo",
  //       featured: true
  //     },
  //     {
  //       id: 17,
  //       title: "Customer Success Webinar",
  //       description: "Learn how TechCorp reduced security incidents by 80% using our integrated security platform.",
  //       image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
  //       category: "Case Study",
  //       date: "2024-07-27",
  //       duration: "35 min",
  //       views: "9.1K views",
  //       type: "webinar",
  //       link: "#media-customer-success",
  //       featured: false
  //     },
  //     {
  //       id: 18,
  //       title: "Security Awareness Training",
  //       description: "Interactive training session covering phishing, social engineering, and best practices for employees.",
  //       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
  //       category: "Training",
  //       date: "2024-07-24",
  //       duration: "1h 8min",
  //       views: "18.9K views",
  //       type: "training",
  //       link: "#media-awareness-training",
  //       featured: false
  //     }
  //   ]
  // }
];

// Additional utility data
export const cardCategories = {
  research: [
    "Artificial Intelligence",
    "Network Security",
    "Blockchain",
    "Cloud Computing",
    "Cryptography",
    "IoT Security"
  ],
  blogs: [
    "Security Best Practices",
    "Remote Security",
    "Authentication",
    "Corporate Culture",
    "API Security",
    "Incident Response"
  ],
  media: [
    "Conference",
    "Workshop",
    "Podcast",
    "Product Demo",
    "Case Study",
    "Training"
  ]
};

export const mediaTypes = {
  video: "🎥",
  audio: "🎧",
  webinar: "💻",
  training: "📚"
};