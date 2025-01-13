'use client';
import MailUpdate from '@/components/MailUpdate';
import SocialPost from '@/components/SocialPost';
import GoogleMapCmpt from '@/components/googleMapCmpt/GoogleMapCmpt';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const playFairDisplay = Playfair_Display({
  weight: ['400', '600', '800', '900'],
  subsets: ['latin'],
});

const AboutPage = () => {
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
          Are we there yet?
        </h2>
        <p className="uppercase text-xl font-light w-[90%]">
          If you haven`t had a chance to subscribe, you can find the closest
          place to pick it up below.
        </p>
        <div className="p-6">
          <GoogleMapCmpt />
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

export default AboutPage;
