import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wider text-white">
          VIP<span className="text-brand-accent">.PORTFOLIO</span>
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-brand-accent transition">Home</Link>
          <Link href="/gallery" className="hover:text-brand-accent transition">Gallery</Link>
          <Link href="/book" className="hover:text-brand-accent transition">Book Appointment</Link>
          <Link href="/reviews" className="hover:text-brand-accent transition">Reviews</Link>
          <Link href="/contact" className="hover:text-brand-accent transition">Contact</Link>
        </nav>
        <Link 
          href="/book"
          className="bg-brand-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition shadow-lg shadow-brand-accent/20"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
