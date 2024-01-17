import Link from "next/link";

export default function LogoWhile() {
  return (
    <Link
      href="/"
      className="hidden md:block text-[#d74148] md:text-3xl text-lg "
    >
      While<span className="text-[#6877c9]">learn();</span>
    </Link>
  );
}
