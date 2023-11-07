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
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export interface IProjectCard {
  header: string;
  description: string;
  techStack: Array<IProjectTechStack>;
  sourceCodeLink: string;
  livePreviewLink?: string;
  preview?: string;
  id?: string;
  sourceCodeIcon?: "github" | "gitlab" | "other";
}

interface IProjectTechStack {
  name: string;
  id?: string;
}

export const ProjectCard = ({
  preview = "http://placehold.it/384x260",
  header,
  description,
  techStack,
  livePreviewLink = "#",
  sourceCodeLink = "#",
  id,
  sourceCodeIcon = "other",
}: IProjectCard) => {
  const CurrentSourceCodeIcon =
    sourceCodeIcon === "github"
      ? Github
      : sourceCodeIcon === "gitlab"
      ? Gitlab
      : LinkIcon;
  return (
    <Card key={id} className="w-full max-w-sm flex flex-col">
      <CardHeader className="p-0">
        <Image
          width={384}
          height={260}
          className="rounded-t-md object-cover"
          src={preview || ''}
          alt={header}
        />
      </CardHeader>
      <CardContent className="px-5 py-4 flex-1">
        <CardTitle className="mb-3">{header}</CardTitle>
        <CardDescription
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: description }}
        ></CardDescription>
        <div className="flex flex-wrap">
          {techStack.map((badge) => (
            <Badge key={badge.id} className="mr-[2px] last:mr-0 mb-1" variant="outline">
              {badge.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between flex-wrap px-5 pb-4  items-end">
        <Link className="mr-1 flex" target="_blank" href={livePreviewLink}>
          <Button className="px-0" variant={"link"}>
            <LinkIcon className="mr-1" />
            Предварительный просмотр
          </Button>
        </Link>
        <Link className="flex" target="_blank" href={sourceCodeLink}>
          <Button className="px-0" variant={"link"}>
            <CurrentSourceCodeIcon className="mr-1" />
            Исходный код
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
