import Link from "next/link";
import type { Todo } from "../_lib/todos";
export default function TodoList({ todos }: { todos: Todo[] }) {
  if (!todos.length) return <p>No todos to show.</p>;
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link href={"/todos/" + todo.id}>{todo.title}</Link>
          <span className={"badge" + (todo.done ? " done" : "")}>
            {todo.done ? "Done" : "Open"}
          </span>
        </li>
      ))}
    </ul>
  );
}
