import { SkillsCard } from "@/components/ui/skills-card";
import { SkillsList, Softwares } from "@/constants";

const SkillSoftwaresPage = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col justify-center  mt-12">
        <h1 className="text-[22px] text-white text-center">
          Skills & Software
        </h1>
        <p className="text-base text-secondary text-center font-inter">
          Showcasing My Technologies Set & Toolkit.
        </p>
      </div>
      <div className="relative">
        <p className="absolute top-0 -left-24 text-[#7B7B7B] text-sm font-inter">
          Skills
        </p>
        <SkillsCard data={SkillsList} />
      </div>
      <div className="relative">
        <p className="absolute top-0 -left-24 text-[#7B7B7B] text-sm font-inter">
          Software
        </p>
        <SkillsCard data={Softwares} />
      </div>
    </div>
  );
};

export default SkillSoftwaresPage;
