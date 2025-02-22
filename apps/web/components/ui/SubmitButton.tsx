import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function SubmitButton({ isPending }: { isPending: boolean }) {
    return (
      <Button
        disabled={isPending}
        type="submit"
        variant="outline"
          className="w-full py-3 mt-5 rounded-lg font-medium flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
      >
        {isPending && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
        <span>{isPending ? "Signing up..." : "SignUp"}</span>
      </Button>
    );
}