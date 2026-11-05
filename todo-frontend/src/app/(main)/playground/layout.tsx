import Counter from "../../_components/Counter";
export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Layout vs template</h1>
      <p>
        Increment both counters, then switch pages. The layout counter stays;
        the template counter resets.
      </p>
      <Counter label="Layout counter" />
      {children}
    </>
  );
}
