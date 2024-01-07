import Link from "next/link";

const links = [
  {
    name: "Home",
  },
  {
    name: "Features",
  },
  {
    name: "Install",
  },
  { name: "pricing" },
  {
    name: "Live Demo",
  },
  {
    name: "About",
  }
];
export default function Linkes() {
  return (
    <div className="hidden gap-10 lg:flex">
      {links.map((ele, idx) => (
        <Link
          href={`${
            ele.name === "pricing" || ele.name === "About"
              ? `/${ele.name}`
              : `/#${ele.name}`
          }`}
          key={idx}
          className="cursor-pointer font-semibold text-gray-700"
        >
          {ele.name}
        </Link>
      ))}
    </div>
  );
}
