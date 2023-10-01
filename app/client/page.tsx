import data from "@/data/customer.json";
import Image from "next/image";
import Card from "./components/Card";

export default function page() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Card></Card>
    </div>
  );
}
