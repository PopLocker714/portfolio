import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { Github, Gitlab, LinkIcon } from "lucide-react";
import { ProjectCardLinks } from "./ProjectCardLinks";

export interface IProjectCard {
  header: string;
  description: string;
  techStack: Array<IProjectTechStack>;
  sourceCodeLink: string;
  id: string;
  livePreviewLink?: string;
  preview?: string;
  sourceCodeIcon?: "github" | "gitlab" | "other" | string;
}

interface IProjectTechStack {
  name: string;
  id: string;
}

export const ProjectCard = ({
  preview = "http://placehold.it/384x260",
  header,
  description,
  techStack,
  livePreviewLink,
  sourceCodeLink = "#",
  id,
  sourceCodeIcon = "other",
}: IProjectCard) => {
  /* const CurrentSourceCodeIcon =
    sourceCodeIcon === "github"
      ? Github
      : sourceCodeIcon === "gitlab"
      ? Gitlab
      : LinkIcon; */

  return (
    <Card
      key={id}
      className="max-w-sm relative h-full flex flex-col transition-shadow hover:shadow-[0px_2px_45px_-5px_rgba(256,256,256,0.3)]"
    >
      <Link href={`projects/${id}`} className="w-full h-full absolute z-0" />
      <CardHeader className="p-0">
        <Image
          width={384}
          height={260}
          className="rounded-t-md object-cover"
          src={preview || ""}
          alt={header}
        />
      </CardHeader>
      <CardContent className="px-5 py-4 flex-1">
        <CardTitle className="mb-3">{header}</CardTitle>
        <CardDescription
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex flex-wrap">
          {techStack.map((badge) => (
            <Badge
              key={badge.id}
              className="mr-2 last:mr-0 mb-1"
              variant="outline"
            >
              {badge.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between flex-wrap px-5 pb-4 items-end">
        <ProjectCardLinks livePreviewLink={livePreviewLink} sourceCodeLink={sourceCodeLink} sourceCodeIcon={sourceCodeIcon}/>
      </CardFooter>
    </Card>
  );
};
