import LogoWhile from "@/components/shared/LogoWhile";
import { ArrowLeft } from "lucide-react";
import ClientHeaders from "./ClientHeaders";
import Link from "next/link";

export default function Header({ name }: { name: string }) {
  return (
    <div className="h-[50px] w-full flex justify-between items-center pt-7 pl-14">
      <div className="flex gap-5">
        <Link href={`/client`}>
          <ArrowLeft></ArrowLeft>
        </Link>
        <LogoWhile></LogoWhile>{" "}
      </div>
      <ClientHeaders name={name}></ClientHeaders>
    </div>
  );
}
