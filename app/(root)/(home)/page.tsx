import { Contacts } from "@/components/Contacts";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";

const Page = () => {
  return (
    <main className="pt-32 ">
      <Hero />
      <TechStack />
      <Projects />
      <Contacts />
    </main>
  );
};

export default Page;
