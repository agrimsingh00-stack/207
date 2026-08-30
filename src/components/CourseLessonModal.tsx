import React, { useState } from "react";
import { Course } from "../types";
import { DynamicIcon } from "./DynamicIcon";
import { X, CheckCircle, Award, Sparkles, BookOpen, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";

interface CourseLessonModalProps {
  course: Course | null;
  onClose: () => void;
  onCompleteLesson: (courseId: string) => void;
}

export const CourseLessonModal: React.FC<CourseLessonModalProps> = ({
  course,
  onClose,
  onCompleteLesson,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!course) return null;

  const { lessonOverview } = course;
  const isCorrect = selectedOption === lessonOverview.practiceQuestion.answer;

  const handleSubmitPractice = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
    if (isCorrect) {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
      });
    }
  };

  const handleFinishLesson = () => {
    setIsCompleted(true);
    onCompleteLesson(course.id);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close lesson modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with subject badge */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <DynamicIcon name={course.iconName} className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                {course.name}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {course.duration} • {course.level}
              </span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 mt-1">
              {lessonOverview.title}
            </h3>
          </div>
        </div>

        {/* Lesson Body Content */}
        <div className="space-y-6">
          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-slate-700">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-1">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Lesson Overview</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed">
              {lessonOverview.summary}
            </p>
          </div>

          {/* Key Takeaways */}
          <div>
            <h4 className="font-heading text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Key Concept Points:</span>
            </h4>
            <div className="space-y-2.5">
              {lessonOverview.keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-sm text-slate-700 font-medium leading-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Practice Question */}
          <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-heading text-base font-bold text-purple-950 mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-600" />
              <span>Quick Practice Check</span>
            </h4>
            <p className="text-sm font-semibold text-slate-800 mb-3">
              {lessonOverview.practiceQuestion.question}
            </p>

            <div className="space-y-2">
              {lessonOverview.practiceQuestion.options.map((option, idx) => {
                let optionStyle = "border-slate-200 bg-white text-slate-700 hover:border-purple-300";
                if (selectedOption === idx) {
                  optionStyle = "border-purple-500 bg-purple-100/70 text-purple-900 font-semibold";
                }
                if (submitted) {
                  if (idx === lessonOverview.practiceQuestion.answer) {
                    optionStyle = "border-emerald-500 bg-emerald-100 text-emerald-900 font-bold";
                  } else if (selectedOption === idx) {
                    optionStyle = "border-rose-400 bg-rose-100 text-rose-900";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={submitted}
                    onClick={() => setSelectedOption(idx)}
                    className={`w-full p-3 rounded-xl text-left text-sm border transition-all flex items-center justify-between ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {submitted && idx === lessonOverview.practiceQuestion.answer && (
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Practice Result message */}
            {!submitted ? (
              <button
                disabled={selectedOption === null}
                onClick={handleSubmitPractice}
                className="mt-4 px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-medium text-xs transition-colors"
              >
                Check Answer
              </button>
            ) : (
              <div className="mt-3 text-xs font-semibold flex items-center gap-1.5">
                {isCorrect ? (
                  <span className="text-emerald-700 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" /> Correct answer! You nailed this concept.
                  </span>
                ) : (
                  <span className="text-amber-700 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> Good try! The correct answer is highlighted in green.
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-medium text-sm transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleFinishLesson}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
              isCompleted
                ? "bg-emerald-600 text-white cursor-default"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20"
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>{isCompleted ? "Lesson Completed! 🎉" : "Mark as Completed"}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
