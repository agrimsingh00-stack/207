import React, { useState } from "react";
import { INNOVATION_IDEAS } from "../data/mockData";
import { InnovationIdea } from "../types";
import { ShareIdeaModal } from "./ShareIdeaModal";
import { Lightbulb, Plus, Heart, Sparkles, Tag, Users, Calendar, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const InnovationSection: React.FC = () => {
  const [ideas, setIdeas] = useState<InnovationIdea[]>(INNOVATION_IDEAS);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [likedIdeaIds, setLikedIdeaIds] = useState<string[]>([]);

  const categories = [
    "All",
    "Science Projects",
    "Technology Ideas",
    "AI Projects",
    "Environmental Projects",
    "Social Innovation",
  ];

  const handleLikeIdea = (id: string) => {
    if (likedIdeaIds.includes(id)) {
      setLikedIdeaIds((prev) => prev.filter((item) => item !== id));
      setIdeas((prev) =>
        prev.map((idea) =>
          idea.id === id ? { ...idea, likes: idea.likes - 1 } : idea
        )
      );
    } else {
      setLikedIdeaIds((prev) => [...prev, id]);
      setIdeas((prev) =>
        prev.map((idea) =>
          idea.id === id ? { ...idea, likes: idea.likes + 1 } : idea
        )
      );
    }
  };

  const handleAddIdea = (newIdea: InnovationIdea) => {
    setIdeas((prev) => [newIdea, ...prev]);
  };

  const filteredIdeas =
    selectedCategory === "All"
      ? ideas
      : ideas.filter((idea) => idea.category === selectedCategory);

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "Science Projects": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Technology Ideas": return "bg-blue-100 text-blue-700 border-blue-200";
      case "AI Projects": return "bg-indigo-100 text-indigo-700 border-indigo-200";
      case "Environmental Projects": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Social Innovation": return "bg-rose-100 text-rose-700 border-rose-200";
      default: return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <section id="innovation" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with "Share Your Idea" Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Lightbulb className="w-4 h-4" />
              <span>Student Inventions & Creativity</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Student Innovation Showcase
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-2xl">
              Explore brilliant projects, inventions, and research made by fellow students—or publish your own solution to change the world!
            </p>
          </div>

          <button
            id="share-your-idea-btn"
            onClick={() => setIsShareModalOpen(true)}
            className="self-start md:self-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 shrink-0"
          >
            <Plus className="w-5 h-5 stroke-[2.5]" />
            <span>Share Your Idea</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Innovation Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredIdeas.map((idea) => {
              const isLiked = likedIdeaIds.includes(idea.id);
              return (
                <motion.div
                  key={idea.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Card Top: Category & Like Button */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getCategoryBadgeColor(idea.category)}`}>
                        {idea.category}
                      </span>
                      <button
                        onClick={() => handleLikeIdea(idea.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                          isLiked
                            ? "bg-rose-100 text-rose-700"
                            : "bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-600"
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-rose-600 text-rose-600" : ""}`} />
                        <span>{idea.likes}</span>
                      </button>
                    </div>

                    {/* Idea Title */}
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-2.5 group-hover:text-amber-600 transition-colors">
                      {idea.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {idea.description}
                    </p>

                    {/* Real-World Impact Callout */}
                    <div className="p-3 bg-amber-50/60 border border-amber-100/80 rounded-2xl mb-4 text-xs text-amber-900 font-medium flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold">Impact: </strong>
                        <span>{idea.impact}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {idea.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Student Author Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs">
                        {idea.studentName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">{idea.studentName}</div>
                        <div className="text-[11px] text-slate-400">{idea.grade}</div>
                      </div>
                    </div>
                    <span>{idea.date}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Share Idea Modal */}
      <ShareIdeaModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onAddIdea={handleAddIdea}
      />
    </section>
  );
};
