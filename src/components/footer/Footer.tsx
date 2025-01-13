import { Playfair_Display, Sarina } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const sarina = Sarina({
  weight: '400',
  subsets: ['latin'],
});
const playFairDisplay = Playfair_Display({
  weight: ['400', '600', '800', '900'],
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <div className="py-10 bg-blue-200 w-full px-6">
      <div className="py-6 flex gap-2 justify-between items-end border-b border-blue-500">
        <div className="">
          <h1 className="text-4xl md:text-3xl flex items-center">
            <Link href="/" className={sarina.className}>
              eog
            </Link>
          </h1>
          <p className="mt-2">530 Arlington Road Cedarhurst NY 11516</p>
        </div>

        {/* sns social */}
        <div className="flex gap-6 mt-12">
          <Image
            src="/icons/facebook.png"
            alt=""
            width={28}
            height={28}
            className="object-contain"
          ></Image>
          <Image
            src="/icons/instagram.png"
            alt=""
            width={20}
            height={20}
            className="object-contain"
          ></Image>
          <Image
            src="/icons/twitterX.png"
            alt=""
            width={18}
            height={18}
            className="object-contain"
          ></Image>
          <Image
            src="/icons/youtube.png"
            alt=""
            width={20}
            height={20}
            className="object-contain"
          ></Image>
        </div>
      </div>
      <div className="py-6 flex flex-col gap-2 items-end">
        <p className={`${playFairDisplay.className}  text-2xl font-semibold`}>
          Freshly moooo’d
        </p>
        <p className="text-xs lg:text-sm uppercase ">moo at us!</p>
      </div>
      <ul className="flex gap-8 uppercase font-bold mb-6">
        <li>newsletter</li>
        <li>subscribe</li>
        <li>blog</li>
        <li>about us</li>
      </ul>
      <div className="uppercase text-xs flex justify-between gap-4">
        <p> Copyright 2022 , Made By Mann Sales CO & Widelab</p>
        <p className="">privacy and terms</p>
      </div>
    </div>
  );
};

export default Footer;
