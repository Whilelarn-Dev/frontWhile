import { Button } from "@/components/ui/button";
import InputsLinks from "../first/InputsLinks";
const steps = [
  "Add your website link : Provide us with your website link, we will read the content on your website, then connect it to ChatGPT.",
  "Book a meeting : We will arrange a free consultation to understand your business needs and give you your own free demo to experience firsthand.",
  "Receive your widget : Your customized widget will be prepared and ready. We'll guide you step by step in adding it to your website with ease.",
];
export default function ThirdPage() {
  return (
    <>
      <div className="">
        {" "}
        <div className="font-bold mt-12  xl:text-4xl lg:text-3xl md:text-2xl text-xl text-center xl:py-7 lg:py-5 py-3 xl:px-80 lg:px-60 md:px-40 px-5">
          Follow <span className="text-whileRed">These Easy Steps</span> to
          Seamlessly Connect ChatGPT to Your Website Embrace the Future and Ride
          the AI Wave!
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-4 md:items-baseline gap-5 xl:p-4 lg:p-2 p-1 md:space-y-0 space-y-4">
          {steps.map((ele, idx) => (
            <div
              key={idx}
              className="text-base rounded-lg h-full p-3 bg-white shadow-lg md:text-lg text-gray-750 w-full font-thin max-w-[300px] ml-5 mt-5 md:mt-8"
            >
              <div className="bg-whileRed shadow rounded flex justify-center items-center text-white w-fit px-3 py-1 mb-2">
                {idx + 1}
              </div>
              <div className="font-bold">{ele.split(":")[0]}</div>
              <div className="mb-2">{ele.split(":")[1]}</div>
              {idx === 0 ? (
                <InputsLinks key={idx} valus={1} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
