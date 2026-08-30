import React, { useState } from "react";
import { INITIAL_STUDENT_DASHBOARD } from "../data/mockData";
import { StudentDashboardData } from "../types";
import {
  LayoutDashboard,
  Flame,
  Award,
  BookOpen,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowUpRight,
  Sparkles,
  Check,
  TrendingUp,
  Target
} from "lucide-react";
import { motion } from "motion/react";

interface DashboardSectionProps {
  onExploreMoreCourses?: () => void;
  onTakeQuiz?: () => void;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({
  onExploreMoreCourses,
  onTakeQuiz,
}) => {
  const [dashboardData, setDashboardData] = useState<StudentDashboardData>(INITIAL_STUDENT_DASHBOARD);
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);

  const toggleActivity = (id: string) => {
    setCompletedActivities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="dashboard" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Student Hub</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Learning Dashboard
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Track your study progress, completed modules, upcoming quizzes, and achievement milestones in one simple place.
          </p>
        </div>

        {/* Dashboard Canvas Container */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm">
          
          {/* Top Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-lg shadow-indigo-600/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>{dashboardData.grade}</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">
                Welcome back, {dashboardData.studentName}! 👋
              </h3>
              <p className="text-blue-100 text-sm sm:text-base max-w-xl">
                You've completed <span className="font-bold text-white">42 lessons</span> so far. You are on track to finish your weekly goal ahead of schedule!
              </p>
            </div>

            {/* Streak & Goal Badge */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-xl shadow-md">
                <Flame className="w-7 h-7 text-amber-900 fill-amber-900" />
              </div>
              <div>
                <div className="text-2xl font-black text-white leading-none">
                  {dashboardData.streakDays} Days
                </div>
                <div className="text-xs text-blue-100 font-medium mt-0.5">Active Study Streak 🔥</div>
              </div>
            </div>
          </div>

          {/* Primary Metrics Row: Overall Progress & Recent Quiz Score */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            
            {/* Learning Progress Bar Block (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-slate-900">
                        Overall Learning Progress
                      </h4>
                      <p className="text-xs text-slate-500">Across all enrolled subjects</p>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-blue-600">
                    {dashboardData.overallProgress}%
                  </span>
                </div>

                {/* Main Progress Bar */}
                <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${dashboardData.overallProgress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 font-semibold mb-6">
                  <span>{dashboardData.completedLessonsCount} Completed Lessons</span>
                  <span>{dashboardData.totalLessonsCount} Total Target Lessons</span>
                </div>
              </div>

              {/* Progress Milestones Pills */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50">
                  <div className="text-base font-bold text-slate-800">3</div>
                  <div className="text-[11px] text-slate-500">Active Courses</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50">
                  <div className="text-base font-bold text-emerald-600">18 hrs</div>
                  <div className="text-[11px] text-slate-500">Study Time</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50">
                  <div className="text-base font-bold text-purple-600">5 Badges</div>
                  <div className="text-[11px] text-slate-500">Achievements</div>
                </div>
              </div>
            </div>

            {/* Recent Quiz Score Card (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-slate-900">
                        Recent Quiz Score
                      </h4>
                      <p className="text-xs text-slate-500">{dashboardData.recentQuizScore.date}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                    Grade A+
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-center justify-between my-2">
                  <div>
                    <div className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                      {dashboardData.recentQuizScore.quizName}
                    </div>
                    <div className="text-2xl font-black text-slate-900 mt-1">
                      {dashboardData.recentQuizScore.score} / {dashboardData.recentQuizScore.total}
                      <span className="text-sm font-medium text-slate-500 ml-2">(90% Mastery)</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-base shadow-sm">
                    ✨
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  id="dashboard-take-new-quiz-btn"
                  onClick={onTakeQuiz}
                  className="w-full py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Practice Another Quiz</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Secondary Rows: Courses Currently Learning & Activity/Completed Tracker */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Courses Currently Learning (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-heading font-bold text-lg text-slate-900">
                    Courses Currently Learning
                  </h4>
                </div>
                {onExploreMoreCourses && (
                  <button
                    onClick={onExploreMoreCourses}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>View all courses</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {dashboardData.enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/70 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h5 className="font-heading font-bold text-slate-900 text-base">
                        {course.name}
                      </h5>
                      <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
                        {course.progress}% Completed
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      <span>Current Module: <strong className="text-slate-700">{course.currentModule}</strong></span>
                    </div>

                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Completed Lessons & Upcoming Activities (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Completed Lessons Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-heading font-bold text-lg text-slate-900">
                    Completed Lessons
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {dashboardData.completedLessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/40 border border-emerald-100/80 text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-800">{lesson.title}</div>
                          <div className="text-[11px] text-slate-500">{lesson.subject}</div>
                        </div>
                      </div>
                      <span className="text-[11px] text-emerald-700 font-semibold shrink-0">
                        {lesson.completedAt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Activities Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <h4 className="font-heading font-bold text-lg text-slate-900">
                    Upcoming Activities
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {dashboardData.upcomingActivities.map((act) => {
                    const isDone = completedActivities.includes(act.id);
                    return (
                      <div
                        key={act.id}
                        onClick={() => toggleActivity(act.id)}
                        className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                          isDone
                            ? "bg-slate-100 border-slate-200 opacity-60 line-through text-slate-400"
                            : "bg-amber-50/40 border-amber-100 text-slate-800 hover:border-amber-300"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center text-xs ${
                            isDone ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300 bg-white"
                          }`}>
                            {isDone && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800">{act.title}</div>
                            <div className="text-[11px] text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-amber-500" />
                              <span>{act.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
