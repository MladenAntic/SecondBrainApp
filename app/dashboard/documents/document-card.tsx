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
import { EyeIcon, Loader2 } from "lucide-react";
import Link from "next/link";

export const DocumentCard = ({ document }: { document: Doc<"documents"> }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {!document.description ? (
            <div className="flex justify-center">
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            document.description
          )}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="secondary" className="flex items-center gap-2">
          <Link href={`/documents/${document._id}`}>
            <EyeIcon className="size-4" />
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
