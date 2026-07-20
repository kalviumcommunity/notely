// PROVIDED — composes the form and the list. You may leave this as-is.
import AddNoteForm from "./AddNoteForm.jsx";
import NotesList from "./NotesList.jsx";

export default function NotesPage() {
  return (
    <>
      <AddNoteForm />
      <NotesList />
    </>
  );
}
