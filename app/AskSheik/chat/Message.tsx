import React from 'react'
import { IMessage } from './type'
import AnswerView from './AnswerView'

export default function Message({message,sender,IResponse}:IMessage) {
  
  return (
  <div className={`message__holder`}>
      <div className={`message ${sender ? "message-sender" : "message-receiver"}`}>
        { IResponse?<AnswerView message={IResponse} ></AnswerView>:message}
        </div>
  </div>
  )
}
