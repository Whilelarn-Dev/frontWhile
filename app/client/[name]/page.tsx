import data from "@/data/customer.json";
import Image from "next/image";
import LeftPart from "./components/LeftPart";
import Message from "./components/Message";
import RightPart from "./components/RightPart";
import Test from "./components/Test";
import Headers from "./components/Headers";
interface pageProps {
  params: {
    name: string;
  };
}
export default function page({ params }: pageProps) {
  const person = data.filter((ele) => ele.firstName === params.name)[0];
  return (
    <div className="h-screen antialiased text-gray-800">
      <div className="md:flex md:flex-row h-full w-full overflow-x-hidden">
        <LeftPart person={person}></LeftPart>
        <RightPart person={person}></RightPart>
      </div>
    </div>
  );
}
