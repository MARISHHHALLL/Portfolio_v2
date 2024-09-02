import { ProjectCard } from "@/components/ui/project-card";

export function Projects() {
  return (
    <div className="relative">
      <p className="absolute top-0 -left-24 text-[#7B7B7B] text-sm font-inter">
        Projects
      </p>
      <ProjectCard />
    </div>
  );
}
