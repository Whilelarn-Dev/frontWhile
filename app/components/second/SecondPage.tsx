import Image from "next/image";
import cross from "@/app/svg/delete.png";
import { Icon } from "@mdi/react";
import { mdiClockOutline, mdiStar, mdiLightningBolt } from "@mdi/js";
import Iframe from "react-iframe";
import first from "@/app/svg/firstDealog.jpeg";
import Link from "next/link";
export default function SecondPage() {
  return (
    <>
      <main
        className="space-y-4 md:space-y-0 md:flex md:justify-center
      md:mt-8
      mt-4
        md:items-center md:px-14 px-5"
      >
        <div className="flex-1">
          <h2 className="md:text-5xl text-center text-2xl font-merriweather font-bold">
            {" "}
            Replace User Guides & FAQs
          </h2>
          <p className="text-lg md:text-3xl text-center font-merriweather">
            Connect any PDF or any data to ChatGPT&apos;s brain, and let user
            chat with it
          </p>
          <ul
            className="text-lg md:text-2xl font-merriweather
           text-gray-900 space-y-1 md:space-y-3"
          >
            <li className="flex items-center gap-3">
              <div className="relative w-4 h-4">
                <Image src={cross} alt="cross"></Image>
              </div>
              No need for FAQs
            </li>
            <li className="flex items-center gap-3">
              <div className="relative w-4 h-4">
                <Image src={cross} alt="cross"></Image>
              </div>
              No need for big User guids
            </li>
            <li className="flex items-center gap-2">
              <Icon
                path={mdiClockOutline}
                title="clock"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="green"
              />
              Available 24/7
            </li>
            <li className="flex items-center gap-2">
              <Icon
                path={mdiStar}
                title="clock"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="#ffc107"
              />
              The ulltimate customer server
            </li>
            <li className="flex items-center gap-2">
              <Icon
                path={mdiLightningBolt}
                title="clock"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="#ffc107"
              />
              Faster access to information
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div
            className="relative
          h-full
           h-max-[200px] md:h-max-[350px]
            w-max-[200px] w-full md:w-max-[600px] mb-5"
          >
            <Link
              href={"https://www.youtube.com/watch?v=3gb3LjPgGNg"}
              target="_blank"
            >
              <Image src={first} alt="first image"></Image>
            </Link>
          </div>
        </div>
      </main>
      <div className=" w-full items-center h-[88px] mt-5 md:mt-5 bg-whileRed p-2 flex justify-between">
        <h2 className="text-whileWhite text-4xl font-merriweather font-bold ">
          Case Studies-2
        </h2>
      </div>
    </>
  );
}
