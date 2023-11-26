import { ProjectSearch } from "@/components/ProjectSearch";
import React from "react";

const Page = async () => {
  return (
    <div className="container py-20 ">
      <div className="flex items-center flex-col">
        <h2 className="scroll-m-20 pb-2 mb-6 text-3xl font-semibold tracking-tight first:mt-0">
          Проекты
        </h2>
        <ProjectSearch />
      </div>
    </div>
  );
};

export default Page;
