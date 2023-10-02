import { MessageSchema } from "@/type/postType";
import { create } from "zustand";

type CartStore = {
  message: MessageSchema;
  add: (m: MessageSchema) => void;
};

export const useMessageStore = create<CartStore>((set) => ({
  message: { message: "", right: false },
  add: (m: MessageSchema) => set((state) => ({ message: m })),
}));
type Trigger = {
  message: MessageSchema;
  add: (m: MessageSchema) => void;
};

export const useTriggerStore = create<Trigger>((set) => ({
  message: { message: "", right: false },
  add: (m: MessageSchema) => set((state) => ({ message: m })),
}));

