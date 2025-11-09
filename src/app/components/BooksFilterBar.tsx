'use client';

import React from 'react';
import Accordion from '@/app/components/ui/Accordion';

export default function BooksFilterBar() {
  return (
    <div className="bg-white border border-[#DBDBDB] rounded-3xl p-2 w-[260px]">
      <Accordion title="Fiction" isOpen={true}>
        <ul className="space-y-2">
          <li>Novels</li>
          <li>Detectives and thrillers</li>
          <li>Fantasy and science fiction</li>
          <li>Adventures</li>
          <li>Classic</li>
          <li>Poetry</li>
        </ul>
      </Accordion>

      <Accordion title="Nonfiction">
        <ul className="space-y-2">
          <li>Biographies</li>
          <li>History</li>
          <li>Psychology</li>
          <li>Philosophy</li>
        </ul>
      </Accordion>

      <Accordion title="Children’s Literature">
        <ul className="space-y-2">
          <li>Fairy tales</li>
          <li>Educational books</li>
          <li>Illustrated stories</li>
        </ul>
      </Accordion>

      <Accordion title="Education & Learning" isOpen={true}>
        <ul className="space-y-2">
          <li>Textbooks</li>
          <li>Languages & Dictionaries</li>
          <li>Skills & Hobbies</li>
          <li>Academic Literature</li>
        </ul>
      </Accordion>

      <Accordion title="Comics & Graphic Novels">
        <ul className="space-y-2">
          <li>Superheroes</li>
          <li>Manga</li>
          <li>Graphic Novels</li>
        </ul>
      </Accordion>

      <Accordion title="Special Categories" isOpen={true}>
        <ul className="space-y-2">
          <li>Bestsellers</li>
          <li>New Releases</li>
          <li>Promotions & Discounts</li>
          <li>E-books</li>
        </ul>
      </Accordion>

      <Accordion title="Authors" isOpen={true}>
        <div>
          <p className="text-gray-600 text-sm mb-1">
            Choose from a list of popular authors
          </p>
          <input
            type="text"
            placeholder="Enter author’s name"
            className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#9574AE]"
          />
        </div>
      </Accordion>

      <Accordion title="Price" isOpen={true}>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <input
            type="number"
            placeholder="From"
            className="w-1/2 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#9574AE]"
          />
          <input
            type="number"
            placeholder="To"
            className="w-1/2 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#9574AE]"
          />
        </div>
      </Accordion>

      <Accordion title="Book Language">
        <ul className="space-y-2">
          <li>English</li>
          <li>Ukrainian</li>
          <li>German</li>
          <li>French</li>
        </ul>
      </Accordion>

      <Accordion title="Format" isOpen={true}>
        <div className="flex flex-col space-y-3">
          <label className="flex items-center space-x-3 text-[#424A72]">
            <input
              type="radio"
              name="format"
              className="w-4 h-4 text-[#9574AE] border-gray-300 focus:ring-[#9574AE]"
            />
            <span>Paper</span>
          </label>
          <label className="flex items-center space-x-3 text-[#424A72]">
            <input
              type="radio"
              name="format"
              className="w-4 h-4 text-[#9574AE] border-gray-300 focus:ring-[#9574AE]"
              defaultChecked
            />
            <span>Audiobook</span>
          </label>
          <label className="flex items-center space-x-3 text-[#424A72]">
            <input
              type="radio"
              name="format"
              className="w-4 h-4 text-[#9574AE] border-gray-300 focus:ring-[#9574AE]"
            />
            <span>Electronic</span>
          </label>
        </div>
      </Accordion>

      <Accordion title="Readers’ Rating" isOpen={true}>
        <div className="flex flex-col space-y-3">
          {[1, 2, 3, 4, 5].map((num) => (
            <label
              key={num}
              className="flex items-center space-x-3 text-yellow-500 font-semibold"
            >
              <input
                type="radio"
                name="rating"
                value={num}
                className="w-4 h-4 text-yellow-500 border-gray-300 focus:ring-yellow-500"
              />
              <span>
                {Array.from({ length: num }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - num }).map((_, i) => (
                  <span key={i} className="text-gray-300">
                    ★
                  </span>
                ))}
              </span>
            </label>
          ))}
        </div>
      </Accordion>

      <Accordion title="Release Date / New Releases" isOpen={true}>
        <input
          type="number"
          placeholder="From year..."
          className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#9574AE]"
        />
      </Accordion>
    </div>
  );
}
