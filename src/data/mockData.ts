import { Course, Feature, QuizQuestion, InnovationIdea, StudentDashboardData } from "../types";

export const FEATURES_DATA: Feature[] = [
  {
    id: "anytime-anywhere",
    title: "Learn Anytime, Anywhere",
    description: "Students can study whenever and wherever they want on any device at their own convenience.",
    iconName: "Globe",
    badge: "Flexible Access",
    bgColor: "bg-blue-50 text-blue-700 border-blue-100",
    iconColor: "text-blue-600 bg-blue-100",
    details: "Access digital lessons, video summaries, and interactive flashcards 24/7 on phones, tablets, or desktop computers. Never miss a topic even while traveling!"
  },
  {
    id: "personalized-learning",
    title: "Personalized Learning",
    description: "Learning content can be adjusted according to the student's level, speed, and learning goals.",
    iconName: "UserCheck",
    badge: "Adaptive Paths",
    bgColor: "bg-purple-50 text-purple-700 border-purple-100",
    iconColor: "text-purple-600 bg-purple-100",
    details: "Smart algorithms assess your strengths and recommend personalized exercises, ensuring you master foundational concepts before jumping into advanced challenges."
  },
  {
    id: "interactive-learning",
    title: "Interactive Learning",
    description: "Learn through rich videos, quizzes, visual animations, hands-on simulations, and fun activities.",
    iconName: "Sparkles",
    badge: "High Engagement",
    bgColor: "bg-amber-50 text-amber-700 border-amber-100",
    iconColor: "text-amber-600 bg-amber-100",
    details: "Ditch passive memorization. Interact with 3D science models, step-by-step math solvers, and instant-feedback coding puzzles."
  },
  {
    id: "ai-learning-support",
    title: "AI Learning Support",
    description: "AI helps students understand complex topics and get 24/7 instant homework suggestions and explanations.",
    iconName: "Bot",
    badge: "Smart AI Tutor",
    bgColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconColor: "text-emerald-600 bg-emerald-100",
    details: "Stuck on a tricky algebra problem or biology definition? Ask Smart AI in natural language and receive friendly step-by-step guidance."
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: "math",
    name: "Mathematics",
    iconName: "Calculator",
    description: "Master arithmetic, geometry, fractions, and algebra with visual proofs and step-by-step problem solvers.",
    level: "Beginner",
    lessonsCount: 24,
    duration: "6 Weeks",
    progress: 75,
    color: "from-blue-500 to-indigo-600",
    tag: "Core STEM",
    lessonOverview: {
      title: "Introduction to Fractions & Real-World Ratios",
      summary: "Understand how fractions represent parts of a whole using pizza slices and water glasses.",
      keyPoints: [
        "The top number is the Numerator (how many parts we have).",
        "The bottom number is the Denominator (total equal parts).",
        "Example: 1/2 of a pizza equals 2 quarters (2/4) of a pizza."
      ],
      practiceQuestion: {
        question: "If a chocolate bar has 8 equal pieces and you eat 2, what fraction is left?",
        options: ["2/8", "4/8", "6/8", "8/8"],
        answer: 2
      }
    }
  },
  {
    id: "science",
    name: "Science",
    iconName: "Atom",
    description: "Explore the mysteries of physics, biology, chemistry, and our solar system through interactive experiments.",
    level: "Intermediate",
    lessonsCount: 30,
    duration: "8 Weeks",
    progress: 60,
    color: "from-purple-500 to-pink-600",
    tag: "Discovery",
    lessonOverview: {
      title: "The Energy Cycle: Photosynthesis Explained",
      summary: "Learn how green leaves turn sunlight, water, and carbon dioxide into food and oxygen for our planet.",
      keyPoints: [
        "Chlorophyll in leaves absorbs solar sunlight.",
        "Roots draw up water and minerals from soil.",
        "Oxygen is released as a vital byproduct for all living beings."
      ],
      practiceQuestion: {
        question: "Which green pigment in plant leaves absorbs sunlight?",
        options: ["Hemoglobin", "Chlorophyll", "Melanin", "Carotene"],
        answer: 1
      }
    }
  },
  {
    id: "cs",
    name: "Computer Science",
    iconName: "Code2",
    description: "Learn logical thinking, coding fundamentals, algorithms, web development, and digital technology.",
    level: "Beginner",
    lessonsCount: 28,
    duration: "7 Weeks",
    progress: 45,
    color: "from-cyan-500 to-blue-600",
    tag: "Coding",
    lessonOverview: {
      title: "Algorithmic Thinking: How Computers Follow Instructions",
      summary: "Computers execute exact step-by-step instructions called code. Learn how loops and conditions work.",
      keyPoints: [
        "An algorithm is a clear sequence of instructions.",
        "Loops help repeat actions without rewriting code.",
        "Conditional statements (if/else) allow computers to make decisions."
      ],
      practiceQuestion: {
        question: "What is an ordered set of instructions to solve a problem called?",
        options: ["An Algorithm", "A Hardware", "A Monitor", "A Pixel"],
        answer: 0
      }
    }
  },
  {
    id: "english",
    name: "English",
    iconName: "BookOpen",
    description: "Enhance creative writing, grammar precision, active reading comprehension, and confident vocabulary.",
    level: "Beginner",
    lessonsCount: 20,
    duration: "5 Weeks",
    progress: 90,
    color: "from-amber-500 to-orange-600",
    tag: "Language",
    lessonOverview: {
      title: "Mastering Metaphors & Descriptive Storytelling",
      summary: "Make your creative writing vibrant by comparing ideas directly without using 'like' or 'as'.",
      keyPoints: [
        "Metaphor directly calls one thing another (e.g. 'Time is a thief').",
        "Simile uses comparison words (e.g. 'Brave as a lion').",
        "Sensory words help readers visualize emotions and scenes."
      ],
      practiceQuestion: {
        question: "Which sentence is an example of a Metaphor?",
        options: [
          "He ran like the wind.",
          "Her laughter was music to our ears.",
          "The water was as cold as ice.",
          "She sings loudly."
        ],
        answer: 1
      }
    }
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    iconName: "Cpu",
    description: "Discover how AI models, smart prompts, neural networks, and machine learning transform the modern world.",
    level: "Intermediate",
    lessonsCount: 18,
    duration: "4 Weeks",
    progress: 30,
    color: "from-indigo-500 to-purple-600",
    tag: "Future Tech",
    lessonOverview: {
      title: "How AI Learns From Patterns in Data",
      summary: "Understand how machine learning models train on thousands of examples to recognize voice, text, and images.",
      keyPoints: [
        "AI models learn by finding patterns across massive datasets.",
        "Supervised learning uses labeled training examples.",
        "Ethical AI ensures technology is safe, unbiased, and helpful for everyone."
      ],
      practiceQuestion: {
        question: "What is the process called where AI improves by analyzing examples?",
        options: ["Machine Learning", "Hard Rebooting", "Screen Printing", "Cable Routing"],
        answer: 0
      }
    }
  },
  {
    id: "gk",
    name: "General Knowledge",
    iconName: "Compass",
    description: "Journey through world geography, landmark inventions, environmental awareness, and fascinating history facts.",
    level: "Beginner",
    lessonsCount: 22,
    duration: "4 Weeks",
    progress: 80,
    color: "from-emerald-500 to-teal-600",
    tag: "World Facts",
    lessonOverview: {
      title: "World Capitals & Wonders of the Earth",
      summary: "Travel across continents to discover landmark capitals, mountain ranges, and deep ocean trenches.",
      keyPoints: [
        "New Delhi is the national capital of India.",
        "Mount Everest is the highest mountain peak above sea level.",
        "The Pacific Ocean is the largest and deepest ocean on Earth."
      ],
      practiceQuestion: {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: 1
      }
    }
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of India?",
    subject: "General Knowledge",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correctAnswer: 1,
    explanation: "New Delhi serves as the capital city of India and the seat of all three branches of the Government of India."
  },
  {
    id: 2,
    question: "Which process do green plants use to convert sunlight into energy?",
    subject: "Science",
    options: ["Respiration", "Photosynthesis", "Fermentation", "Evaporation"],
    correctAnswer: 1,
    explanation: "Photosynthesis uses sunlight, water, and carbon dioxide to produce glucose (sugar) and oxygen."
  },
  {
    id: 3,
    question: "What does the abbreviation 'AI' stand for in computer technology?",
    subject: "Artificial Intelligence",
    options: ["Automated Internet", "Artificial Intelligence", "Advanced Interface", "Active Integration"],
    correctAnswer: 1,
    explanation: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines programmed to think and learn."
  },
  {
    id: 4,
    question: "What is the value of (7 × 8) + 14?",
    subject: "Mathematics",
    options: ["60", "70", "72", "68"],
    correctAnswer: 1,
    explanation: "First compute 7 × 8 = 56, then add 14 to get 70 (56 + 14 = 70)."
  },
  {
    id: 5,
    question: "Which of the following is the planet closest to the Sun?",
    subject: "Science",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correctAnswer: 2,
    explanation: "Mercury is the closest planet to the Sun in our solar system, completing one orbit in just 88 Earth days."
  }
];

