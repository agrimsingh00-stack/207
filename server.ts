import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI client lazily if key exists
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Fallback intelligent answers for common student questions if no API key is configured
const FALLBACK_KNOWLEDGE_BASE: Record<string, string> = {
  photosynthesis: `🌱 **What is Photosynthesis?**
Photosynthesis is the wonderful superpower plants use to make their own food using sunlight!

**How it works in 3 easy steps:**
1. **Drink Water:** Roots soak up water from the soil.
2. **Breathe Air:** Leaves capture carbon dioxide from the air.
3. **Catch Sunlight:** Green pigment called *chlorophyll* traps sunshine to cook up glucose (sugar) for energy and releases clean oxygen for us to breathe!

🧪 **Fun Formula:**
Sunlight + Water + Carbon Dioxide ➔ Glucose (Food) + Oxygen 💨

🌟 **Quick Thinker:** What gas do plants give back to humans during the day? (Hint: Oxygen!)`,

  gravity: `🌍 **What is Gravity?**
Gravity is an invisible pull that draws objects toward each other. The bigger an object is, the stronger its gravitational pull!

**Why it matters:**
- It keeps our feet firmly on the ground so we don't float into space.
- It keeps Earth orbiting around the Sun and the Moon orbiting Earth.
- Isaac Newton famously got inspired by watching an apple fall from a tree!

🌟 **Fun Fact:** On the Moon, gravity is only 1/6th as strong as Earth, so you could jump 6 times higher!`,

  algorithm: `💻 **What is an Algorithm?**
An algorithm is simply a step-by-step recipe or set of rules to solve a problem or complete a task!

**Real Life Example:**
Think of baking a pizza or tying your shoes. If you follow the steps in order:
1. Make the dough
2. Add tomato sauce & cheese
3. Bake in the oven
...You get a delicious pizza! 🍕

Computers use algorithms to search YouTube videos, suggest music, and even navigate Google Maps!`,

  ai: `🤖 **What is Artificial Intelligence (AI)?**
Artificial Intelligence (AI) means teaching computer programs and machines to learn from examples, recognize patterns, and help solve problems just like humans do!

**How it helps you learn:**
- Explains tough math and science topics step-by-step.
- Recommends books and quizzes suited for your speed.
- Translates languages instantly so students everywhere can connect!`,

  rainbow: `🌈 **How is a Rainbow formed?**
A rainbow is formed when sunlight shines through raindrops in the sky!

**How it happens:**
1. White sunlight enters a raindrop.
2. The drop acts like a tiny glass prism, bending (refracting) and splitting the white light into 7 vibrant colors (VIBGYOR: Violet, Indigo, Blue, Green, Yellow, Orange, Red).
3. The colors bounce back out to your eyes! 🎨`,
};

// API Endpoint for Ask Smart AI
app.post("/api/ask-ai", async (req, res) => {
  const { question } = req.body;
  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Question is required" });
  }

  const cleanQuestion = question.trim();
  const lowerQ = cleanQuestion.toLowerCase();

  try {
    const ai = getAiClient();
    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: cleanQuestion,
        config: {
          systemInstruction: `You are "Smart AI", a friendly, patient, and inspiring educational tutor for school students (K-12).
Guidelines:
1. Explain concepts simply, clearly, and enthusiastically using friendly language and appropriate emojis.
2. Use this structured format:
   - 🎯 **Key Concept:** (1-2 clear, simple sentences)
   - 💡 **Simple Step-by-Step Explanation:** (2-4 bullet points)
   - 🍕 **Fun Real-World Analogy:** (Relatable everyday example)
   - ❓ **Quick Check Question:** (A fun question to test if they understood)
3. Keep answers concise (under 200 words), encouraging, and free of overly dense academic jargon.`,
        },
      });

      const reply = response.text || "I couldn't generate an answer. Please try asking again!";
      return res.json({ answer: reply, source: "gemini" });
    }

    // Smart Fallback matching if API key is not yet set
    for (const [key, answer] of Object.entries(FALLBACK_KNOWLEDGE_BASE)) {
      if (lowerQ.includes(key)) {
        return res.json({ answer, source: "smart_assistant" });
      }
    }

    // Default friendly educational response
    const genericResponse = `✨ **Great Question on "${cleanQuestion}"!**

🎯 **Key Concept:**
Learning new concepts is all about breaking big ideas into small, fun building blocks!

💡 **Simple Explanation:**
- Every science, math, or technology concept starts with curiosity and observation.
- When we study "${cleanQuestion}", we look at how things work, why they happen, and how we can apply them to solve real-world problems.

🌟 **Smart Study Tip:**
Try summarizing this topic in your own words or asking our Smart Education Quiz to test your knowledge!`;

    return res.json({ answer: genericResponse, source: "assistant" });
  } catch (error: any) {
    console.error("Error answering question:", error);
    // Graceful response fallback
    return res.json({
      answer: `🌟 **Smart AI Assistant:**\n\n"${cleanQuestion}" is a great topic to explore! Smart Education helps you break down complex questions into simple, bite-sized lessons. Check out our **Subjects & Courses** section for interactive modules on this topic!`,
      source: "fallback",
    });
  }
});

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "Smart Education" });
});

// Start server with Vite middleware in dev or static files in prod
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Smart Education server running on http://localhost:${PORT}`);
  });
}

startServer();
