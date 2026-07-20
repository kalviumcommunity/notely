// TASK 3 — Add a note with useMutation (mutationFn createNote).
//   - onSuccess: invalidate ["notes"] and clear the input
//   - on submit: call mutate(text), ignore empty input
//   - disable the submit button while the mutation isPending
//
// import { useState } from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createNote } from "../services/notes.service.js";

export default function AddNoteForm() {
  // TODO: local input state
  // TODO: useMutation + queryClient
  // TODO: handleSubmit -> mutate(text)

  return (
    <form>
      {/* TODO: controlled <input> + submit button */}
      <p>TODO: build the add-note form.</p>
    </form>
  );
}
