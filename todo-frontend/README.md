# Practice Assignment 6 — Todo App

Next.js 16, TypeScript, and the App Router. The supplied NestJS backend in
`../nextjs-backend` is unchanged. Its todos are in memory and reset
when the backend restarts.

## Run locally

In one terminal:

```powershell
cd nextjs-backend
npm install
npm run start:dev
```

In another terminal, from the PA6-starter repository root:

```powershell
cd todo-frontend
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open http://localhost:3001. The API runs at http://localhost:3000.
On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.
The production start script also uses port 3001.

`.env.local` contains `API_URL=http://localhost:3000`.
Server components fetch the backend directly. Client create/delete forms use
`/api/todos` route handlers, which forward requests and backend error responses
using plain fetch. This keeps API_URL server-side. Home fetches `/api/stats`.

## Exercise map

- **6-1:** `src/app/(main)` has the navbar; `(auth)` has no navbar.
  Shared components live in `_components`; server helpers live in `_lib`.
  The root title is "Todo App". Home links to the exercises and displays stats.
- **6-2:** `/todos` supports all/done/open filters, loading and error states.
  `/todos/[id]` displays details and generates a title; missing IDs show a custom
  not-found page. `/todos/new` creates todos; details include a Delete button.
  The navbar uses usePathname to bold the active section.
- **Route priority:** `/todos/new` uses the static new page; `/todos/5` uses
  the dynamic ID page (404 until ID 5 exists); `/todos/5/edit` displays
  `["5", "edit"]` through the catch-all.
- **6-3:** `/help/todos/create` shows breadcrumbs; `/archive` shows "All years",
  and `/archive/2025` shows "2025".
  Playground A/B demonstrate a persistent layout counter and a resetting template counter.
- **Parallel routes:** Dashboard renders `@stats` and `@recent` (latest three).
  Only `@stats` has a settings page. Both slots and the implicit children slot
  have defaults for hard refreshes.
- **Interception:** Todo list links open `@modal/(.)[id]`. Refreshing or directly
  opening the same URL renders full details. Escape, Close and outside click
  dismiss the modal. Empty modal routes clear it when navigating away.
- **Login:** `/login` sets the demo-auth cookie to 1 and navigates to Dashboard.
  `src/proxy.ts` protects /dashboard and its subpaths. This is a demonstration
  cookie, not production authentication.
- **Global error:** `src/app/global-error.tsx` supplies its own html/body.

## Verification checklist

1. Check home stats and all three todo filters.
2. Submit an empty or whitespace-only title: the backend's validation message
   should appear. Create a valid todo and check the updated list/stats.
3. Click a todo from /todos: it should open a modal. Close it, reopen, and refresh:
   it should now render the full page with the todo title in the browser tab.
4. Delete a todo, then revisit its URL to check the custom not-found page.
5. Stop the backend, visit /todos and click Try again. Restart the backend and
   retry to recover. Home stats and client mutations also show backend errors.
6. Check /todos/new, /todos/5 and /todos/5/edit for route priority.
7. Increment both playground counters and switch A/B. Only the template resets.
8. In a fresh browser session visit /dashboard/settings: it redirects to /login.
   Log in, visit settings and refresh. The stats settings and recent fallback render.
9. Check /help/todos/create, /archive and /archive/2025.
10. Run `npm run build` for the production compile/type check.

Verified locally: production build and TypeScript check; browser checks for filters, create/delete, backend validation, modal navigation and refresh, missing todos, catch-all routes, breadcrumbs, archive, layout/template state, login protection, and dashboard settings refresh. Backend outage and retry recovery were also tested. The unchanged backend's three existing tests pass.
