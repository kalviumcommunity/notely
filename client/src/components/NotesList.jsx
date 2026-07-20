// TASK 2 — List notes with useQuery (key ["notes"], queryFn getNotes,
//          staleTime 60_000). Render loading / error / success states.
// TASK 4 — Add a delete useMutation (mutationFn deleteNote) that invalidates
//          ["notes"] on success; each note gets a Delete button -> mutate(note.id).
//
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { getNotes, deleteNote } from "../services/notes.service.js";

export default function NotesList() {
  // TODO: useQuery for the list  (Task 2)
  // TODO: useMutation for delete (Task 4)

  // TODO: if (isPending) return ...
  // TODO: if (isError)   return ...
  // TODO: return <ul> ... {notes.map(...)} ... </ul>

  return <p>TODO: render the notes list.</p>;
}
