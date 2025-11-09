'use client';

import Image from 'next/image';
import { Star, Share2, Heart } from 'lucide-react';

interface BookCardProps {
  image: string;
  title: string;
  author: string;
  rating: number;
  review?: string;
  showReview?: boolean;
  showActions?: boolean;
  showRating?: boolean;
}

export default function BookCard({
  image,
  title,
  author,
  rating,
  review = '',
  showReview = true,
  showActions = true,
  showRating = true,
}: BookCardProps) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm rounded-3xl border border-[#DBDBDB] bg-white p-4 shadow-sm mx-auto">
      {/* Обкладинка */}
      <div className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={200}
          height={240}
          className="w-full h-auto rounded-2xl"
        />
      </div>

      {/* Назва */}
      <h3 className="mt-3 text-lg sm:text-xl font-bold text-[#424A72]">
        {title}
      </h3>

      {/* Автор */}
      <p className="text-sm sm:text-base font-semibold text-[#9574AE]">
        {author}
      </p>

      {/* Рейтинг + Share + Heart */}
      {(showRating || showActions) && (
        <div className="mt-2 flex items-center justify-between">
          {showRating && (
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className={`${
                    star <= rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          )}

          {showActions && (
            <div className="flex items-center gap-3">
              <button>
                <Heart className="text-[#9574AE] cursor-pointer" size={18} />
              </button>
              <button>
                <Share2 className="text-[#9574AE] cursor-pointer" size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Рев’ю */}
      {showReview && review && (
        <p className="mt-2 text-sm sm:text-base text-[#424A72]">{review}</p>
      )}
    </div>
  );
}
