'use client';
import MailUpdate from '@/components/MailUpdate';
import SocialPost from '@/components/SocialPost';
import { BuyIcon, CartIcon } from '@/lib/icons/Icons';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const playFairDisplay = Playfair_Display({
  weight: ['400', '600', '800', '900'],
  subsets: ['latin'],
});

const SubscribePage = () => {
  const path = usePathname();
  const pathSegments = path.split('/').filter((segment) => segment);

  return (
    <div className="px-6 py-4">
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

      <div className="mt-16 py-10 flex flex-col gap-8">
        {/* title */}
        <h2
          className={`text-6xl uppercase font-extrabold md:text-8xl ${playFairDisplay.className}`}
        >
          Subscribe
        </h2>
        <p className="uppercase text-xl font-light">
          Not just pages—your personal escape!
        </p>
      </div>

      <div className="py-12 px-6 grid gap-x-6 gap-y-16 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col items-center gap-1">
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/m-0.jpg"
              alt=""
              fill
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-sm lg:text-lg uppercase font-light tracking-wider">
            September 2019
          </p>
          <h2 className={`text-xl lg:text-2xl uppercase font-extrabold`}>
            Poached Pears
          </h2>
          <p className="mb-3 text-sm lg:text-lg uppercase font-semibold">
            $99.00
          </p>

          <div className="flex gap-2">
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <BuyIcon />
            </div>
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <CartIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/m-1.jpeg"
              alt=""
              fill
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-sm lg:text-lg uppercase font-light tracking-wider">
            September 2019
          </p>
          <h2 className={`text-xl lg:text-2xl uppercase font-extrabold`}>
            Poached Pears
          </h2>
          <p className="mb-3 text-sm lg:text-lg uppercase font-semibold">
            $99.00
          </p>

          <div className="flex gap-2">
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <BuyIcon />
            </div>
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <CartIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/m-2.jpeg"
              alt=""
              fill
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-sm lg:text-lg uppercase font-light tracking-wider">
            September 2019
          </p>
          <h2 className={`text-xl lg:text-2xl uppercase font-extrabold`}>
            Poached Pears
          </h2>
          <p className="mb-3 text-sm lg:text-lg uppercase font-semibold">
            $99.00
          </p>

          <div className="flex gap-2">
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <BuyIcon />
            </div>
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <CartIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/m-3.jpeg"
              alt=""
              fill
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-sm lg:text-lg uppercase font-light tracking-wider">
            September 2019
          </p>
          <h2 className={`text-xl lg:text-2xl uppercase font-extrabold`}>
            Poached Pears
          </h2>
          <p className="mb-3 text-sm lg:text-lg uppercase font-semibold">
            $99.00
          </p>

          <div className="flex gap-2">
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <BuyIcon />
            </div>
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <CartIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/m-4.jpeg"
              alt=""
              fill
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-sm lg:text-lg uppercase font-light tracking-wider">
            September 2019
          </p>
          <h2 className={`text-xl lg:text-2xl uppercase font-extrabold`}>
            Poached Pears
          </h2>
          <p className="mb-3 text-sm lg:text-lg uppercase font-semibold">
            $99.00
          </p>

          <div className="flex gap-2">
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <BuyIcon />
            </div>
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <CartIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/m-5.jpeg"
              alt=""
              fill
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-sm lg:text-lg uppercase font-light tracking-wider">
            September 2019
          </p>
          <h2 className={`text-xl lg:text-2xl uppercase font-extrabold`}>
            Poached Pears
          </h2>
          <p className="mb-3 text-sm lg:text-lg uppercase font-semibold">
            $99.00
          </p>

          <div className="flex gap-2">
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <BuyIcon />
            </div>
            <div className="w-9 h-9 text-green-200 rounded-full p-2 cursor-pointer border border-green-200 hover:text-green-100 hover:border-none">
              <CartIcon />
            </div>
          </div>
        </div>
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

export default SubscribePage;
