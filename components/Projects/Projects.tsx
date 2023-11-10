import { useGenerateId } from "@/hooks/useGenerateId";
import { IProjectCard, ProjectCard } from "./ProjectCard";
import { Separator } from "../Separator";

export const Projects = () => {
  const [generateId] = useGenerateId();

  const projects: IProjectCard[] = [
    {
      header: "Tomodoro",
      description:
        "Это веб приложение основанное на&nbsp;методе &laquo;Помодоро&raquo; Пользователь может запланировать несколько задач на&nbsp;свой день и&nbsp;для каждой задать примерное количество &laquo;помидоров&raquo;, которое необходимо, чтобы её&nbsp;сделать. Приложение написано на React с использованием Typescript, Tailwind, Shadcnui и со стейт-менеджером Recoil. В качестве сборщика использовался Vite.",
      preview: "/projects/tomodoro.jpg",
      sourceCodeLink: "https://gitlab.com/jonirootman714/tomodoro",
      livePreviewLink: "https://poplocker714.github.io/",
      techStack: [
        { name: "React" },
        { name: "Recoil" },
        { name: "Tailwind" },
        { name: "Shadcnui" },
        { name: "TypeScript" },
        { name: "Vite" },
        { name: "Git" },
      ],
      sourceCodeIcon: "gitlab",
    },
    {
      header: "W-Wave-Radio",
      description:
        "Это одностраничный сайт который является вымышленной радиоплощадкой «W-Wave-Radio». Предполагается что пользователь будет слушать радио в прямом эфире, ранее записанные подкасты, передачи и т. д., а также видеть информацию о ведущих эфиров и о самом радио. При создании сайта использовал методологию БЭМ а также предпроцессор SASS. В качестве сборщика использовался Webpack.",
      preview: "/projects/w-wave-radio.jpg",
      sourceCodeLink: "https://github.com/PopLocker714/Course-W-Wave-Radio",
      livePreviewLink: "https://course-w-wave-radio.neocities.org/",
      techStack: [
        { name: "Html" },
        { name: "Css" },
        { name: "Sass" },
        { name: "JavaScript" },
        { name: "Webpack" },
        { name: "Git" },
      ],
      sourceCodeIcon: "github",
    },
    {
      header: "SitDownPls",
      description:
        "Это многостраничный сайт который является вымышленной компанией «SitDownPls» по продаже различной мебели. На сайте доступны 3 страницы - главная, каталог, и подробное описание товара. При создании сайта использовал методологию БЭМ а также предпроцессор SASS. В качестве сборщика использовался Webpack.",
      preview: "/projects/sitDownPls.jpg",
      sourceCodeLink: "https://gitlab.com/jonirootman714/sit-down-pls",
      livePreviewLink: "https://sitdownpls-9892a.web.app",
      techStack: [
        { name: "Pug" },
        { name: "Css" },
        { name: "Sass" },
        { name: "JavaScript" },
        { name: "Webpack" },
        { name: "Git" },
      ],
      sourceCodeIcon: "gitlab",
    },
    {
      header: "Coin",
      description:
        "Это инновационный проект, призванный объединить воедино традиционный банкинг и криптовалюты. Это будет первый банк на рынке, который открыто и свободно позволит пользователям обмениваться и распоряжаться криптовалютами наравне с другими традиционными валютами.",
      preview: "/projects/Coin.jpg",
      sourceCodeLink: "https://gitlab.com/jonirootman714/bank",
      techStack: [
        { name: "Html" },
        { name: "Css" },
        { name: "Sass" },
        { name: "JavaScript" },
        { name: "Webpack" },
        { name: "Git" },
        { name: "Jest" },
        { name: "Cypress" },
      ],
      sourceCodeIcon: "gitlab",
    },
    {
      header: "CRM",
      description:
        "Это CRM система управления контактными данными клиентов разработана для компании «Skillbus». Функционал: Просмотр списка людей, Добавление, Редактирование, Удаление, Сортировка, Поиск.",
      preview: "/projects/skb.jpg",
      sourceCodeLink: "https://gitlab.com/jonirootman714/crm",
      techStack: [
        { name: "Html" },
        { name: "Css" },
        { name: "JavaScript" },
        { name: "Git" },
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
          {projectsWithId.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
