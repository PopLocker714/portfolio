import { cn } from "@/lib/utils";
import { ReactHTMLElement } from "react";

{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" style="-webkit-print-color-adjust:exact;" viewBox="3047 814.969 1200.032 142.328"><path id="editions" d="M3047 915v42.297h1200.032V814.969L3047 915Z" class="fill-gray-100 dark:fill-gray-900"></path></svg> */
}

interface ISeparatorProps {
  variant?: "top" | "bottom";
  classNamePath?: string;
  classNameSVG?: string;
  id?: string;
}

export const Separator = ({
  variant = "top",
  classNamePath = "",
  classNameSVG = "",
  id,
}: ISeparatorProps) => {
  return (
    <>
      {variant === "top" ? (
        <div id={id} className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="3047 814.969 1200.032 142.328"
            className={classNameSVG}
          >
            <path
              d="M3047 915v42.297h1200.032V814.969L3047 915Z"
              className={classNamePath}
            ></path>
          </svg>
        </div>
      ) : (
        <div
          id={id}
          className="relative left-0 after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[1px] after:bg-background"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="3047 814.969 1200.032 142.328"
            fill="currentColor"
            className={classNameSVG}
          >
            <path
              fill="currentColor"
              id="editions"
              d="M3047 915v42.297h1200.032V814.969L3047 915Z"
              className={classNamePath}
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};
