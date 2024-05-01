import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCss3, SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import Card from "@/components/Card/Card";
import { FaPhp } from "react-icons/fa";

import ToDoList from './../../assets/images/To_do_List.png';
import PlayerAudio from './../../assets/images/Player.png';
import React from "react";
import formulaire from './../../assets/images/Formulaire.png';
import restaurant from './../../assets/images/Restaurant.png';
const stacks = [
  {
    id: 1,
    name: "Player Audio",
    photoProjet: PlayerAudio,
    href: "https://audio-player-six-eta.vercel.app",
    logoStack: [<FaHtml5 key="html5" />, <SiCss3 key="css3" />, <IoLogoJavascript key="javascript" />],
  },
  {
    id: 2,
    name: "Formulaire",
    photoProjet: formulaire,
    href: "https://formulaire-two.vercel.app/",
    logoStack: [<FaHtml5 key="html5" />, <SiCss3 key="css3" />, <FaPhp key="PHP" />],
  },

  {
    id: 3,
    name: "To-Do-List",
    photoProjet: ToDoList,
    href: "https://to-do-list-rose-iota-21.vercel.app",

    logoStack: [<FaReact key="react" />, <SiTailwindcss key="tailwindcss" />],
  },
];

export default function Projects() {
  return (
    <div>
      <div className=" flex flex-col gap-10 xl:mb-32">
        <h2 className="tracking-wide text-center text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradientviolet ">Mes projets</h2>
        <div className="flex flex-col lg:justify-around md:flex-row  gap-6">
          {stacks.map((stack) => (
            <Card
              key={stack.id}
              photoProjet={stack.photoProjet}
              name={stack.name}
              href={stack.href}
              logoStack={stack.logoStack.map((logo, index) =>
                React.cloneElement(logo, { fill: "rgba(120, 109, 35, 1)", size: "1.8rem", key: index })
              )}
            />
          ))}
        </div>
      </div>

      

    </div>

  )
}