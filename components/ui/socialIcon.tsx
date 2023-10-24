import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ISocialLinkProps {
  href: string;
  Icon: LucideIcon;
  target?: "blank" | "";
  size?: number;
}
export const SocialIcon = ({
  href,
  Icon,
  target = "",
  size = 24,
}: ISocialLinkProps) => {
  return (
    <Link href={href} target={target}>
      <Icon size={size} className="ease-out duration-300 hover:scale-125" />
    </Link>
  );
};
