import Image from "next/image";
import { Button } from "./Button";
import { Link21 } from "iconsax-react";
import { Icons } from "@/icons";
import { ProjectsList } from "@/constants";
import Link from "next/link";

export function ProjectCard() {
  return (
    <>
      {ProjectsList.map((item) => (
        <div
          key={item.id}
          className="bg-[#161616] p-5 rounded-xl max-w-[544px] w-full flex flex-row gap-x-4"
        >
          <Image
            src={item.image}
            alt="logo wedecine"
            width={200}
            height={200}
            className="object-cover w-[44px] h-[44px] object-center rounded-lg mt-1"
            quality={100}
          />
          <div className="flex flex-row flex-1">
            <div className="flex-1 flex flex-col gap-4">
              <span className="flex flex-col">
                <h1 className="text-lg text-white">{item.title}</h1>
                <p className="text-[#737373] font-inter text-sm">
                  {item.description}
                </p>
              </span>
              <div className="flex flex-row gap-x-[15px] items-center">
                {item.Icons.map((Icon, i) => (
                  <Icon className="text-white h-[22px] w-[22px] " key={i} />
                ))}
              </div>
            </div>
            <Link href={item.viewLink}>
              <Button className="py-[6px] px-[8px] gap-x-1 h-7">
                <p className="text-xs text-white font-inter font-normal">
                  View
                </p>
                <Link21 size="13" color="#4F4F4F" />
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
