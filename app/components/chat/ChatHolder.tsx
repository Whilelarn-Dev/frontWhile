"use client";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
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
        className="rounded-full h-14 w-14 shadow-xl flex items-center justify-center z-50 bg-whileRed hover:bg-whileRed/90 fixed right-14 bottom-5"
      >
        <Bot size={"40px"}></Bot>
      </Button>
      {open && <Chat live={false} setopen={setopen}></Chat>}
    </>
  );
}
