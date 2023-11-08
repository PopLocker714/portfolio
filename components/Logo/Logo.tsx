import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/"}
      className={cn(
        className,
        "flex items-center justify-center ease-out duration-300 hover:scale-110"
      )}
    >
      <Rocket className="mr-2 stroke-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 w-8 h-8 lg:w-10 lg:h-10" />
      <p className="text-transparent text-2xl lg:text-3xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {`<713-CODE>`}
      </p>
    </Link>
  );
};
