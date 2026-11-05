import { apiUrl } from "../../_lib/todos";
export async function POST(request: Request) {
  try {
    const response = await fetch(apiUrl("/todos"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: await request.text(),
    });
    return new Response(await response.text(), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return Response.json(
      { message: "Could not reach the backend. Please try again." },
      { status: 502 },
    );
  }
}
