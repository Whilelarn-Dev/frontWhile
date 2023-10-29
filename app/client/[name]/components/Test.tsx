"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Test() {
  const pathName = usePathname();
  async function getData() {
    try {
      const { data } = await axios.get("http://localhost:3001/api/user");
      console.log("====================================");
      console.log("sdddddddddddd");
      console.log("====================================");
      console.log(data);
    } catch (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    }
  }

  return (
    <>
      <Link
        href={`http://localhost:3001/api/auth/google/login?place=${pathName}`}
      >
        log
      </Link>
      <Button onClick={getData} variant={"link"} size={"lg"}>
        Test
      </Button>
    </>
  );
}
