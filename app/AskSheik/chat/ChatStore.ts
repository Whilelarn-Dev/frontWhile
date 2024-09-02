import {create} from 'zustand'
import { IMessage, IResponse } from './type'
import { useGetChat } from '@/app/apis/chatApi'
type QueryStore ={
    query: string
    setQuery: (value: string) => void
    clearQuery: () => void
}

export const useQueryStore = create<QueryStore>((set) => ({
    query: '',
    setQuery: (value) => set({query: value}),
    clearQuery: () => set({query: ''})
}))


type ChatStore = {
    messages: IMessage[]
    isLoading: boolean
    error: unknown
    setMessages: (message: IMessage[]) => void
    clearMessages: () => void
    addMessage: (message: IMessage) => void
    getRequestPayload: () => {role: string; content: string;}[]
    
}

export const useChatStore = create<ChatStore>((set, getState) => ({
    messages: [{
        id: 1,
        message: " السلام عليكم ورحمة الله وبركاته. أنا شيخ GPT هنا لأساعدك في answering Fatwa. كيف يمكنني مساعدتك اليوم؟",
        sender: true,
    }],
    error: null,
    isLoading: false,
    setMessages: (message: IMessage[]) => set(()=>({messages: message})),
    clearMessages: () => set({messages: [{
        id: 1,
        message: " السلام عليكم ورحمة الله وبركاته. أنا شيخ GPT هنا لأساعدك في answering Fatwa. كيف يمكنني مساعدتك اليوم؟",
        sender: true,
    }]}),
    addMessage: (message: IMessage) => set((state)=>({messages: [...state.messages, message]})),

    getRequestPayload: () => {
        const messages = getState().messages;
        return messages.map((ele) => {
            return {
              role: !ele.sender ? "user" : "assistant",
              content: ele.message,
            }
        })

    }

}))
