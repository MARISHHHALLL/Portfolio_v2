import { Icons } from "@/icons";
import Image from "next/image";

export function HeaderComponent() {
  return (
    <div className="h-header  w-full relative">
      <Image
        src="/images/header-blured.png"
        className="w-full h-full  blur-xl opacity-40"
        fill
        alt="blured img"
      />
      <span className="absolute -bottom-16 rounded-full grayscale flex items-center justify-center left-[50%] translate-x-[-50%] h-[89px] w-[89px] bg-[#111111]">
        <Icons.avatarIcon className=" rounded-full" />
      </span>
    </div>
  );
}
