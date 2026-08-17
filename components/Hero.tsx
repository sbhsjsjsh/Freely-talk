import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-sm text-amber-400 mb-6 border border-slate-700">
            <Star className="h-4 w-4 fill-amber-400" />
            <span>Trusted by 5 Million+ Users</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Navigate your life's journey <br className="hidden md:block"/>
            with cosmic clarity.
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl text-balance mx-auto md:mx-0">
            Connect with India's top astrologers, tarot readers, and numerologists. Get accurate predictions for your love, career, and marriage.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="#astrologers" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-amber-600 px-8 font-medium text-white shadow-sm transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 whitespace-nowrap shrink-0"
            >
              Chat with Astrologer
            </Link>
            <Link 
              href="#ask" 
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-700 bg-slate-800 px-8 font-medium text-white shadow-sm transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 whitespace-nowrap shrink-0"
            >
              Ask AI Astrologer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 -z-10 h-full w-full md:w-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 opacity-80" />
    </section>
  );
}
