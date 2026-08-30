import React, { useState } from "react";
import { COURSES_DATA } from "../data/mockData";
import { Course } from "../types";
import { DynamicIcon } from "./DynamicIcon";
import { CourseLessonModal } from "./CourseLessonModal";
import { BookOpen, Sparkles, ArrowRight, CheckCircle2, Award } from "lucide-react";
import { motion } from "motion/react";

interface CoursesSectionProps {
  onCourseComplete?: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onCourseComplete }) => {
  const [courses, setCourses] = useState<Course[]>(COURSES_DATA);
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  const handleCompleteLesson = (courseId: string) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === courseId
          ? { ...c, progress: Math.min(100, c.progress + 15) }
          : c
      )
    );
    if (onCourseComplete) {
      onCourseComplete(courseId);
    }
  };

  return (
    <section id="courses" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Interactive Curriculum</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Subjects & Courses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Explore foundational concepts across STEM, languages, and general knowledge with interactive lessons designed for school students.
          </p>
        </div>

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            return (
              <motion.div
                key={course.id}
                id={`course-card-${course.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Subject Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      <DynamicIcon name={course.iconName} className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {course.tag}
                    </span>
                  </div>

                  {/* Subject Name */}
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mb-6 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
                      <span>Course Progress</span>
                      <span className="text-blue-700 font-bold">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2">
                      <span>{course.lessonsCount} Total Lessons</span>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                {/* "Start Learning" Button */}
                <button
                  id={`start-learning-${course.id}`}
                  onClick={() => setActiveCourse(course)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md shadow-slate-900/10"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Course Lesson Modal */}
      {activeCourse && (
        <CourseLessonModal
          course={activeCourse}
          onClose={() => setActiveCourse(null)}
          onCompleteLesson={handleCompleteLesson}
        />
      )}
    </section>
  );
};
