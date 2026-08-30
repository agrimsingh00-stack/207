import React from "react";
import { Sparkles, BookOpen, ArrowRight, Laptop, Smartphone, Bot, Lightbulb, PlayCircle, Star, Users, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onStartLearning: () => void;
  onExploreCourses: () => void;
  onAskAI: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartLearning,
  onExploreCourses,
  onAskAI,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-blue-50/60 via-purple-50/30 to-slate-50">
      {/* Soft background ambient blur circles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-28 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Friendly Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: "6s" }} />
              <span>Next-Generation Student Learning Platform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span className="text-indigo-600 font-bold">100% Free for Students</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
            >
              Learn Smarter, <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Grow Faster
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Smart Education uses technology, AI, and interactive learning to make education easier, flexible, and more effective.
            </motion.p>

            {/* Two Main Hero Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                id="hero-start-learning-btn"
                onClick={onStartLearning}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-explore-courses-btn"
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 text-slate-800 font-semibold text-base shadow-sm hover:shadow transition-all flex items-center justify-center gap-3"
              >
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span>Explore Courses</span>
              </button>
            </motion.div>

            {/* Quick Key Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Interactive</div>
                  <div className="text-xs text-slate-500">Quizzes & Videos</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Smart AI</div>
                  <div className="text-xs text-slate-500">24/7 Study Tutor</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Innovations</div>
                  <div className="text-xs text-slate-500">Student Projects</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Illustration & Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Interactive Illustration Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
              
              {/* Top Bar simulating a smart student classroom interface */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span className="text-xs font-semibold text-slate-400 ml-2">Smart Classroom 4.0</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>AI Tutor Online</span>
                </div>
              </div>

              {/* Central Educational Illustration Art */}
              <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50 rounded-2xl p-6 overflow-hidden">
                
                {/* SVG Visual Graphic of Students & Digital Tech */}
                <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Desk / Learning Space */}
                  <rect x="30" y="170" width="340" height="12" rx="6" fill="#CBD5E1" />
                  <rect x="70" y="182" width="10" height="48" rx="3" fill="#94A3B8" />
                  <rect x="320" y="182" width="10" height="48" rx="3" fill="#94A3B8" />

                  {/* Laptop in Center */}
                  <rect x="140" y="90" width="120" height="80" rx="8" fill="#1E293B" />
                  <rect x="146" y="96" width="108" height="68" rx="4" fill="#3B82F6" />
                  {/* Laptop Screen Content */}
                  <rect x="156" y="106" width="50" height="6" rx="3" fill="#FFFFFF" />
                  <rect x="156" y="118" width="88" height="4" rx="2" fill="#93C5FD" />
                  <rect x="156" y="126" width="70" height="4" rx="2" fill="#93C5FD" />
                  <circle cx="226" cy="146" r="10" fill="#60A5FA" />
                  <path d="M223 141 L231 146 L223 151 Z" fill="#FFFFFF" />
                  {/* Laptop Base */}
                  <path d="M125 170 L275 170 L265 176 L135 176 Z" fill="#64748B" />

                  {/* Student 1 (Left: Learning with Laptop) */}
                  <circle cx="95" cy="80" r="22" fill="#FCD34D" />
                  {/* Hair */}
                  <path d="M75 75 Q95 50 115 75 Q95 62 75 75 Z" fill="#1E293B" />
                  {/* Glasses */}
                  <circle cx="88" cy="80" r="5" stroke="#1E293B" strokeWidth="1.5" />
                  <circle cx="102" cy="80" r="5" stroke="#1E293B" strokeWidth="1.5" />
                  <line x1="93" y1="80" x2="97" y2="80" stroke="#1E293B" strokeWidth="1.5" />
                  {/* Smile */}
                  <path d="M91 92 Q95 96 99 92" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Body & Hoodie */}
                  <path d="M65 170 C65 125 125 125 125 170 Z" fill="#3B82F6" />
                  {/* Arm reaching for Laptop */}
                  <path d="M100 135 Q125 145 135 165" stroke="#FCD34D" strokeWidth="8" strokeLinecap="round" />

                  {/* Student 2 (Right: Learning with Smartphone / Tablet) */}
                  <circle cx="305" cy="80" r="22" fill="#FDE68A" />
                  {/* Hair */}
                  <path d="M285 70 C285 45 325 45 325 70 C325 85 320 95 320 95 C310 90 290 90 285 70 Z" fill="#92400E" />
                  {/* Smile & Eyes */}
                  <circle cx="298" cy="78" r="2.5" fill="#1E293B" />
                  <circle cx="312" cy="78" r="2.5" fill="#1E293B" />
                  <path d="M301 88 Q305 92 309 88" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Body & Violet Sweater */}
                  <path d="M275 170 C275 125 335 125 335 170 Z" fill="#8B5CF6" />
                  
                  {/* Mobile Phone / Tablet Held in Hand */}
                  <rect x="250" y="120" width="30" height="46" rx="4" fill="#0F172A" transform="rotate(-10 250 120)" />
                  <rect x="253" y="124" width="24" height="38" rx="2" fill="#A78BFA" transform="rotate(-10 250 120)" />
                  <circle cx="266" cy="144" r="5" fill="#FFFFFF" />

                  {/* AI Sparkle / Floating Hologram */}
                  <g className="animate-pulse">
                    <circle cx="200" cy="45" r="18" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" />
                    <text x="194" y="51" fontSize="14" fill="#6D28D9">🤖</text>
                  </g>
                </svg>

                {/* Floating Micro-Badges */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2"
                >
                  <Laptop className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-800">Learn on Laptops</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-bold text-slate-800">Mobile Friendly</span>
                </motion.div>
              </div>

              {/* Interactive Quick Try AI prompt bubble */}
              <div 
                onClick={onAskAI}
                className="mt-4 p-3.5 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-2xl border border-blue-200/70 flex items-center justify-between cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-indigo-700">Got a Homework Question?</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      "Ask Smart AI" for simple answers →
                    </div>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-indigo-500 animate-bounce" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
