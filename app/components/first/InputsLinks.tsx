"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InputsLinks({ valus }: { valus: number }) {
  return (
    <>
      {valus === 0 ? (
        <div className=" lg:flex gap-2 mt-8 space-y-2 lg:mt-14 lg:space-y-0">
          <Button
            size={"default"}
            className="bg-blue-600 text-base md:text-lg hover:bg-blue-800 w-full lg:w-96 xl:w-72"
          >
            Start a free trial
          </Button>
          <Input placeholder="write website link"></Input>
        </div>
      ) : (
        <div className=" space-y-2">
          {" "}
          <Button
            size={"default"}
            className="bg-blue-600 text-base md:text-lg hover:bg-blue-800 w-full lg:w-96 xl:w-72"
          >
            Start a free trial
          </Button>
          <Input placeholder="write website link"></Input>
        </div>
      )}
    </>
  );
}
