import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-amber-600" />
              <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
                Freely Talk
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-600 max-w-sm">
              Your trusted platform for online astrology consultation. Connect with verified magic persons and get accurate predictions about your future.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-amber-600">Chat with Magic Person</Link></li>
              <li><Link href="#" className="hover:text-amber-600">Talk to Magic Person</Link></li>
              <li><Link href="#" className="hover:text-amber-600">Free Kundli</Link></li>
              <li><Link href="#" className="hover:text-amber-600">Daily Horoscope</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Important Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-amber-600">Magic Person Login</Link></li>
              <li><Link href="#" className="hover:text-amber-600">About Us</Link></li>
              <li><Link href="#" className="hover:text-amber-600">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-amber-600">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Freely Talk. All rights reserved.</p>
          <p className="mt-4 md:mt-0">100% Secure & Confidential Readings</p>
        </div>
      </div>
    </footer>
  );
}
