import Plan from "./Plan";

const firstPlanAttrebutes = [
  "1 User",
  "5GB Storage",
  "Unlimited Public Projects",
  "Community Access",
  "Unlimited Private Projects",
  "Dedicated Phone Support",
  "Free Subdomain",
  "Monthly Status Reports",
];
const secondPlanAttrebutes = [
  "Unlimited Users",
  "50GB Storage",
  "Unlimited Public Projects",
  "Community Access",
  "Unlimited Private Projects",
  "Dedicated Phone Support",
  "Free Subdomain",
  "Monthly Status Reports",
];
const thirdPlanAttrebutes = [
  "Unlimited Users",
  "50GB Storage",
  "Unlimited Public Projects",
  "Community Access",
  "Unlimited Private Projects",
  "Dedicated Phone Support",
  "Free Subdomain",
  "Monthly Status Reports",
];

const plans = [
  {
    name: "Basic",
    price: 0,
    attributes: firstPlanAttrebutes,
    src: "/pricing/Box.svg",
  },
  {
    name: "Pro",
    price: 9,
    attributes: secondPlanAttrebutes,
    src: "/pricing/Rocket.svg",
  },
  {
    name: "Business",
    price: 49,
    attributes: thirdPlanAttrebutes,
    src: "/pricing/Zap.svg",
  },
];

export default function Pricing() {
  return (
    <div className="w-screen min-h-screen mt-36 space-y-10">
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
    </div>
  );
}
