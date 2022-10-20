import { RiMenu4Line } from "react-icons/ri";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div
        className={`fixed top-0 w-full transition-all  md:flex lg:h-16 py-3 px-6 items-center justify-between lg:py-10  lg:px-16  z-50 ${
          isScrolled && "bg-amber-300"
        }`}
      >
        <Link href="/">
          <div className="text-2xl md:text-3xl lg:text-5xl cursor-pointer">
            Home<span className="text-amber-300">Dreams</span>
          </div>
        </Link>

        <ul className="hidden text-center justify-center text-lg  w-full md:static md:flex  md:space-x-4 md:flex-grow md:items-center transition-all duration-500 ease-in md:pb-0">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Services">Services</Link>
          </li>
          <li>
            <Link href="/Projects">Gallery</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
        <Bars3Icon className="absolute top-4  right-4 cursor-pointer w-8 md:hidden" />
      </div>
    </header>
  );
}

export default Header;
