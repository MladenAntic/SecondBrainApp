import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { ReactNode } from "react";

export const LoadingButton = ({
  isLoading,
  children,
  loadingText,
}: {
  isLoading: boolean;
  children: ReactNode;
  loadingText: string;
}) => {
  return (
    <Button
      className="flex items-center gap-1"
      disabled={isLoading}
      type="submit"
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" />
          {loadingText}
        </>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
};
