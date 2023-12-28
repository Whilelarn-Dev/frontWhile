import { CheckCircle } from "lucide-react";
import Image from "next/image";
import InputsLinks from "./InputsLinks";
const checkList = [
  " Affordable pricing",
  " Cancel any time",
  "Embeds ChatGPT inside the website",
  "Regular update to the bot",
  "Tech support",
  " Connecting any data (words, pdfs, txt, etc)",
  " Arabic language support",
];
export default function FirstPage() {
  return (
    <div className="pt-20 h-screen w-full flex">
      <div className="flex-1 p-8 md:p-16">
        <div className="text-4xl md:text-4xl  xl:text-5xl w-full font-merriweather font-bold max-w-[500px] text-center">
          Connect Your <span className="text-whileRed">Website</span> with{" "}
          <span className="text-whileRed">ChatGPT</span>
        </div>
        <div className="text-base md:text-lg text-gray-750 w-full font-thin max-w-[500px] ml-5 mt-5 md:mt-8">
          Integrate ChatGPT as a Customer Care Service to Effortlessly Answer
          Visitor Questions, Boosting Overall User Satisfaction and Enhancing
          Their Journey on Your Website.
        </div>
        <div className="flex gap-4 md:gap-5 flex-wrap mt-6 md:mt-10">
          {checkList.map((ele, index) => (
            <span
              key={index}
              className="text-sm md:text-base gap-1 items-center flex w-fit h-fit"
            >
              <CheckCircle color="#D74148" />
              {ele}
            </span>
          ))}
        </div>
        <InputsLinks valus={0}></InputsLinks>
      </div>
      {/* right part */}
      <div className="hidden lg:block lg:flex-1 p-20">
        <div className="relative w-full h-full ">
          <Image alt="demo" src={"/firstpage.jpeg"} fill></Image>
        </div>
      </div>
    </div>
  );
}
