"use client";
import { ReleventPostsSchema } from "@/type/postType";
import { Dispatch, SetStateAction, useState } from "react";
import { ms } from "../right-part/RightPart";
import SimilarePostDialog from "./SimilarePostDialog";

export default function SimilarePost({
  relevent,
  setmessage,
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
        className="bg-black text-sm lg:text-base p-1 lg:p-2 cursor-pointer rounded-md text-white hover:bg-white hover:text-black"
      >
        similar Post
      </div>
      {open && (
        <SimilarePostDialog
          setmessage={setmessage}
          relevent={relevent}
          setopen={setopen}
        />
      )}
    </>
  );
}
