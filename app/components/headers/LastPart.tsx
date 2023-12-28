import { Button } from "@/components/ui/button";

export default function LastPart() {
  return (
    <div className="flex gap-4">
      <Button className="bg-whileRed text-xs w-fit h-fit md:text-base lg:text-lg hover:bg-whileRed">
        Sign In
      </Button>
      <Button className="text-xs w-fit h-fit bg-white md:text-base lg:text-lg text-whileRed border border-whileRed hover:bg-white hover:border-whileRed hover:text-whileRed">
        Start a free trial
      </Button>
    </div>
  );
}
