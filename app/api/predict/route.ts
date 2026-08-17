import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { question, category } = await req.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json({ error: "A valid question is required." }, { status: 400 });
    }

    const mockResponse = `The cosmic energies surrounding your question about ${category} are currently in a state of flux, yet a clear path emerges. The alignment of the stars suggests a period of transition where patience will be your greatest ally.\n\nI sense that the answer you seek is leaning towards a positive resolution. **Within the next few weeks**, you will notice subtle shifts in your situation. Trust your intuition during this time, as the universe is guiding you toward your highest good.\n\nFor now, I recommend a simple grounding remedy. Spend a few minutes each morning visualizing a calm, white light surrounding you. Wearing or keeping a piece of clear quartz nearby will also help clear any lingering confusion and attract positive energy.`;

    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY is not set. Returning mock response.");
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
      return NextResponse.json({ prediction: mockResponse });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `You are a deeply empathetic, highly experienced Vedic Astrologer and Tarot Reader on the premium app "Freely Talk". 
    A user has asked a question in the category of "${category}": "${question}". 
    
    Provide a thoughtful, personalized reading in exactly 3 paragraphs. 
    Paragraph 1: Analyze the current energetic and astrological context related to their question. Mention specific planetary movements or tarot cards metaphorically.
    Paragraph 2: Provide specific, intuitive guidance and predictions answering their question. Use bolding (**like this**) for key insights or timelines.
    Paragraph 3: Offer a practical remedy, such as a mindfulness practice, a specific color to wear, or a positive affirmation to help them align with better outcomes.
    
    Tone: Warm, mystical yet professional, grounded, and encouraging. Do not use generic greetings like "Hello" or "Dear seeker". Begin directly with the reading.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return NextResponse.json({ prediction: response.text });
    } catch (apiError) {
      console.error("Gemini API call failed, falling back to mock:", apiError);
      return NextResponse.json({ prediction: mockResponse });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Failed to read the stars right now." }, { status: 500 });
  }
}
