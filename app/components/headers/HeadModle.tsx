"use client";
import { useOpenModel } from "@/app/store/zustand";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default function HeadModle() {
  const { data, setOpen, open, setData } = useOpenModel();

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Thank you for joining us, we are connecting your website to
              ChatGPT
            </AlertDialogTitle>
            <AlertDialogDescription>
              please book a meeting, inorder for use to show you the demo and
              hear your business need
              <Input
                value={data}
                onChange={(e) => setData(e.target.value)}
              ></Input>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={!emailRegex.test(data)}
              onClick={() => {
                window.open(
                  "https://calendly.com/muwaffaqimam/whilelearn-meetings",
                  "_blank",
                );
                setOpen(false);
              }}
              className="bg-whileRed hover:bg-white hover:text-whileRed text-white font-bold py-2 px-4 rounded"
            >
              {/* <Link
                target="_blank"
                href={"https://calendly.com/muwaffaqimam/whilelearn-meetings"}
                className="bg-whileRed hover:bg-white hover:text-whileRed text-white font-bold py-2 px-4 rounded"
              > */}
              Book Meeting
              {/* </Link> */}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
