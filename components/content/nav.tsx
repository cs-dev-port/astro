import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-black/30 px-12 text-white">
        <Link href="/" className="text-lg font-bold">
          My Site
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cs-dev-port"
              className="hover:text-gray-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
