import { Rocket } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center ease-out duration-300 hover:scale-110"
    >
      <Rocket
        size={42}
        className="mr-2 stroke-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      />
      <p className="text-transparent text-3xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {`<713-CODE>`}
      </p>
    </Link>
  );
};
