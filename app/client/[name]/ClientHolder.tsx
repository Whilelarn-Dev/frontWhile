"use client";
import Chat from "@/app/components/chat/Chat";
import { db } from "@/lib/firebase";
import { ClientType } from "@/type/clientType";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function ClientHolder({ name }: { name: string }) {
  const [clientList, setClientList] = useState<ClientType>();
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "WebClients"), where("folderName", "==", name)),
        );
        console.log(name);

        console.log(querySnapshot.docs);

        setClientList(querySnapshot.docs[0].data() as ClientType);
      } catch (error) {
        console.error("Error fetching clients:", error);
        // Handle the error appropriately, maybe set an error state
      }
    };

    fetchClients();
  }, []);
  return (
    <div className="flex items-center flex-col lg:flex-row pt-12 lg:px-20">
      <div className="flex-1 flex lg:p-20 flex-col justify-center space-y-4">
        <div className="text-whileRed">Live Demo</div>
        <div className="text-5xl font-bold">Try it yourself</div>
        <div>Preview your website`s Chatbot widget</div>
        <div>- Customize it to suit your prefrences</div>
        <div>- Imagine the seamless integration</div>
        <div>- Explore features for a personalized experience!</div>
      </div>
      {/* right part */}
      <div className=" lg:flex-1 lg:flex justify-center p-5 lg:p-14">
        <Chat client={clientList} live={true}></Chat>
      </div>
    </div>
  );
}
