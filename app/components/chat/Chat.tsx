"use client";
import DotSwapper from "@/app/client/[name]/components/right-part/Wating";
import {
  useActivateStore,
  useCheck,
  useMessagesCountStore,
  useUserStore,
} from "@/app/store/zustand";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { WebPostType } from "@/type/WebPostType";
import { XIcon } from "lucide-react";
import Image from "next/image";

import { ClientType } from "@/type/clientType";
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import LogoWhile from "../../../components/shared/LogoWhile";
import ChatPost from "./ChatPost";
export interface MessagesType {
  message: string | null;
  qurey: string | null;
}
const Messages: MessagesType[] = [];
const lastMessage: string[] = [];
let questionResults: string[] = [];
export default function Chat({
  setopen,
  live,
  client,
}: {
  setopen?: Dispatch<SetStateAction<boolean>>;
  live: boolean;
  client: ClientType | undefined;
}) {
  const [qurey, setqurey] = useState<string>("");
  const sendActivate = useActivateStore();
  const [_, dispatch] = useReducer((x) => x + 1, 0);
  const [Loading, setLoading] = useState<boolean>(false);
  const [qustion, setqustion] = useState<string[]>([]);
  const { decrement } = useMessagesCountStore();
  const authStore = useUserStore();
  const check = useCheck();
  useEffect(() => {
    questionResults = client?.questions || [];
    dispatch();
  }, [client]);

  const onSubmit = async () => {
    setLoading(true);
    setqurey("");
    questionResults = [];
    setqustion([]);
    const payload: WebPostType = {
      query: qurey,
      apiKey:
        client?.apiKey ||
        "Whilelearn-X17GTzdbGFam1vmpvI4YF6Wn6ayLejKPtSgUaXa1AO0",
      userId: authStore.user?.id || "",
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

      Messages.push({
        message: "",
        qurey: null,
      });
      lastMessage.push("");
      let doneSearch = false;
      let doneQustion = false;
      const reader = response.body.getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          decrement();
          setLoading(false);
          dispatch();
          break;
        }
        let newData = "";
        newData = new TextDecoder().decode(value);

        if (newData.includes("{") && newData.includes("}")) {
          let firstIndex = newData.indexOf("[") + 1;
          let lastIndex = newData.indexOf("]");
          questionResults = newData.substring(firstIndex, lastIndex).split(",");

          let firstIndex2 = newData.indexOf("source") + 10;
          let lastIndex2 = newData.indexOf("title") - 3;

          lastMessage.push(
            newData.substring(firstIndex2, lastIndex2) +
              "000" +
              newData.substring(lastIndex2 + 12, newData.length - 2),
          );
          continue;
        }
        if (!doneSearch) {
          Messages.at(-1)!.message = Messages.at(-1)!.message + newData;
        } else if (!doneQustion) {
          setqustion((pre) => [...pre, newData]);
        }

        dispatch();
      }
    } catch (error) {
      console.error("Fetch failed:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`${
          live ? "" : "fixed bottom-20 lg:right-28 right-10 z-50"
        } bg-white border border-whileRed rounded-xl overflow-clip shadow-lg w-[300px] md:w-[400px] h-[550px]`}
      >
        <div className="bg-whileRed h-20 flex justify-center items-center">
          <div
            onClick={() => {
              setopen && setopen(false);
            }}
            className="text-white absolute top-7 text-lg right-4 cursor-pointer"
          >
            <XIcon></XIcon>
          </div>
          <div className="text-white text-3xl">WhileLearn</div>
        </div>
        {sendActivate.activated ? (
          <>
            {/* Chat Body */}
            <div className="h-[400px] bg-white overflow-y-auto scrollbar-track-red-200 scrollbar-thumb-red-400 scrollbar-thin">
              {Messages.map((ele, idx) => (
                <Fragment key={idx}>
                  {ele.message !== null ? (
                    <ChatPost
                      search={ele}
                      lastMessage={lastMessage[idx]}
                    ></ChatPost>
                  ) : (
                    <div className="w-full flex justify-end p-2">
                      <div
                        className={`p-2 rounded-l-md rounded-b-md  max-w-[300px] text-sm  bg-whileRed text-white`}
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
              {questionResults.map((ele, idx) =>
                ele.length > 2 ? (
                  <div
                    key={idx}
                    onClick={() => setqurey(ele)}
                    className="w-full flex justify-end p-2 cursor-pointer"
                  >
                    <div
                      className={`p-2 rounded-l-md rounded-b-md  max-w-[300px] text-sm hover:bg-whileRed/90 bg-whileRed text-white `}
                    >
                      <div className="font-bold text-base text-center w-full">
                        {ele.replaceAll('"', "")}
                      </div>
                    </div>{" "}
                  </div>
                ) : null,
              )}
            </div>
            {/* Chat Footer */}
            <div className="h-[70px] px-3 gap-3 flex items-center">
              <Input
                placeholder={client?.hint || "Enter your question"}
                value={qurey}
                onChange={(e) => setqurey(e.target.value)}
                className="w-full"
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    qurey.length > 1 &&
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
                disabled={Loading || qurey.length <= 1 || qurey.length > 150}
              >
                Ask
              </Button>
            </div>
          </>
        ) : (
          <div>
            <div className="w-full flex justify-center items-center mt-7">
              <div className="relative w-24 h-16">
                <Image
                  src={"/while/red.png"}
                  width={100}
                  height={100}
                  alt="logo"
                ></Image>
              </div>
            </div>
            <div className="w-full flex justify-center mt-10">
              <LogoWhile></LogoWhile>
            </div>
            <div className="w-full flex justify-center mt-5 text-black">
              Ask the bot about the sevice we provide!
            </div>
            <div className="flex items-center justify-center mt-12">
              <Button
                onClick={async () => {
                  authStore.googleSignIn(check.check);
                  if (authStore.user) {
                    sendActivate.setActivated(true);
                    setInterval(() => dispatch(), 100);
                  }
                }}
                className="bg-whileRed hover:bg-whileRed/95 "
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-6">
                    <Image
                      src={"/icons8-google-50.png"}
                      alt="google icon"
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div> SIGN IN TO START CONVERSATION</div>
                </div>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-2 w-full justify-center">
              <Checkbox
                className="w-4 h-4"
                checked={check.check}
                onCheckedChange={() => check.setCheck()}
              />

              <div className="text-xs">
                Receive offers, discount and news on your email?
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
