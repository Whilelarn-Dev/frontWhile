"use client";
import { toast } from "@/components/ui/use-toast";
import { SuggestQustionType } from "@/type/suggested-qustion-type";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface UseGetQustionProps {
  onSuccessMessage?: string;
  onSuccessDescription?: string;
  onErrorMessage?: string;
  onErrorDescription?: string;
}

const UseGetQustion = ({
  onErrorMessage,
  onSuccessDescription,
  onSuccessMessage,
  onErrorDescription,
}: UseGetQustionProps) => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: { query: string }) => {
      const { data } = await axios.post(
        "https://whilelearn.onrender.com/suggestQuestions",
        payload,
      );

      await router.refresh();
      return data as SuggestQustionType;
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
export default UseGetQustion;
