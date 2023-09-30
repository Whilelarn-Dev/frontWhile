import Image from "next/image";
import cross from "@/app/svg/delete.png";
import { Icon } from "@mdi/react";
import { mdiClockOutline } from "@mdi/js";
import { mdilMagnify, mdilMessageText } from "@mdi/light-js";
import Iframe from "react-iframe";
import second from "@/app/svg/secondDealog.jpeg";
import Link from "next/link";
export default function ThirdPage() {
  return (
    <>
      <main
        className="space-y-4 md:space-y-0 md:flex md:justify-center
      md:mt-8
      mt-4 mb-20
        md:items-center md:px-14 px-5"
      >
        <div className="flex-1">
          <h2 className="md:text-5xl text-center text-2xl font-merriweather font-bold">
            {" "}
            AI-Search is extermely smart
          </h2>
          <p className="text-lg md:text-3xl mt-1 text-center font-merriweather">
            Users can use ChatGPT&apos;s brain, to help them take decisions
          </p>
          <ul
            className="text-lg md:text-2xl font-merriweather
           text-gray-900 space-y-1 md:space-y-3"
          >
            <li className="flex items-center gap-3">
              <div className="relative w-4 h-4">
                <Image src={cross} alt="cross"></Image>
              </div>
              No need for advanced search
            </li>
            <li className="flex items-center gap-3">
              <div className="relative w-4 h-4">
                <Image src={cross} alt="cross"></Image>
              </div>
              No need for database
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
                path={mdilMagnify}
                title="clock"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="#ffc107"
              />
              Search on meaning not keywords matching
            </li>
            <li className="flex items-center gap-2">
              <Icon
                path={mdilMessageText}
                title="clock"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="#ffc107"
              />
              Chatting instesd of browsing!.
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
              href={"https://www.youtube.com/watch?v=M8IXskHyTIc"}
              target="_blank"
            >
              <Image src={second} alt="first image"></Image>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
