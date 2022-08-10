import { axios } from "$lib/axios";
import type { GetSession, Handle } from "@sveltejs/kit";

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

export const getSession: GetSession = (event) => {
  return event.locals.user
    ? {
      user: {
        name: event.locals.user.name,
        email: event.locals.user.email,
      }
    }
    : {};
}