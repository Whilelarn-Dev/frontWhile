"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Test() {
  async function getData() {
    try {
      const { data } = await axios.get(
        "http://localhost:3001/api/auth/google/login",
      );
      console.log(data);
    } catch (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    }
  }

  return (
    <Link href={"http://localhost:3001/api/auth/google/login"}>
      <Button variant={"link"} size={"lg"}>
        Test
      </Button>
    </Link>
  );
}
