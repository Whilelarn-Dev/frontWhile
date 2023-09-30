import Link from "next/link";

export default function DeomoButtn() {
  return (
    <Link
      href={
        "https://docs.google.com/forms/d/e/1FAIpQLSfl4CqSTinm-8kttJdGUiM39u4R0xHOpXrQfj8wH25_Mcaa5w/viewform"
      }
      target="_blank"
      className="flex justify-center items-center
     w-[200px] h-[40px] md:w-[299px] md:h-[57px] rounded-full bg-whileRed md:text-2xl font-merriweather font-semibold text-whileWhite"
    >
      Request Free Demo
    </Link>
  );
}
