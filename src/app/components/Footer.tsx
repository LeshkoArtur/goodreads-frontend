import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#4B3F72] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">LET’S CONNECT</h2>
            <h2 className="text-3xl sm:text-4xl font-bold">THROUGH BOOKS</h2>
          </div>
          <div>
            <Image
              src="/assets/readloop-logo.png"
              alt="Logo"
              width={290}
              height={90}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-7 max-w-[55%]">
              Got a favorite read, a review to share, or a bookish question?
              We'd love to hear from you!
            </p>
            <p className="text-lg mb-4">Info@goodvibesfoundation.com</p>
            <p className="text-lg mb-4">Follow us on our social networks</p>

            {/* Соціальні мережі */}
            <div className="flex space-x-6 mb-6">
              <a href="#" className="text-white">
                <Image
                  src="/assets/facebook-icon.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="text-white">
                <Image
                  src="/assets/twitter-icon.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="text-white">
                <Image
                  src="/assets/youtube-icon.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="text-white">
                <Image
                  src="/assets/instagram-icon.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-6 flex justify-between gap-1 items-center">
              <a href="#" className="block text-white text-[16px] mb-2">
                Home
              </a>
              <a href="#" className="block text-white text-[16px] mb-2">
                About
              </a>
              <a href="#" className="block text-white text-[16px] mb-2">
                Book Reviews
              </a>
              <a href="#" className="block text-white text-[16px] mb-2">
                New Releases
              </a>
              <a href="#" className="block text-white text-[16px] mb-2">
                Reader's Wall
              </a>
              <a href="#" className="block text-white text-[16px] mb-2">
                Contact
              </a>
            </div>

            <div>
              <p className="text-lg font-bold">Join our reader’s circle —</p>
              <p className="text-lg mb-4">
                Get handpicked book recommendations, updates on community reads,
                and exclusive interviews.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-6 py-2 mr-3 rounded-[10px] w-[300px] bg-white border border-[#CCCCCC] text-black focus:outline-none"
                />
                <button className="px-6 py-2 bg-white text-[#090909] rounded-[10px] font-medium">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <div className="flex justify-center items-center gap-8">
            <a href="#" className="text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-sm">
              Terms & Conditions
            </a>
          </div>
          <p className="mt-4 text-sm text-white">
            Copyright © 2025 ReadLoop, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
