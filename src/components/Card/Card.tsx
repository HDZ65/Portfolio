import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { ReactElement } from "react";

export default function Card({
  photoProjet,
  name,
  href,
  logoStack,
}: {
  photoProjet: string | StaticImageData;
  name: string;
  href: string;
  logoStack: ReactElement[];
}) {
  return (
    <div className="flex justify-between w-full">
      <Link
      className="group flex w-96 h-56 duration-200 relative  rounded-lg px-6 py-3 bg-gradientviolet hover:-translate-y-2 hover:shadow-xl shadow-gray-300 "
      href={href}
    >
      <Image
        src={photoProjet}
        alt="Projet"
        width={300}
        height={300}
        className=" absolute duration-200 shadow-md group-hover:-translate-y-10 group-hover:-translate-x-10 -bottom-10 -right-10 w-2/3 h-2/3 rounded-lg object-cover group-hover:w-96 group-hover:h-56 group-hover:brightness-50"
      />

      <div
        className="flex text-xl items-center font-bold justify-center h-full w-full absolute inset-x-1/2 inset-y-1/2 -translate-x-[50%] -translate-y-[50%] hover:ease-in-out cursor-pointer text-profil-text opacity-0 hover:opacity-100 hover:text-textDark-1000"
      >
        <u>Voir le projet</u>
      </div>
      <div className="">
        <h3 className="text-2xl font-bold mb-2 text-backgroundDark-1000">
          {name}
        </h3>
        <div className="flex gap-4">{logoStack}</div>
      </div>
    </Link>
    </div>
    
  );
}
