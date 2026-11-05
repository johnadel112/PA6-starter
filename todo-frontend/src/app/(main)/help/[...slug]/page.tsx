import Link from "next/link";
export default async function Help({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <section className="panel">
      <h1>Help</h1>
      <p aria-label="Breadcrumb">
        Help
        {slug.map((part, index) => (
          <span key={index}>
            {" > "}
            <Link
              href={
                "/help/" +
                slug
                  .slice(0, index + 1)
                  .map(encodeURIComponent)
                  .join("/")
              }
            >
              {part}
            </Link>
          </span>
        ))}
      </p>
      <p>
        To create a todo, open <Link href="/todos/new">New todo</Link>, enter a
        title, and submit the form.
      </p>
    </section>
  );
}
