import { Sarina } from 'next/font/google';
import Link from 'next/link';
import Category from './categories/Category';

const sarina = Sarina({
  weight: '400',
  subsets: ['latin'],
});

const Navbar = () => {
  return (
    <div className="w-full px-6 h-[70px] flex flex-row items-center justify-between gap-12 border-b border-blue-700">
      <h1 className="text-4xl md:text-3xl flex items-center ">
        <Link href="/" className={sarina.className}>
          eog
        </Link>
      </h1>

      <div className="flex-1">
        <Category />
      </div>
    </div>
  );
};

export default Navbar;
