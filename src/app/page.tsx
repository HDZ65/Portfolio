import React from "react";
import Accueil from "./Accueil/Accueil";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";


export default function Home() {
  return (
    <main className="max-w-[1536px] m-auto gap-20 text-textBlancDark-1000 flex flex-col   ">
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
