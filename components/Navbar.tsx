import React from "react";
import { Github, Gitlab, Instagram, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { SocialIcon } from "./ui/socialIcon";

const Navbar = () => {
  return (
    <header className="flex fixed backdrop-blur top-0 z-50 w-full border-b-[0.5px] border-secondary/10 py-5 px-10 text-secondary">
      <nav className="flex justify-between items-center w-full">
        <Link
          href={"/"}
          className="flex items-center ease-out duration-300 hover:scale-110 "
        >
          <Rocket
            size={42}
            className="mr-2 stroke-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600    "
          />
          <p className="text-transparent text-3xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {`<713-CODE>`}
          </p>
        </Link>

        <ul className="flex justify-between items-center w-[400px] mr-16">
          <li>
            <Link className="hover:underline" href={"/#about"}>
              <Button variant={"ghost"}>About</Button>
            </Link>
          </li>

          <li>
            <Link className="hover:underline" href={"/projects"}>
              <Button variant={"ghost"}>Projects</Button>
            </Link>
          </li>

          <li>
            <Link className="hover:underline" href={"/posts"}>
              <Button variant={"ghost"}>Posts</Button>
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={"/contacts"}>
              <Button variant={"ghost"}>Contacts</Button>
            </Link>
          </li>
        </ul>
        <ul className="flex justify-between items-center w-[110px]">
          <li>
            <SocialIcon
              href="https://github.com/PopLocker714"
              Icon={Github}
              target="blank"
            />
          </li>
          <li>
            <SocialIcon
              href="https://gitlab.com/jonirootman714"
              Icon={Gitlab}
              target="blank"
            />
          </li>
          <li>
            <SocialIcon href="#" Icon={Instagram} />
          </li>
        </ul>
        {/* <div className="flex min-w-[800px] justify-between"></div> */}
      </nav>
    </header>
  );
};

export default Navbar;
