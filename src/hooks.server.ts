import type { Handle } from "@sveltejs/kit";
import { axios } from "$lib/axios";

export const handle: Handle = async ({ event, resolve }) => {
  if (!event.locals.user) {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`, { headers: { Cookie: event.request.headers.get("cookie") ?? "", referer: event.request.headers.get("referer") ?? "" } });
      event.locals.user = await res.data;
    } catch (error) {
      console.log(error);
    }
  }

  
  const response = await resolve(event);

  const sanctum = await axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`);
  
  if (sanctum.status === 204) {
    response.headers.set('set-cookie', sanctum.headers['set-cookie'] as any)
  }

  return response;
}