"use client";

import { formatText } from "@/lib/TextFormater";
import Link from "next/link";
import { useState } from "react";
import { MessagesType } from "./Chat";

export default function ChatPost({
  search,
  source,
  title,
}: {
  search: MessagesType;
  title: string;
  source: string;
}) {
  const [Read, setRead] = useState(true);

  return (
    <>
      <div
        className={`p-2 rounded-lg m-2 border-b max-w-[300px] border-gray-200  bg-gray-100 shadow`}
      >
        {title.length > 1 && (
          <div className="font-bold text-lg text-center w-full">
            {formatText(title)}
          </div>
        )}
        {search.message && search.message.length > 1 && (
          <div className="text-sm">{formatText(search.message)}</div>
        )}
        {/* {search.length > 1 && (
          <div
            onClick={() => setRead(!Read)}
            className="text-sm cursor-pointer hover:text-whileRed hover:underline"
          >
            {!Read ? "Read Less" : " read more ..."}
          </div>
        )} */}
      </div>
      {source.length > 1 && (
        <div className="border m-1 border-whileRed rounded-lg bg-white text-xs w-fit text-whileRed text-center p-2">
          <Link
            href={source}
            target="_blank"
            className="text-whileRed"
            rel="noopener noreferrer"
          >
            {source}
          </Link>
        </div>
      )}
    </>
  );
}
