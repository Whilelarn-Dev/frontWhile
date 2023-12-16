"use client";
import { ReleventPostsSchema } from "@/type/postType";
import React, { Dispatch, SetStateAction } from "react";
import postBody from "./PostBody";
import PostBody from "./PostBody";
import { ms } from "../RightPart";

export default function SimilarePostDialog({
  relevent,
  setopen,
  setmessage,
}: {
  relevent: ReleventPostsSchema | undefined;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  setmessage: Dispatch<SetStateAction<ms[]>>;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex justify-center ">
      <div className=" relative w-full h-full max-w-[1200px] max-h-[500px] mt-9 overflow-clip p-5 bg-white rounded-md shadow-lg border">
        <div
          onClick={() => setopen(false)}
          className="bg-black rounded-full absolute top-3 
        right-3 text-white h-8 w-8 flex justify-center items-center cursor-pointer"
        >
          X
        </div>
        <div className="flex justify-center text-xl mb-5 items-center w-full text-left">
          Choose a Post you Interested In?
        </div>
        <div className=" flex justify-center items-start gap-5 ">
          {relevent ? (
            relevent?.map((ele, idx) => (
              <PostBody
                setmessage={setmessage}
                key={idx}
                element={ele}
              ></PostBody>
            ))
          ) : (
            <div>
              <div className="m-5 text-lg  text-black">
                search to find a new post
              </div>
              <div
                onClick={() => setopen(false)}
                className="m-5 p-5 cursor-pointer border text-center rounded-lg text-lg shadow text-black bg-white"
              >
                press to return
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
