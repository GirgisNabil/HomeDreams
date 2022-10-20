import "../styles/globals.css";
import type { AppProps } from "next/app";

import Image from "next/image";
import Header from "../components/Header";
import { RiFacebookFill, RiWhatsappFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <footer className="flex flex-col  w-full items-center justify-center border-t bg-black text-white">
        <div className="flex flex-col md:flex-row justify-center items-center text-start py-5 space-y-3 md:space-y-0 lg:justify-around lg:w-full">
          <h1 className="text-xl lg:text-3xl">
            Home <span className="text-amber-300">Dreams</span>
          </h1>

          <div className="flex gap-6 items-center text-center">
            <h1>Follow Us -</h1>
            <div className="flex gap-5 text-4xl">
              <RiFacebookFill className="bg-gray-300 rounded-full p-2 text-black" />
              <HiOutlineMail className="bg-gray-300 rounded-full p-2 text-black" />
              <RiWhatsappFill className="bg-gray-300 rounded-full p-2 text-black" />
            </div>
          </div>
          <div className="flex gap-5">
            <h1>Call Us -</h1>
            <p className="">01228313626</p>
          </div>
        </div>
        <div className="border-t-[1px] border-white w-full flex flex-col-reverse justify-center items-center p-4 gap-3">
          <p> &copy;Designed by Girgis Nabil</p>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
