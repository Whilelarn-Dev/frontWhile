import Image from "next/image";
import axios from "axios";
import Headers from "./Headers";
import { PersonSchema } from "@/type/postType";
import LogoWhile from "../../../../components/shared/LogoWhile";
import Setting from "./Setting";
interface Left {
  person: PersonSchema;
}
export default async function LeftPart({ person }: Left) {
  return (
    <div className="flex flex-col md:py-8 pl-6 mt-4 md:mt-0 pr-2 w-[220px]">
      <LogoWhile></LogoWhile>
      <Setting></Setting>
    </div>
  );
}
