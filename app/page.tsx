import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AskAstrologer from "@/components/AskAstrologer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AskAstrologer />
      <section id="download" className="bg-slate-900 py-24 text-center border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
            Get your first call with an Astrologer for Free!
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Join millions of users who have found clarity and peace of mind. Download the Freely Talk app today and start your cosmic journey.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex h-14 items-center justify-center rounded-md bg-amber-600 px-8 font-medium text-white transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 whitespace-nowrap shrink-0">
              Download App
            </button>
            <button className="inline-flex h-14 items-center justify-center rounded-md border border-slate-700 bg-transparent px-8 font-medium text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 whitespace-nowrap shrink-0">
              View All Astrologers
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
