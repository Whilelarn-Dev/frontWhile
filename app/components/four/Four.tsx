"use client";
import { db } from "@/lib/firebase";
import { ClientType } from "@/type/clientType";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Chat from "../chat/Chat";
export default function Four() {
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
    <div className="flex items-center flex-col lg:flex-row mt-12 lg:mt-32">
      <div className="flex-1 flex lg:p-20 flex-col justify-center space-y-4">
        <div className="text-whileRed">Live Demo</div>
        <div className="text-5xl font-bold">Try it yourself</div>
        <div>and ask the website about the service we provide!</div>
      </div>
      {/* right part */}
      <div className=" lg:flex-1 lg:flex justify-center p-5 lg:p-14">
        <Chat client={clientList} live={true}></Chat>
      </div>
    </div>
  );
}
