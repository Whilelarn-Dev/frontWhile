import { PersonSchema } from "@/type/postType";
import SuggestedQustion from "./SuggestedQustion";
interface Left {
  person: PersonSchema;
}
export default async function LeftPart({ person }: Left) {
  return (
    <div className="hidden md:flex flex-col items-center md:py-8 pl-6 mt-4 md:mt-0 pr-2 w-[220px]">
      <div className="h-20 w-20 lg:w-32 lg:h-32 rounded-full overflow-hidden">
        <img
          src={person.image}
          alt="Display Picture of Andres Berlin"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-base lg:text-xl italic mt-4">{person.name}</div>
      <SuggestedQustion></SuggestedQustion>
    </div>
  );
}
