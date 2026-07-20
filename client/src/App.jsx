// PROVIDED — composes the page. You may leave this as-is.
import NotesPage from "./components/NotesPage.jsx";

export default function App() {
  return (
    <main style={{ maxWidth: 480, margin: "40px auto", fontFamily: "system-ui, sans-serif" }}>
      <h1>Notes</h1>
      <NotesPage />
    </main>
  );
}
