import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="dark:bg-gray-900  bg-white shadow-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900">ItemHub</h1>

      <div className="space-x-6">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/items" className="hover:text-gray-300">Items</Link>
        <Link href="/login" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
          Login
        </Link>
      </div>
    </nav>
  );
}
