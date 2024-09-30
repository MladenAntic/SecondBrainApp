import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Doc } from "@/convex/_generated/dataModel";
import { EyeIcon } from "lucide-react";

export const DocumentCard = ({ document }: { document: Doc<"documents"> }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="flex items-center gap-2">
          <EyeIcon className="size-4" />
          View
        </Button>
      </CardFooter>
    </Card>
  );
};
