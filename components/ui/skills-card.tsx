export function SkillsCard({ data }: { data: any }) {
  return (
    <div className=" md:w-[544px] flex flex-row gap-4  flex-wrap">
      {data.map((item: any, i: number) => (
        <div
          key={item.id || i}
          className="bg-[#161616] hover:bg-[#1f1f1f] duration-300 selection:bg-transparent p-5 rounded-md border border-[#262626] w-[170px] h-[160px] flex flex-col items-center justify-center gap-4"
        >
          <item.Icon fill={item.iconColor} className={`h-[44px] w-[44px]`} />
          <p className="text-[#E2E2E2] text-sm font-inter">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
