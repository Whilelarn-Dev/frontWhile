"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot } from "lucide-react";
import { useState } from "react";
export default function Chat() {
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
      {open ? (
        <div className="fixed bottom-20 lg:right-28 right-2 z-50 bg-white border border-whileRed rounded-xl overflow-clip shadow-lg w-[400px] h-[550px]">
          <div className="bg-whileRed h-20 flex justify-center items-center">
            <div
              onClick={() => setopen(false)}
              className="text-white absolute top-7 text-lg right-4 cursor-pointer"
            >
              X
            </div>
            <div className="text-white text-3xl">While Learn</div>
          </div>
          {/* Chat Body */}
          <div className="h-[400px] bg-white"></div>
          {/* Chat Footer */}
          <div className="h-[70px] px-3 gap-3 flex items-center">
            <Input></Input>
            <Button className="bg-whileRed hover:bg-whileRed/95">Send</Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
