"use client";
import {
  useActivateStore,
  useRefreshMessagesStore,
  useUserStore,
} from "@/app/store/zustand";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FirebaseUser, auth } from "@/lib/firebase";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function ClientHeaders({ name }: { name: string }) {
  const authStore = useUserStore();
  const sendActivate = useActivateStore();
  const [mount, setmount] = useState(false);
  const [first, setfirst] = useState(true);
  const [open, setopen] = useState(false);
  const { setRefresh } = useRefreshMessagesStore();
  const [user, setuser] = useState<FirebaseUser | null>({
    displayName: null,
    email: null,
    photoURL: null,
    id: "",
  });
  useEffect(() => {
    setmount(true);
  }, []);
  if (!mount) return null;
  const authToken = window.localStorage.getItem("auth");
  if (authToken && first && mount) {
    setfirst(false);
    setuser(JSON.parse(authToken));
    console.log("user", user);
    sendActivate.setActivated(true);
  }
  return (
    <>
      <div className="mr-10">
        {authToken && user ? (
          <div className="flex justify-center w-full h-full items-center gap-3 p-5">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="w-8 h-8 md:w-10 md:h-10">
                  <AvatarImage
                    src={user?.photoURL ? user.photoURL : ""}
                    alt={user?.displayName ? user.displayName : ""}
                  />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Setting</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setopen(true)}>
                  Delete All Messages
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    auth.signOut();
                    localStorage.removeItem("auth");
                    setuser(null);
                    sendActivate.setActivated(false);
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog open={open} onOpenChange={setopen}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>DELETE ALL MESSAGE</DialogTitle>
                  <DialogDescription>
                    are you sure you want to delete all message.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      setopen(false);
                      localStorage.removeItem(name);
                      window.location.reload();
                    }}
                  >
                    Sure
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <div className="flex gap-1 items-center">
              {" "}
              <div className="text-base md:text-xl">15 Messages left</div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <PlusCircle className="w-5 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Buy 100 Messages (1.99$)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ) : (
          <Button
            onClick={() => {
              authStore.googleSignIn();
              if (authStore.user) {
                setuser(authStore.user);
              }
            }}
          >
            Login To Send Messasge
          </Button>
        )}
      </div>
    </>
  );
}

/* <Avatar size={40} icon={<UserOutlined />} /> */
