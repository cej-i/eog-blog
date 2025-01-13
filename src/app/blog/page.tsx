'use client';
import MailUpdate from '@/components/MailUpdate';
import PostCard from '@/components/PostCard';
import SocialPost from '@/components/SocialPost';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const playFairDisplay = Playfair_Display({
  weight: ['400', '600', '800', '900'],
  subsets: ['latin'],
});

const posts = [
  {
    title: 'Poached Pears',
    description:
      'Iste sunt voluptas, atque corporis illo magnam fuga praesentium suscipit culpa! Vero possimus dignissimos sunt labore!',
    date: '23.11.1',
    time: '2 min',
    author: 'creige david',
    image: '/pic-2.jpg',
  },
  {
    title: 'Poached Pears',
    description:
      'Iste sunt voluptas, atque corporis illo magnam fuga praesentium suscipit culpa! Vero possimus dignissimos sunt labore!',
    date: '23.11.1',
    time: '2 min',
    author: 'creige david',
    image: '/pic-2.jpg',
  },
  {
    title: 'Poached Pears',
    description:
      'Iste sunt voluptas, atque corporis illo magnam fuga praesentium suscipit culpa! Vero possimus dignissimos sunt labore!',
    date: '23.11.1',
    time: '2 min',
    author: 'creige david',
    image: '/pic-2.jpg',
  },
  {
    title: 'Poached Pears',
    description:
      'Iste sunt voluptas, atque corporis illo magnam fuga praesentium suscipit culpa! Vero possimus dignissimos sunt labore!',
    date: '23.11.1',
    time: '2 min',
    author: 'creige david',
    image: '/pic-2.jpg',
  },
  {
    title: 'Poached Pears',
    description:
      'Iste sunt voluptas, atque corporis illo magnam fuga praesentium suscipit culpa! Vero possimus dignissimos sunt labore!',
    date: '23.11.1',
    time: '2 min',
    author: 'creige david',
    image: '/pic-2.jpg',
  },
  {
    title: 'Poached Pears',
    description:
      'Iste sunt voluptas, atque corporis illo magnam fuga praesentium suscipit culpa! Vero possimus dignissimos sunt labore!',
    date: '23.11.1',
    time: '2 min',
    author: 'creige david',
    image: '/pic-2.jpg',
  },
];

const BlogPage = () => {
  const [sortOrder, setSortOrder] = useState('lastest');
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    console.log('선택됨', e.target.value);
  };

  const path = usePathname();
  const pathSegments = path.split('/').filter((segment) => segment);

  return (
    <div className="px-6 py-4 ">
      {/* breadcrumb */}
      <div className="text-xs uppercase">
        <span>
          <Link href="/" className="uppercase">
            home
          </Link>
        </span>

        {pathSegments.length > 0 &&
          pathSegments.map((sgment, index) => {
            const segmentPath = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isCurrentPath = segmentPath === path;

            return (
              <span key={index}>
                <span> / </span>
                {isCurrentPath ? (
                  <span
                    className="cursor-pointer"
                    onClick={() => window.location.reload()}
                  >
                    {sgment}
                  </span>
                ) : (
                  <Link href={sgment}>{sgment}</Link>
                )}
              </span>
            );
          })}
      </div>

      {/* top */}
      <div className="mt-16 py-10 flex flex-col gap-8">
        {/* title */}
        <h2
          className={`text-6xl uppercase font-extrabold md:text-8xl ${playFairDisplay.className}`}
        >
          Blog
        </h2>
        <p className="uppercase text-xl font-light">
          Hot off the press, or stove.
        </p>
      </div>

      <div className="py-1 px-4 flex justify-between items-center border border-blue-700 ">
        <p className="uppercase text-xs  lg:text-sm font-bold">filter</p>
        <div className="flex items-center space-x-2">
          <label
            htmlFor="sortOrder"
            className="text-xs lg:text-sm font-bold uppercase"
          >
            Sort by:
          </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={handleChange}
            className="bg-transparent p-2 text-xs lg:text-sm"
          >
            <option value="latest">Latest</option>
            <option value="oldest">The Oldest</option>
          </select>
        </div>
      </div>

      {/* content */}
      <div className="">
        <div className="py-12 px-6 grid gap-16 text-slate-200 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* 블로그 리스트 불러온거 예시  */}
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
        <button
          className={`w-full uppercase font-semibold text-lg my-12 gap-2 underline`}
        >
          see more
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-x-12">
        <div className="w-full md:w-1/2">
          <MailUpdate />
        </div>
        <div className="w-full md:w-1/2">
          <SocialPost />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
