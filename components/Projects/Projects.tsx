import { useGenerateId } from "@/hooks/useGenerateId";
import { IProjectCard, ProjectCard } from "./ProjectCard";
import { Separator } from "../Separator";
import { Button } from "../ui/button";
import Link from "next/link";

export const Projects = () => {
  const [generateId] = useGenerateId();

  const projects: IProjectCard[] = [
    {
      header: "Tomodoro",
      description:
        "Это веб приложение основанное на&nbsp;методе &laquo;Помодоро&raquo; Пользователь может запланировать несколько задач на&nbsp;свой день и&nbsp;для каждой задать примерное количество &laquo;помидоров&raquo;, которое необходимо, чтобы её&nbsp;сделать. Приложение написано на React с использованием Typescript, Tailwind, Shadcnui и со стейт-менеджером Recoil. В качестве сборщика использовался Vite.",
      preview: "/projects/tomodoro.jpg",
      sourceCodeLink: "https://gitlab.com/jonirootman714/tomodoro",
      livePreviewLink: "https://pomodoro-79efc.web.app/",
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
      header: "Reddit Mirror",
      description:
        "Проект React (TypeScript): новостной сайт с загруженными постами и комментариями (на основе сайта Reddit и API Reddit). Реализованный функционал: Функциональные компоненты, Авторизация с использованием публичного API Reddit (получение и сохранение токена), Хуки React (useEffect, useState, useRef...), Ref и useRef React-hook — реализация механизма щелчка снаружи для скрытия модального окна, Custom hooks...",
      preview: "/projects/reddit-mirror.jpg",
      sourceCodeLink: "https://gitlab.com/jonirootman714/awesome-react",
      // livePreviewLink: "",
      techStack: [
        { name: "React" },
        { name: "Redux" },
        { name: "TypeScript" },
        { name: "Webpack" },
        { name: "SSR" },
      ],
      sourceCodeIcon: "gitlab",
    },
    {
      header: "CRM",
      description:
        "Это CRM система управления контактными данными клиентов разработана для компании «SkillBus». Функционал: Возможность добавлять клиента в список, удалять, изменять; Клиенту можно добавить контакты(телефон, почту и др); Возможность список по дате создания, изменения, по Фамилии, Имени и Отчеству; Анимация открытия модального окна; Валидация формы перед отправкой на сервер; Индикация загрузки; Поиск с автодополнением.",
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
      header: "W-Wave-Radio",
      description:
        "Это одностраничный сайт который является вымышленной радиоплощадкой «W-Wave-Radio». Предполагается что пользователь будет слушать радио в прямом эфире, ранее записанные подкасты, передачи и т. д., а также видеть информацию о ведущих эфиров и о самом радио. При создании сайта использовал методологию БЭМ а также предпроцессор SASS. В качестве сборщика использовался Webpack.",
      preview: "/projects/w-wave-radio.jpg",
      sourceCodeLink: "https://gitlab.com/jonirootman714/w-wave-radio",
      livePreviewLink: "https://w-wave-radio.web.app/",
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

        <div className="flex justify-center mt-10">
          <Button variant={"secondary"} size={"xl"} disabled>
            <Link href={"/projects"}>Смотреть все</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
