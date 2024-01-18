"use client";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import LogoWhile from "../../../components/shared/LogoWhile";
import { ClientType } from "../../../type/clientType";
import CardItem from "./CardItem";
export default function Card() {
  const [clientList, setClientList] = useState<ClientType[]>([]);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "WebClients"));
        setClientList(
          querySnapshot.docs.map((doc) => doc.data() as ClientType),
        );
      } catch (error) {
        console.error("Error fetching clients:", error);
        // Handle the error appropriately, maybe set an error state
      }
    };

    fetchClients();
  }, []);
  return (
    <div className="mb-16 bg-gray-50">
      <div className="container flex justify-center mx-auto pt-16">
        <div className="flex flex-col justify-center items-center">
          <LogoWhile></LogoWhile>
          <h1 className="xl:text-3xl text-2xl text-center mt-3 b text-gray-800 font-extrabold pb-2 ">
            Chat With Our Clients
          </h1>
        </div>
      </div>
      <div className="w-full  px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            {clientList.map((ele, idx) => {
              return (
                <CardItem
                  key={idx} 
                  image={ele.image ? ele.image : ""}
                  firstName={ele.clientName}
                  name={ele.clientName}
                  discreption={ele.hint}
                  specialize={ele.folderName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
