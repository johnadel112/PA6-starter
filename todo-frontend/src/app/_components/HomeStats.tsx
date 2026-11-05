"use client";
import { useEffect, useState } from "react";
import type { Stats as TodoStats } from "../_lib/todos";
import Stats from "./Stats";
export default function HomeStats() {
  const [stats, setStats] = useState<TodoStats | null>(null);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/stats", { cache: "no-store", signal: controller.signal })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setStats(data);
      })
      .catch((error: Error) => {
        if (!controller.signal.aborted) setError(error.message);
      });
    return () => controller.abort();
  }, [attempt]);
  if (error)
    return (
      <div className="panel">
        <p role="alert" className="error">
          {error}
        </p>
        <button
          onClick={() => {
            setError("");
            setAttempt(attempt + 1);
          }}
        >
          Try again
        </button>
      </div>
    );
  return stats ? <Stats stats={stats} /> : <p role="status">Loading stats…</p>;
}
