import { Github, Gitlab, LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const ProjectCardLinks = ({
  livePreviewLink,
  sourceCodeLink,
  sourceCodeIcon,
}: {
  livePreviewLink?: string;
  sourceCodeLink: string;
  sourceCodeIcon?: "github" | "gitlab" | "other" | string;
}) => {
  const CurrentSourceCodeIcon =
    sourceCodeIcon === "github"
      ? Github
      : sourceCodeIcon === "gitlab"
      ? Gitlab
      : LinkIcon;

  return (
    <>
      {livePreviewLink ? (
        <Link
          className="mr-2 inline-flex relative py-2 z-[5] text-sm hover:underline underline-offset-4"
          target="_blank"
          href={livePreviewLink}
        >
          <LinkIcon className="mr-1" />
          Предварительный просмотр
        </Link>
      ) : (
        <Button disabled className="mr-2 px-0 relative z-[5]" variant={"link"}>
          <LinkIcon className="mr-1" />
          Предварительный просмотр
        </Button>
      )}

      <Link
        className="inline-flex relative py-2 z-[5] text-sm hover:underline underline-offset-4"
        target="_blank"
        href={sourceCodeLink}
      >
        <CurrentSourceCodeIcon className="mr-1" />
        Исходный код
      </Link>
    </>
  );
};
