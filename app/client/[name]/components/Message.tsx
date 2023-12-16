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
  const [ImageError, setImageError] = useState<boolean>(false);
  const [videoError, setvideoError] = useState(false);
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
          <div className="p-3 w-full flex justify-start rounded-lg max-w-[650px]">
            <div className="flex flex-row items-center">
              <div
                onClick={handleClick}
                onContextMenu={handleClick}
                className="relative ml-3 text-sm bg-white py-2 max-w-[650px] px-4 shadow rounded-xl"
              >
                <DropdownMenu open={open} onOpenChange={setopen}>
                  <DropdownMenuTrigger className="cursor-default" disabled>
                    {" "}
                    <div className="max-w-[650px]  ">
                      <div>{message}</div>
                      {post !== null ? (
                        <div className="w-full p-4">
                          <hr />
                        </div>
                      ) : null}
                      {post?.post_info?.videoUrl === undefined ||
                      videoError ||
                      post?.post_info?.videoUrl === "" ? (
                        post?.post_info.imgUrl === "" ||
                        ImageError ||
                        post?.post_info.imgUrl === undefined ? null : (
                          <div className="mb-3 flex max-w-[450px]  justify-center rounded-sm">
                            <img
                              className="rounded-sm w-full h-full "
                              style={{
                                objectFit: "cover",
                                width: "500px",
                                height: "300px",
                              }}
                              loading="lazy"
                              decoding="async"
                              src={post?.post_info.imgUrl}
                              alt="test"
                              onError={() => setImageError(true)}
                            />
                          </div>
                        )
                      ) : (
                        <div className=" w-full h-full max-h-[300px] max-w-[500px] rounded-sm">
                          {" "}
                          <video
                            width={"500px"}
                            height={"300px"}
                            src={post?.post_info?.videoUrl}
                            onError={() => setvideoError(true)}
                          ></video>
                        </div>
                      )}
                    </div>
                    {message === person.hint ? null : (
                      <div className="text-ellipsis p-2">
                        <p className="bg-slate-200 rounded-md p-4 max-w-[550px] overflow-clip  ">
                          {`\u202B ${post?.post_info.postContent}\u202C`}
                        </p>
                      </div>
                    )}
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
