import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Elegance, Charm, & <span className="text-brand-accent">Exclusive VIP</span> Experiences
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10">
          Professional companionship, high-end event hosting, and custom digital creations. Strictly vetted, discrete, and professional.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/book" className="bg-brand-accent text-white font-medium px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition">
            Book Appointment
          </Link>
          <Link href="/gallery" className="bg-gray-800 text-gray-200 font-medium px-8 py-3 rounded-full hover:bg-gray-700 transition">
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
