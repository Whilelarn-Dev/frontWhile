"use client";
import { Button } from "@/components/ui/button";

export default function InputsLinks({ valus }: { valus: number }) {
  return (
    <>
      {valus === 0 ? (
        <div className=" lg:flex gap-2 mt-8 space-y-2 lg:mt-14 lg:space-y-0">
          <Button
            onClick={() =>
              window.open(
                "https://calendly.com/muwaffaqimam/whilelearn-meetings",
                "_blank",
              )
            }
            size={"default"}
            className="bg-whileRed  text-base md:text-lg w-full lg:w-96 xl:w-72"
          >
            Book Meeting
          </Button>
        </div>
      ) : (
        <div className=" space-y-2">
          {" "}
          <Button
            onClick={() =>
              window.open(
                "https://calendly.com/muwaffaqimam/whilelearn-meetings",
                "_blank",
              )
            }
            size={"default"}
            className="bg-whileRed hover:bg-whileRed/90 text-base md:text-lg  w-full"
          >
            Book Meeting
          </Button>
        </div>
      )}
    </>
  );
}
