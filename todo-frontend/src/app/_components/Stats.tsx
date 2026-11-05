import type { Stats as TodoStats } from "../_lib/todos";
export default function Stats({ stats }: { stats: TodoStats }) {
  return (
    <div className="grid stats">
      {Object.entries(stats).map(([label, value]) => (
        <div className="panel" key={label}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
}
