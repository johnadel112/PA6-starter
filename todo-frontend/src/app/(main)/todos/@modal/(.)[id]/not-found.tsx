import Modal from "../../../../_components/Modal";
import Link from "next/link";
export default function NotFound() {
  return (
    <Modal>
      <h1 id="todo-title">Todo not found</h1>
      <p>This todo does not exist or has been deleted.</p>
      <Link href="/todos">Back to todos</Link>
    </Modal>
  );
}
