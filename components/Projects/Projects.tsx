import { ProjectCard } from "./ProjectCard";
import { Separator } from "../Separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateUUID } from "@/utils/react/generateRandomIndex";

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
          Проекты, которые я создал на данный момент
        </p>
        <div className="grid gap-6 xl:px-28 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project, i) =>
            i > 5 ? null : <ProjectCard key={project.id} {...project} />
          )}
        </div>

        <div className="flex justify-center mt-10">
          <Link href={"/projects"}>
            <Button variant={"secondary"} size={"lg"}>
              Смотреть все
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
