import { Github, Gitlab, LucideIcon } from "lucide-react";
import { SocialIcon } from "../ui/socialIcon";
import { Logo } from "../Logo";
import { INavItem, Navigation } from "../Navigation";
import { TbBrandTelegram } from "react-icons/tb";
import { IconType } from "react-icons";
import { useGenerateId } from "@/hooks/useGenerateId";

export const links: INavItem[] = [
  {
    text: "Главная",
    href: "#main",
  },
  {
    text: "Обо мне",
    href: "#about",
  },
  {
    text: "Технический стек",
    href: "#tech-stack",
  },
  {
    text: "Проекты",
    href: "#projects",
  },
];

interface ISocialLinks {
  href: string;
  icon: LucideIcon | IconType;
  id?: string;
}

export const socialLinks: ISocialLinks[] = [
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

export const Header = () => {
  const [generateId] = useGenerateId();
  const linksWithId = links.map((item) => generateId(item));
  const socialLinksWithId = socialLinks.map((item) => generateId(item));

  return (
    <header className="w-full fixed backdrop-blur top-0 z-50 border-b-[0.5px] border-secondary/10 py-5 px-10">
      <div className="container">
        <nav className=" flex justify-between items-center w-full">
          <Logo />
          <Navigation links={linksWithId} />
          <ul className="flex justify-between items-center w-[110px]">
            {socialLinksWithId.map((link) => (
              <li key={link.id}>
                <SocialIcon target="blank" href={link.href} Icon={link.icon} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
