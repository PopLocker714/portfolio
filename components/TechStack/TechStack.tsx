import { ITechStackItem, TechStackItem } from "./TechStackItem";
import { generateUUID } from "@/utils/react/generateRandomIndex";

export const TechStack = () => {
  const techStackItems: ITechStackItem[] = [
    {
      logoName: "html",
      height: 100,
      width: 100,
    },
    {
      logoName: "css",
      height: 100,
      width: 100,
    },
    {
      logoName: "sass",
      height: 100,
      width: 100,
    },
    {
      logoName: "bootstrap",
      height: 100,
      width: 100,
    },
    {
      logoName: "tailwind",
      height: 100,
      width: 100,
    },
    {
      logoName: "js",
      height: 100,
      width: 100,
    },
    {
      logoName: "react",
      height: 100,
      width: 100,
    },
    {
      logoName: "redux",
      height: 100,
      width: 100,
    },
    {
      logoName: "next",
      height: 100,
      width: 100,
    },
    {
      logoName: "node",
      height: 100,
      width: 100,
    },
    {
      logoName: "recoil",
      height: 100,
      width: 100,
    },
    {
      logoName: "git",
      height: 100,
      width: 100,
    },
  ];

  return (
    <section className="pb-20 sm:pt-0 pt-10 bg-secondary">
      <div className="container">
        <h2 className="text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Мой технический стек
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-24">
          Технологии, с которыми я работал в последнее время
        </p>
        <div className="grid md:grid-cols-6 grid-cols-3 gap-8 justify-items-center">
          {techStackItems.map(({ height, logoName, width, ext }) => (
            <TechStackItem
              key={generateUUID()}
              height={height}
              width={width}
              logoName={logoName}
              ext={ext}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
