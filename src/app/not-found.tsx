import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-6 px-4 mx-8 border border-blue-700 rounded-lg  flex flex-col items-center gap-6 ">
      <h2 className="text-xl font-bold">Not Found!</h2>
      <p>Sorry, Could not find requested resource</p>
      <Link
        href="/"
        className="bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
      >
        Return Home
      </Link>
    </div>
  );
}
