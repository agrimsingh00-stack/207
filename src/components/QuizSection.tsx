import React, { useState } from "react";
import { QUIZ_QUESTIONS } from "../data/mockData";
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, Sparkles, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ questionId: number; selected: number; isCorrect: boolean }[]>([]);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const isCorrect = selectedOption === currentQ.correctAnswer;

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);

    const correct = selectedOption === currentQ.correctAnswer;
    if (correct) {
      setScore((prev) => prev + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    }

    setUserAnswers((prev) => [
      ...prev,
      { questionId: currentQ.id, selected: selectedOption, isCorrect: correct },
    ]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
      });
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
    setUserAnswers([]);
  };

  return (
    <section id="quiz" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Interactive Knowledge Challenge</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Smart Interactive Quiz
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Test your knowledge, get instant visual feedback on your answers, and level up your mastery score!
          </p>
        </div>

        {/* Main Quiz Container */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg">
          
          {!isQuizCompleted ? (
            <div>
              {/* Question Top Header & Progress */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                  {currentQ.subject}
                </span>
                <span className="text-sm font-bold text-slate-600">
                  Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Text */}
              <div className="mb-6">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* 4 Options Grid */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, idx) => {
                  let style = "bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/30";
                  
                  if (selectedOption === idx) {
                    style = "bg-indigo-50 border-indigo-500 text-indigo-900 font-semibold shadow-xs";
                  }

                  if (isAnswerSubmitted) {
                    if (idx === currentQ.correctAnswer) {
                      style = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                    } else if (selectedOption === idx) {
                      style = "bg-rose-50 border-rose-400 text-rose-900";
                    } else {
                      style = "bg-white border-slate-200 text-slate-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      id={`quiz-opt-${currentQ.id}-${idx}`}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-2xl border text-left text-sm sm:text-base font-medium transition-all duration-200 flex items-center justify-between ${style}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs ${
                          selectedOption === idx ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span>{option}</span>
                      </div>

                      {isAnswerSubmitted && idx === currentQ.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && selectedOption === idx && idx !== currentQ.correctAnswer && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Answer Feedback Box */}
              <AnimatePresence>
                {isAnswerSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 sm:p-5 rounded-2xl mb-6 border ${
                      isCorrect
                        ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                        : "bg-rose-50 border-rose-200 text-rose-900"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-base mb-1">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          <span>Correct! Well done! 🎉</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-rose-600" />
                          <span>Incorrect. Let's learn! 💡</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-slate-700 mt-1">
                      {currentQ.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Actions & Live Score */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="text-sm font-bold text-slate-700">
                  Current Score: <span className="text-indigo-600 font-extrabold">{score}</span> / {QUIZ_QUESTIONS.length}
                </div>

                {!isAnswerSubmitted ? (
                  <button
                    id="quiz-submit-answer-btn"
                    disabled={selectedOption === null}
                    onClick={handleCheckAnswer}
                    className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/20"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    id="quiz-next-question-btn"
                    onClick={handleNextQuestion}
                    className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-md"
                  >
                    <span>{currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? "View Final Results" : "Next Question"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Completed Results Card */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-6"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
                <Trophy className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 uppercase tracking-wider">
                  Quiz Completed
                </span>
                <h3 className="font-heading text-3xl font-extrabold text-slate-900 mt-2">
                  {score === QUIZ_QUESTIONS.length
                    ? "Outstanding! Perfect Score! 🌟"
                    : score >= 3
                    ? "Great Job, Explorer! 🚀"
                    : "Good Effort! Keep Learning! 📚"}
                </h3>
                <p className="text-slate-600 text-base mt-2">
                  You scored <strong className="text-indigo-600 font-black text-xl">{score}</strong> out of {QUIZ_QUESTIONS.length} questions correctly ({Math.round((score / QUIZ_QUESTIONS.length) * 100)}%).
                </p>
              </div>

              {/* Performance summary pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto text-left">
                <div className="p-3 bg-white rounded-2xl border border-slate-200 text-center">
                  <div className="text-xl font-bold text-emerald-600">{score}</div>
                  <div className="text-xs text-slate-500">Correct Answers</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-slate-200 text-center">
                  <div className="text-xl font-bold text-rose-500">{QUIZ_QUESTIONS.length - score}</div>
                  <div className="text-xs text-slate-500">Review Items</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-slate-200 text-center col-span-2 sm:col-span-1">
                  <div className="text-xl font-bold text-amber-500">+50 XP</div>
                  <div className="text-xs text-slate-500">Points Earned</div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  id="restart-quiz-btn"
                  onClick={handleRestartQuiz}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Quiz Again</span>
                </button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
