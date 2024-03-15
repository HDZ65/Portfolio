import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { ReactElement } from "react";
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import player from './../../assets/images/Player.png';
import restaurant from './../../assets/images/Restaurant.png';
import toDoList from './../../assets/images/To_do_List.png';
import { color } from "framer-motion";

// w-96 h-56

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
    <div className="flex justify-center">
      <div className="hidden 2xl:flex justify-center  w-full m-auto ">
        <Link
          className="group flex w-96 h-56 duration-200 relative rounded-lg px-6 py-3 bg-gradientviolet hover:-translate-y-2 hover:shadow-xl shadow-gray-300 "
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

      <div className="">
        <CardMUI
          sx={{
            margin: "auto",
            maxWidth: 300,
            '@media (min-width: 768px)': {
              maxWidth: 768,
              width: "100%",
            },
            '@media (min-width: 1024px)': {
              maxWidth: 1024,

            },
            '@media (min-width: 1280px)': {
              maxWidth: 1280,
            },
            '@media (min-width: 1536px)': {
              maxWidth: 1536,
              display: "none",

            }
          }}>
          <CardActionArea>
            <Image className="lg:h-48 h-32" style={{objectPosition: "top", objectFit: "cover",   }}
              src={photoProjet}
              alt="imageProjet"
            />
            <CardContent style={{maxHeight: "50px", display: "flex", justifyContent: "space-between"}}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography sx={{ display: "flex", gap:"5px" }} variant="body2">
                {logoStack}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href={href} style={{textAlign: "center", margin: "auto", color: "white", fontWeight:"bolder", width: "100%", padding: " 5px", background:"black"  }} size="small" color="primary">
              Voir le projet
            </Button>
          </CardActions>
        </CardMUI>
      </div>
    </div>


  );
}
