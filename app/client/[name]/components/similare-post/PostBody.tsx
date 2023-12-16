"use client";
import { OneReleventPostSchema, PostSchema } from "@/type/postType";
import React, { Dispatch, SetStateAction, useState } from "react";
import RanderImageOrVideo from "./RanderImageOrVideo";
import { ms } from "../RightPart";
import { useRouter } from "next/navigation";

export default function PostBody({
  element,
  setmessage,
}: {
  element: OneReleventPostSchema;
  setmessage: Dispatch<SetStateAction<ms[]>>;
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
        route.refresh();
      }}
      className="flex-1 bg-gray-200 space-y-3 flex flex-col items-start border p-3 cursor-pointer overflow-clip shadow rounded-sm"
    >
      <div className=" max-h-[140px] overflow-clip">
        {`\u202B ${element.postContent}\u202C`}
      </div>
      <RanderImageOrVideo
        imgUrl={element.imgUrl}
        videoUrl={element.videoUrl}
      ></RanderImageOrVideo>
    </div>
  );
}
