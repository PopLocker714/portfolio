import { ProjectCardLinks } from "@/components/Projects/ProjectCardLinks";
import { Slider } from "@/components/Slider";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { project: string };
}) {
  const { projects } = await import("@/public/projects-data.json");
  const project = projects.find((project) => project.id === params.project);
  return (
    <div className="container py-20 px-72">
      <div className="flex py-4 items-center">
        <Link
          className="mr-2 hover:underline underline-offset-4 text-lg text-blue-300"
          href={"/"}
        >
          Главная
        </Link>
        <ChevronRight />
        <Link
          className="mr-2 hover:underline underline-offset-4 text-lg text-blue-300"
          href={"/projects"}
        >
          Проекты
        </Link>
        <ChevronRight />
        <p className="text-lg">{project?.header}</p>
      </div>
      <h2 className="scroll-m-20 border-b mb-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {project?.header}
      </h2>
      {project?.images && project?.images.length > 0 && (
        <Slider
          images={project?.images || []}
          imagesSize={{ width: 1920, height: 1080 }}
          className="mb-4"
        />
      )}
      <p
        className="text-lg mb-4"
        dangerouslySetInnerHTML={{ __html: project?.description || "" }}
      />
      <p className="text-lg mb-4 font-bold">Технический стек:</p>
      <div className="flex">
        {project?.techStack.map((tech) => (
          <Badge
            key={tech.id}
            className="mr-2 last:mr-0 mb-1"
            variant="outline"
          >
            {tech.name}
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap">
        <ProjectCardLinks
          sourceCodeLink={project?.sourceCodeLink || ""}
          livePreviewLink={project?.livePreviewLink || ""}
          sourceCodeIcon={project?.sourceCodeIcon || ""}
        />
      </div>
    </div>
  );
}
