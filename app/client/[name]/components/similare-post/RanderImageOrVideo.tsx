// "use cleint";
// import React, { useState } from "react";

// export default function RanderImageOrVideo({
//   videoUrl,
//   imgUrl,
// }: {
//   imgUrl: string;
//   videoUrl: string;
// }) {
//   const [ImageError, setImageError] = useState<boolean>(false);
//   const [videoError, setvideoError] = useState(false);
//   return (
//     <div>
//       {videoUrl === undefined || videoError || videoUrl === "" ? (
//         imgUrl === "" || ImageError || imgUrl === undefined ? null : (
//           <div className="mb-3 flex max-w-[450px]  justify-center rounded-sm">
//             <img
//               className="rounded-sm w-full h-full "
//               style={{
//                 objectFit: "cover",
//                 width: "500px",
//                 height: "300px",
//               }}
//               loading="lazy"
//               decoding="async"
//               src={imgUrl}
//               alt="test"
//               onError={() => {
//                 setImageError(true);
//               }}
//             />
//           </div>
//         )
//       ) : (
//         <div className=" w-full h-full max-h-[300px] max-w-[500px] rounded-sm">
//           {" "}
//           <video
//             width={"500px"}
//             height={"300px"}
//             onError={() => {
//               setvideoError(true);
//             }}
//             src={videoUrl}
//           ></video>
//         </div>
//       )}
//     </div>
//   );
// }
