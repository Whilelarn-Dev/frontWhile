"use client";
import React from "react";
import Image from "next/image";
import { PersonSchema, PostSchema } from "../../../../type/postType";

interface MessageProps {
  message: string;
  right: boolean;
  person: PersonSchema;
  post: PostSchema | null;
}
export default function Message({
  message,
  right,
  person,
  post,
}: MessageProps) {
  console.log("====================================");
  console.log(post?.post_info.imgUrl);
  console.log(post?.post_info.videoUrl);

  console.log("====================================");
  const pictureURL = post?.post_info.imgUrl.replaceAll("&amp ;", "&");
  const videoURL = post?.post_info.videoUrl.replaceAll("&amp ;", "&");

  return (
    <>
      {right ? (
        <div className="w-full flex justify-end p-3 rounded-l ">
          <div className="flex flex-row items-center">
            <div className="relative ml-3 text-sm bg-slate-100 py-2 px-4 shadow rounded-xl">
              <div>{message}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex ">
          <div className="relative h-11 w-11 -mr-3  mt-3 rounded-full  overflow-hidden">
            <Image
              fill
              src={person.image}
              alt="Avatar"
              className="h-full w-full"
            />
          </div>
          <div className="p-3 w-full flex justify-start rounded-lg max-w-[600px]">
            <div className="flex flex-row items-center">
              <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div className="">
                  <div>{message}</div>
                  <div className="w-full p-4">
                    <hr />
                  </div>
                  {post?.post_info?.videoUrl === "" ? (
                    post?.post_info.imgUrl === "" ? null : (
                      <div className="relative w-full h-full max-h-[250px] max-w-[400px] rounded-sm">
                        <Image
                          fill
                          src={pictureURL ? pictureURL : post?.post_info.imgUrl}
                          alt="test"
                        ></Image>
                      </div>
                    )
                  ) : (
                    <div className="relative w-full h-full max-h-[250px] max-w-[400px] rounded-sm">
                      <video
                        width={"500px"}
                        height={"300px"}
                        src={
                          post?.post_info?.videoUrl
                            ? videoURL
                            : post?.post_info.videoUrl
                        }
                      ></video>
                    </div>
                  )}
                </div>
                <div className="text-ellipsis">
                  {post?.post_info.postContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
