# Module 2 Practice Assessment — Notes App (Starter)

The Express backend is complete. Wire the React frontend to it by filling in the four `TODO` locations. See the assessment brief for the full task list and rubric.

## Run

```bash
cd server && npm install
cd ../client && npm install
cd ..
npm install       # root: installs concurrently
npm run dev       # Express :3001  +  Vite :5173
```

Open http://localhost:5173

## Where you write code (only these)

- `client/src/api/axios.js` — create the Axios instance
- `client/src/services/notes.service.js` — getNotes / createNote / deleteNote
- `client/src/components/NotesList.jsx` — useQuery (list) + delete useMutation
- `client/src/components/AddNoteForm.jsx` — create useMutation

## Do NOT modify

`server/`, `client/src/main.jsx`, `client/.env.development`.

## Before you zip

Delete `node_modules/` from both `server/` and `client/`.
