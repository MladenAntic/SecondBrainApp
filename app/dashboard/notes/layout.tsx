"use client";

import { useQuery } from "convex/react";
import { CreateNoteButton } from "./create-note-button";
import { api } from "@/convex/_generated/api";
import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

export default function NotesLayout({ children }: { children: ReactNode }) {
  const notes = useQuery(api.notes.getNotes);
  const { noteId } = useParams<{ noteId: Id<"notes"> }>();

  return (
    <main className="w-full space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Notes</h1>
        <CreateNoteButton />
      </div>

      <div className="flex gap-12">
        <ul className="w-[200px] space-y-2">
          {notes?.map((note) => (
            <li
              key={note._id}
              className={cn("text-base hover:text-cyan-100", {
                "text-cyan-300": note._id === noteId,
              })}
            >
              <Link href={`/dashboard/notes/${note._id}`}>
                {note.text.substring(0, 24) + "..."}
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-full rounded bg-slate-800 p-4">{children}</div>
      </div>
    </main>
  );
}
