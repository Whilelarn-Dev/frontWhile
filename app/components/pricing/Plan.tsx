"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
export default function Plan({
  attributes,
  name,
  price,
  src,
}: {
  name: string;
  price: number;
  src: string;
  attributes: string[];
}) {
  return (
    <div
      tabIndex={0}
      className="border cursor-pointer  w-[350px] focus:w-[370px] focus:shadow-2xl shadow rounded-lg p-5 space-y-5 focus:border-whileRed hover:border-whileRed"
    >
      <div className="flex gap-4">
        <div className="releative w-7 h-7">
          <Image src={src} alt="logo" width={100} height={100}></Image>
        </div>
        <div className="text-xl font-bold">{name}</div>
      </div>
      <div>
        <span className="text-2xl font-bold">${price}</span>/mo
      </div>
      <Button className="bg-white text-whileRed hover:text-white border border-whileRed w-full hover:bg-whileRed/90">
        Start a free trial
      </Button>
      <hr />
      <div className="text-sm text-gray-600">INCLUDES:</div>
      {attributes.map((attribute) => (
        <div key={attribute} className="flex gap-2 items-center">
          <CheckCircle color="#D74148" />
          <div className="text-lg">{attribute}</div>{" "}
        </div>
      ))}
    </div>
  );
}
