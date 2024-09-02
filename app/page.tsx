import { HeaderComponent } from "@/components/sections/header";
import { HeroComponent } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stacks } from "@/components/sections/stacks";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-[76px]">
      <HeaderComponent />
      <HeroComponent />
      <Projects />
      <Stacks />
    </main>
  );
}
