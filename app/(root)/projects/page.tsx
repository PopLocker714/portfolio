import { ProjectCard } from "@/components/Projects/ProjectCard";
import { Input } from "@/components/ui/input";
import React from "react";

const Page = async () => {
  const { projects } = await import("@/public/projects-data.json");

  return (
    <div className="container py-20 ">
      <div className="flex items-center flex-col">
        <h2 className="scroll-m-20 pb-2 mb-6 text-3xl font-semibold tracking-tight first:mt-0">
          Проекты
        </h2>
        <Input
          placeholder="Поиск"
          className="w-1/2 text-lg py-8 px-12 rounded-full mb-6"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
