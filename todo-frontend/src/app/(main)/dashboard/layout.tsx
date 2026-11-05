import Link from "next/link";
export default function DashboardLayout({
  children,
  stats,
  recent,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  recent: React.ReactNode;
}) {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="actions">
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      {children}
      <section>
        <h2>Stats</h2>
        {stats}
      </section>
      <section>
        <h2>Recent todos</h2>
        {recent}
      </section>
    </>
  );
}
