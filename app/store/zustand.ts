import { FirebaseUser, auth } from "@/lib/firebase";
import { WebPostResponseType } from "@/type/WebPostType";
import { MessageSchema } from "@/type/postType";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
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

type UserStoreType = {
  user: FirebaseUser | null;
  googleSignIn: () => void;
  googleSignOut: () => void;
};

export const useUserStore = create<UserStoreType>((set) => ({
  user: null,
  googleSignIn: async () => {
    const provader = new GoogleAuthProvider();
    await signInWithPopup(auth, provader)
      .then((result) => {
        const user: FirebaseUser = {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          uid: result.user.uid,
        };
        window.localStorage.setItem("auth", JSON.stringify(user));
        set((state) => ({ user: user }));
      })
      .catch((error) => {
        // Handle sign-in error
      });
  },
  googleSignOut: () => {
    signOut(auth);
  },
}));

type ActivateStoreType = {
  activated: boolean;
  getActivated: () => boolean;
  setActivated: (value: boolean) => void;
};

export const useActivateStore = create<ActivateStoreType>((set, get) => ({
  activated: false,
  getActivated: () => get().activated,
  setActivated: (value: boolean) => set({ activated: value }),
}));

type RefreshMessagesStoreType = {
  refresh: boolean;
  setRefresh: (value: boolean) => void;
};

export const useRefreshMessagesStore = create<RefreshMessagesStoreType>(
  (set, get) => ({
    refresh: false,
    setRefresh: (value: boolean) => set({ refresh: value }),
  }),
);

type MessageStoreType = {
  message: string;
  addMessage: (message: string) => void;
};

export const useQustionStore = create<MessageStoreType>((set) => ({
  message: "",
  addMessage: (message: string) =>
    set((state) => ({ message: message })),
}));

type testFunc = {
  test:WebPostResponseType
  add: (m:string) => void
}
// export const useTestFunc = create<testFunc>((set) => ({
//   test:{},
//   add: (m:string) => set({test:{...m}}) 
// }))