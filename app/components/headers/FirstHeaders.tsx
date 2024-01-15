import LogoWhile from "@/components/shared/LogoWhile";
import LastPart from "./LastPart";
import Linkes from "./Linkes";

export default function FirstHeaders() {
  return (
    <div className="h-20 w-full border-b z-50 bg-white flex justify-between items-center opacity-95 fixed px-10 md:px-24">
      <LogoWhile></LogoWhile>
      <Linkes></Linkes>
      <div className="flex">
        <LastPart></LastPart>
      </div>
    </div>
  );
}
