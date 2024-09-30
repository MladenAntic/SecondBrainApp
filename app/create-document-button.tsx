"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const CreateDocumentButton = () => {
  const createDocument = useMutation(api.documents.createDocument);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={() => {
            createDocument({
              title: "New Document",
            });
          }}
        >
          New Document
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload a document</DialogTitle>
          <DialogDescription>
            Upload a team document for you to search over in the future.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
