"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  async function remove() {
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/todos/" + id, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Could not delete todo.");
      router.push("/todos");
      router.refresh();
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Could not delete todo.",
      );
      setPending(false);
    }
  }
  return (
    <div>
      <button className="danger" disabled={pending} onClick={remove}>
        {pending ? "Deleting…" : "Delete todo"}
      </button>
      {error && (
        <p role="alert" className="error">
          {error}
        </p>
      )}
    </div>
  );
}
