import React from "react";

import { Roboto } from "next/font/google";

const vidaloka = Roboto({ weight: "500", subsets: ["latin"] });

interface LogoProps {
  size: string | number;
}

export default function Logo({ size }: LogoProps) {
  return (
    <div>
      <h1
        className={`${vidaloka.className} text-transparent bg-clip-text bg-gradient`}
        style={{
          fontSize: size,
        }}
      >
        Alexandre HERNANDEZ
      </h1>
    </div>
  );
}
