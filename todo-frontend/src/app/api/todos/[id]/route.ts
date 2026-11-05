import { apiUrl } from "../../../_lib/todos";
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  try {
    const response = await fetch(apiUrl("/todos/" + encodeURIComponent(id)), {
      method: "DELETE",
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
