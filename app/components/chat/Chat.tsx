"use client";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export default function Chat() {
  return (
    <>
      <Button
        size={"icon"}
        draggable={true}
        className="rounded-full h-14 w-14 shadow-xl flex items-center justify-center z-50 bg-blue-600 hover:bg-indigo-700 fixed right-14 bottom-5"
      >
        <Bot size={"40px"}></Bot>
      </Button>
    </>
  );
}
