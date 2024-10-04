import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { MouseEvent, ReactNode } from "react";

export const LoadingButton = ({
  isLoading,
  children,
  loadingText,
  onClick,
}: {
  isLoading: boolean;
  children: ReactNode;
  loadingText: string;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}) => {
  return (
    <Button
      className="flex items-center gap-1"
      disabled={isLoading}
      type="submit"
      onClick={(e) => onClick?.(e)}
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
