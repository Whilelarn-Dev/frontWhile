import Link from "next/link";

const links = [
  {
    name: "Home",
  },
  {
    name: "Features",
  },
  {
    name: "Case Studies",
  },
  { name: "Pricing" },
  {
    name: "Live Demo",
  },
];
export default function Linkes() {
  return (
    <div className="hidden gap-10 lg:flex">
      {links.map((ele, idx) => (
        <Link
          href={`#${ele.name}`}
          key={idx}
          className="cursor-pointer font-semibold text-gray-700"
        >
          {ele.name}
        </Link>
      ))}
    </div>
  );
}
