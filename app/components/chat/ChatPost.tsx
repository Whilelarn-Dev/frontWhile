"use client";

import { formatText } from "@/lib/TextFormater";
import { WebPostResponseType } from "@/type/WebPostType";
import Link from "next/link";
import { useState } from "react";

export default function ChatPost({ ele }: { ele: WebPostResponseType }) {
  const [Read, setRead] = useState(true);
  return (
    <>
      <div
        className={`p-2 rounded-lg m-2 border-b max-w-[300px] border-gray-200  bg-gray-100 shadow`}
      >
        <div className="font-bold text-lg text-center w-full">
          {formatText(ele?.title)}
        </div>
        <div className="text-sm">{formatText(ele?.search_result, Read)}</div>
        {ele.search_result.length > 200 && (
          <div
            onClick={() => setRead(!Read)}
            className="text-sm cursor-pointer hover:text-whileRed hover:underline"
          >
            {!Read ? "Read Less" : " read more ..."}
          </div>
        )}
      </div>
      <div className="border m-1 border-whileRed rounded-lg bg-white text-xs w-fit text-whileRed text-center p-2">
        <Link
          href={ele?.source}
          target="_blank"
          className="text-whileRed"
          rel="noopener noreferrer"
        >
          {ele?.source}
        </Link>
      </div>
    </>
  );
}
