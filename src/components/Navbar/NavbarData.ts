import { LinkDataType } from "./NavbarType";

const createLinkData = (id: number, title: string, path: string): LinkDataType => ({ id, title, path });

export const linkData: LinkDataType[] = [
  createLinkData(1, "Accueil", "#accueil"),
  createLinkData(2, "Mes projets", "#projects"),
  createLinkData(3, "A propos", "#about"),
  createLinkData(4, "Contact", "#contact"),
  createLinkData(5, "CV", "https://cvdesignr.com/p/64be66892cb12"),
];
