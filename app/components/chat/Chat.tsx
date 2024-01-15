"use client";
import DotSwapper from "@/app/client/[name]/components/right-part/Wating";
import {
  useActivateStore,
  useMessagesCountStore,
  useUserStore,
} from "@/app/store/zustand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/firebase";
import { WebPostType } from "@/type/WebPostType";
import { UserPostType } from "@/type/fireType";
import { doc, getDoc, setDoc } from "firebase/firestore";
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
const lastMessage: string[] = [];
let questionResults: string[] = [];
export default function Chat({
  setopen,
  live,
}: {
  setopen?: Dispatch<SetStateAction<boolean>>;
  live: boolean;
}) {
  const [qurey, setqurey] = useState<string>("");
  const sendActivate = useActivateStore();
  const [_, dispatch] = useReducer((x) => x + 1, 0);
  const [Loading, setLoading] = useState<boolean>(false);
  const [qustion, setqustion] = useState<string[]>([]);
  const { decrement } = useMessagesCountStore();
  const authStore = useUserStore();
  const onSubmit = async () => {
    setLoading(true);
    setqurey("");
    questionResults = [];
    setqustion([]);
    console.log("====================================");
    console.log(authStore.user?.id);
    console.log("====================================");
    const payload: WebPostType = {
      query: qurey,
      apiKey: "Whilelearn-X17GTzdbGFam1vmpvI4YF6Wn6ayLejKPtSgUaXa1AO0",
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
          questionResults = qustion.join(" ").split(">>");
          setLoading(false);
          dispatch();
          break;
        }
        let newData = "";
        newData = new TextDecoder().decode(value);
        if (newData.includes(">>")) {
          doneSearch = true;
        }
        if (newData.includes("&&") && newData.includes("||")) {
          lastMessage.push(newData);
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
          <div className="text-white text-3xl">WhileLearn</div>
        </div>
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
                    {ele}
                  </div>
                </div>{" "}
              </div>
            ) : null,
          )}
        </div>
        {/* Chat Footer */}
        {sendActivate.activated ? (
          <div className="h-[70px] px-3 gap-3 flex items-center">
            <Input
              placeholder="Type your message"
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
        ) : (
          <div className="h-[70px] px-3 gap-3 flex items-center justify-center">
            <Button
              onClick={async () => {
                authStore.googleSignIn();
                if (authStore.user) {
                  const fireStoreUser: UserPostType = {
                    email: authStore.user.email!!,
                    id: authStore.user.id,
                    image: authStore.user.photoURL!!,
                    messages: 100,
                    name: authStore.user.displayName!!,
                  };
                  sendActivate.setActivated(true);
                  dispatch();
                  const userExists = await getDoc(
                    doc(db, "WebUsers", authStore.user.id),
                  );
                  if (userExists.exists()) {
                    return;
                  }
                  const userRef = doc(db, "WebUsers", authStore.user.id);
                  setDoc(userRef, fireStoreUser)
                    .then(() => {
                      console.log("User data posted to Firestore");
                    })
                    .catch((error) => {
                      console.error("Error posting user to Firestore:", error);
                    });
                }
              }}
              className="bg-whileRed hover:bg-whileRed/95 "
            >
              Sign In to use the bot
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
