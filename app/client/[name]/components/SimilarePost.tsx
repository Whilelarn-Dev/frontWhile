"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReleventPostSchema } from "@/type/postType";
import SimilarePostDialog from "./SimilarePostDialog";

export default function SimilarePost({
  relevent,
}: {
  relevent: ReleventPostSchema | undefined;
}) {
    const [open, setopen] = useState(false);
  console.log(relevent);
  return (
    <>
      <div 
        onClick={()=>setopen(true)}
        className="bg-black p-2 cursor-pointer rounded-md text-white hover:bg-white hover:text-black">
          similar Post
        </div>
        {open && <SimilarePostDialog relevent={relevent} setopen={setopen} />}
        </>
  );
}
