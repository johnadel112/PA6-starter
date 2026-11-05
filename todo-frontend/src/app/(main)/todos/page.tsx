import Link from "next/link";
import FullPageLink from "../../_components/FullPageLink";
import { getTodos } from "../../_lib/todos";
import TodoList from "../../_components/TodoList";
export default async function TodosPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const todos = await getTodos();
  const filtered = todos.filter((todo) =>
    status === "done" ? todo.done : status === "open" ? !todo.done : true,
  );
  return (
    <>
      <h1>Todos</h1>
      <div className="actions">
        {/* Full navigation keeps the static form out of the [id] modal interceptor. */}
        <FullPageLink className="button" href="/todos/new">
          New todo
        </FullPageLink>
        {[
          ["/todos", "All"],
          ["/todos?status=done", "Done"],
          ["/todos?status=open", "Open"],
        ].map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={
              status === label.toLowerCase() ||
              (label === "All" && status !== "done" && status !== "open")
                ? "page"
                : undefined
            }
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="panel">
        <TodoList todos={filtered} />
        <p className="muted">
          Click a todo to open its details in a modal. Refresh to view the full
          page.
        </p>
      </div>
    </>
  );
}
