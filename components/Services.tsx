import { Sun, Moon, Layers, Compass } from "lucide-react";

const services = [
  {
    title: "Vedic Astrology",
    description: "Deep insights into your life path, career, and relationships based on ancient Indian astrological sciences.",
    icon: Sun,
  },
  {
    title: "Tarot Card Reading",
    description: "Seek immediate answers and intuitive guidance for your most pressing questions through the mystical tarot deck.",
    icon: Layers,
  },
  {
    title: "Numerology",
    description: "Discover the hidden meaning behind numbers in your life, unlocking your true potential and lucky elements.",
    icon: Compass,
  },
  {
    title: "Kundli Matching",
    description: "Check marital compatibility and cosmic alignment with your partner for a harmonious and prosperous life together.",
    icon: Moon,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Premium Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Consult with certified experts across various mystical disciplines to find the clarity you seek.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="flex flex-col bg-white p-8 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-amber-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 text-amber-600 mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed flex-1 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
