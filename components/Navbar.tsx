"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Sparkles, X, ChevronRight, MessageCircle, Star, Sparkles as Magic } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Chat with Magic Person", href: "#astrologers", icon: MessageCircle },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-amber-600" />
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
              Freely Talk
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-slate-900 transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="#astrologers" className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2">
              Start Free Call
            </Link>
            <button 
              className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-slate-50 flex flex-col"
          >
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 border-b border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-amber-600" />
                <span className="text-xl font-bold tracking-tight text-slate-900">Freely Talk</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-2 -mr-2 text-slate-600 hover:text-slate-900 focus:outline-none bg-slate-100 rounded-full"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-4 py-8">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">Navigation</p>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-colors active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-3 text-slate-900 font-medium">
                        <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                          <Icon className="h-5 w-5" />
                        </div>
                        {link.name}
                      </div>
                      <ChevronRight className="h-5 w-5 text-slate-400" />
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-8 px-2">
                <Link 
                  href="#astrologers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full h-14 items-center justify-center rounded-xl bg-amber-600 px-4 font-medium text-white shadow-sm transition-colors hover:bg-amber-700 focus-visible:outline-none"
                >
                  Start Free Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
