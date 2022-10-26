import { RiMenu4Line } from "react-icons/ri";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navDetector, setNavDetector] = useState(false);

  const toggleNav = () => {
    var elemnt = document.getElementById("nav");
    if (navDetector) {
      elemnt.classList.remove("shownav");
      elemnt.classList.add("closenav");
      setNavDetector(false);
    } else {
      elemnt.classList.remove("closenav");
      elemnt.classList.add("shownav");
      setNavDetector(true);
    }
  };

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
    <header className="relative">
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

        <ul className="absolute py-3 closenav bg-amber-300" id="nav">
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
        <Bars3Icon
          onClick={toggleNav}
          className="absolute top-4  right-4 cursor-pointer w-8 md:hidden"
        />
      </div>
    </header>
  );
}

export default Header;
