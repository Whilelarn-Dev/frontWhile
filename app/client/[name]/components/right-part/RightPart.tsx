"use client";
import { Input } from "@/components/ui/input";
import UseGetQuery from "@/hooks/query/use-get-query";
import { PersonSchema, PostSchema } from "@/type/postType";
import { useEffect, useState } from "react";
import Message from "./Message";

import {
  useActivateStore,
  useQustionStore,
  useRefreshMessagesStore,
} from "@/app/store/zustand";
import SimilarePost from "../similare-post/SimilarePost";
import DotSwapper from "./Wating";
interface Right {
  person: PersonSchema;
}
export interface ms {
  message: string;
  right: boolean;
  post?: PostSchema | null;
}
export default function RightPart({ person }: Right) {
  const [inputs, setinputs] = useState<string>("");
  const { message: qustionMessage } = useQustionStore();
  const activateSend = useActivateStore();
  const { refresh, setRefresh } = useRefreshMessagesStore();
  const [refreshState, setrefreshState] = useState(false);
  const [message, setmessage] = useState<ms[]>([
    { message: person.hint, right: false, post: null },
  ]);

  const { mutate, isLoading, data, isError } = UseGetQuery({});

  useEffect(() => {
    setinputs(qustionMessage.slice(2));
  }, [qustionMessage]);
  useEffect(() => {
    if (isError) {
      setmessage((pre) => pre.slice(1));
    }
  }, [isError]);

  async function handleMessage() {
    setmessage((pre) => [
      ...pre,
      {
        message: inputs,
        right: true,
      },
    ]);
    if (inputs.length > 1) {
      mutate({
        apiKey: person.apiKey,
        isArabic: person.isArabic,
        isContentCreator: person.isContentCreator,
        isShort: true,
        query: inputs,
        userId: "105962983257369026275",
        isOpenAi: false,
      });
    }
    setinputs("");
  }
  useEffect(() => {
    if (refresh) {
      setmessage([{ message: person.hint, right: false, post: null }]);
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    if (!refresh) {
      const oldMessages: ms[] = JSON.parse(
        localStorage.getItem(person.firstName) ?? "[]",
      );
      if (oldMessages.length > 0) setmessage(oldMessages);
    }
  }, []);
  useEffect(() => {
    if (!refresh) {
      if (message.length > 1) {
        localStorage.setItem(person.firstName, JSON.stringify(message));
      }
    }
  });
  useEffect(() => {
    if (data) {
      setmessage((pre) => [
        ...pre,
        {
          message: data.search_result,
          right: false,
          post: data,
        },
      ]);
    }
  }, [data]);

  return (
    <div className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          {message.map((ele, idx) => {
            return (
              <Message
                index={idx}
                setMessage={setmessage}
                post={ele.post ?? null}
                person={person}
                message={ele.message}
                right={ele.right}
                key={idx}
              ></Message>
            );
          })}
          {isLoading ? <DotSwapper></DotSwapper> : null}
        </div>
        <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4 mb-7">
          <SimilarePost
            setmessage={setmessage}
            relevent={
              message[message.length - 1].post?.post_info.relevant_posts
            }
          ></SimilarePost>
          <div className="flex-grow ml-4">
            <div className="relative w-full">
              <Input
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    inputs.length > 1 &&
                    !isLoading &&
                    activateSend.activated
                  )
                    handleMessage();
                }}
                value={inputs}
                onChange={(e) => setinputs(e.target.value)}
                type="text"
                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
              />
            </div>
          </div>
          <div className="ml-4">
            <button
              disabled={
                inputs.length < 2 || isLoading || !activateSend.activated
              }
              onClick={handleMessage}
              className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
            >
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
