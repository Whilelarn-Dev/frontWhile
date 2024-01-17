"use client";

import { formatText } from "@/lib/TextFormater";
import Link from "next/link";
import { MessagesType } from "./Chat";
import { extract } from "./LastExtract";

export default function ChatPost({
  search,
  lastMessage,
}: {
  search: MessagesType;
  lastMessage: string;
}) {
  const { source, title } = extract(lastMessage);
  return (
    <>
      <div
        className={`p-2 rounded-r-md rounded-b-md  m-2  max-w-[300px]   bg-gray-100 `}
      >
        {search.message && search.message.length > 1 && (
          <div className="text-sm">{formatText(search.message)}</div>
        )}
      </div>
      {source.length > 1 && (
        <div className="border m-1 border-whileRed rounded-lg bg-white text-xs w-fit text-whileRed text-center p-2">
          <Link
            href={source}
            target="_blank"
            className="text-whileRed"
            rel="noopener noreferrer"
          >
            {title}
          </Link>
        </div>
      )}
    </>
  );
}
