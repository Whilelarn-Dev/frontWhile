"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TrySol() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/client");
      }}
      variant={"ghost"}
      className="mt-2 md:mt-4
  cursor-pointer
  text-whileRed font-merriweather md:text-2xl"
    >
      Try Our Solution
    </Button>
  );
}
