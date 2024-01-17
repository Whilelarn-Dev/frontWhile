"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";
import { ClientType } from "@/type/clientType";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import Chat from "./Chat";

export default function ChatHolder() {
  const [open, setopen] = useState<boolean>(false);
  const [clientList, setClientList] = useState<ClientType>();
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDoc(
          doc(
            db,
            "WebClients",
            "Whilelearn-X17GTzdbGFam1vmpvI4YF6Wn6ayLejKPtSgUaXa1AO0",
          ),
        );
        setClientList(querySnapshot.data() as ClientType);
      } catch (error) {
        console.error("Error fetching clients:", error);
        // Handle the error appropriately, maybe set an error state
      }
    };

    fetchClients();
  }, []);

  return (
    <>
      <Button
        size={"icon"}
        draggable={true}
        onClick={() => setopen((pre) => !pre)}
        className="rounded-full p-2 h-14 w-14 shadow-xl  flex items-center justify-center z-50 bg-whileRed hover:bg-whileRed fixed right-14 bottom-5"
      >
        <Image
          src={"/while/white.png"}
          width={90}
          height={90}
          alt="logo"
        ></Image>
      </Button>
      {open && <Chat client={clientList} live={false} setopen={setopen}></Chat>}
    </>
  );
}
