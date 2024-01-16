import LogoWhile from "@/components/shared/LogoWhile";
import Image from "next/image";
import LastPart from "./LastPart";
import Linkes from "./Linkes";

export default function FirstHeaders() {
  return (
    <div className="h-20 w-full border-b z-50 bg-white flex justify-between items-center opacity-95 fixed px-10 md:px-24">
      <div className="flex gap-3">
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
      <div className="flex">
        <LastPart></LastPart>
      </div>
    </div>
  );
}
