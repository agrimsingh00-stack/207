export interface Course {
  id: string;
  name: string;
  iconName: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessonsCount: number;
  duration: string;
  progress: number;
  color: string;
  tag: string;
  lessonOverview: {
    title: string;
    summary: string;
    keyPoints: string[];
    practiceQuestion: {
      question: string;
      options: string[];
      answer: number;
    };
  };
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  bgColor: string;
  iconColor: string;
  details: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subject: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface InnovationIdea {
  id: string;
  title: string;
  category: "Science Projects" | "Technology Ideas" | "AI Projects" | "Environmental Projects" | "Social Innovation";
  studentName: string;
  grade: string;
  likes: number;
  description: string;
  tags: string[];
  impact: string;
  date: string;
}

export interface StudentDashboardData {
  studentName: string;
  grade: string;
  streakDays: number;
  overallProgress: number;
  completedLessonsCount: number;
  totalLessonsCount: number;
  recentQuizScore: {
    score: number;
    total: number;
    quizName: string;
    date: string;
  };
  enrolledCourses: {
    id: string;
    name: string;
    progress: number;
    currentModule: string;
    totalModules: number;
    completedModules: number;
  }[];
  completedLessons: {
    id: string;
    title: string;
    subject: string;
    completedAt: string;
  }[];
  upcomingActivities: {
    id: string;
    title: string;
    time: string;
    type: "quiz" | "live_class" | "project_due" | "challenge";
  }[];
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}
