"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import ChatPanel from "./chat-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { DeleteDocumentButton } from "./delete-document-button";

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
      {!document && (
        <div className="space-y-8">
          <div>
            <Skeleton className="h-[40px] w-[500px]" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-[20px] w-[80px]" />
            <Skeleton className="h-[20px] w-[80px]" />
          </div>
          <Skeleton className="h-[500px] w-full" />
        </div>
      )}

      {document && (
        <>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">{document.document.title}</h1>
            <DeleteDocumentButton documentId={document.document._id} />
          </div>

          <div className="flex gap-12">
            <Tabs defaultValue="document" className="w-full">
              <TabsList className="mb-2">
                <TabsTrigger value="document">Document</TabsTrigger>
                <TabsTrigger value="chat">Chat</TabsTrigger>
              </TabsList>
              <TabsContent value="document">
                <div className="h-[500px] flex-1 rounded-xl bg-gray-900 p-4">
                  {document.documentUrl && (
                    <iframe className="size-full" src={document.documentUrl} />
                  )}
                </div>
              </TabsContent>
              <TabsContent value="chat">
                <ChatPanel documentId={document.document._id} />
              </TabsContent>
            </Tabs>
          </div>
        </>
      )}
    </main>
  );
}
