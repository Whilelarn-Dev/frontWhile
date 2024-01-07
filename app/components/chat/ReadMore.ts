import React from 'react'

export default function ReadMore({text,limit}:{text:string,limit:boolean}) {
    const textLimit = text.substring(0, 200);
    if(!limit) return text
    return textLimit
}
