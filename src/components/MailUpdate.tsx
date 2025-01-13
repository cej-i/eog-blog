import { MailIcon } from '@/lib/icons/Icons';

const MailUpdate = () => {
  return (
    <>
      <div className="pt-20 pb-10 border-t-[0.7px] border-blue-700">
        <div className="flex justify-between items-start gap-4">
          <div className="w-1/2 uppercase">
            <p className="text-sm md:text-base">follow us</p>
            <p className="font-extrabold text-3xl lg:text-4xl">
              stay up to date with best magazine
            </p>
          </div>
          <div className="flex items-center gap-2 uppercase text-[12px] lg:text-sm font-light">
            <p>email</p>
            <div className="w-4 h-4">
              <MailIcon />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-10 gap-4 border-[0.5px] border-blue-200 ">
          <div className="flex-grow">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-6 px-6 bg-transparent text-sm lg:text-base focus:outline-none placeholder-blue-900/60"
            />
          </div>
          <button
            type="button"
            className="mr-3 text-sm my-2 flex items-center text-blue-200 uppercase transition-all duration-300 group"
          >
            Sign in
            <span className="ml-1 transform translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MailUpdate;
