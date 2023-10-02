import Image from "next/image";
import LeftBody from './LeftBody';
import axios from "axios";
import { PersonSchema } from "@/type/postType";
interface Left {
  person: PersonSchema
}
export default async function LeftPart({ person }: Left) {

  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-[600px]">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 h-10 w-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <div className="ml-2 font-bold text-2xl">WhileLearn</div>
        <div
        className="flex justify-center gap-3 items-center bg-white mt-4 w-full py-6 px-4 rounded-lg"
      >
        <div className="relative h-20 w-20 rounded-full  overflow-hidden">
          <Image
            fill
            src={person.image}
            alt="Avatar"
            className="h-full w-full"
          />
        </div>
      </div>
      </div>
      <LeftBody person={person}></LeftBody>
    </div>
  );
}
