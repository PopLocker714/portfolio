import React from "react";
import { useGenerateId } from "@/hooks/useGenerateId";
import { links, socialLinks } from "../Header";
import { Navigation } from "../Navigation";
import { SocialIcon } from "../ui/socialIcon";

export const Footer = () => {
  const [generateId] = useGenerateId();
  const linksWithId = links.map((item) => generateId(item));
  const socialLinksWithId = socialLinks.map((item) => generateId(item));

  return (
    <footer className="bg-secondary">
      <div className="container py-8">
        <div className="flex justify-between">
          <Navigation links={linksWithId} />
          <ul className="flex justify-between items-center w-[110px]">
            {socialLinksWithId.map((link) => (
              <li key={link.id}>
                <SocialIcon target="blank" href={link.href} Icon={link.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
