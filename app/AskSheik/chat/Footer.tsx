"use client"
import { Button, Input, Spin } from 'antd'
import React, { useState } from 'react'
import { useChatStore, useQueryStore } from './ChatStore';
import { useAddChat, useGetChat } from '@/app/apis/chatApi';
import { log } from 'console';

const { TextArea } = Input;
export default function Footer() {
    const [queryInput,setQueryInput] = useState("")
    const {addMessage,messages,getRequestPayload} = useChatStore()
    const {data,error,isLoading,mutate} =useAddChat()
    const submitQuery = async (query:string) => {

            if (query.length>3){
                addMessage({message: query, sender: false, id: Date.now()})
                setQueryInput("")
               
                mutate({
                  data: getRequestPayload(),
                })
                addMessage({message: "",IResponse: data?.fatwaList, sender: true, id: Date.now()})
            }
    }
  return (
    <div className="Chat__footer">
        <TextArea value={queryInput} onChange={(e) => setQueryInput(e.target.value)} placeholder="Type your question"/>
        <Button onClick={() => submitQuery(queryInput)} size="large">{ isLoading ? <Spin /> : "Ask"}</Button>
      </div>
     )
}
