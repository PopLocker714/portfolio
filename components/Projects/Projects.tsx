import { ProjectCard } from "./ProjectCard";
import { Separator } from "../Separator";
import { Button } from "../ui/button";
import Link from "next/link";

export const Projects = async () => {
  const { projects } = await import("@/public/projects-data.json");
  return (
    <section id="projects" className="mb-20">
      <Separator
        variant="bottom"
        classNameSVG="bg-secondary text-background sm:mb-0 mb-10"
      />
      <div className="container">
        <h2 className="text-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Проекты
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-24">
          Вещи, которые я создал на данный момент
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href={"/projects"}>
            <Button variant={"secondary"} size={"xl"}>
              Смотреть все
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
