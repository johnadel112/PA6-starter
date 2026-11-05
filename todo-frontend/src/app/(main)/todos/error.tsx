"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <section className="panel">
      <h1>Could not load todos</h1>
      <p role="alert">
        Make sure the backend is running on port 3000, then try again.
      </p>
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
