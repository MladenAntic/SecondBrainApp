"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import ChatPanel from "./chat-panel";

export default function DocumentPage({
  params,
}: {
  params: {
    documentId: Id<"documents">;
  };
}) {
  const document = useQuery(api.documents.getDocument, {
    documentId: params.documentId,
  });

  if (!document) {
    return <div>You don&apos;t have permission to view this document</div>;
  }

  return (
    <main className="space-y-8 p-24">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">{document.title}</h1>
      </div>

      <div className="flex gap-12">
        <div className="flex-1 rounded bg-gray-900 p-4">
          {document.documentUrl && (
            <iframe className="size-full" src={document.documentUrl} />
          )}
        </div>

        <ChatPanel documentId={document._id} />
      </div>
    </main>
  );
}
