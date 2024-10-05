"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { DocumentCard } from "./document-card";
import { CreateDocumentButton } from "./upload-document-button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const documents = useQuery(api.documents.getDocuments);

  return (
    <main className="w-full space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">My Documents</h1>

        <CreateDocumentButton />
      </div>

      {!documents && (
        <div className="grid grid-cols-4 gap-8">
          {new Array(8).fill("").map((_, i) => (
            <Card
              key={i}
              className="flex h-[200px] flex-col justify-between p-6"
            >
              <Skeleton className="h-[20px] rounded" />
              <Skeleton className="h-[20px] rounded" />
              <Skeleton className="h-[20px] rounded" />
              <Skeleton className="h-[30px] w-[80px] rounded" />
            </Card>
          ))}
        </div>
      )}

      {documents && documents.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-8 py-12">
          <Image
            src="/documents.svg"
            width={200}
            height={200}
            alt="Picture of a girl holding documents"
          />
          <h2 className="text-2xl">
            You haven&apos;t uploaded any documents yet.
          </h2>
          <CreateDocumentButton />
        </div>
      )}

      {documents && documents.length > 0 && (
        <div className="grid grid-cols-4 gap-8">
          {documents?.map((doc) => (
            <DocumentCard key={doc._id} document={doc} />
          ))}
        </div>
      )}
    </main>
  );
}
