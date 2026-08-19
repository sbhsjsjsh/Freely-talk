"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, User, Phone, Calendar, Clock, HelpCircle } from "lucide-react";

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a network request for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="astrologers" className="bg-slate-50 py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: CTA Text */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get your first call with a Magic Person for Free!
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Join millions of users who have found clarity and peace of mind. Fill out the form to securely connect with one of our premium, verified magic persons and start your cosmic journey today.
            </p>
            
            <ul className="mt-8 space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-600" />
                <span>100% Confidential & Secure</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-600" />
                <span>Verified Expert Magic Persons</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-600" />
                <span>Instant connection for your first free session</span>
              </li>
            </ul>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-600">
                  Your cosmic profile is being prepared. An expert magic person will connect with you shortly on your provided phone number.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-sm font-medium text-amber-600 hover:text-amber-700"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Start Your Free Consultation
                </h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-slate-400" />
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="block w-full rounded-md border border-slate-300 pl-10 px-4 py-2.5 text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm" 
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-4 w-4 text-slate-400" />
                    </div>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="block w-full rounded-md border border-slate-300 pl-10 px-4 py-2.5 text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm" 
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-4 w-4 text-slate-400" />
                      </div>
                      <input 
                        type="date" 
                        id="dob" 
                        required
                        className="block w-full rounded-md border border-slate-300 pl-10 px-4 py-2.5 text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="tob" className="block text-sm font-medium text-slate-700 mb-1">Time of Birth</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-4 w-4 text-slate-400" />
                      </div>
                      <input 
                        type="time" 
                        id="tob" 
                        className="block w-full rounded-md border border-slate-300 pl-10 px-4 py-2.5 text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm" 
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-slate-700 mb-1">Topic of Concern</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HelpCircle className="h-4 w-4 text-slate-400" />
                    </div>
                    <select 
                      id="topic" 
                      className="block w-full rounded-md border border-slate-300 pl-10 px-4 py-2.5 text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm bg-white"
                    >
                      <option value="love">Love & Relationships</option>
                      <option value="career">Career & Finance</option>
                      <option value="marriage">Marriage & Kundli</option>
                      <option value="health">Health & Wellness</option>
                      <option value="general">General Guidance</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 flex w-full h-12 items-center justify-center rounded-md bg-amber-600 px-8 font-medium text-white shadow-sm transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    "Start Free Call Now"
                  )}
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  By submitting, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
