"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CardButton({ name }: { name: string }) {
  const router = useRouter();
  return (
    <Button
      className="w-40 font-merriweather"
      onClick={() => {
        router.push(`/client/${name}`);
      }}
      variant={"default"}
    >
      Chat With {name}
    </Button>
  );
}
