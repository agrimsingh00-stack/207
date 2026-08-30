import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../types";
import {
  Bot,
  Send,
  Sparkles,
  User,
  Volume2,
  VolumeX,
  Copy,
  Check,
  RotateCcw,
  Lightbulb,
  HelpCircle,
  BookOpen
} from "lucide-react";
import { motion } from "motion/react";

export const AIAssistantSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg-welcome",
      sender: "ai",
      text: "👋 Hi there! I'm **Smart AI**, your friendly study companion. Ask me any school homework question or curious science concept, like *'Explain photosynthesis in simple words'*!",
      timestamp: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    "Explain photosynthesis in simple words.",
    "How does gravity work on Earth and Moon?",
    "What is an algorithm in computer science?",
    "Why do leaves change color in autumn?",
    "How do I add fractions with different denominators?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Voice speech synthesis
  const handleToggleSpeak = (msgId: string, text: string) => {
    if (!("speechSynthesis" in window)) return;

    if (speakingId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Clean markdown asterisks from speech text
    const cleanText = text.replace(/[*_#`~]/g, "");
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(msgId);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopyText = (msgId: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(msgId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputValue;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!customPrompt) setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ask-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: textToSend }),
      });

      if (!res.ok) throw new Error("Failed to get AI answer");

      const data = await res.json();
      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: data.answer || "I am thinking about this! Could you ask again?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      const fallbackAiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: `🌱 **Here's a simple explanation for "${textToSend}":**\n\nGreat question! In school studies, breaking problems into small pieces makes understanding much easier. Keep practicing with quizzes and courses!`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, fallbackAiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setSpeakingId(null);
    setMessages([
      {
        id: "msg-welcome-reset",
        sender: "ai",
        text: "👋 Chat reset! What exciting topic would you like to explore next?",
        timestamp: "Just now",
      },
    ]);
  };

  return (
    <section id="ai-assistant" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-indigo-50/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Bot className="w-4 h-4" />
            <span>AI Study Assistant</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ask Smart AI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Need help with homework or curious about how things work? Type your question and get a simple, student-friendly answer in seconds.
          </p>
        </div>

        {/* Chat Application Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden flex flex-col h-[580px]">
          
          {/* Chat Header Bar */}
          <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading font-bold text-base flex items-center gap-2">
                  <span>Smart AI Study Buddy</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-xs text-slate-400">Always online • Student Safe & Friendly</div>
              </div>
            </div>

            <button
              onClick={handleResetChat}
              title="Reset Chat"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Clear</span>
            </button>
          </div>

          {/* Quick Suggestions Chips Bar */}
          <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 shrink-0">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Try asking:</span>
            </span>
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="px-3 py-1 rounded-full bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-700 text-xs font-medium transition-all shrink-0 shadow-2xs"
              >
                "{q}"
              </button>
            ))}
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg) => {
              const isAi = msg.sender === "ai";
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-3 ${isAi ? "items-start" : "items-start justify-end"}`}
                >
                  {isAi && (
                    <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-3xl px-5 py-4 text-sm leading-relaxed shadow-sm ${
                      isAi
                        ? "bg-white text-slate-800 border border-slate-200/80 rounded-tl-sm"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-sm"
                    }`}
                  >
                    {/* Message content with line breaks formatted nicely */}
                    <div className="space-y-2 whitespace-pre-line">
                      {msg.text.split("\n").map((line, lIdx) => {
                        // Highlight bold elements lightly
                        if (line.startsWith("🌱") || line.startsWith("🎯") || line.startsWith("💡") || line.startsWith("🌍") || line.startsWith("💻") || line.startsWith("🤖") || line.startsWith("✨")) {
                          return (
                            <p key={lIdx} className="font-bold text-slate-900 mt-2">
                              {line}
                            </p>
                          );
                        }
                        return <p key={lIdx}>{line}</p>;
                      })}
                    </div>

                    {/* Bottom action icons for AI responses */}
                    {isAi && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                        <span>{msg.timestamp}</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleToggleSpeak(msg.id, msg.text)}
                            title="Listen to explanation"
                            className="p-1 rounded-md hover:bg-slate-100 hover:text-indigo-600 transition-colors"
                          >
                            {speakingId === msg.id ? (
                              <VolumeX className="w-4 h-4 text-indigo-600 animate-pulse" />
                            ) : (
                              <Volume2 className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            onClick={() => handleCopyText(msg.id, msg.text)}
                            title="Copy answer"
                            className="p-1 rounded-md hover:bg-slate-100 hover:text-indigo-600 transition-colors"
                          >
                            {copiedId === msg.id ? (
                              <Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {!isAi && (
                    <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              );
            })}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200/80 rounded-3xl rounded-tl-sm px-5 py-3.5 shadow-sm flex items-center gap-2 text-xs text-indigo-600 font-semibold">
                  <Sparkles className="w-4 h-4 animate-spin text-indigo-600" />
                  <span>Smart AI is typing an easy explanation...</span>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-4 bg-white border-t border-slate-200/80 flex items-center gap-2"
          >
            <input
              id="ai-question-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything, e.g. 'Explain photosynthesis in simple words'..."
              disabled={isLoading}
              className="flex-1 px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
            />
            <button
              id="ai-send-btn"
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-40 text-white font-semibold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg transition-all flex items-center gap-2 shrink-0"
            >
              <span className="hidden sm:inline">Ask AI</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
