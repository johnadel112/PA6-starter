import { getStats, getTodos } from "../../_lib/todos";
export async function GET() {
  try {
    return Response.json(getStats(await getTodos()));
  } catch {
    return Response.json(
      { message: "Could not load stats. Check the backend on port 3000." },
      { status: 502 },
    );
  }
}
