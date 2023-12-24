"use client";
import { formatText } from "@/lib/TextFormater";
import { OneReleventPostSchema, PostSchema } from "@/type/postType";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { ms } from "../right-part/RightPart";
import RanderImageOrVideo from "./RanderImageOrVideo";

export default function PostBody({
  element,
  setmessage,
  setopen,
}: {
  element: OneReleventPostSchema;
  setmessage: Dispatch<SetStateAction<ms[]>>;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const route = useRouter();
  return (
    <div
      onClick={() => {
        const po: PostSchema = {
          post_info: {
            imgUrl: element.imgUrl,
            videoUrl: element.videoUrl,
            postContent: element.postContent,
            postUrl: element.postUrl,
            relevant_posts: undefined,
            questions: [],
          },
          search_result: " ",
        };

        setmessage((pre) => [
          ...pre,
          { message: element.postContent, right: false, post: po },
        ]);
        setopen(false);
      }}
      className="flex-1 bg-gray-200 space-y-3 flex flex-col items-start border p-3 cursor-pointer overflow-clip shadow rounded-sm"
    >
      <div className=" max-h-[140px] overflow-clip">
        {formatText(element.postContent)}
      </div>
      <RanderImageOrVideo
        imgUrl={element.imgUrl}
        videoUrl={element.videoUrl}
      ></RanderImageOrVideo>
    </div>
  );
}
