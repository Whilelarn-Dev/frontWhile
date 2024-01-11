"use client";
import DotSwapper from "@/app/client/[name]/components/right-part/Wating";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WebPostType } from "@/type/WebPostType";
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useReducer,
  useState,
} from "react";
import ChatPost from "./ChatPost";
export interface MessagesType {
  message: string | null;
  qurey: string | null;
}
const Messages: MessagesType[] = [];
const source: string[] = [];
const title: string[] = [];
export default function Chat({
  setopen,
  live,
}: {
  setopen?: Dispatch<SetStateAction<boolean>>;
  live: boolean;
}) {
  const [qurey, setqurey] = useState<string>("");

  const [_, dispatch] = useReducer((x) => x + 1, 0);
  const [Loading, setLoading] = useState<boolean>(false);
  const [qustion, setqustion] = useState<string[]>([]);

  const onSubmit = async () => {
    setLoading(true);
    setqurey("");
    const payload: WebPostType = {
      query: qurey,
      apiKey: "Whilelearn-X17GTzdbGFam1vmpvI4YF6Wn6ayLejKPtSgUaXa1AO0",
      userId: "105962983257369026275",
      isOpenAi: true,
      isArabic: false,
      isWeb: true,
      isContentCreator: false,
    };
    const requestOptions = {
      method: "POST", // Adjust the method as needed
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch(
        "https://whilelearn.onrender.com/streamWhilelearn",
        requestOptions,
      );
      if (response.body === null) {
        console.error("Response body is null");
        return;
      }
      Messages.push({
        message: null,
        qurey: qurey,
      });
      title.push("");
      source.push("");

      Messages.push({
        message: "",
        qurey: null,
      });
      title.push("");
      source.push("");
      setLoading(false);
      let doneSearch = false;
      let doneQustion = false;
      const reader = response.body.getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          console.log("Updated title:", title);
          console.log("Updated source:", source);
          setLoading(false);
          break;
        }
        let newData = "";
        newData = new TextDecoder().decode(value);
        if (newData.includes(">>")) {
          doneSearch = true;
        }
        if (newData.includes("&&")) {
          if (newData.includes("title") && newData.includes("source")) {
            const arra = newData.split("&&");

            arra.map((ele) => {
              if (ele.includes("title")) {
                title[length - 1] = title.at(-1) + ele;
              }
              if (ele.includes("source")) {
                source[length - 1] = source.at(-1) + ele;
              }
            });
          }
          if (newData.includes("title")) {
            title[length - 1] = title.at(-1) + newData;
          }
          if (newData.includes("source")) {
            source[length - 1] = source.at(-1) + newData;
          }

          continue;
        }

        console.log(newData);

        if (!doneSearch) {
          Messages.at(-1)!.message = Messages.at(-1)!.message + newData;
        } else if (!doneQustion) {
          setqustion((pre) => [...pre, newData]);
        }

        dispatch();
      }
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  return (
    <>
      <div
        className={`${
          live ? "" : "fixed bottom-20 lg:right-28 right-2 z-50"
        } bg-white border border-whileRed rounded-xl overflow-clip shadow-lg w-[400px] h-[550px]`}
      >
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
            <Fragment key={idx}>
              {ele.message !== null ? (
                <ChatPost
                  search={ele}
                  title={title[idx]}
                  source={source[idx]}
                ></ChatPost>
              ) : (
                <div className="w-full flex justify-end p-2">
                  <div
                    className={`p-2 rounded-md border max-w-[300px] text-sm shadow bg-whileRed text-white border-whileRed`}
                  >
                    <div className="font-bold text-base text-center w-full">
                      {ele.qurey}
                    </div>
                  </div>{" "}
                </div>
              )}
            </Fragment>
          ))}
          {Loading ? (
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
                !Loading
              ) {
                onSubmit();
              }
            }}
          ></Input>
          <Button
            onClick={() => {
              onSubmit();
            }}
            className="bg-whileRed hover:bg-whileRed/95"
            disabled={Loading || qurey.length <= 2 || qurey.length > 150}
          >
            Ask
          </Button>
        </div>
      </div>
    </>
  );
}
