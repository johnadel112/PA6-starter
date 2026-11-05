import Link from "next/link";
export default function PageB() {
  return (
    <section className="panel">
      <h2>Page B</h2>
      <Link href="/playground/a">Go to page A</Link>
    </section>
  );
}
