
import MesStacks from "./../../components/MesStacks/MesStacks";
import Navbar from '../../components/Navbar/Navbar.client';
import Logo from './../../components/Logo/Logo';
import React from 'react';
import MaPhoto from './../../components/MaPhoto/MaPhoto';
import Link from "next/link";

export default function Accueil() {
  return (
    <section className="lg:flex lg:flex-col lg:gap-24  z-20 ">
        <article className="flex flex-col md:flex-row lg:justify-between lg:items-center gap-8 p-6  ">
          <div
            className="flex
         flex-col lg:gap-12 gap-8 "
          >
            <h1 className="lg:text-4xl text-2xl leading-none font-semibold">
              <span className="text-4xl text-backgroundDark-1000 text-stroke-3 lg:text-8xl">
                Bonjour,{" "}
              </span>
              je m&apos;appelle {<Logo size={40} />}
            </h1>
            <p className="text-xl">
            &quot;Je suis étudiant en développement web et web mobile.&quot;
            </p>
            <Link href="https://github.com/HDZ65" className="hidden group w-2/5 md:flex justify-center items-center gap-2 hover:duration-100 underline hover:underline origin-left  hover:text-textDark-1000 relative bg-gradientviolet px-4 py-4 text-left text-backgroundDark-1000 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-primaryDark-800 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse bg-white isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700">
              <svg
                y="0"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                width="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                height="100"
                className="w-6 h-6 fill-backgroundDark-1000"
              >
                <path
                  d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                  className="svg-fill-backgroundDark-1000"
                ></path>
              </svg>
              Github
            </Link>
          </div>
          <MaPhoto />
        </article>
        <MesStacks />
      </section>
  )
}