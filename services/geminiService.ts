import { GoogleGenAI, Type } from "@google/genai";
import { ConsultantResponse, ModelType } from "../types";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBusinessAdvice = async (
  businessDescription: string
): Promise<ConsultantResponse | null> => {
  try {
    const response = await ai.models.generateContent({
      model: ModelType.FLASH,
      contents: `The user runs the following business: "${businessDescription}". Suggest 3 high-impact AI automations.`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING },
            suggestions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  estimatedROI: { type: Type.STRING },
                  implementationTime: { type: Type.STRING },
                },
                required: ["title", "description", "estimatedROI", "implementationTime"],
              },
            },
          },
          required: ["analysis", "suggestions"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as ConsultantResponse;
    }
    return null;
  } catch (error) {
    console.error("Error generating business advice:", error);
    return null;
  }
};
