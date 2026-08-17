"use client";

import { useState } from "react";
import { Loader2, Sparkles, AlertCircle } from "lucide-react";

export default function AskAstrologer() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("love");
  const [reading, setReading] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setError(null);
    setReading(null);

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, category }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate reading.");
      }

      const paragraphs = data.prediction
        .split("\n\n")
        .map((p: string) => p.trim())
        .filter(Boolean);
        
      setReading(paragraphs);
    } catch (err: any) {
      setError(err.message || "The stars are cloudy right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ask" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Ask AI Astrologer
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Get an instant, AI-generated reading for your most pressing questions. Choose a category and type your question below.
            </p>
            
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-900 mb-2">
                  Topic of Concern
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm bg-white"
                  disabled={loading}
                >
                  <option value="love">Love & Relationships</option>
                  <option value="career">Career & Finance</option>
                  <option value="health">Health & Wellness</option>
                  <option value="general">General Guidance</option>
                </select>
              </div>

              <div>
                <label htmlFor="question" className="block text-sm font-medium text-slate-900 mb-2">
                  Your Question
                </label>
                <textarea
                  id="question"
                  rows={4}
                  className="block w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm resize-none"
                  placeholder="e.g., Will I get the promotion I applied for this month? What does my career path look like?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading || !question.trim()}
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-amber-600 px-8 font-medium text-white shadow-sm transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Consulting the Stars...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Free Prediction
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 min-h-[400px] flex flex-col relative overflow-hidden">
            {/* Subtle mystic background element */}
            <div className="absolute -right-12 -top-12 opacity-5 pointer-events-none">
              <Sparkles className="h-64 w-64" />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2 relative z-10">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Sparkles className="h-4 w-4" />
              </span>
              Your Reading
            </h3>
            
            {!reading && !error && !loading && (
              <div className="flex-1 flex items-center justify-center text-center text-slate-500 relative z-10">
                <p>Type your question and press generate to receive cosmic guidance.</p>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-amber-600 gap-4 relative z-10">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="text-sm font-medium">Aligning planetary positions...</p>
              </div>
            )}

            {error && (
              <div className="rounded-md bg-red-50 p-4 border border-red-200 relative z-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Connection Interrupted</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>{error}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {reading && (
              <div className="space-y-6 flex-1 overflow-y-auto relative z-10">
                {reading.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed">
                    {paragraph.split(/(\*\*.*?\*\*)/g).map((part, i) => 
                      part.startsWith("**") && part.endsWith("**") 
                        ? <strong key={i} className="text-slate-900 font-semibold">{part.slice(2, -2)}</strong>
                        : part
                    )}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
