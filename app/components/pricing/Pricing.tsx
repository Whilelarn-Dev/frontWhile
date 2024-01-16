import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Plan from "./Plan";
const firstPlanAttrebutes = [
  "$25/mo",
  "1 chatbot",
  "1000 messages per month",
  "Connect 1 website",
  "Up to 150 training web pages",
  "10 file uploads",
  "Up to 15 MB per file",
  "Monthly reports",
];
const secondPlanAttrebutes = [
  "$50/mo",
  "2 chatbots",
  "4000 messages per month",
  "Up to 400 training web pages",
  "50 file uploads",
  "Connect 1 website",
  "Up to 20 MB per file",
  "Chat export",
  "Regular updates",
  "API Access",
];
const thirdPlanAttrebutes = [
  "$100/mo",
  "Ability to integrate Google Gemin, and palm.",
  "4 chatbots",
  "Connect 3 websites",
  "10,000 messages per month",
  "1000 training web pages",
  "100 file uploads",
  "Up to 50 MB per file",
  "Customize Chatbot",
  "API Access",
];
const fourthPlanAttributes = [
  "$500/mo",
  "10 chatbots",
  "60,000 messages per month",
  "Ability to integrate ChatGPT, Google Gemini, and Chat-bison",
  "Connect 5 websites",
  "2,000 training web pages",
  "200 file uploads",
  "Up to 100 MB per file",
  "API Access",
  "Monthly reports",
  "Customize Chatbot",
];
const plans = [
  {
    name: "Basic",
    price: 25,
    attributes: firstPlanAttrebutes,
    src: "/pricing/Box.svg",
  },
  {
    name: "Pro",
    price: 50,
    attributes: secondPlanAttrebutes,
    src: "/pricing/Rocket.svg",
  },
  {
    name: "Business",
    price: 100,
    attributes: thirdPlanAttrebutes,
    src: "/pricing/Zap.svg",
  },
];
const fourthPlan = {
  name: "Scale",
  price: 500,
  attributes: fourthPlanAttributes,
};

export default function Pricing() {
  return (
    <div className="w-screen min-h-screen space-y-10">
      <div className="flex flex-col items-center h-full w-full">
        <div className="text-whileRed text-center">Pricing plans</div>
        <div className="text-center text-xl md:text-3xl">
          Affordable price, for an on going service
        </div>
      </div>
      <div>
        <div className="flex gap-10 flex-wrap justify-center">
          {plans.map((plan) => (
            <Plan
              key={plan.name}
              name={plan.name}
              price={plan.price}
              src={plan.src}
              attributes={plan.attributes}
            />
          ))}
        </div>
      </div>
      <div className="px-20 my-3">
        <div className="border cursor-pointer focus:shadow-2xl shadow rounded-lg p-5 space-y-5 focus:border-whileRed hover:border-whileRed">
          <div className="md:flex gap-6">
            <div className=" basis-4/12 space-y-5">
              <div className="flex gap-4">
                <div className="releative w-7 h-7">
                  <Image
                    src={"/pricing/Sheild.svg"}
                    alt="logo"
                    width={100}
                    height={100}
                  ></Image>
                </div>
                <div className="text-xl font-bold">{fourthPlan.name}</div>
              </div>
              <div>
                <span className="text-2xl font-bold">${fourthPlan.price}</span>
                /mo
              </div>
              <Button
                onClick={async () => {
                  window.open(
                    "https://calendly.com/muwaffaqimam/whilelearn-meetings",
                    "_blank",
                  );
                }}
                className="bg-white text-whileRed hover:text-white border border-whileRed w-full hover:bg-whileRed/90"
              >
                Countact us
              </Button>
              <hr />
            </div>

            <div>
              <div className="text-sm text-gray-600 mb-2">INCLUDES:</div>
              <div className="text-lg font-bold grid gap-5 md:gap-0 lg:grid-cols-2">
                {fourthPlanAttributes.map((attribute) => (
                  <div key={attribute} className="flex gap-2 items-center">
                    <CheckCircle color="#D74148" />
                    <div className="text-base">{attribute}</div>{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
