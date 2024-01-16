"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import Chat from "./Chat";

export default function ChatHolder() {
  const [open, setopen] = useState<boolean>(false);

  return (
    <>
      <Button
        size={"icon"}
        draggable={true}
        onClick={() => setopen((pre) => !pre)}
        className="rounded-full p-2 h-14 w-14 shadow-xl  flex items-center justify-center z-50 bg-whileRed hover:bg-whileRed fixed right-14 bottom-5"
      >
        <Image
          src={"/while/white.png"}
          width={90}
          height={90}
          alt="logo"
        ></Image>
      </Button>
      {open && <Chat live={false} setopen={setopen}></Chat>}
    </>
  );
}
