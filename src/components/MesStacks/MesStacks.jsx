import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import Link from "next/link";
import { DiJavascript1 } from "react-icons/di";


const size = 80;
const color = "white";


export default function MesStacks() {
  return (
    <article className="flex flex-col items-center gap-8 py-2 my-8 border-t border-b border-secondaryDark-1000 bg-backgroundDark-100   ">
      <h2 className="text-5xl py-0 bg-gradientviolet text-transparent bg-clip-text text-center font-semibold w-2/5">
        Mes stacks
      </h2>
      <div className="flex items-center justify-evenly w-full mb-4">
        <Link
          href="https://www.figma.com/"
          class="group flex justify-center p-2 drop-shadow-xl hover:bg-gradient text-white font-semibold hover:translate-y-3 rounded-[50%] transition-all duration-200  hover:-backgroundDark-1000"
        >
          <FaFigma size={size} color={color} />
          <span
            class="absolute opacity-0 group-hover:opacity-100 group-hover:text-primaryDark-1000 group-hover:text-xl group-hover:-translate-y-10 duration-200"
          >
            Figma
          </span>
        </Link>
        <Link
          href="https://tailwindcss.com/"
          class="group flex justify-center p-2 drop-shadow-xl hover:bg-gradient text-white font-semibold hover:translate-y-3 rounded-[50%] transition-all duration-200  hover:-backgroundDark-1000"
        >
          <SiTailwindcss  size={size} color={color} />
          <span
            class="absolute opacity-0 group-hover:opacity-100 group-hover:text-primaryDark-1000 group-hover:text-xl group-hover:-translate-y-10 duration-200"
          >
            Tailwind
          </span>
        </Link>
        <Link
          href="https://www.javascript.com/"
          class="group flex justify-center p-2 drop-shadow-xl hover:bg-gradient text-white font-semibold hover:translate-y-3 rounded-[50%] transition-all duration-200  hover:-backgroundDark-1000"
        >
          <DiJavascript1 className="rounded-[100%] " size={size} color={color} />
          <span
            class="absolute opacity-0 group-hover:opacity-100 group-hover:text-primaryDark-1000 group-hover:text-xl group-hover:-translate-y-10 duration-200"
          >
            JavaScript
          </span>
        </Link>
        <Link
          href="https://fr.legacy.reactjs.org/"
          class="group flex justify-center p-2 drop-shadow-xl hover:bg-gradient text-white font-semibold hover:translate-y-3 rounded-[50%] transition-all duration-200  hover:-backgroundDark-1000"
        >
          <FaReact size={size} color={color} />
          <span
            class="absolute opacity-0 group-hover:opacity-100 group-hover:text-primaryDark-1000 group-hover:text-xl group-hover:-translate-y-10 duration-200"
          >
            React
          </span>
        </Link>
      </div>
    </article>
  );
}
