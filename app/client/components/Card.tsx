import data from "@/data/customer.json";
import CardItem from "./CardItem";
import LogoWhile from "../../../components/shared/LogoWhile";
export default function Card() {
  return (
    <div className="mb-16">
      <div className="container flex justify-center mx-auto pt-16">
        <div className="flex flex-col justify-center items-center">
          <LogoWhile></LogoWhile>
          <h1 className="xl:text-3xl text-2xl text-center mt-3 text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Chat With Content Creater
          </h1>
        </div>
      </div>
      <div className="w-full bg-whileWhite px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            {data.map((ele, idx) => {
              return (
                <CardItem
                  key={idx}
                  image={ele.image}
                  firstName={ele.firstName}
                  name={ele.name}
                  discreption={ele.discreption}
                  specialize={ele.specialize}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
