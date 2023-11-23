import { Slider } from "@/components/Slider";
import { Badge } from "@/components/ui/badge";

export default async function Page({ params }: { params: { project: string } }) {
  const { projects } = await import("@/public/projects-data.json");
  const project = projects.find((project) => project.id === params.project);

  return (
    <div className="container py-20 px-72">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {project?.header}
      </h2>
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
      <Slider />
    </div>
  );
}
