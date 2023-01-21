import type { Handle } from "@sveltejs/kit";

export const handle: Handle = (async ({ event, resolve }) => {
  if (!event.locals.user) {
    const res = await event.fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
      headers: { Accept: "application/json" }
    });
    event.locals.user = await res.json();
  }
  
  const response = await resolve(event);

  if (!event.cookies.get(import.meta.env.VITE_SESSION_NAME)) {
    const sanctum = await event.fetch(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`);

    if (sanctum.status === 204) {
      response.headers.set(
        "set-cookie", sanctum.headers.get("set-cookie") ?? ""
      )
    }
  }

  return response;
})