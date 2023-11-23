import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../Separator";
import { BackgroundAnimation } from "../BackgroundAnimation";

export const Hero = () => {
  return (
    <section className="flex items-center flex-col pt-10 lg:pt-40 relative">
      <BackgroundAnimation />
      <div className="container flex flex-col items-center">
        <div className="md:w-[540px] lg:w-[1000px] text-white mb-14 lg:mb-20">
          <h1
            id="about"
            className="scroll-m-20 text-4xl sm:text-5xl lg:text-8xl font-extrabold tracking-tight text-center"
          >
            Добро пожаловать в мое персональное портфолио
          </h1>
        </div>
        <div className="flex flex-col items-center mb-24 lg:mb-40">
          <Link className="mb-4 " href={"#tech-stack"}>
            <Button
              variant={"leader"}
              size={"xl"}
              className="text-lg lg:text-2xl"
            >
              Начнем!
            </Button>
          </Link>
          <Link
            className="hover:underline underline-offset-4 text-lg text-blue-300"
            target="_blank"
            download
            href="Portfolio.docx"
          >
            Скачать портфолио
          </Link>
        </div>
      </div>
      <Separator
        classNameSVG="fill-secondary bottom-[-1px] relative"
        id="tech-stack"
      />
    </section>
  );
};
