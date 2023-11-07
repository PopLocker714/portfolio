import Image from "next/image";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface ITechStackItem {
  logoName: string;
  width: number;
  height: number;
  ext?: "png" | "svg" | "jpg" | "jpeg";
}

export const TechStackItem = ({
  logoName,
  width,
  height,
  ext = "png",
}: ITechStackItem) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            className="ease-out duration-300 hover:scale-125"
            src={`/tech-stack/${logoName}.${ext}`}
            width={width}
            height={height}
            alt={logoName}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{logoName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
