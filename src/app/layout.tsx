import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Alexandre Hernandez",
  description: "Alexandre Hernandez, Développeur Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" >
      <body className={`${inter.className} bg-backgroundDark-1000 xl:max-w-[1280px] 2xl:max-w-[1400px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] m-auto lg:gap-20 text-textBlancDark-1000 flex flex-col gap-10`}>{children}</body>
    </html>
  );
}
