"use client";
import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { useActivateStore, useUserStore } from "@/app/store/zustand";
import Login from "./Login";

export default function ChatBody() {
  const { user } = useUserStore();
  return (
    <div className="Chat__body">
      <Header />
      <div className="Chat__saperator" />
      {user? (
        <Fragment>
          <Body />
          <div className="Chat__saperator" />
          <Footer />
        </Fragment>
      ):<Login/>}
    </div>
  );
}
