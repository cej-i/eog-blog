'use client';

import CartModal from '@/components/CartModal';
import { CartIcon, CloseIcon, MenuIcon } from '@/lib/icons/Icons';
import { Sarina } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navlink from './navlink/Navlink';

const categories = [
  { title: 'BLOG', path: '/blog' },
  { title: 'SUBSCRIBE', path: '/subscribe' },
  { title: 'ABOUT', path: '/about' },
  // { title: 'CART', path: '/cart' },
];

const sarina = Sarina({
  weight: '400',
  subsets: ['latin'],
});

const Category = () => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="container ">
      <div className="flex items-center justify-end md:justify-between gap-2 text-sm">
        <div className="hidden md:flex items-center gap-1">
          {categories.map((cate) => (
            <Navlink item={cate} key={cate.title} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="text-blue-700">LOGOUT</button>
          <div
            className="w-9 h-9 p-2 cursor-pointer relative"
            onClick={() => setCartOpen((prev) => !prev)}
          >
            <CartIcon />
            <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full text-xs bg-blue-200">
              1
            </div>
          </div>
          {isCartOpen && (
            <CartModal isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
          )}
        </div>

        {/* Mo nav button*/}
        <div
          className="relative h-10 w-10 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <button
            className={`z-40 absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center ${
              open ? 'text-slate-800' : 'text-blue-700'
            }`}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mo Nav */}
      {open && (
        <div
          className={`z-30 fixed top-0 left-0 right-0 bottom-0 bg-rose-200 max-h-full`}
        >
          <div className="w-full px-6 h-[70px] flex flex-row items-center justify-between gap-12 border-b border-slate-700/70 mb-10">
            <h1 className="text-4xl md:text-3xl flex items-center ">
              <Link href="/" className={sarina.className}>
                eog
              </Link>
            </h1>
          </div>

          <div className="px-6 flex flex-col gap-16">
            <div className="flex flex-col gap-3 text-5xl font-extrabold">
              {categories.map((cate) => (
                <Navlink item={cate} key={cate.title} />
              ))}
            </div>

            <div>
              <p className="my-6 lowercase">
                "Check out our one-of-a-kind social content—it's so unique!" 😄
              </p>
              <div className="flex gap-6 ">
                <Image
                  src="/icons/facebook.png"
                  alt="Facebook"
                  width={28}
                  height={28}
                  className="object-contain"
                />
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <Image
                  src="/icons/twitterX.png"
                  alt="Twitter"
                  width={18}
                  height={18}
                  className="object-contain"
                />
                <Image
                  src="/icons/youtube.png"
                  alt="YouTube"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
