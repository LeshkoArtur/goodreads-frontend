import Image from 'next/image';
import Link from 'next/link';

export default function GuestHeader() {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/readloop-logo.png"
                alt="ReadLoop"
                width={140}
                height={32}
                className="h-6 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium font-montserrat transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium font-montserrat transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/book-reviews"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium font-montserrat transition-colors duration-200"
            >
              Book Reviews
            </Link>
            <Link
              href="/new-releases"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium font-montserrat transition-colors duration-200"
            >
              New Releases
            </Link>
            <Link
              href="/readers-wall"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium font-montserrat transition-colors duration-200"
            >
              Reader's Wall
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium font-montserrat transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Join the Club Button */}
          <div className="flex items-center">
            <Link
              href="/signup"
              className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 rounded-md text-sm font-semibold font-montserrat transition-colors duration-200"
            >
              JOIN THE CLUB
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 font-montserrat"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
