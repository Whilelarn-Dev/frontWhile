import data from "@/data/customer.json";
import Image from "next/image";
import Card from "./components/Card";
import RequestFree from "../components/first/RequestFree";

export default function page() {
  return (
    <div className="h-screen w-screen bg-whileWhite overflow-x-hidden">
      <Card></Card>
      <RequestFree text={"join us as content creater"} />
    </div>
  );
}
