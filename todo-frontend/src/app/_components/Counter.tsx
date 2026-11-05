"use client";
import { useState } from "react";
export default function Counter({ label }: { label: string }) {
  const [count, setCount] = useState(0);
  return (
    <section className="panel">
      <h2>{label}</h2>
      <p aria-live="polite">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment {label.toLowerCase()}
      </button>
    </section>
  );
}
