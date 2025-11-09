import Image from 'next/image';
import BookCard from '@/app/components/BookCard';
import BooksFilterBar from '@/app/components/BooksFilterBar';
import Footer from '@/app/components/Footer';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Circle text left */}
        <div className="absolute left-0 top-[60%]">
          <Image
            src="/assets/books-matters.png"
            alt="Support Now Books Matters"
            width={128}
            height={128}
          />
        </div>

        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#9574AE] leading-snug">
            EXPLORE CATEGORIES THAT <br /> INSPIRE YOU
          </h1>
          <p className="mt-3 text-[#424A72] text-lg sm:text-xl">
            From timeless classics to modern bestsellers — all in one place.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-stretch gap-6">
          {/* Search */}
          <div className="flex flex-col w-full sm:w-64">
            <label className="mb-1 text-[16px] font-normal text-[#424A72]">
              Search
            </label>
            <input
              type="text"
              placeholder="Search by title/ author name"
              className="w-full rounded-md border border-[#9574AE] text-[#999999] px-4 py-2 pl-1 text-sm text-left focus:outline-none"
            />
          </div>

          {/* Genre */}
          <div className="flex flex-col w-full sm:w-40">
            <label className="mb-1  text-[16px] font-normal text-[#424A72]">
              Genre
            </label>
            <select className="w-full rounded-md border border-[#9574AE] text-[#999999] px-4 pr-8 py-2 pl-1 text-sm text-left focus:outline-none">
              <option>Select genre</option>
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Fantasy</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col w-full sm:w-40">
            <label className="mb-1  text-[16px] font-normal text-[#424A72]">
              Price
            </label>
            <select className="w-full rounded-md border border-[#9574AE] text-[#999999] px-4 pr-8 py-2 pl-1 text-sm text-left focus:outline-none">
              <option>Select price set</option>
              <option>Under $10</option>
              <option>$10 - $20</option>
              <option>Over $20</option>
            </select>
          </div>

          {/* Button */}
          <div className="flex flex-col justify-end">
            <button className="px-4 py-2 bg-[#424A72] text-white rounded-md flex items-center justify-center cursor-pointer">
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
      </div>

      {/* Books tilted */}
      <div className="mt-10 flex justify-center items-center gap-0 px-6">
        <Image
          src="/assets/book1.jpg"
          alt="The Women"
          width={224}
          height={336}
          className="w-44 sm:w-52 transform -rotate-15 shadow-lg z-10"
        />
        <Image
          src="/assets/book2.jpg"
          alt="This Summer Will Be Different"
          width={224}
          height={336}
          className="w-44 sm:w-52 transform rotate-7 shadow-lg"
        />
        <Image
          src="/assets/book3.png"
          alt="Don't Call the Wolf"
          width={224}
          height={336}
          className="w-44 sm:w-52 transform -rotate-8 shadow-lg z-10"
        />
        <Image
          src="/assets/book4.png"
          alt="Harry Potter and the Order of the Phoenix"
          width={224}
          height={336}
          className="w-44 sm:w-52 transform rotate-8 shadow-lg"
        />
      </div>

      {/* Bottom search + button */}
      <div className="mt-4 flex flex-col items-center">
        <p className="text-[#424A72] text-center font-normal text-2xl mb-12">
          Everything you're looking for is here.
        </p>

        <div className="flex w-[90%] sm:w-[610px] h-[36px] relative">
          <input
            type="text"
            placeholder="Search all books..."
            className="w-full border border-[#9574AE] text-sm rounded-md px-4 py-2 focus:outline-none"
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

        <button className="mt-12 px-12 py-1.5 bg-[#424A72] font-semibold text-sm text-white rounded-lg cursor-pointer">
          MORE
        </button>
      </div>
      {/* Блок з фільтрами та списком книг */}
      <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Лівий блок фільтрів */}
          <div className="md:col-span-1">
            <BooksFilterBar />
          </div>

          {/* Правий блок з сіткою книг */}
          <section className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 16 }).map((_, i) => (
                <BookCard
                  key={i}
                  image="/assets/book-card-image.png"
                  title="Harry Potter"
                  author="J.K. Rowling"
                  rating={4}
                  review="Share your take"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* Додатковий блок книг на всю ширину */}
      <div className="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Array.from({ length: 15 }).map((_, i) => (
            <BookCard
              key={i}
              image="/assets/book-card-image.png"
              title="Harry Potter"
              author="J.K. Rowling"
              rating={4}
              review="Share your take"
            />
          ))}
        </div>
      </div>

      {/* Запитання */}
      <div className="mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 p-8 border rounded-3xl border-[#DBDBDB] ">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-6xl font-bold text-[#9574AE]">
            Questions you may have
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-[#9574AE] rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#424A72] mb-3">
                  Can I have my order delivered to a post office branch?
                </h3>
                <p className="text-[#666666]">
                  Yes, we cooperate with popular delivery services, and you can
                  choose the branch closest to you.
                </p>
              </div>
              <div className="ml-4 flex flex-col items-center">
                <div className="w-8 h-8 bg-[#9574AE] border border-[#E5E5E5] rounded flex items-center justify-center mb-1">
                  <span className="text-white text-lg font-light">−</span>
                </div>
              </div>
            </div>
          </div>
          {[
            'Can I pay for my order upon delivery?',
            'Do you offer books in both Ukrainian and English?',
            'What should I do if I receive a damaged book?',
            'Can I have my order delivered to a post office branch?',
            'Do you provide gift wrapping?',
            'How can I learn about promotions and discounts?',
          ].map((question, index) => (
            <div
              key={index}
              className="bg-white border border-[#9574AE] rounded-3xl p-6 shadow-sm"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#424A72]">
                  {question}
                </h3>
                <div className="ml-4 flex flex-col items-center">
                  <div className="w-8 h-8 bg-white border border-[#E5E5E5] rounded flex items-center justify-center">
                    <span className="text-[#9574AE] text-lg font-light">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Highest Rated Books Секція */}
      <div className="bg-[#F8F8FF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#9574AE]">
              Highest Rated<span className="font-normal">B</span>
              <span className="font-light">ooks</span>
            </h2>
            <div className="flex items-center gap-4 text-[#424A72]">
              <span className="text-2xl font-normal sm:text-base">
                Top 5 Trending now
              </span>
              <button className="w-8 h-8 bg-[#E4E4E4] rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#424A72]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 bg-[#424A72] rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Картки книг */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Картка */}
            {[
              {
                title: 'The World Versus Everything Beyond',
                author: 'Jonathan Patterson',
                description:
                  'What happens when science pushes the limits of the known...',
                image: '/assets/highest-rated-book1.png',
                alt: 'The World Versus Everything Beyond',
              },
              {
                title: 'There Has To Be More',
                author: 'Rachel Service',
                description:
                  'This book is a practical guide to personal growth...',
                image: '/assets/highest-rated-book2.jpg',
                alt: 'There Has To Be More',
              },
            ].map((book, index) => (
              <div
                key={index}
                className="flex-1 bg-[#424A72] text-white rounded-xl px-6 pt-6 pb-8 flex relative"
              >
                {/* Ліва частина */}
                <div className="flex flex-col justify-between w-3/5">
                  <div>
                    <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
                    <h3 className="text-2xl font-bold leading-tight mb-1 w-[70%]">
                      {book.title}
                    </h3>
                    <p className="text-lg font-light text-white mb-4">
                      {book.author}
                    </p>
                    <p className="text-sm font-normal text-white mb-6">
                      {book.description}
                    </p>
                  </div>
                  <button className="w-full py-2 bg-[#9574AE] text-white text-sm font-semibold rounded-md">
                    REVIEW
                  </button>
                </div>

                {/* Права частина — зображення */}
                <div className="absolute -bottom-8 right-4">
                  <Image
                    src={book.image}
                    alt={book.alt}
                    width={195}
                    height={195}
                    className="rounded-3xl shadow-xl object-cover w-[195px] h-[315px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOOK LOVERS банер */}
      <div className="bg-[#424A72] py-6 overflow-hidden mt-16">
        <div className="flex justify-start gap-12 px-8 pb-4 -ml-10 text-white font-extrabold text-4xl uppercase whitespace-nowrap overflow-hidden ">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>BOOK LOVERS</span>
          ))}
        </div>

        {/* Нижній рядок — контурний текст (без кастомного класу) */}
        <div
          className="flex justify-start gap-12 px-8 mt-4 -ml-16 font-extrabold text-4xl uppercase whitespace-nowrap overflow-hidden text-transparent"
          style={{ WebkitTextStroke: '1px white' }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>BOOKLOVERS</span>
          ))}
        </div>
      </div>

      {/* Рекомендовані книги */}
      <div className="mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#9574AE] font-bold text-2xl mb-6">
            Recommended books
          </h2>

          <div className="relative bg-[#424A72] p-12 rounded-4xl flex items-center justify-center">
            {/* Кнопка вліво */}
            <button className="ml-2 absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#9574AE] rounded-full flex items-center justify-center z-20">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Кнопка вправо */}
            <button className="mr-2 absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#9574AE] rounded-full flex items-center justify-center z-20">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {/* Слайдер */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex-none w-44 sm:w-52">
                  <BookCard
                    image="/assets/recomended-book.png"
                    title="The Dark One"
                    author="Nikki St. Crowe"
                    rating={4}
                    review=""
                    showReview={false}
                    showActions={false}
                    showRating={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
