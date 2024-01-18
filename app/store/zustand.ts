
import { FirebaseUser, auth, db } from "@/lib/firebase";
import { WebPostResponseType } from "@/type/WebPostType";
import { MessageSchema } from "@/type/postType";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
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
  googleSignIn: (check:boolean) => void;
  googleSignOut: () => void;
};

export const useUserStore = create<UserStoreType>((set) => ({
  user: null,
  googleSignIn: async (check) => {
    const provader = new GoogleAuthProvider();
    await signInWithPopup(auth, provader)
      .then(async (result) => {
       
        const userExists = await getDoc(
          doc(db, "WebUsers", result.user.email!!),
        );
        let messagesNumber =100;
        if (userExists.exists()) {
          messagesNumber = userExists.data().messages;
          if(messagesNumber<= 0) messagesNumber=0;
        }
        const user: FirebaseUser = {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          id: result.user.providerData[0].uid,
        };
        window.localStorage.setItem("auth", JSON.stringify(user));

        
        const userRef = doc(db, "WebUsers", result.user.email!!);
        setDoc(userRef, {...user,messages:messagesNumber,isSubscribed:check})



          .then(() => {
            console.log("User data posted to Firestore");
          })
          .catch((error) => {
            console.error("Error posting user to Firestore:", error);
          });
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
 type OpenModelType = {
  open: boolean;
  data:string;
  setOpen: (value: boolean) => void;
  setData: (value: string) => void;
 }

 export const useOpenModel = create<OpenModelType>((set) => ({
  open: false,
  data: "",
  setOpen: (value: boolean) => set({ open: value }),
  setData: (value: string) => set({ data: value }),
 }))


 type MessagesCountStoreType = {
   count: number;
   increment: () => void;
   decrement: () => void;
   setCount: (value: number) => void;
 };

 export const useMessagesCountStore = create<MessagesCountStoreType>((set) => ({
   count: 0,
   increment: () => set((state) => ({ count: state.count + 1 })),
   decrement: () => set((state) => ({ count:state.count == 0? 0:state.count - 1 })),
   setCount: (value: number) => set({ count: value }),
 }));

 type CheckedType = {
  check: boolean;
  setCheck: () => void;

 }

 export const useCheck = create<CheckedType>((set) => ({
  check:true,
  setCheck:()=>set((state)=>({check:!state.check}))
 }))