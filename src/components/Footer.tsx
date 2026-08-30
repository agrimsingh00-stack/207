import React, { useState } from "react";
import { GraduationCap, Mail, Heart, Sparkles, Shield, ArrowUp, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: About Smart Education (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div 
              onClick={() => onNavigate("hero")}
              className="flex items-center gap-3 cursor-pointer group inline-flex"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="font-heading font-extrabold text-2xl text-white tracking-tight">
                Smart<span className="text-blue-400">Education</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Smart Education is a modern, student-centric digital learning platform empowering students with AI study support, interactive quizzes, video concepts, and a showcase for student innovations.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Student Safe</span>
              </span>
              <span className="flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>AI Powered</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links & Sections (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-base">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate("hero")}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("features")}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("courses")}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Courses & Subjects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("dashboard")}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Student Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("ai-assistant")}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Ask Smart AI
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Innovation & Quiz (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-base">
              Explore More
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate("quiz")}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Interactive Quizzes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("innovation")}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Student Innovations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("benefits")}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Student Benefits
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Daily Science Fun Fact / Newsletter (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-base">
              Daily Smart Fact
            </h4>
            <p className="text-xs text-slate-400">
              Receive a daily fun science fact and student project idea in your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 text-emerald-300 rounded-xl text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You're subscribed to Daily Smart Facts! 🚀</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@school.edu"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors"
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Smart Education. Made with dedication for young learners & innovators worldwide.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy & Child Safety
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white text-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900">
                    Privacy & Student Safety
                  </h3>
                  <p className="text-xs text-slate-500">
                    Smart Education Student Commitment
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  At <strong>Smart Education</strong>, the safety, privacy, and digital well-being of young learners is our highest priority.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>No tracking or ads:</strong> We never sell student data or show third-party advertisements.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Child-safe AI:</strong> Our Ask Smart AI assistant is strictly moderated to ensure positive, educational interactions.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Safe Innovation Sharing:</strong> Student ideas are shared with school names or initials without sensitive personal addresses.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
