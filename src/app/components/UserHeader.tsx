import Image from 'next/image';
import Link from 'next/link';
import Avatar from '@/app/components/Avatar';
import { HeartIcon } from '@heroicons/react/16/solid';
import { BellIcon } from '@heroicons/react/24/outline';

export default function UserHeader() {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Language */}
          <div className="flex items-center space-x-4">
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
            {/* Language selector */}
            <button className="flex items-center space-x-1">
              <Image
                src="/assets/icons/ua-flag.svg"
                alt="UA"
                width={24}
                height={16}
                className="h-4 w-auto"
              />
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Search bar */}
          <div className="flex-1 mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search all books..."
                className="w-full rounded-lg border-1 border-[#9574AE] pl-4 pr-12 py-2 text-sm focus:outline-none"
              />
              <button className="flex items-center absolute inset-y-0 w-[60px] justify-center right-0 my-auto px-3 bg-[#424A72] text-white rounded-lg cursor-pointer">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* User info + icons */}
          <div className="flex items-center space-x-4">
            {/* User avatar + name */}
            <div className="flex items-center space-x-2">
              <Avatar src="/assets/icons/user-avatar.jpg" size={36} />
              <span className="text-[16px] font-normal text-[#9574AE]">
                Anna Popova
              </span>
            </div>
            <div className="flex items-center gap-1">
              {/* Favorites */}
              <button className="relative cursor-pointer">
                <HeartIcon className="h-8 w-8 text-[#424A72]" />
              </button>

              {/* Notifications */}
              <button className="cursor-pointer">
                <BellIcon className="h-7 w-7 text-[#424A72]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <nav className="flex justify-center space-x-8 mt-2">
          <Link
            href="/categories"
            className="text-indigo-900 font-medium hover:underline"
          >
            All Categories
          </Link>
          <Link href="/" className="text-gray-700 hover:text-indigo-900">
            Home
          </Link>
          <Link href="/library" className="text-gray-700 hover:text-indigo-900">
            My Library
          </Link>
          <Link href="/profile" className="text-gray-700 hover:text-indigo-900">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
