// import data from "@/data/customer.json";
// import Headers from "./components/header/Header";
// import LeftPart from "./components/left-part/LeftPart";
// import RightPart from "./components/right-part/RightPart";
// interface pageProps {
//   params: {
//     name: string;
//   };
// }
// export default function page({ params }: pageProps) {
//   const person = data.filter((ele) => ele.firstName === params.name)[0];
//   return (
//     <div className="h-screen antialiased overflow-clip text-gray-800">
//       <Headers name={params.name}></Headers>
//       <div className="md:flex md:flex-row h-full w-full overflow-y-hidden overflow-x-hidden">
//         <LeftPart person={person}></LeftPart>
//         <RightPart person={person}></RightPart>
//       </div>
//     </div>
//   );
// }
