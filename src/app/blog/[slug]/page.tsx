'use client';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const playFairDisplay = Playfair_Display({
  weight: ['400', '600', '800', '900'],
  subsets: ['latin'],
});

const SinglePostPage = () => {
  const path = usePathname();
  const pathSegments = path.split('/').filter((segment) => segment);

  return (
    <div className="py-4 px-6">
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

      <div className="py-12 px-10 flex flex-col gap-12">
        <div className="mt-6 py-2 px-4 flex justify-between items-center border border-blue-700 text-xs lg:text-sm ">
          <div className="flex gap-2 font-semibold">
            <p>Crafted by</p>{' '}
            <p className="uppercase font-light">creige david</p>
          </div>
          <div className="flex gap-6 text-green-200">
            <button className="uppercase">Edit</button>
            <button className="uppercase">Delete</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="w-full md:w-2/3 py-10 flex flex-col gap-8">
            {/* title */}
            <h2
              className={`text-6xl uppercase font-extrabold md:text-7xl lg:text-8xl ${playFairDisplay.className}`}
            >
              Poached Pears
            </h2>

            <p className="w-2/3 text-2xl font-semibold">
              A camp and oasis journey across Rajasthan with Aman.
            </p>

            <div className="flex gap-12 text-sm md:text-lg uppercase font-light">
              <p>23.11.1</p>
              <p>2 minutes</p>
            </div>
            <div className="text-lg lg:text-xl leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              qui ea mollitia esse quaerat dolores, nobis aut maiores soluta,
              possimus, libero itaque. Non corrupti fugit accusantium iure
              doloremque, labore ratione.
            </div>
          </div>

          <div className="relative w-full md:w-1/3 h-60 md:h-auto">
            <Image
              src="/pic-3.jpeg"
              alt=""
              fill
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="uppercase font-semibold">Give it a glow-up!</p>
          <div className="text-lg lg:text-xl leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            qui ea mollitia esse quaerat dolores, nobis aut maiores soluta,
            possimus, libero itaque. Non corrupti fugit accusantium iure
            doloremque, labore ratione. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit vero culpa quasi minima, at distinctio vitae
            assumenda odit sapiente alias ratione saepe exercitationem
            reprehenderit fugiat aspernatur suscipit fuga accusantium
            consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quaerat ab voluptates, quibusdam eum, blanditiis natus facere,
            optio nihil unde at eius corporis dolores. Sit magni corrupti
            consequuntur veritatis veniam necessitatibus.
          </div>

          <div className="flex gap-6 mt-12">
            <div className="relative w-full h-60 ">
              <Image
                src="/pic-2.jpg"
                alt=""
                fill
                className="object-cover h-full w-full"
              />
            </div>

            <div className="relative w-full h-60 ">
              <Image
                src="/pic-home-1.jpg"
                alt=""
                fill
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
