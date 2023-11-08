import Link from "next/link";
import { Button } from "../ui/button";
import { HTMLAttributes } from "react";

export interface INavItem {
  text: string;
  href: string;
  id?: string;
}

interface INavigationProps extends HTMLAttributes<HTMLUListElement> {
  links: INavItem[];
  listItemClassName?: HTMLAttributes<HTMLLIElement>["className"];
}

export const Navigation: React.FC<INavigationProps> = ({
  links,
  className,
  listItemClassName,
  onClick,
}) => {
  return (
    <ul onClick={onClick} className={className}>
      {links.map((link) => (
        <li className={listItemClassName} key={link.id}>
          <Link href={link.href}>
            <Button className="text-gray-300" size="linkLeader" variant="link">
              {link.text}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
