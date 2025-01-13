'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavlinkProps = {
  item: { title: string; path: string };
};

const Navlink = ({ item }: NavlinkProps) => {
  const pathName = usePathname();

  return (
    <>
      <Link
        href={item.path}
        key={item.title}
        className={`px-1 py-1 relative transition-all duration-300 group`}
      >
        <p className="inline relative transition-all duration-300 group">
          {item.title}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full" />
        </p>

        <span
          className={`absolute top-2 left-0 w-2 h-2 bg-orange-600 rounded-full ${pathName === item.path ? 'visible' : 'invisible'} shadow-sm -z-10`}
        />
      </Link>
    </>
  );
};

export default Navlink;
