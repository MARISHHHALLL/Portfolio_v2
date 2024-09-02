import { Button } from "@/components/ui/Button";
import { SkillsCard } from "@/components/ui/skills-card";
import { SkillsList } from "@/constants";
import Link from "next/link";

export function Stacks() {
  return (
    <div className="relative flex flex-col gap-y-2">
      <p className="absolute top-0 -left-24 text-[#7B7B7B] text-sm font-inter">
        Skills
      </p>
      <SkillsCard data={SkillsList} />
      {/* <Link href="/skills-softwares">
        <Button className="mt-3 w-full font-inter gap-x-1 border border-[#7b7b7b14] bg-[#161616] ">
          View all
        </Button>
      </Link> */}
    </div>
  );
}
