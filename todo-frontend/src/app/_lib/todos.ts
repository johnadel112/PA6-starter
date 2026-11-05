export type Todo = { id: number; title: string; done: boolean };
export type Stats = { total: number; done: number; open: number };
// Server-only usage: browser mutations go through /api/todos.
export function apiUrl(path: string) {
  return (
    (process.env.API_URL || "http://localhost:3000").replace(/\/$/, "") + path
  );
}
export async function getTodos(): Promise<Todo[]> {
  const response = await fetch(apiUrl("/todos"), { cache: "no-store" });
  if (!response.ok) throw new Error("Could not load todos.");
  return response.json();
}
export async function getTodo(id: string): Promise<Todo | null> {
  if (!/^\d+$/.test(id)) return null;
  const response = await fetch(apiUrl("/todos/" + id), { cache: "no-store" });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Could not load this todo.");
  return response.json();
}
export function getStats(todos: Todo[]): Stats {
  const done = todos.filter((todo) => todo.done).length;
  return { total: todos.length, done, open: todos.length - done };
}
