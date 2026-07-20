// Module 2 Practice Assessment — Express API (COMPLETE — do not modify).
// A tiny in-memory Notes API. React connects to this in the assessment.

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// In-memory store (resets when the server restarts)
let notes = [
  { id: 1, text: "Buy groceries" },
  { id: 2, text: "Finish the assignment" },
];
let nextId = 3;

// GET /api/notes  ->  all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// POST /api/notes  { text }  ->  created note
app.post("/api/notes", (req, res) => {
  const text = (req.body && req.body.text ? String(req.body.text) : "").trim();
  if (!text) {
    return res.status(400).json({ message: "text is required" });
  }
  const note = { id: nextId++, text };
  notes.push(note);
  res.status(201).json(note);
});

// DELETE /api/notes/:id  ->  204 no content
app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((n) => n.id !== id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`✅ Notes API running on http://localhost:${PORT}`);
});
