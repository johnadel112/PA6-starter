import Link from "next/link";
import type { Todo } from "../_lib/todos";
import DeleteButton from "./DeleteButton";
export default function TodoDetails({ todo }: { todo: Todo }) {
  return (
    <>
      <h1 id="todo-title">{todo.title}</h1>
      <dl>
        <dt>ID</dt>
        <dd>{todo.id}</dd>
        <dt>Title</dt>
        <dd>{todo.title}</dd>
        <dt>Done</dt>
        <dd>{todo.done ? "Yes" : "No"}</dd>
      </dl>
      <div className="actions">
        <DeleteButton id={todo.id} />
        <Link href="/todos">Back to todos</Link>
      </div>
    </>
  );
}
