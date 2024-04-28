import React from "react";
import Accueil from "./Accueil/Accueil";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navbar from "@/components/Navbar/Navbar.client";
import { SlArrowUp } from "react-icons/sl";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="xl:max-w-[1280px] 2xl:max-w-[1536px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]    m-auto lg:gap-20 text-textBlancDark-1000 flex flex-col gap-10   ">
      <div id="accueil">
        <Accueil />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Link href="#accueil" className="hidden xl:block fixed bottom-10 right-10 z-50">
        <SlArrowUp className="text-4xl text-textBlancDark-1000" />
      </Link>
    </main>
    </>
  );
}
