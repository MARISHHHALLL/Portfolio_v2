import { ProjectCard } from "@/components/ui/project-card";

export function Projects() {
  return (
    <div className="relative px-5 md:px-0 w-full md:w-fit">
      <p className="absolute md:top-0 top-[-1.875rem] md:-left-24 text-[#7B7B7B] text-sm font-inter">
        Projects
      </p>
      <ProjectCard />
    </div>
  );
}
