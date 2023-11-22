import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-secondary absolute bottom-0 w-full">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <p className="mr-2">2023 © Kiselev Ilya</p>
          <Link href="/privacy">
            <p className="hover:underline underline-offset-4 text-lg text-blue-300">
              Политика конфиденциальности
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};
