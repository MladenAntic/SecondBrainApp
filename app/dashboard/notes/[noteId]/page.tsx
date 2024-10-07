"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { DeleteNoteButton } from "./delete-note-button";

export default function NotePage() {
  const { noteId } = useParams<{ noteId: Id<"notes"> }>();
  const note = useQuery(api.notes.getNote, {
    noteId: noteId,
  });

  if (!note) {
    return null;
  }

  return (
    <div className="relative w-full rounded bg-slate-200 p-4 dark:bg-slate-800">
      <DeleteNoteButton noteId={note._id} />

      <div className="whitespace-pre-line pr-3">{note?.text}</div>
    </div>
  );
}
