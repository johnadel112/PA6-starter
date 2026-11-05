"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function DashboardError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <section className="panel">
      <h2>Could not load dashboard</h2>
      <p>Check that the backend is running.</p>
      <button
        onClick={() =>
          startTransition(() => {
            router.refresh();
            reset();
          })
        }
      >
        Try again
      </button>
    </section>
  );
}
