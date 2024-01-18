"use client";
import Image from "next/image";
const DotSwapper = () => {
  // const sentences = [
  //   "Please hold on, your response is on its way...",
  //   "Bear with us, we're nearly there...",
  //   "Just a moment longer, we're finalizing the details...",
  //   "Your patience is appreciated, we're wrapping things up...",
  //   "Hang tight, your answer is being prepared...",
  //   "We're in the final stages, your reply will be with you shortly...",
  //   "We're just putting the finishing touches on your answer...",
  //   "A little more patience, we're on the home stretch...",
  //   "We're just dotting the i's and crossing the t's, your answer is almost ready...",
  //   "Just a tad longer, we're making sure everything is perfect...",
  // ];

  return (
    <div className="relative h-5 w-5 m-2 animate-bounce">
      <Image
        src="/while/red.png"
        alt="loading"
        width={100}
        height={100}
      ></Image>
    </div>
  );
};

export default DotSwapper;
