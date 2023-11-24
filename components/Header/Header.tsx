import { Github, Gitlab, LucideIcon, Mail } from "lucide-react";
import { SocialIcon } from "../ui/socialIcon";
import { Logo } from "../Logo";
import { TbBrandTelegram } from "react-icons/tb";
import { IconType } from "react-icons";
import { useGenerateId } from "@/hooks/useGenerateId";
import { INavItem, Navigation } from "../Navigation";
import { MenuBurger } from "../MenuBurger";

export const links: INavItem[] = [
  {
    text: "Обо мне",
    href: "/#about",
  },
  {
    text: "Технический стек",
    href: "/#tech-stack",
  },
  {
    text: "Проекты",
    href: "/#projects",
  },
  {
    text: "Контакты",
    href: "/#contacts",
  },
];

export interface ISocialLinks {
  href: string;
  icon: LucideIcon | IconType;
  id?: string;
}

export const socialLinks: ISocialLinks[] = [
  {
    href: "mailto:jonorootman714@gmail",
    icon: Mail,
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

export const Header: React.FC = () => {
  const [generateId] = useGenerateId();
  const linksWithId = links.map((item) => generateId(item));
  const socialLinksWithId = socialLinks.map((item) => generateId(item));

  return (
    <header className="w-full fixed backdrop-blur top-0 z-50 border-b-[0.5px] border-secondary/10 py-2 md:py-5">
      <div className="container">
        <nav className="flex justify-between items-center w-full">
          <Logo />
          <Navigation
            className="hidden lg:flex w-[500px] justify-between"
            links={linksWithId}
          />
          <ul className="hidden lg:flex justify-between items-center w-[110px]">
            {socialLinksWithId.map((link) => (
              <li key={link.id}>
                <SocialIcon target="_blank" href={link.href} Icon={link.icon} />
              </li>
            ))}
          </ul>
          <MenuBurger links={linksWithId} />
        </nav>
      </div>
    </header>
  );
};
