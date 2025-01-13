import Image from 'next/image';

const SocialPost = () => {
  return (
    <div className="pt-20 pb-10 border-t-[0.7px] border-blue-700 ">
      <ul className="grid grid-cols-4 gap-3 md:grid-cols-2">
        <li className="relative w-full h-32">
          <Image src="/pic-social-1.jpg" alt="" fill className="object-cover" />
        </li>
        <li className="relative w-full h-32">
          <Image src="/pic-social-2.jpg" alt="" fill className="object-cover" />
        </li>
        <li className="relative w-full h-32">
          <Image src="/pic-social-3.jpg" alt="" fill className="object-cover" />
        </li>
        <li className="relative w-full h-32">
          <Image src="/pic-social-4.jpg" alt="" fill className="object-cover" />
        </li>
      </ul>
      <div className="flex justify-end items-center gap-1 font-light text-[12px] mt-3">
        <p className="">#</p>
        <p>Instagram</p>
      </div>
    </div>
  );
};

export default SocialPost;
