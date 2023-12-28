import { Button } from "@/components/ui/button";

export default function LastPart() {
  return (
    <div className="flex gap-4">
      <Button className="bg-blue-600 text-base md:text-lg hover:bg-blue-800">
        Sign In
      </Button>
      <Button className="bg-white text-base md:text-lg text-blue-600 border border-blue-600 hover:bg-white hover:border-blue-800 hover:text-blue-800">
        Start a free trial
      </Button>
    </div>
  );
}
