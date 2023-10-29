"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { PersonSchema, PostSchema } from "../../../../type/postType";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ms } from "./RightPart";

interface MessageProps {
  message: string;
  right: boolean;
  person: PersonSchema;
  post: PostSchema | null;
  index: number;
  setMessage: Dispatch<SetStateAction<ms[]>>;
}
export default function Message({
  message,
  right,
  person,
  post,
  index,
  setMessage,
}: MessageProps) {
  const [open, setopen] = useState<boolean>(false);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.type === "click") {
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      setopen(true);
    }
  };
  const deleteMessage = (index: number) => {
    setMessage((pre) => pre.filter((ele, i) => i !== index));
  };
  return (
    <>
      {right ? (
        <div className="w-full flex justify-end p-3 rounded-l ">
          <div className="flex flex-row items-center">
            <div
              onClick={handleClick}
              onContextMenu={handleClick}
              className="relative ml-3 text-sm bg-slate-100 py-2 px-4 shadow rounded-xl"
            >
              <div>
                <DropdownMenu open={open} onOpenChange={setopen}>
                  <DropdownMenuTrigger className="cursor-default" disabled>
                    {message}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => {
                        navigator.clipboard.writeText(message);
                      }}
                    >
                      Copy
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => deleteMessage(index)}>
                      Delete Message
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex ">
          <div className="relative h-11 w-11 -mr-3  mt-3 rounded-full  overflow-hidden">
            <Image
              width={100}
              height={100}
              src={person.image}
              alt="Avatar"
              className="h-full w-full"
            />
          </div>
          <div className="p-3 w-full flex justify-start rounded-lg max-w-[600px]">
            <div className="flex flex-row items-center">
              <div
                onClick={handleClick}
                onContextMenu={handleClick}
                className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
              >
                <DropdownMenu open={open} onOpenChange={setopen}>
                  <DropdownMenuTrigger className="cursor-default" disabled>
                    {" "}
                    <div className="">
                      <div>{message}</div>
                      {post !== null ? (
                        <div className="w-full p-4">
                          <hr />
                        </div>
                      ) : null}
                      {post?.post_info?.videoUrl === undefined ||
                      post?.post_info?.videoUrl === "" ? (
                        post?.post_info.imgUrl === undefined ? null : (
                          <div className="relative mb-3 flex justify-center w-full h-full rounded-sm">
                            <img
                              className="rounded-sm w-full h-full "
                              style={{ objectFit: "cover" }}
                              loading="lazy"
                              decoding="async"
                              src={post?.post_info.imgUrl}
                              alt="test"
                            />
                          </div>
                        )
                      ) : (
                        <div className="relative w-full h-full max-h-[250px] max-w-[400px] rounded-sm">
                          {" "}
                          <video
                            width={"500px"}
                            height={"300px"}
                            src={post?.post_info?.videoUrl}
                          ></video>
                        </div>
                      )}
                    </div>
                    <div className="text-ellipsis">
                      {post?.post_info.postContent}
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => {
                        navigator.clipboard.writeText(
                          post?.post_info.postContent!!,
                        );
                      }}
                    >
                      Copy Post
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        navigator.clipboard.writeText(post?.search_result!!);
                      }}
                    >
                      Copy WhileLearn answer
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => deleteMessage(index)}>
                      Delete Message
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
