"use client";
import { Input } from "@/components/ui/input";
import Message from "./Message";
import { useEffect, useState } from "react";
import { useStore } from "zustand";
import { useMessageStore, useTriggerStore } from "@/app/store/zustand";
interface Right {
  person: {
    name: string;
    image: string;
    specialize: string;
    discreption: string;
    firstName: string;
  };
}
interface ms{
    message:string;
    right:boolean;
}
export default function RightPart({ person }: Right) {
    const [inputs, setinputs] = useState<string>('')
    const [message, setmessage] = useState<ms[]>([{message:"hi",right:false}])
    const {message:botMessage, add} = useMessageStore()
    const {add:trigger} = useTriggerStore()
    useEffect(() => {
      if(botMessage.message === "") return;
      setmessage((pre)=>[...pre,botMessage])
      add({message:"",right:false})
    }, [botMessage])
    
    function hasEnglishLetters(inputString:string) {
        var englishLetterPattern = /[a-zA-Z]/;
        return englishLetterPattern.test(inputString);
      }
      function hasArabicCharacters(inputString:string) {
        var arabicPattern = /[\u0600-\u06FF]/;
        return arabicPattern.test(inputString);
      }
    async function handleMessage(){
        if(hasEnglishLetters(inputs)) console.log("english")
        if(hasArabicCharacters(inputs)) console.log("arabic")
        setmessage((pre)=> [...pre,{
            message:inputs,
            right:true
        }])
        if(inputs.length>1){
          console.log("message sent");
        trigger({
          message:inputs,
          right:true          
        })}
        setinputs("")

    }

  return (
    <div className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
            {message.map((ele,idx)=>{
                return  <Message message={ele.message} right={ele.right} key={idx}></Message>
            })}
    
          
        </div>
        <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
          <div className="flex-grow ml-4">
            <div className="relative w-full">
              <Input
              onKeyDown={(e)=>{
                if(e.key === "Enter" && inputs.length>1) handleMessage();
              }}
              value={inputs}
              onChange={(e)=>setinputs(e.target.value)}
                type="text"
                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
              />
            </div>
          </div>
          <div className="ml-4">
            <button
            disabled={inputs.length<2}
            onClick={handleMessage}
            className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
