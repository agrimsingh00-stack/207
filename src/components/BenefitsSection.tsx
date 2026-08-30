import React from "react";
import { BENEFITS_DATA } from "../data/mockData";
import { DynamicIcon } from "./DynamicIcon";
import { Sparkles, CheckCircle2, ShieldCheck, Heart } from "lucide-react";
import { motion } from "motion/react";

export const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Benefits</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Smart Education Helps You Succeed
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Designed specifically for school students to make daily homework easier, exam prep exciting, and knowledge stick for life.
          </p>
        </div>

        {/* 6 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS_DATA.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/70 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-5 ${benefit.color}`}>
                  <DynamicIcon name={benefit.iconName} className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/50 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Proven learning advantage</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Student Testimonial / Quick Quote Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-blue-600/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 uppercase tracking-wider">
              Student Community
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold">
              "Smart Education made science feel like a video game!"
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl">
              Thousands of students use Smart AI to turn confusing textbook chapters into fun, bite-sized interactive challenges.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <Heart className="w-6 h-6 fill-white" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-base">4.9 / 5.0 Rating</div>
              <div className="text-xs text-blue-200">From 10,000+ Young Learners</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
