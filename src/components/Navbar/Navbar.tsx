import Logo from "@/components/Logo/Logo";
import { linkData } from "../Navbar/NavbarData";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 ">

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
  );
}
