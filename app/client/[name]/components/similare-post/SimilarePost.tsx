"use client";
import { Button } from "@/components/ui/button";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReleventPostsSchema } from "@/type/postType";
import SimilarePostDialog from "./SimilarePostDialog";
import { ms } from "../RightPart";

export default function SimilarePost({
  relevent,
  setmessage
}: {
  relevent: ReleventPostsSchema | undefined;
  setmessage: Dispatch<SetStateAction<ms[]>>;
}) {
  const [open, setopen] = useState(false);
  console.log(relevent);
  return (
    <>
      <div
        onClick={() => setopen(true)}
        className="bg-black p-2 cursor-pointer rounded-md text-white hover:bg-white hover:text-black"
      >
        similar Post
      </div>
      {open && <SimilarePostDialog setmessage={setmessage} relevent={relevent} setopen={setopen} />}
    </>
  );
}
