"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
export default function NewTodo() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          Array.isArray(data.message)
            ? data.message.join(", ")
            : data.message || "Could not create todo.",
        );
      router.push("/todos");
      router.refresh();
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Could not create todo.",
      );
      setPending(false);
    }
  }
  return (
    <section className="panel">
      <h1>Create a todo</h1>
      <form onSubmit={submit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-describedby={error ? "form-error" : undefined}
        />
        {error && (
          <p id="form-error" role="alert" className="error">
            {error}
          </p>
        )}
        <div className="actions">
          <button disabled={pending}>
            {pending ? "Creating…" : "Create todo"}
          </button>
          <Link href="/todos">Cancel</Link>
        </div>
      </form>
    </section>
  );
}
