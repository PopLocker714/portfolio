"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { INavItem, Navigation } from "../Navigation";
import { Github, Gitlab, Menu } from "lucide-react";
import { useState } from "react";
import { ISocialLinks } from "../Header";
import { useGenerateId } from "@/hooks/useGenerateId";
import { TbBrandTelegram } from "react-icons/tb";
import { SocialIcon } from "../ui/socialIcon";

interface IMenuBurgerProps {
  links: INavItem[];
}

const socialLinks: ISocialLinks[] = [
  {
    href: "https://github.com/PopLocker714",
    icon: Github,
  },
  {
    href: "https://gitlab.com/jonirootman714",
    icon: Gitlab,
  },
  {
    href: "https://t.me/Poploker",
    icon: TbBrandTelegram,
  },
];

export const MenuBurger: React.FC<IMenuBurgerProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  const [generateId] = useGenerateId();
  const socialLinksWithId = socialLinks.map((item) => generateId(item));

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button aria-label="burger menu" className="lg:hidden px-0" variant={"ghost"}>
          <Menu size={36} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl mb-2 text-left">Меню</SheetTitle>
        </SheetHeader>
        <div className="flex h-full justify-between flex-col pb-10">
          <Navigation
            onClick={handleOpen}
            listItemClassName="py-2"
            links={links}
            className="mb-4"
          />
          <ul className="flex justify-between items-center w-[110px]">
            {socialLinksWithId.map((link) => (
              <li key={link.id}>
                <SocialIcon target="_blank" href={link.href} Icon={link.icon} />
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
