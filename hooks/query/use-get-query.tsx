"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { PayloadSchema, PostSchema } from '@/type/postType';

interface UseGetQueryProps {
  onSuccessMessage?: string;
  onSuccessDescription?: string;
  onErrorMessage?: string;
  onErrorDescription?: string;
}

const UseGetQuery = ({
  onErrorMessage,
  onSuccessDescription,
  onSuccessMessage,
  onErrorDescription,
}: UseGetQueryProps) => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: PayloadSchema) => {
      const { data } = await axios.post("https://whilelearn.onrender.com/askWhilelearn", payload);
      await router.refresh();
      console.log('========================data============');
      console.log(data);
      console.log('======================data==============');
      return data as PostSchema;
    },
  
    onError: (error) => {
      return toast({
        title: "ops... some thing want wrong",
        description: "please try later",
        variant: "destructive",
      });
    },
  });
};
export default UseGetQuery;
