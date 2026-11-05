"use client";
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", padding: 40 }}>
        <h1>Something went wrong</h1>
        <p>The application could not load. Please try again.</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
