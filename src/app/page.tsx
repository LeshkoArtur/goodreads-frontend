import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="flex justify-center items-center px-8 pt-8">
        <div className="text-[#424A72] text-2xl font-bold font-monserrat mr-6">
          Welcome to
        </div>
        <div className="flex items-center">
          <Image
            src="/assets/readloop-logo.png"
            alt="ReadLoop"
            width={200}
            height={45}
            className="h-24 w-auto"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center pb-12">
        {/* Main Tagline */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold font-monserrat text-[#9574AE] leading-tight">
            <div className="-translate-x-40">where readers connect</div>
            <div className="translate-x-40">through stories</div>
          </h1>
        </div>

        {/* Introductory Paragraph */}
        <div className="text-center mb-16 max-w-4xl">
          <p className="text-lg text-[#424A72] font-monserrat font-regular leading-relaxed">
            It's not just a library or a book club, it's a vibrant community for
            book lovers. Here, books come alive in conversations, and every
            story resonates in the hearts of other readers.
          </p>
        </div>

        {/* Mid-Page Content */}
        <div className="flex items-center justify-center gap-16 mb-16 max-w-6xl">
          {/* Illustration */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/people.svg"
              alt="People reading books"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>

          {/* Feature List */}
          <div className="flex-shrink-0 max-w-md">
            <div className="text-[#424A72] space-y-6">
              <p className="text-lg font-medium">
                Founded in 2025 for those who want more than just reading books.
              </p>

              <h2 className="text-xl font-semibold text-[#424A72]">
                We imagined a platform where:
              </h2>

              <ul className="space-y-3 text-[#424A72]">
                <li className="flex items-start">
                  <span className="text-[#9574AE] mr-3 mt-1">•</span>
                  <span>readers can discuss books without restrictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9574AE] mr-3 mt-1">•</span>
                  <span>reviews and impressions create lively discussions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9574AE] mr-3 mt-1">•</span>
                  <span>
                    you can find like-minded people and join thematic clubs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9574AE] mr-3 mt-1">•</span>
                  <span>
                    everyone has access to world bestsellers and hidden literary
                    gems
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mb-12 max-w-4xl">
          <p className="text-lg text-[#424A72] leading-relaxed mb-8">
            Whether you're here to read, share experiences, or make new friends
            — READLOOP brings all book lovers together in one community.
          </p>

          {/* JOIN NOW Button */}
          <Link
            href="/signup"
            className="inline-block bg-[#424A72] hover:bg-[#323856] text-white font-bold text-lg py-4 px-12 rounded-lg transition-colors duration-200"
          >
            JOIN NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
