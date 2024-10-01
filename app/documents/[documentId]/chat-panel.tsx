"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useAction } from "convex/react";

export default function ChatPanel({
  documentId,
}: {
  documentId: Id<"documents">;
}) {
  const askQuestion = useAction(api.documents.askQuestion);

  return (
    <div className="flex w-[300px] flex-col justify-end bg-gray-900 p-4">
      <div className="flex gap-1">
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const form = event.target as HTMLFormElement;
            const formData = new FormData(form);
            const text = formData.get("text") as string;

            // TODO: Call Convex
            await askQuestion({ question: text, documentId }).then(console.log);
          }}
        >
          <Input required name="text" />
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}
