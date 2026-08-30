/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { CoursesSection } from "./components/CoursesSection";
import { DashboardSection } from "./components/DashboardSection";
import { AIAssistantSection } from "./components/AIAssistantSection";
import { QuizSection } from "./components/QuizSection";
import { InnovationSection } from "./components/InnovationSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { Footer } from "./components/Footer";
import { Bot, Sparkles, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showFloatingAiButton, setShowFloatingAiButton] = useState(false);

  // Scroll listener to update active section in header & show floating bot icon
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      setShowFloatingAiButton(window.scrollY > 400);

      const sectionIds = [
        "hero",
        "features",
        "courses",
        "dashboard",
        "ai-assistant",
        "quiz",
        "innovation",
        "benefits",
      ];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* 1. Top Navigation Bar */}
      <Navbar
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section (Home Page) */}
        <HeroSection
          onStartLearning={() => scrollToSection("courses")}
          onExploreCourses={() => scrollToSection("courses")}
          onAskAI={() => scrollToSection("ai-assistant")}
        />

        {/* 2. Features Section */}
        <FeaturesSection />

        {/* 3. Subjects / Courses Section */}
        <CoursesSection />

        {/* 4. Learning Dashboard Section */}
        <DashboardSection
          onExploreMoreCourses={() => scrollToSection("courses")}
          onTakeQuiz={() => scrollToSection("quiz")}
        />

        {/* 5. AI Study Assistant (Ask Smart AI) */}
        <AIAssistantSection />

        {/* 6. Interactive Quiz Section */}
        <QuizSection />

        {/* 7. Student Innovation Section */}
        <InnovationSection />

        {/* 8. Benefits Section */}
        <BenefitsSection />

      </main>

      {/* 9. Footer Section */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating Quick Action Button: Jump to Ask Smart AI */}
      <AnimatePresence>
        {showFloatingAiButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              id="floating-ask-ai-btn"
              onClick={() => scrollToSection("ai-assistant")}
              className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:-translate-y-0.5 transition-all text-xs sm:text-sm font-semibold"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-3.5 h-3.5 text-white animate-pulse" />
              </div>
              <span>Ask Smart AI</span>
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
