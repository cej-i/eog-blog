'use client';
import MailUpdate from '@/components/MailUpdate';
import { Anton, Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});
const playFairDisplay = Playfair_Display({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
});

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1); // 화면에 보여지는 아이템 수

  const items = [
    {
      min: '1',
      image: '/pic-social-2.jpg',
      title: 'Poached Pears',
      desc: 'quibusdam nesciunt laboriosam dignissimos sunt!',
      author: 'Coline macken',
      date: '24.01.01',
    },
    {
      min: '1',
      image: '/pic-social-4.jpg',
      title: 'Poached Pears',
      desc: 'quibusdam nesciunt laboriosam dignissimos sunt!',
      author: 'Gwen kelly',
      date: '24.01.01',
    },
    {
      min: '1',
      image: '/pic-social-2.jpg',
      title: 'Poached Pears',
      desc: 'quibusdam nesciunt laboriosam dignissimos sunt!',
      author: 'Coline macken',
      date: '24.01.01',
    },
    {
      min: '1',
      image: '/pic-social-4.jpg',
      title: 'Poached Pears',
      desc: 'quibusdam nesciunt laboriosam dignissimos sunt!',
      author: 'Gwen kelly',
      date: '24.01.01',
    },
    {
      min: '1',
      image: '/pic-social-2.jpg',
      title: 'Poached Pears',
      desc: 'quibusdam nesciunt laboriosam dignissimos sunt!',
      author: 'Coline macken',
      date: '24.01.01',
    },
    {
      min: '1',
      image: '/pic-home-8.jpg',
      title: 'Poached Pears',
      desc: 'quibusdam nesciunt laboriosam dignissimos sunt!',
      author: 'Gwen kelly',
      date: '24.01.01',
    },
    {
      min: '1',
      image: '/pic-social-2.jpg',
      title: 'Poached Pears',
      desc: 'quibusdam nesciunt laboriosam dignissimos sunt!',
      author: 'Coline macken',
      date: '24.01.01',
    },
    {
      min: '1',
      image: '/pic-home-8.jpg',
      title: 'Poached Pears',
      desc: 'quibusdam nesciunt laboriosam dignissimos sunt!',
      author: 'Gwen kelly',
      date: '24.01.01',
    },
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // lg: 3개
      } else {
        setItemsPerView(2); // 기본 2개
      }
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => {
      window.removeEventListener('resize', updateItemsPerView);
    };
  }, []);

  const totalSlides = Math.ceil(items.length / itemsPerView);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="">
      <div className="overflow-hidden  py-10 border-b-[0.7px] border-blue-700 px-3">
        <div className="flex flex-col gap-10">
          <div className="text-4xl md:text-5xl flex flex-col gap-2 font-bold lowercase">
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
              sed iure impedit quia voluptatibus magnam quas dolor nam, neque.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-9 mt-36 lg:mt-60 px-6">
          <div
            className="flex-1 flex flex-col md:flex-row justify-start gap-y-3 gap-x-10 text-lg lg:text-xl uppercase font-light
        "
          >
            <p className="underline">1Year</p>
            <p>$9.00</p>
            <ul className="md:pl-10">
              <li>• Access to Fleishigs App</li>
              <li>• You get every issue before it reaches newsstands</li>
              <li>• The perfect gift idea</li>
            </ul>
          </div>

          <div className="flex items-start justify-center ">
            <button
              type="button"
              className="text-2xl font-light flex items-center uppercase transition-all duration-300 group text-green-200"
            >
              subscribe
              <span className="ml-2 transform translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 두번째 섹션 */}
      {/* 서버 블로그 데이터 map으로 돌리기 */}
      <div className="py-16 border-b-[0.7px] border-blue-700">
        <div className="pb-6">
          {/* title */}
          <h2
            className={`uppercase font-bold ${playFairDisplay.className} text-9xl md:text-[190px] leading-none text-center md:text-left`}
          >
            blog
          </h2>
          <div className="w-[94%] mx-auto flex gap-48 border-b-[0.5px] border-blue-300 text-sm uppercase">
            <p className="">sit amet a.</p>
            <p className="">sit amet a.</p>
          </div>
        </div>

        <div className="px-6 flex flex-col gap-20">
          <div className="flex flex-col md:flex-row justify-between gap-16 md:text-lg lg:text-xl">
            <div className="relative h-80 lg:h-96 w-full group ">
              <Image
                src="/pic-social-5.jpg"
                alt=""
                fill
                className="object-cover"
              />
              {/* <div className="absolute inset-0 bg-[#27a1ff] opacity-70 group-hover:opacity-0 transition-opacity"></div> */}
            </div>

            <div className="w-full flex gap-12 ">
              <div className="flex flex-col text-base lg:text-lg mt-1">
                <span>23.11.1</span>
                <span>2 min</span>
              </div>

              <div className="">
                <p className="mb-8 md:mb-16 font-semibold text-xl lg:text-2xl">
                  Poached Pears
                </p>

                <div>
                  <p className={`uppercase font-light`}>creige david</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt quisquam voluptatibus debitis, quae voluptatem enim
                    accusantium ullam eligendi ipsam in, consequatur corporis.
                  </p>
                </div>

                <button
                  type="button"
                  className="text-sm my-2 flex items-center text-green-200 uppercase transition-all duration-300 group"
                >
                  read more
                  <span className="ml-2 transform translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                    →
                  </span>
                </button>

                <div className="flex gap-10 uppercase text-base lg:text-xl">
                  <p>
                    <span>like. </span>
                    <span>21</span>
                  </p>
                  <p>
                    <span>comment. </span>
                    <span>3</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 아이템 */}

          <button
            className={`uppercase font-semibold text-lg mt-3 gap-2 underline`}
          >
            see more
          </button>
        </div>
      </div>

      {/* 세번째 섹션 테스트 */}
      <div className="py-20 border-b border-blue-700 flex flex-col">
        <div className="pb-3">
          <h2
            className={`w-full font-bold  ${playFairDisplay.className} text-8xl md:text-9xl leading-none text-center md:text-left uppercase`}
          >
            Udderly Viral
          </h2>
          {/* <div className="w-[90%] mx-auto text-sm uppercase">
            what's going on?
          </div> */}
        </div>

        <div className="relative px-6 overflow-hidden pt-12">
          <ul
            className="flex transition-transform duration-300 "
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {items.map((item, index) => (
              <li key={index} className="w-1/2 lg:w-1/3 flex-shrink-0 px-6">
                <div className="flex flex-col gap-1 ">
                  <p className="">{item.min} min.</p>
                  <div className="relative h-52 w-full mx-auto ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-2 mt-3  pt-3 flex flex-col">
                    <div className="text-base lg:text-lg font-light flex justify-between uppercase">
                      <span>{item.author}</span>
                      <span>{item.date}</span>
                    </div>
                    <p className="font-semibold text-xl md:text-2xl">
                      {item.title}
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-x-3">
                      <p className="leading-tight md:text-lg lg:text-xl">
                        {item.desc}
                      </p>
                      <button
                        type="button"
                        className="mt-2 text-sm flex items-center text-green-200 uppercase transition-all duration-300 group"
                      >
                        read
                        <span className="ml-1 transform translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`text-blue-200 absolute right-24 top-0  font-light border-2 border-blue-200 rounded-full px-3 py-1 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === totalSlides - 1}
            className={`text-blue-200 absolute right-6 top-0  font-light border-2 border-blue-200 rounded-full px-3 py-1 ${
              currentIndex === totalSlides - 1
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            Next
          </button>
        </div>
      </div>
      {/* 테스트 */}

      {/* 네번째 섹션 */}
      <div className="py-16 px-6">
        <h2
          className={`w-full uppercase font-bold ${playFairDisplay.className} text-[120px] leading-none text-center md:text-left`}
        >
          app.
        </h2>

        <div className="mt-6 flex flex-col md:flex-row gap-6 justify-between">
          <div className="relative w-full md:w-1/2 h-36 overflow-hidden">
            <Image src="/pic-10.jpg" alt="" fill className="object-cover" />
          </div>

          <div className="uppercase text-base lg:text-xl text-center md:text-left">
            <p className="font-light">The app that comes before the mains!</p>
            <p className="mt-3 ">
              Every recipe from every issue organized by item, author, theme and
              meal type, right at your fingertips.
            </p>
          </div>

          <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-3 items-end justify-center md:justify-start">
            <button
              type="button"
              className="flex items-center uppercase transition-all duration-300 text-sm group text-green-200 underline"
            >
              google app
              <span className="ml-1 transform translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </button>
            <button
              type="button"
              className="text-sm flex items-center uppercase transition-all duration-300 group text-green-200 underline"
            >
              app store
              <span className="ml-1 transform translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6">
        <MailUpdate />
      </div>
    </div>
  );
}
