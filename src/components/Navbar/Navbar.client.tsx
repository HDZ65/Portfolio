'use client'
import Logo from "@/components/Logo/Logo";
import { linkData } from "./NavbarData";
import Link from "next/link";
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import './../../app/globals.css';

export default function Navbar() {

  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    <div>
      <nav className="hidden lg:flex flex-wrap items-center justify-between p-6">
        <Logo size={30} />
        <div className="flex text-textBlancDark-1000 gap-16 ">
          {linkData.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="ease-in-out hover:text-primaryDark-1000 hover:scale-105 duration-75 text-xl whitespace-nowrap"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
      <BottomNavigation
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100vw",


          zIndex: 1000,
          backgroundImage: "linear-gradient(180deg, rgba(232, 232, 248, 1), rgba(84, 81, 122, 1))",
          '@media (min-width: 640px)': {
            maxWidth: 640,
          },
          '@media (min-width: 768px)': {
            maxWidth: 768,
          },
          '@media (min-width: 1024px)': {
            maxWidth: 1024,
            display: "none"
          },
          '@media (min-width: 1280px)': {
            maxWidth: 1280,
          },
          '@media (min-width: 1536px)': {
            maxWidth: 1536,
          }
        }} value={value} onChange={handleChange}>
        <BottomNavigationAction onClick={() => window.location.href = "/#accueil"}
          sx={{ color: "white",
          textDecoration: "none",
         }
          }
          label="Accueil"
          value="Accueil"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction onClick={() => window.location.href = "/#projects"}
          sx={{ color: "white" }
          }
          label="projets"
          value="projets"
          icon={<WorkIcon />}
        />
        <BottomNavigationAction onClick={() => window.location.href = "/#about"}
          sx={{ color: "white" }
          }
          label="A propos"
          value="A propos"
          icon={<AccountBoxIcon />}
        />
        <BottomNavigationAction onClick={() => window.location.href = "/#contact"}
          sx={{ color: "white" }
          } label="Contact"
          value="Contact"
          icon={<EmailIcon />} />
      </BottomNavigation>
    </div>
  );
}