export interface IMessage {
    id: number;
    message: string;
    sender: boolean;
    IResponse?:IResponse[]
}

export interface IResponse{
    title:string;
    chapter:string;
    question:string;
    answer:string;
}

export interface IBrianInterface {
    gptAnswer:{
        contant:string
    }|string
    fatwaList:IResponse[]
}