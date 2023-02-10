import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = (async ({ parent }) => {
  const { user } = await parent();

  if (!user.name) {
    throw redirect(307, "/login");
  }

  return {
    user: user
  }
})

export const actions: Actions = {
  default: async ({ cookies, fetch, request }) => {
    const values = await request.formData();
    let errors;
    
    const title = values.get("title");
    const body = values.get("body");
    const user_id = values.get("user_id");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/create`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": cookies.get("XSRF-TOKEN") ?? ""
        },
        body: JSON.stringify({ title, body, user_id })
      });
      if (!res.ok) {
        errors = await res.json();
        throw new Error(errors.message);
      }
    } catch (error) {
      console.log(error);
    }
    
    if (errors) {
      return fail(400, { title, body, errors });
    }

    throw redirect(303, "/");
  },
};