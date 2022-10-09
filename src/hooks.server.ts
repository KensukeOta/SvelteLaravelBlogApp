import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  if (!event.locals.user) {
    try {
      const res = await event.fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
        headers: { Accept: "application/json" }
      });
      event.locals.user = await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  
  const response = await resolve(event);

  return response;
}