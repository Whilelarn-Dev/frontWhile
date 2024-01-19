import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const creaters = [
  {
    name: "Taqa Space",
    work: "Founder & CEO",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFIyvEerE4oDg/profile-displayphoto-shrink_800_800/0/1697357069295?e=1710979200&v=beta&t=HqyMTFZXmJ0-i6NhY2D5i-gUFVVNW-el1WB5KtKQ5Rg",
    comment:
      "WhileLearn is a service that we found very useful as a first step when dealing with students who browse our website. It saved us a lot of time",
  },
];
export default function Five() {
  return (
    <div>
      <div className="flex flex-col items-center space-y-1 lg:mt-24 xl:p-16 lg:p-10 p-5 ">
        <div className="text-base lg:text-xl text-whileRed">
          Ask our client about our product!
        </div>
        <div className="text-lg lg:text-2xl  font-bold text-center">
          We connected social media content creators with their audience,
          providing a space where users can chat with them anytime!
        </div>
      </div>
      {/* lower part */}
      <div className="flex flex-wrap justify-center gap-10 p-5">
        {creaters.map((ele, idx) => (
          <div key={idx} className="flex items-center gap-3 md:w-1/3 ">
            <Avatar className="w-12 h-12 lg:w-24 lg:h-24">
              <AvatarImage src={ele.image} />
              <AvatarFallback>USERS</AvatarFallback>
            </Avatar>
            <div className="w-full pt-5 px-3 pb-2">
              <div className=" text-gray-800">{ele.comment}</div>
              <div className=" font-bold text-lg mt-3">{ele.name}</div>
              <div className=" text-sm text-gray-600">{ele.work}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
