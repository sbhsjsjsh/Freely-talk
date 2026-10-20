import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Freely Talk | Online Astrology, Tarot Reading & Numerology',
  description: 'Connect with astrology experts, tarot readers, and numerologists at Freely Talk for guidance on love, career, marriage, and life decisions. Get started with a free consultation on WhatsApp.',
  openGraph: {
    title: 'Freely Talk | Online Astrology, Tarot Reading & Numerology',
    description: 'Connect with astrology experts, tarot readers, and numerologists at Freely Talk for guidance on love, career, marriage, and life decisions. Get started with a free consultation on WhatsApp.',
    type: 'website',
    siteName: 'Freely Talk',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Freely Talk Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freely Talk | Online Astrology, Tarot Reading & Numerology',
    description: 'Connect with astrology experts, tarot readers, and numerologists at Freely Talk for guidance on love, career, marriage, and life decisions. Get started with a free consultation on WhatsApp.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  verification: {
    google: 'ZS7Ji6uzAvCK4ZWV-kfNVwciVcpp0w9o9JPaGPKRc4Q',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              'name': 'Freely Talk',
              'url': 'https://freely-talk.com', // Placeholder URL, should ideally be dynamic
              'description': 'Connect with astrology experts, tarot readers, and numerologists at Freely Talk for guidance on love, career, marriage, and life decisions.',
              'applicationCategory': 'LifestyleApplication',
              'operatingSystem': 'All',
              'offers': {
                '@type': 'Offer',
                'price': '0',
                'priceCurrency': 'USD',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-200" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
