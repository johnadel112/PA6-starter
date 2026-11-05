import Link from "next/link";
import HomeStats from "../_components/HomeStats";
const exercises = [
  ["/todos", "All todos"],
  ["/todos?status=done", "Completed todos"],
  ["/todos?status=open", "Open todos"],
  ["/todos/new", "Create a todo"],
  ["/todos/5", "Todo 5 (dynamic route)"],
  ["/todos/5/edit", "Catch-all route"],
  ["/help/todos/create", "Help breadcrumbs"],
  ["/archive", "Archive: all years"],
  ["/archive/2025", "Archive: 2025"],
  ["/playground/a", "Playground A"],
  ["/playground/b", "Playground B"],
  ["/dashboard", "Dashboard"],
  ["/dashboard/settings", "Dashboard settings"],
  ["/login", "Demo login"],
  ["/api/stats", "Stats JSON"],
];
export default function Home() {
  return (
    <>
      <p className="muted">Software Project I · Practice Assignment 6</p>
      <h1>Todo App</h1>
      <p>A simple todo list and a place to explore Next.js routing.</p>
      <HomeStats />
      <section className="panel">
        <h2>Explore the exercises</h2>
        <ul>
          {exercises.map(([href, label]) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
