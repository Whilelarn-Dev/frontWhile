import Link from "next/link";
import React from "react";

export default function whatchFull() {
  return (
    <Link
      href={"https://www.youtube.com/watch?v=1J5w3EjVOkM&feature=youtu.be"}
      target="_blank"
      className="flex justify-center items-center w-[320px] hover:shadow-lg
       h-[60px] rounded-full bg-whileWhite text-2xl
     border-gray-300 border text-whileRed"
    >
      Watch Full Demo
    </Link>
  );
}
