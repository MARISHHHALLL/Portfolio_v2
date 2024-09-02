"use client";
import { NavLists } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function NavComponent() {
  const pathName = usePathname();

  useGSAP(() => {
    gsap.to("#nav", { bottom: "20px", delay: 1 });
  }, []);

  return (
    <section
      id="nav"
      className="fixed -bottom-20 left-0 right-0 flex flex-row gap-x-3 items-center m-auto px-[22px] py-3 rounded-lg w-fit bg-[#171717] border border-[#4F4F4F] border-opacity-10 z-50"
    >
      {NavLists.map((item, i) => {
        return (
          <Link
            href={item.href}
            key={i}
            className="cursor-pointer relative group"
          >
            {pathName !== item.href ? (
              <span className="h-11 w-11 bg-[rgba(255,255,255,0.02)] rounded-md flex items-center justify-center">
                <item.Icon
                  stroke="red"
                  className="text-[#4F4F4F]  duration-300"
                />
              </span>
            ) : (
              <span className="h-11 px-[30px] flex items-center justify-center rounded-md bg-[#FFFBF8]">
                <p className="uppercase font-base text-[14px] font-black tracking-[2%] text-black translate-y-[2px]">
                  {item.Label}
                </p>
              </span>
            )}
          </Link>
        );
      })}
    </section>
  );
}
