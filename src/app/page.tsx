import React from "react";
import Accueil from "./Accueil/Accueil";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";


export default function Home() {
  return (
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
    </main>
  );
}
