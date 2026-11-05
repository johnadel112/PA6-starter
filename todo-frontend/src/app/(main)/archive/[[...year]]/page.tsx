export default async function Archive({
  params,
}: {
  params: Promise<{ year?: string[] }>;
}) {
  const { year } = await params;
  return (
    <section className="panel">
      <h1>Archive</h1>
      <p>{year ? year.join(" / ") : "All years"}</p>
    </section>
  );
}
