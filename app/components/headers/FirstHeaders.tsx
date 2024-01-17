import LogoWhile from "@/components/shared/LogoWhile";
import Image from "next/image";
import LastPart from "./LastPart";
import Linkes from "./Linkes";
import { SheetDemo } from "./SheetNav";

export default function FirstHeaders() {
  return (
    <div className="h-20 w-full border-b z-50 bg-white flex justify-between items-center opacity-95 fixed px-10">
      <div className="flex gap-1">
        <div className="relative w-9 h-6 mb-2">
          <Image
            src={"/while/red.png"}
            width={100}
            height={100}
            alt="logo"
          ></Image>
        </div>
        <LogoWhile></LogoWhile>
      </div>
      <Linkes></Linkes>
      <div className="flex items-center gap-3  min-w-[100px]">
        <LastPart></LastPart>
        <div className="lg:hidden">
          <SheetDemo></SheetDemo>
        </div>
      </div>
    </div>
  );
}
