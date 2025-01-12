import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full max-w-4xl text-center mb-8">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/" className="text-white hover:underline">
            Ana Sayfa
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:underline">
            Hakkımızda
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-white hover:underline">
            Hizmetlerimiz
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:underline">
            İletişim
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;