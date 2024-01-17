import Link from "next/link";

export const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Features",
    link: "/#features",
  },
  {
    name: "Install",
    link: "/#install",
  },
  { name: "Pricing", link: "/pricing" },
  {
    name: "Live Demo",
    link: "/#Live Demo",
  },
  { name: "Clients", link: "/client" },
  {
    name: "About",
    link: "/about",
  },
];
export default function Linkes() {
  return (
    <div className="hidden gap-7 lg:flex">
      {links.map((ele, idx) => (
        <Link
          href={`${ele.link}`}
          key={idx}
          className="cursor-pointer font-semibold text-gray-700"
        >
          {ele.name}
        </Link>
      ))}
    </div>
  );
}
