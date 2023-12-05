import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import projects from "@/public/projects-data.json";
import { Search } from "lucide-react";

export const ProjectSearch = () => {
  return (
    <Command className="w-full ">
      <div className="flex justify-center">
        <div className="relative w-full md:w-3/4 lg:w-1/2">
          <Search className="absolute top-[50%] mt-[-24px] left-8 shrink-0 opacity-50" />
          <CommandInput
            className=" text-lg py-8 px-16 border-2 rounded-full mb-6"
            placeholder="Найти проект..."
          />
        </div>
      </div>
      <CommandEmpty>Проект не найден.</CommandEmpty>
      <CommandGroup>
        <div className="grid gap-6 py-10 xl:px-28 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.projects.map((project) => {
            let value = project.header;
            project.techStack.forEach((tech) => (value += " " + tech.name));
            return (
              <CommandItem key={project.id} value={value}>
                <ProjectCard {...project} />
              </CommandItem>
            );
          })}
        </div>
      </CommandGroup>
    </Command>
  );
};
