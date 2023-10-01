import Link from "next/link";
import Iframe from "react-iframe";
import DeomoButtn from "./DeomoButtn";
import WhatchFull from "./WhatchFull";
import RequestFree from "./RequestFree";
import { mdiLinkedin } from "@mdi/js";
import { Icon } from "@mdi/react";
import { mdiWhatsapp } from "@mdi/js";
import TrySol from "./TrySol";

export default function FirstPage() {
  return (
    <>
      <div className="flex justify-between items-center pt-8 px-14">
        <h1 className="text-[#d74148] md:text-4xl text-2xl ">
          While<span className="text-[#6877c9]">learn();</span>
        </h1>
        <div className="flex gap-4 md:mb-12 mb-8">
          <Link
            target="_blank"
            href={
              "https://api.whatsapp.com/send/?phone=%2B79093120434&text&type=phone_number&app_absent=0"
            }
          >
            <Icon
              path={mdiWhatsapp}
              title="User Profile"
              horizontal
              vertical
              rotate={180}
              color="#6877c9"
              className="h-8 w-8 md:h-12 md:w-12"
            />
          </Link>
          <Link
            target="_blank"
            href={
              "https://www.linkedin.com/in/%F0%9F%94%B4-muwaffaq-imam-416807b1/"
            }
          >
            <Icon
              path={mdiLinkedin}
              title="User Profile"
              className="h-8 w-8 md:h-12 md:w-12"
              horizontal
              vertical
              rotate={180}
              color="#6877c9"
            />
          </Link>
        </div>
      </div>
      <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:items-center md:px-14 px-5">
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-merriweather mb-5 font-bold">
            Whilelearn
          </h1>
          <p className="text-xl text-center md:text-3xl font-merriweather mb-6">
            Let user chat with your business using chatGPT!
          </p>
          <DeomoButtn />
          <TrySol/>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="relative h-[200px] md:h-[350px] w-max-[200px] w-full md:w-max-[600px] mb-5">
            <Iframe
              url="https://www.youtube.com/embed/hl-ws2rhj6Q"
              className="rounded-sm"
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
