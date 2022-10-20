import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Serverices from "../components/Serverices";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useState, useEffect } from "react";
import LatestProjects from "../components/LatestProjects";

const Home: NextPage = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <Head>
        <title>Home Dreams</title>
        <link rel="icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Combo&family=Open+Sans:wght@400;700&family=Raleway:wght@300;400;500;600;700;800&family=Solway:wght@300;400;500;700;800&family=Space+Grotesk:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col justify-center items-center text-center">
        <Landing />
        <Serverices />
        <LatestProjects />
      </main>
    </div>
  );
};

export default Home;
