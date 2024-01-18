import Image from "next/image";
import CardButton from "./CardButton";
interface cardItemProps {
  name: string;
  image: string;
  specialize: string;
  discreption: string;
  firstName: string;
}

export default function CardItem({
  image,
  name,
  specialize,
  firstName,
  discreption,
}: cardItemProps) {
  return (
    <div
      role="listitem"
      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm bg-white lg:w-2/5"
    >
      <div className="rounded overflow-hidden shadow-md  border ">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="relative  h-32 w-32">
            <Image
              fill
              src={image}
              alt="Display Picture of Andres Berlin"
              role="img"
              className="rounded-full  object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div className="px-6 mt-16">
          <h1 className="font-bold text-3xl text-center text-black mb-1">
            {name}
          </h1>
          <p className="text-center mb-6 text-gray-700 text-base pt-3 font-normal">
            {discreption}
          </p>
          <div className="w-full flex mb-7 justify-center">
            <CardButton name={specialize} />
          </div>
        </div>
      </div>
    </div>
  );
}
