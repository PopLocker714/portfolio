import Link from "next/link";
import { Button } from "../ui/button";

interface INavigationProps {
  links: INavItem[];
}

export interface INavItem {
  text: string;
  href: string;
  id?: string;
}

export const Navigation = ({ links }: INavigationProps) => {
  

  return (
    <ul className="flex w-[500px] items-center justify-between">
      {links.map((item) => (
        <li key={item.id}>
          <Link href={item.href}>
            <Button className="text-gray-300" size={"linkLeader"} variant={"link"}>
              {item.text}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
