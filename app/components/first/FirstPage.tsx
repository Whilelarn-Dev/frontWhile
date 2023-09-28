import Link from "next/link";
import Iframe from "react-iframe";
import DeomoButtn from "./DeomoButtn";
import WhatchFull from "./WhatchFull";
import RequestFree from "./RequestFree";
import { mdiLinkedin } from "@mdi/js";
import { Icon } from "@mdi/react";
import { mdiWhatsapp } from "@mdi/js";

export default function FirstPage() {
  return (
    <>
      <div className="flex justify-between pt-8 px-14">
        <h1 className="text-[#d74148] md:text-4xl text-3xl ">
          While<span className="text-[#6877c9]">learn();</span>
        </h1>
        <div className="flex gap-4">
          <Link href={"#"}>
            <div className="relative h-[40px] w-[40px]">
              <Icon
                path={mdiWhatsapp}
                title="User Profile"
                size={2}
                horizontal
                vertical
                rotate={180}
                color="#6877c9"
              />
            </div>
          </Link>
          <Link href={"#"}>
            <div className="relative h-[100px] w-[100px]">
              <Icon
                path={mdiLinkedin}
                title="User Profile"
                size={2}
                horizontal
                vertical
                rotate={180}
                color="#6877c9"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:items-center md:px-14 px-5">
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-merriweather mb-5 font-bold">
            Whilelearn
          </h1>
          <p className="text-2xl md:text-3xl font-merriweather mb-6">
            Let user chat with your business using chatGPT!
          </p>
          <DeomoButtn />
          <p className="mt-4
          cursor-pointer
          text-whileRed font-merriweather text-2xl">
            Try Our Solution
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="relative h-[200px] md:h-[350px] w-max-[200px] w-full md:w-max-[600px] mb-5">
            <Iframe
              url="https://www.youtube.com/embed/hl-ws2rhj6Q"
              className="mb-5 h-"
              height="100%"
              width="100%"
            ></Iframe>
          </div>
          <WhatchFull />
        </div>
      </div>
      <div className=" w-full items-center h-[88px] mt-5 md:mt-5 bg-whileRed p-2 flex justify-between">
        <h2 className="text-whileWhite text-4xl font-merriweather font-bold ">
          Case Studies-1
        </h2>
      </div>
      <RequestFree />
    </>
  );
}
