import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <main className="pt-32 text-secondary container ">
      <section className="flex justify-center items-center flex-col p-20">
        <div className="w-[600px] mb-16">
          <h1 className="text-7xl font-extrabold text-center leading-snug">
            Hi👋 I&rsquo;m Fullstack <span>{`{ Developer }`}</span>
          </h1>
        </div>

        <div className="flex items-center">
          <Button size={'lg'} variant={'secondary'} className="">Go overview</Button>
          {/* <Button className="text-primary" variant={'outline'}>Contact with me</Button> */}
        </div>
      </section>
    </main>
  );
};

export default Page;
