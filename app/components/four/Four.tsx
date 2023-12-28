import Image from "next/image";
export default function Four() {
  return (
    <div className="flex items-center flex-col lg:flex-row mt-12 lg:mt-32">
      <div className="flex-1 flex lg:p-20 flex-col justify-center space-y-4">
        <div className="text-whileRed">Live Demo</div>
        <div className="text-5xl font-bold">Try it yourself</div>
        <div>and ask the website about the service we provide!</div>
      </div>
      {/* right part */}
      <div className=" lg:flex-1 lg:flex justify-center p-5 lg:p-14">
        <div className="relative">
          <Image
            alt="demo"
            src={"/firstpage.jpeg"}
            width={300}
            height={300}
          ></Image>
        </div>
      </div>
    </div>
  );
}
