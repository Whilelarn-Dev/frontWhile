"use client";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Payload<T> {
  data: T;
}
interface UseGetQueryProps {
  onSuccessMessage?: string;
  onSuccessDescription?: string;
  onErrorMessage?: string;
  onErrorDescription?: string;
  url: string;
}

function UseGetQuery<T, R>({
  onErrorMessage,
  onSuccessDescription,
  onSuccessMessage,
  onErrorDescription,
  url,
}: UseGetQueryProps) {
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: Payload<T>) => {
      const { data } = await axios.post<R>(url, payload.data);

      await router.refresh();
      return data;
    },

    onError: (error) => {
      if (error instanceof Error) {
        return toast({
          title: "ops... some thing want wrong",
          description: error.message,
          variant: "destructive",
        });
      }
      return toast({
        title: "ops... some thing want wrong",
        description: "please try later",
        variant: "destructive",
      });
    },
  });
}
export default UseGetQuery;
