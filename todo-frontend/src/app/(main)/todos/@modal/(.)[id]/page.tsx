import { notFound } from "next/navigation";
import { getTodo } from "../../../../_lib/todos";
import TodoDetails from "../../../../_components/TodoDetails";
import Modal from "../../../../_components/Modal";
export default async function TodoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const todo = await getTodo((await params).id);
  if (!todo) notFound();
  return (
    <Modal>
      <TodoDetails todo={todo} />
    </Modal>
  );
}
