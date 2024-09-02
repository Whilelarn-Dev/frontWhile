import { IResponse } from "./type"

  
  export default function AnswerView({message}:{message:IResponse[]}) {
    return (
      <div className="answer">
        {message.map((item,idx)=><div key={idx}>
            <h1>{item.title}</h1>
            <h3>{item.chapter}</h3>
            <p>{item.question}</p>
            <p>{item.answer}</p>
        </div> )}
      </div>
    )
  }
  