"use client"

import UseGetQuery from "@/hooks/query/use-get-query"
import { PostSchema, Post, PersonSchema, Person } from '../../../../type/postType';
import Image from "next/image";
import { useEffect } from "react";
import { useMessageStore, useTriggerStore } from "@/app/store/zustand";
import whilelearn from "@/app/svg/firstDealog.jpeg";
export default  function LeftBody({person}:{person:PersonSchema}) {
    const {mutate,isLoading,data } = UseGetQuery({
    })
    const {add, message:actual} = useMessageStore();
    const {message, add:trigger} = useTriggerStore();
    useEffect(() => {
        if(message.right){
        console.log('====================================');
        console.log("fuck");
        console.log('====================================');
         mutate({
            apiKey:person.apiKey,
            isArabic:person.isArabic,
            isContentCreator:person.isContentCreator,
            isShort:true,
            query:message.message
        })}
    }, [message.right,message.message])

    useEffect(() => {
if(data?.search_result){
    add({
        message:data.search_result,
        right:false
    })
}
    }, [data?.search_result])
    
   if(!data) return null;
  return (
    <div className=" flex flex-col w-[600px] mt-10 space-y-3 items-center justify-center">
    <div className="relative h-[250px] w-[400px] rounded-sm">
        { data?.post_info?.videoUrl===""?data?.post_info.imgUrl===""? <Image src={whilelearn} alt="test" ></Image>:<Image src={data?.post_info?.imgUrl} alt="test" ></Image>:
        <video width={"500px"} height={"300px"} src={data?.post_info?.videoUrl}></video>
        }
    </div>
    <div className="w-full mt-3 font-merriweather text-center">
            {data.post_info?.postContent}
    </div>
    
    </div>
  )
}
