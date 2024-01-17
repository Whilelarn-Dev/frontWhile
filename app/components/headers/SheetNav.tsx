"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { links } from "./Linkes";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <MenuIcon className="w-5 h-5" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-8">
          {links.map((ele, idx) => (
            <SheetClose key={idx} asChild>
              <Link
                href={`${ele.link}`}
                key={idx}
                className="cursor-pointer font-semibold text-gray-700"
              >
                {ele.name}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