export const INNOVATION_IDEAS: InnovationIdea[] = [
  {
    id: "idea-1",
    title: "AI Solar Smart Plant Watering Assistant",
    category: "AI Projects",
    studentName: "Maya Sharma",
    grade: "Grade 9",
    likes: 42,
    description: "An automated solar-powered moisture sensor connected to a microcontroller that analyzes soil dampness and waters school garden plants only when needed.",
    tags: ["AI", "Arduino", "Botany", "Solar"],
    impact: "Saves up to 40% water in school vegetable patches.",
    date: "2 days ago"
  },
  {
    id: "idea-2",
    title: "Biodegradable Banana Peel Plastic Alternative",
    category: "Science Projects",
    studentName: "Rohan Patel",
    grade: "Grade 10",
    likes: 58,
    description: "Extracting starch and cellulose from discarded banana peels to produce flexible, 100% compostable packaging wrapping sheets.",
    tags: ["Eco-friendly", "Chemistry", "Recycling"],
    impact: "Decomposes naturally in home soil in under 30 days.",
    date: "4 days ago"
  },
  {
    id: "idea-3",
    title: "Classroom Peer Book Swap Mobile Web App",
    category: "Technology Ideas",
    studentName: "Aiden Chen",
    grade: "Grade 8",
    likes: 35,
    description: "A lightweight barcode-scanning web application where students can list finished textbooks and borrow storybooks from classmates for free.",
    tags: ["Web Dev", "Sharing Economy", "Education"],
    impact: "Over 120 storybooks exchanged across 3 school clubs.",
    date: "1 week ago"
  },
  {
    id: "idea-4",
    title: "Rainwater Harvesting Energy Generator",
    category: "Environmental Projects",
    studentName: "Priya Nair",
    grade: "Grade 11",
    likes: 64,
    description: "A dual-stage rooftop drain collector that filters rainwater for clean storage while turning a micro-turbine to light up hallway emergency LEDs.",
    tags: ["Clean Energy", "Conservation", "Physics"],
    impact: "Generated 15W of emergency power during monsoon seasons.",
    date: "1 week ago"
  },
  {
    id: "idea-5",
    title: "Sign Language to Voice Translation Glove",
    category: "Social Innovation",
    studentName: "Sam & Liam",
    grade: "Grade 10",
    likes: 89,
    description: "A low-cost wearable glove equipped with flex sensors that converts hand gestures into spoken words through a smartphone speaker for hearing-impaired classmates.",
    tags: ["Accessibility", "Sensors", "Inclusion"],
    impact: "Enables natural conversation for deaf and mute students.",
    date: "2 weeks ago"
  }
];

