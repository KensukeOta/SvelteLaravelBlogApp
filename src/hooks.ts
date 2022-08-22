import type { Handle } from "@sveltejs/kit";
import { axios } from "$lib/axios";

export const handle: Handle = async ({ event, resolve }) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`, { headers: { Cookie: event.request.headers.get("cookie") ?? "", referer: event.request.headers.get("referer") ?? "" } });
    event.locals.user = res.data;
  } catch (error) {
    console.log(error);
  }
  
  const response = await resolve(event);

  return response;
};