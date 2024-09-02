"use client";
import React from 'react'
import Message from './Message';
import { useChatStore } from './ChatStore';

export default function Body() {
    const {messages} = useChatStore()
  return (
    <div className="Chat__content">
      {messages.map((ele, idx) => (

        <Message key={idx} id={ele.id} IResponse={ele.IResponse} message={ele.message} sender={ele.sender} />
      ))}
    </div>
)
}
