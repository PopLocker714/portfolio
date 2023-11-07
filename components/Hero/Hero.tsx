import React from "react";
import { Button } from "../ui/button";
import { BackgroundAnimation } from "../BackgroundAnimation/BackgroundAnimation";
import Link from "next/link";
import { Separator } from "../Separator";

export const Hero = () => {
  return (
    <section className="flex justify-center items-center flex-col pt-40 relative">
      <BackgroundAnimation />
      <div className="w-[1000px] text-white mb-20">
        <h1
          id="about"
          className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-8xl text-center"
        >
          Добро пожаловать в мое персональное портфолио
        </h1>
      </div>
      <div className="flex flex-col items-center mb-40">
        <Link href={"#tech-stack"}>
          <Button variant={"leader"} size={"xl"} className="mb-4">
            Начнем!
          </Button>
        </Link>
        <Link
          className="hover:underline underline-offset-4 text-lg text-blue-300"
          target="_blank"
          download
          href="Portfolio_Kiselev_Ilya.pdf"
        >
          Скачать в pdf
        </Link>
      </div>
      <Separator classNameSVG="fill-secondary bottom-[-1px] relative" id="tech-stack" />
    </section>
  );
};
