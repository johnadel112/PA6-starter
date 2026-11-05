import Link from "next/link";
export default function NotFound() {
  return (
    <section className="panel">
      <h1>Todo not found</h1>
      <p>This todo does not exist or has been deleted.</p>
      <Link href="/todos">Back to todos</Link>
    </section>
  );
}