export const INITIAL_STUDENT_DASHBOARD: StudentDashboardData = {
  studentName: "Alex Rivera",
  grade: "Grade 8 - Smart Explorer",
  streakDays: 7,
  overallProgress: 68,
  completedLessonsCount: 42,
  totalLessonsCount: 60,
  recentQuizScore: {
    score: 9,
    total: 10,
    quizName: "AI & Modern Science Milestone",
    date: "Today at 10:15 AM"
  },
  enrolledCourses: [
    {
      id: "math",
      name: "Mathematics",
      progress: 75,
      currentModule: "Algebraic Expressions & Ratios",
      totalModules: 8,
      completedModules: 6
    },
    {
      id: "science",
      name: "Science",
      progress: 60,
      currentModule: "Photosynthesis & Plant Biology",
      totalModules: 10,
      completedModules: 6
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      progress: 30,
      currentModule: "Introduction to Neural Networks",
      totalModules: 6,
      completedModules: 2
    }
  ],
  completedLessons: [
    { id: "cl-1", title: "Fractions & Decimals in Daily Life", subject: "Mathematics", completedAt: "Yesterday" },
    { id: "cl-2", title: "Atmosphere & Weather Systems", subject: "Science", completedAt: "2 days ago" },
    { id: "cl-3", title: "Introduction to Python Variables", subject: "Computer Science", completedAt: "3 days ago" },
    { id: "cl-4", title: "Descriptive Essay Mastery", subject: "English", completedAt: "5 days ago" }
  ],
  upcomingActivities: [
    { id: "ua-1", title: "Live AI Math Quiz Challenge", time: "Today • 4:00 PM", type: "quiz" },
    { id: "ua-2", title: "Science Project Submission", time: "Tomorrow • 11:59 PM", type: "project_due" },
    { id: "ua-3", title: "Interactive Coding Workshop", time: "Friday • 3:30 PM", type: "live_class" }
  ]
};

export const BENEFITS_DATA = [
  {
    id: "effective",
    title: "Learn More Effectively",
    description: "Visual simulations and bite-sized lessons help students retain concepts 2.5x longer than passive reading.",
    iconName: "Zap",
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    id: "save-time",
    title: "Save Time",
    description: "Get direct answers to tough homework doubts in seconds without waiting for the next school day.",
    iconName: "Clock",
    color: "bg-purple-50 text-purple-600 border-purple-200"
  },
  {
    id: "anywhere",
    title: "Study From Anywhere",
    description: "Seamlessly switch between your phone, tablet, or laptop while keeping all your progress synchronized.",
    iconName: "MapPin",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200"
  },
  {
    id: "own-speed",
    title: "Learn At Your Own Speed",
    description: "No rush or peer pressure. Rewind complex explanations or skip ahead when you are ready.",
    iconName: "Gauge",
    color: "bg-amber-50 text-amber-600 border-amber-200"
  },
  {
    id: "interesting",
    title: "Make Learning More Interesting",
    description: "Gamified quizzes, instant streaks, and reward badges transform everyday study sessions into an adventure.",
    iconName: "Sparkles",
    color: "bg-rose-50 text-rose-600 border-rose-200"
  },
  {
    id: "personalized",
    title: "Get Personalized Support",
    description: "Smart AI tailors examples to your favorite hobbies—whether you love sports, gaming, art, or space!",
    iconName: "HeartHandshake",
    color: "bg-indigo-50 text-indigo-600 border-indigo-200"
  }
];
