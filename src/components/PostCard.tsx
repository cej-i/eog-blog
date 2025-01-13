import Image from 'next/image';
import Link from 'next/link';

type Post = {
  title: string;
  description: string;
  date: string;
  time: string;
  author: string;
  image: string;
};
const PostCard = ({ post }: { post: Post }) => {
  return (
    <>
      <div className="relative w-full h-80 md:h-96 mx-auto">
        <Image
          src={post.image}
          alt="Blog header image"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="absolute inset-0 bg-blue-950 opacity-40"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className={`text-2xl md:text-3xl lg:text-4xl font-semibold`}>
              {post.title}
            </div>
            <p className="font-light md:text-lg lg:text-xl">
              {post.description}
            </p>
            <div className="w-full font-light flex justify-between text-sm lg:text-lg md:mt-12">
              <span>{post.date}</span>
              <span>{post.time}</span>
            </div>
            <Link
              href="/blog/post"
              className="text-xs md:text-sm my-2 flex items-center uppercase transition-all duration-300 group bg-green-200 text-slate-900 py-2 px-5 rounded-full m-auto"
            >
              read more
              <span className="ml-2 transform translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                →
              </span>
            </Link>
          </div>
          <p className="uppercase font-light self-end text-yellow-300 text-xs lg:text-sm">
            {post.author}
          </p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
