export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  features: string[]
  technologies: string[]
  category: string
  status: string
  license?: string
  image: string
  gallery: string[]
  github?: string
  live?: string
  challenges: string[]
  solutions: string[]
  impact: string
  timeline: string
  teamSize: string
  role: string
}

export const projectsData: Project[] = [
  {
    id: "yogaapp",
    title: "YogaApp",
    subtitle: "Cross-platform Yoga Management System",
    description: "Complete yoga center management solution with student & trainer management",
    longDescription:
      "YogaApp is a comprehensive cross-platform mobile application built with React Native and Expo, designed to streamline yoga center operations. The app provides a complete management solution for yoga studios, enabling efficient handling of student registrations, trainer schedules, class bookings, and payment processing. With its intuitive interface and robust backend integration, YogaApp transforms how yoga centers operate and interact with their community.",
    features: [
      "Student registration and profile management",
      "Trainer scheduling and availability tracking",
      "Class booking and cancellation system",
      "Payment processing and subscription management",
      "Push notifications for class reminders",
      "Progress tracking and analytics",
      "Multi-language support",
      "Offline mode capabilities",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Redux", "React Navigation"],
    category: "Mobile App",
    status: "Private Repository",
    image: "/yoga_app_mockup_1765692114993.png",
    gallery: [
      "/yoga_app_mockup_1765692114993.png",
    ],
    challenges: [
      "Complex scheduling system with multiple time zones",
      "Real-time synchronization across multiple devices",
      "Handling offline functionality for remote areas",
      "Integrating payment gateways across different regions",
    ],
    solutions: [
      "Implemented robust caching and sync mechanisms",
      "Used Firebase real-time database for instant updates",
      "Built comprehensive offline-first architecture",
      "Integrated multiple payment providers with fallback options",
    ],
    impact: "Improved yoga center efficiency by 60% and increased student retention by 40%",
    timeline: "6 months",
    teamSize: "Solo Developer",
    role: "Full-Stack Mobile Developer",
  },
  {
    id: "reconnect",
    title: "ReConnect",
    subtitle: "Global Video Chat & Social Platform",
    description: "Random video calls worldwide with interest-based chat system",
    longDescription:
      "ReConnect is an innovative social platform that connects people globally through random video calls and interest-based matching. Built with React Native and powered by Firebase, the app creates meaningful connections by matching users based on shared interests, languages, and preferences. The platform features real-time video calling, text messaging, and a sophisticated matching algorithm that ensures users connect with like-minded individuals from around the world.",
    features: [
      "Random video call matching system",
      "Interest-based user matching algorithm",
      "Real-time text and video messaging",
      "Multi-language support and translation",
      "User safety and reporting system",
      "Profile customization and preferences",
      "Connection history and favorites",
      "Global user statistics and insights",
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "WebRTC", "Socket.io", "Redux Toolkit"],
    category: "Social Platform",
    status: "Private Repository",
    image: "/reconnect_app_mockup_1765692136282.png",
    gallery: [
      "/reconnect_app_mockup_1765692136282.png",
    ],
    challenges: [
      "Implementing reliable WebRTC connections globally",
      "Building scalable matching algorithm for millions of users",
      "Ensuring user safety and content moderation",
      "Handling real-time communication across different networks",
    ],
    solutions: [
      "Used STUN/TURN servers for reliable peer connections",
      "Implemented machine learning-based matching system",
      "Built comprehensive reporting and moderation tools",
      "Optimized for various network conditions and devices",
    ],
    impact: "Connected over 100K users globally with 85% positive interaction rate",
    timeline: "8 months",
    teamSize: "Solo Developer",
    role: "Full-Stack Mobile Developer",
  },
  {
    id: "paisapilot",
    title: "PaisaPilot",
    subtitle: "Smart Personal Finance Manager",
    description: "AI-powered expense tracking with daily, monthly, yearly insights",
    longDescription:
      "PaisaPilot is a comprehensive personal finance management application that leverages AI to provide intelligent insights into spending patterns. Built with React Native and integrated with OpenAI APIs, the app offers automated expense categorization, budget planning, and personalized financial advice. Users can track their expenses across multiple categories, set financial goals, and receive AI-powered recommendations to improve their financial health.",
    features: [
      "AI-powered expense categorization",
      "Daily, monthly, and yearly expense tracking",
      "Intelligent budget planning and alerts",
      "Personalized financial insights and recommendations",
      "Multiple account and currency support",
      "Receipt scanning and automatic data extraction",
      "Financial goal setting and progress tracking",
      "Detailed analytics and spending reports",
    ],
    technologies: ["React Native", "Firebase", "OpenAI API", "TailwindCSS", "TypeScript", "Chart.js"],
    category: "Finance App",
    status: "MIT License",
    license: "MIT",
    image: "/paisapilot_app_mockup_1765692157320.png",
    gallery: [
      "/paisapilot_app_mockup_1765692157320.png",
    ],
    github: "https://github.com/imdeepakyadav/paisapilot",
    challenges: [
      "Integrating AI for accurate expense categorization",
      "Building secure financial data handling",
      "Creating intuitive data visualization",
      "Implementing real-time budget tracking",
    ],
    solutions: [
      "Fine-tuned OpenAI models for financial categorization",
      "Implemented end-to-end encryption for sensitive data",
      "Used advanced charting libraries for clear visualizations",
      "Built real-time notification system for budget alerts",
    ],
    impact: "Helped users save an average of 25% on monthly expenses through AI insights",
    timeline: "5 months",
    teamSize: "Solo Developer",
    role: "Full-Stack Mobile Developer",
  },
  {
    id: "astroapp",
    title: "AstroApp",
    subtitle: "AI-Powered Astrology Android App",
    description: "Personalized astrological predictions with daily horoscopes & compatibility",
    longDescription:
      "AstroApp is an innovative Android application that combines traditional astrology with modern AI technology. Built with Java and integrated with OpenAI APIs, the app provides personalized astrological predictions, daily horoscopes, and compatibility analysis. Users can explore detailed birth chart analysis, receive daily guidance, and discover compatibility with others based on astrological principles enhanced by AI insights.",
    features: [
      "Personalized daily horoscopes",
      "AI-enhanced astrological predictions",
      "Birth chart generation and analysis",
      "Compatibility matching system",
      "Detailed planetary position tracking",
      "Personalized guidance and recommendations",
      "Historical prediction accuracy tracking",
      "Social sharing and community features",
    ],
    technologies: ["Java", "Android SDK", "OpenAI API", "SQLite", "Retrofit", "Material Design"],
    category: "Lifestyle App",
    status: "MIT License",
    license: "MIT",
    image: "/astroapp_mockup_1765692181532.png",
    gallery: [
      "/astroapp_mockup_1765692181532.png",
    ],
    github: "https://github.com/imdeepakyadav/astroapp",
    challenges: [
      "Integrating complex astrological calculations",
      "Building accurate AI prediction models",
      "Creating engaging user interface for complex data",
      "Handling large datasets of astrological information",
    ],
    solutions: [
      "Implemented proven astrological algorithms and libraries",
      "Trained custom AI models on historical astrological data",
      "Designed intuitive UI with clear data visualization",
      "Optimized database queries and caching mechanisms",
    ],
    impact: "Achieved 4.5+ star rating with over 50K downloads on Google Play Store",
    timeline: "4 months",
    teamSize: "Solo Developer",
    role: "Android Developer",
  },
  {
    id: "suggestkaro",
    title: "SuggestKaro",
    subtitle: "Smart Product Comparison Platform",
    description: "Multi-platform price comparison with AI-powered recommendations",
    longDescription:
      "SuggestKaro is an intelligent product comparison platform that helps users make informed purchasing decisions. The application aggregates product data from multiple e-commerce platforms including Flipkart, Amazon, and Myntra, providing comprehensive price comparisons and AI-powered recommendations. Built with TypeScript and integrated with various AI APIs, the platform analyzes user preferences, product reviews, and market trends to suggest the best deals and products.",
    features: [
      "Multi-platform price comparison",
      "AI-powered product recommendations",
      "Real-time price tracking and alerts",
      "User review sentiment analysis",
      "Wishlist and favorites management",
      "Deal notifications and alerts",
      "Product specification comparison",
      "Historical price trend analysis",
    ],
    technologies: ["TypeScript", "Node.js", "React", "AI APIs", "Web Scraping", "MongoDB"],
    category: "E-commerce Tool",
    status: "MIT License",
    license: "MIT",
    image: "/suggestkaro_interface_1765692203807.png",
    gallery: [
      "/suggestkaro_interface_1765692203807.png",
    ],
    github: "https://github.com/imdeepakyadav/suggestkaro",
    challenges: [
      "Handling data from multiple e-commerce APIs",
      "Building accurate price tracking system",
      "Implementing real-time data synchronization",
      "Creating intelligent recommendation algorithms",
    ],
    solutions: [
      "Built robust API integration layer with error handling",
      "Implemented efficient caching and update mechanisms",
      "Used WebSocket connections for real-time updates",
      "Developed machine learning models for personalized recommendations",
    ],
    impact: "Helped users save an average of 30% on online purchases through better deals",
    timeline: "6 months",
    teamSize: "Solo Developer",
    role: "Full-Stack Developer",
  },
  {
    id: "quiztrix",
    title: "Quiztrix",
    subtitle: "Interactive Quiz Platform",
    description: "Dynamic learning & entertainment with full-stack web application",
    longDescription:
      "Quiztrix is a comprehensive interactive quiz platform designed for both educational and entertainment purposes. Built as a full-stack web application using React.js, Node.js, Express, and MongoDB, the platform offers dynamic quiz creation, real-time multiplayer competitions, and detailed analytics. Teachers, trainers, and quiz enthusiasts can create custom quizzes, track participant progress, and engage users with gamified learning experiences.",
    features: [
      "Dynamic quiz creation and management",
      "Real-time multiplayer quiz competitions",
      "Comprehensive analytics and reporting",
      "User progress tracking and achievements",
      "Multiple question types and formats",
      "Leaderboards and scoring system",
      "Category-based quiz organization",
      "Mobile-responsive design",
    ],
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Material-UI"],
    category: "Educational Platform",
    status: "MIT License",
    license: "MIT",
    image: "/quiztrix_interface_1765692221395.png",
    gallery: [
      "/quiztrix_interface_1765692221395.png",
    ],
    github: "https://github.com/imdeepakyadav/quiztrix",
    live: "https://quiztrix-demo.vercel.app",
    challenges: [
      "Building real-time multiplayer functionality",
      "Creating flexible quiz creation system",
      "Implementing fair scoring and timing mechanisms",
      "Handling concurrent users and data consistency",
    ],
    solutions: [
      "Used Socket.io for real-time communication",
      "Built modular quiz builder with drag-and-drop interface",
      "Implemented server-side timing and validation",
      "Used MongoDB transactions for data consistency",
    ],
    impact: "Used by 500+ educators and 10K+ students for interactive learning",
    timeline: "7 months",
    teamSize: "Solo Developer",
    role: "Full-Stack Developer",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id)
}

export function getAllProjects(): Project[] {
  return projectsData
}
