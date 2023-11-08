import { useGenerateId } from "@/hooks/useGenerateId";
import { IProjectCard, ProjectCard } from "./ProjectCard";
import { Separator } from "../Separator";

export const Projects = () => {
  const [generateId] = useGenerateId();

  const projects: IProjectCard[] = [
    {
      header: "Tomodoro",
      description:
        "Это веб приложение основанное на&nbsp;методе &laquo;Помодоро&raquo; Пользователь может запланировать несколько задач на&nbsp;свой день и&nbsp;для каждой задать примерное количество &laquo;помидоров&raquo;, которое необходимо, чтобы её&nbsp;сделать.",
      preview: "/projects/tomodoro.jpg",
      sourceCodeLink: "https://gitlab.com/jonirootman714/tomodoro",
      livePreviewLink: "https://poplocker714.github.io/",
      techStack: [
        { name: "React" },
        { name: "Recoil" },
        { name: "Tailwind" },
        { name: "Shadcnui" },
        { name: "Typescript" },
      ],
      sourceCodeIcon: "gitlab",
    },
    {
      header: "Something",
      description:
        "Это веб приложение основанное на&nbsp;методе &laquo;Помодоро&raquo; Пользователь может запланировать несколько задач на&nbsp;свой день и&nbsp;для каждой задать примерное количество &laquo;помидоров&raquo;, которое необходимо, чтобы её&nbsp;сделать.",
      // preview: "/projects/tomodoro.jpg",
      sourceCodeLink: "https://gitlab.com/jonirootman714/tomodoro",
      livePreviewLink: "https://poplocker714.github.io/",
      techStack: [
        { name: "React" },
        { name: "Recoil" },
        { name: "Tailwind" },
        { name: "Shadcnui" },
        { name: "Typescript" },
        { name: "JavaScript" },
        { name: "Git" },
      ],
      sourceCodeIcon: "gitlab",
    },
    {
      header: "Tomodoro",
      description:
        "Это веб приложение основанное на методе «Помодоро» Пользователь может запланировать несколько задач на свой день и для каждой задать примерное количество «помидоров», которое необходимо, чтобы её сделать. Это веб приложение основанное на&nbsp;методе &laquo;Помодоро&raquo; Пользователь может запланировать несколько задач на&nbsp;свой день и&nbsp;для каждой задать примерное количество &laquo;помидоров&raquo;, которое необходимо, чтобы её&nbsp;сделать.",
      preview: "/projects/tomodoro.jpg",
      sourceCodeLink: "https://gitlab.com/jonirootman714/tomodoro",
      livePreviewLink: "https://poplocker714.github.io/",
      techStack: [
        { name: "React" },
        { name: "Recoil" },
        { name: "Tailwind" },
        { name: "Shadcnui" },
        { name: "Typescript" },
      ],
      sourceCodeIcon: "gitlab",
    },
  ];

  const projectsWithId = projects.map((project) => {
    const projectWithId = generateId(project);
    projectWithId.techStack = projectWithId.techStack.map((tech) =>
      generateId(tech)
    );
    return projectWithId;
  });

  return (
    <section id="projects" className="mb-20">
      <Separator variant="bottom" classNameSVG="bg-secondary text-background sm:mb-0 mb-10" />
      <div className="container">
        <h2 className="text-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Проекты
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-24">
          Вещи, которые я создал на данный момент
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projectsWithId.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
