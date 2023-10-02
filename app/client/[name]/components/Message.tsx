import React from "react";

interface MessageProps {
  message: string;
  right: boolean;
}
export default function Message({ message, right }: MessageProps) {
  return (
    <>
      {right ? (
        <div className="w-full flex justify-end p-3 rounded-l ">
          <div className="flex flex-row items-center">
            <div className="relative ml-3 text-sm bg-slate-100 py-2 px-4 shadow rounded-xl">
              <div>{message}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3 w-full flex justify-start  rounded-lg">
          <div className="flex flex-row items-center">
            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
              <div>{message}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
