"use client";
import DotSwapper from "@/app/client/[name]/components/right-part/Wating";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UseGetQuery from "@/hooks/query/use-get-query";
import { WebPostResponseType, WebPostType } from "@/type/WebPostType";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ChatPost from "./ChatPost";
interface MessagesType {
  message: WebPostResponseType | null;
  qurey: string | null;
}
export default function Chat({
  setopen,
  live
}: {
  setopen?: Dispatch<SetStateAction<boolean>>;
  live:boolean
}) {
  const [qurey, setqurey] = useState<string>("");
  const { data, isLoading, mutate, isSuccess } = UseGetQuery<
    WebPostType,
    WebPostResponseType
  >({
    url: process.env.NEXT_PUBLIC_ASK_WHILE_WEB!!,
  });

  const [Messages, setMessages] = useState<MessagesType[]>([]);
  useEffect(() => {
    if (isSuccess) {
      setMessages((pre) => [
        ...pre,
        {
          message: data,
          qurey: null,
        },
      ]);
    }
  }, [isSuccess]);
  const onSubmit = () => {
    mutate({
      data: {
        query: qurey,
        apiKey: "Whilelearn-X17GTzdbGFam1vmpvI4YF6Wn6ayLejKPtSgUaXa1AO0",
        userId: "105962983257369026275",
        isOpenAi: true,
        isArabic: false,
        isWeb: true,
        isContentCreator: false,
      },
    });
    setMessages((pre) => [...pre, { qurey: qurey, message: null }]);
    setqurey("");
  };
  return (
    <>
      <div className={`${live ? "" : "fixed bottom-20 lg:right-28 right-2 z-50"} bg-white border border-whileRed rounded-xl overflow-clip shadow-lg w-[400px] h-[550px]`}>
        <div className="bg-whileRed h-20 flex justify-center items-center">
          <div
            onClick={() => {
              setopen && setopen(false);
            }}
            className="text-white absolute top-7 text-lg right-4 cursor-pointer"
          >
            X
          </div>
          <div className="text-white text-3xl">While Learn</div>
        </div>
        {/* Chat Body */}
        <div className="h-[400px] bg-white overflow-y-auto scrollbar-track-red-200 scrollbar-thumb-red-400 scrollbar-thin">
          {Messages.map((ele, idx) => (
            <>
              {ele.message ? (
                <ChatPost ele={ele.message}></ChatPost>
              ) : (
                <div className="w-full flex justify-end p-2">
                  <div
                    key={idx}
                    className={`p-2 rounded-md border max-w-[300px] text-sm shadow bg-whileRed text-white border-whileRed`}
                  >
                    <div className="font-bold text-base text-center w-full">
                      {ele.qurey}
                    </div>
                  </div>{" "}
                </div>
              )}
            </>
          ))}
          {isLoading ? (
            <div className="p-1 w-full">
              <DotSwapper></DotSwapper>
            </div>
          ) : null}
        </div>
        {/* Chat Footer */}
        <div className="h-[70px] px-3 gap-3 flex items-center">
          <Input
            placeholder="Type your message"
            value={qurey}
            onChange={(e) => setqurey(e.target.value)}
            className="w-full"
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                qurey.length > 2 &&
                qurey.length <= 150 &&
                !isLoading
              ) {
                onSubmit();
              }
            }}
          ></Input>
          <Button
            onClick={onSubmit}
            className="bg-whileRed hover:bg-whileRed/95"
            disabled={isLoading || qurey.length <= 2 || qurey.length > 150}
          >
            Ask
          </Button>
        </div>
      </div>
    </>
  );
}
