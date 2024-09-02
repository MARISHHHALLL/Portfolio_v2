import { Button } from "@/components/ui/Button";
import CopyToClipboard from "@/components/ui/copy-to-clipboard";
import { SocialsList } from "@/constants";
import { cn } from "@/utils/cn";
import { DocumentCopy, Send2 } from "iconsax-react";
import Link from "next/link";

export function HeroComponent() {
  return (
    <div className="mt-4 flex flex-col gap-y-5 items-center">
      <div className="flex flex-col gap-4 items-center">
        <span className="flex flex-col items-center gap-1">
          <h1 className="text-4xl text-[#E2E2E2] font-bold ">Saad Koraiban</h1>
          <p className="text-base text-[#7B7B7B] font-inter">
            Junior Developer Based In Casablanca, Morocco
          </p>
        </span>
        <div className="flex flex-row items-center gap-x-3">
          <div className="relative flex justify-center items-center rounded-full h-2 w-2 bg-green-400">
            <span className="animate-ping absolute h-[14px] w-[14px] rounded-full bg-green-400 opacity-50" />
          </div>
          <p className={cn("text-[#7B7B7B] text-sm font-inter")}>
            Available for new opportunities
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-x-[10px]">
        {SocialsList.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            className="flex flex-row gap-x-2 hover:bg-[#1c1c1c] duration-300 transition-all items-center py-1 px-3 rounded-lg bg-[#171717] border border-[#4F4F4F] border-opacity-10"
          >
            <item.Icon className="size-[18px] text-[#4F4F4F]" />
            <p className="text-white/60 text-sm font-inter">{item.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <CopyToClipboard />
        <p className="text-sm text-[#7B7B7B]">or</p>
        <Link href="mailto:kouraybane809@gmail.com">
          <Button
            variant={"secondary"}
            size={"custom"}
            className="group transition-all overflow-hidden"
          >
            <p className="group-hover:blur-lg duration-300 text-black">
              Contact me
            </p>
            <Send2
              size="18"
              color="#000"
              variant="Bold"
              className="absolute left-0 right-0 -bottom-16 group-hover:bottom-0 top-0 duration-300 opacity-0 group-hover:opacity-100 m-auto"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
}
