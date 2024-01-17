"use client";
import {
  useActivateStore,
  useCheck,
  useMessagesCountStore,
  useUserStore,
} from "@/app/store/zustand";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth, db } from "@/lib/firebase";
import { useEffect, useReducer, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { doc, getDoc } from "firebase/firestore";

export default function LastPart() {
  const sendActivate = useActivateStore();
  const [_, dispatch] = useReducer((x) => x + 1, 0);
  const [mount, setmount] = useState(false);
  const authStore = useUserStore();
  const [first, setfirst] = useState(true);
  const { setCount, count } = useMessagesCountStore();
  const check = useCheck();
  useEffect(() => {
    setmount(true);
    async function hhh() {
      if (authStore.user?.email) {
        const userExists = await getDoc(
          doc(db, "WebUsers", authStore.user.email),
        );
        setCount(userExists.data()?.messages || 0);
      }
    }
    hhh();
  }, [authStore.user, setCount]);
  if (!mount) return null;
  const authToken = window.localStorage.getItem("auth");
  if (authToken && first && mount) {
    setfirst(false);
    authStore.user = JSON.parse(authToken);
    sendActivate.setActivated(true);
  }
  return (
    <div className="flex gap-4 items-center">
      <div className="">
        {authToken && authStore.user ? (
          <div className="flex justify-center w-full h-full items-center gap-3 p-5">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="w-8 h-8 md:w-10 md:h-10">
                  <AvatarImage
                    src={
                      authStore.user?.photoURL ? authStore.user.photoURL : ""
                    }
                    alt={
                      authStore.user?.displayName
                        ? authStore.user.displayName
                        : ""
                    }
                  />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Setting</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    auth.signOut();
                    localStorage.removeItem("auth");
                    sendActivate.setActivated(false);
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex gap-1 items-center">
              {" "}
              <div className="text-base md:text-lg">{count} Messages left</div>
            </div>
          </div>
        ) : (
          <Button
            className=" bg-whileRed text-xs w-fit h-fit md:text-base lg:text-lg hover:bg-whileRed"
            onClick={async () => {
              authStore.googleSignIn(check.check);
              if (authStore.user) {
                sendActivate.setActivated(true);
                setInterval(() => dispatch(), 100);
              }
            }}
          >
            Sign In
          </Button>
        )}
      </div>
      <Button
        onClick={async () => {
          window.open(
            "https://calendly.com/muwaffaqimam/whilelearn-meetings",
            "_blank",
          );
        }}
        className="hidden md:block text-xs w-fit h-fit bg-white md:text-base lg:text-lg text-whileRed border border-whileRed hover:bg-white hover:border-whileRed hover:text-whileRed"
      >
        Book Meeting
      </Button>
    </div>
  );
}
