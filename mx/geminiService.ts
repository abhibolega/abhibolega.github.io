
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getWcmTutorResponse = async (history: ChatMessage[], userMessage: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: `You are a world-class Manufacturing Excellence consultant and chemical process engineer. 
        You specialize in WCM (World Class Manufacturing), TPM (Total Productive Maintenance), and TQM (Total Quality Management).
        The user is a chemical process engineer. When answering, focus on the specific framework requested (noted in brackets [Context: ...]).
        Always provide examples related to chemical manufacturing (e.g., reactors, distillation columns, cooling towers, chemical yield, safety interlocks). 
        Structure your advice using the methodology's pillars or principles. Use Markdown for clarity.`,
      },
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble accessing my Manufacturing Excellence database. Please try again.";
  }
};
