import Link from "next/link";
export default function PageA() {
  return (
    <section className="panel">
      <h2>Page A</h2>
      <Link href="/playground/b">Go to page B</Link>
    </section>
  );
}
