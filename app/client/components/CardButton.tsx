"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CardButton({name}:{name:string}) {
    const router = useRouter();
  return (
    <Button onClick={()=>{
        router.push(`/client/${name}`)
    }} variant={"default"}>Ask {name}</Button>
  )
}
