import TodoList from "../../../_components/TodoList";
import { getTodos } from "../../../_lib/todos";
export default async function RecentSlot() {
  const todos = await getTodos();
  return (
    <div className="panel">
      <TodoList todos={todos.slice(-3).reverse()} />
    </div>
  );
}
