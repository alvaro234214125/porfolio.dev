import type { APIRoute } from "astro";
import { sendContactForm } from "../../service/contact.ts";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const result = await sendContactForm(body);

  return new Response(
    JSON.stringify(result),
    { status: result.success ? 200 : 500 }
  );
};
