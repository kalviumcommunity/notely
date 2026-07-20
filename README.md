# Notely

A small full-stack **Notes** app — list notes, add a note, delete a note.

The **backend is already built and working**. Your job is to **connect the React frontend to it** by completing the data layer: a configured Axios instance, a service layer, and the TanStack Query hooks that fetch and mutate data.

```
React (Vite)  ──►  Axios instance  ──►  Express API (in-memory notes)
   UI + TanStack Query          http://localhost:3001
```

**Tech:** React 18 + Vite · Axios · TanStack Query v5 · Express 4

---

## What's already done for you

- **`server/`** — a complete Express API (`GET` / `POST` / `DELETE`) over an in-memory list. Run it as-is; don't change it.
- **`client/src/main.jsx`** — `QueryClient` created and the app wrapped in `<QueryClientProvider>`.
- **`client/.env.development`** — holds `VITE_API_URL=http://localhost:3001`.
- Component shells (`NotesPage`, `NotesList`, `AddNoteForm`) with imports stubbed and `TODO` markers.

## What you have to build

You write code **only** in these four files (each has `TODO` comments):

| File | What to do |
|------|------------|
| `client/src/api/axios.js` | Create an Axios instance whose `baseURL` comes from `import.meta.env.VITE_API_URL` (do **not** hard-code the URL). Set a default `Content-Type: application/json` header. |
| `client/src/services/notes.service.js` | Implement `getNotes()`, `createNote(text)`, `deleteNote(id)` using that instance. |
| `client/src/components/NotesList.jsx` | Use `useQuery` (key `["notes"]`, `queryFn: getNotes`, `staleTime: 60_000`) and render the **loading**, **error**, and **list** states. Add a delete `useMutation` that invalidates `["notes"]`; give each note a **Delete** button. |
| `client/src/components/AddNoteForm.jsx` | Use a create `useMutation` (`mutationFn: createNote`). On success, invalidate `["notes"]` and clear the input. Ignore empty input; disable the button while the mutation is pending. |

> Use a plain controlled `<input>` — no form library needed. Don't use `useState`/`useEffect` for data fetching; that's what TanStack Query is for.

---

## The backend API (reference — do not modify)

Runs on `http://localhost:3001`, CORS enabled.

| Method | Route | Body | Response |
|--------|-------|------|----------|
| `GET` | `/api/notes` | — | `200` → `[{ id, text }, …]` |
| `POST` | `/api/notes` | `{ "text": "..." }` | `201` → `{ id, text }` |
| `DELETE` | `/api/notes/:id` | — | `204` (no content) |

*(The store is in memory, so it resets each time the server restarts.)*

---

## Run it locally

**1. Install dependencies** (two folders):

```bash
cd server && npm install
cd ../client && npm install
```

**2. Start both servers** from the project root:

```bash
npm install     # installs "concurrently" at the root (one-time)
npm run dev     # Express on :3001  +  Vite on :5173, together
```

*Fallback (two terminals):* run `npm start` inside `server/` and `npm run dev` inside `client/`.

**3. Open** http://localhost:5173.

When your code is correct you'll see the two seed notes, be able to **add** a note (it appears without a manual refresh), and **delete** a note. Check **DevTools → Network** to see `GET /api/notes` refetch after each change.

---

## Project structure

```
notely/
├── package.json          # root: "npm run dev" runs both servers
├── server/
│   ├── package.json
│   └── index.js          # Express API — COMPLETE, do not modify
└── client/
    ├── .env.development   # VITE_API_URL — do not modify
    ├── vite.config.js
    └── src/
        ├── main.jsx       # QueryClientProvider — set up for you
        ├── App.jsx
        ├── api/
        │   └── axios.js           ← TODO
        ├── services/
        │   └── notes.service.js   ← TODO
        └── components/
            ├── NotesPage.jsx
            ├── NotesList.jsx      ← TODO
            └── AddNoteForm.jsx    ← TODO
```

## Definition of done

- The list loads on page open and shows a loading state first.
- If the API is down, an error message shows instead of a crash.
- Adding a note updates the list automatically (no manual refresh).
- Deleting a note removes it from the list automatically.
- The API URL is read from the environment variable, and there are no `useState`/`useEffect` data-fetch calls.
