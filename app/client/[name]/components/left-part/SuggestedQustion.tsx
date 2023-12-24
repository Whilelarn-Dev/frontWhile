"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import UseGetQustion from "@/hooks/query/use-get-qustion-suggestion";
import { Brain } from "lucide-react";
import { useEffect, useState } from "react";
import { useQustionStore } from '../../../../store/zustand';

export default function SuggestedQustion() {
  const { data, isLoading, mutate } = UseGetQustion({});
  const {addMessage} = useQustionStore();
  const [open, setopen] = useState(false);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div
        onClick={() => {
          mutate({ query: "hello" });
          setopen(true);
        }}
        className="cursor-pointer mt-8"
      >
        <div className="flex items-center gap-2 text-sm lg:text-base border shadow rounded-md p-3">
          {" "}
          <Brain className="w-5 h-5 hidden lg:block" /> Suggest qustion
        </div>
      </div>
      <Dialog open={open} onOpenChange={setopen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogDescription>
              Choose one of the suggested qustions
            </DialogDescription>
          </DialogHeader>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="flex flex-col gap-2">
              {data?.slice(2).map((ele, idx) => (
                <div
                  className="cursor-pointer p-2 rounded-md hover:bg-gray-200"
                  key={idx}
                  onClick={() => {
                    addMessage(ele);
                    setopen(false);
                  }}
                >
                  {ele}
                </div>
              ))}
            </div>
          )}
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="default">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
