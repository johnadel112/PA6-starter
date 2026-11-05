export default async function CatchAll({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <section className="panel">
      <h1>Todo catch-all route</h1>
      <pre>{JSON.stringify(slug, null, 2)}</pre>
      <p>
        /todos/new uses the static page, /todos/5 uses [id], and /todos/5/edit
        uses [...slug].
      </p>
    </section>
  );
}
