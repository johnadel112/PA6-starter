import Stats from "../../../_components/Stats";
import { getStats, getTodos } from "../../../_lib/todos";
export default async function StatsSlot() {
  return <Stats stats={getStats(await getTodos())} />;
}
