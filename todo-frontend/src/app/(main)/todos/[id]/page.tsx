import { notFound } from "next/navigation";
import { getTodo } from "../../../_lib/todos";
import TodoDetails from "../../../_components/TodoDetails";
type Props = { params: Promise<{ id: string }> };
export async function generateMetadata({ params }: Props) {
  const todo = await getTodo((await params).id);
  return { title: todo?.title || "Todo not found" };
}
export default async function TodoPage({ params }: Props) {
  const todo = await getTodo((await params).id);
  if (!todo) notFound();
  return (
    <section className="panel">
      <TodoDetails todo={todo} />
    </section>
  );
}
