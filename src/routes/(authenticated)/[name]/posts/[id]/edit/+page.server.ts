import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = (async ({ fetch, params, parent }) => {
  const { user } = await parent();
  let res;
  let post;

  try {
    res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${params.id}`, {
      headers: {
        "Accept": "application/json"
      }
    });
    if (!res.ok) {
      const errors = await res.json();
      throw new Error(errors.message);
    }
    post = await res.json();
  } catch (error) {
    console.log(error);
  }

  if (!user || user.id !== post.user_id) {
    throw redirect(307, "/");
  }

  return {
    user: user,
    post: post,
  };
})

export const actions: Actions = {
  default: async ({ cookies, fetch, params, request }) => {
    const values = await request.formData();
    let errors;
    
    const title = values.get("title");
    const body = values.get("body");
    const user_id = values.get("user_id");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${params.id}/update`, {
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": cookies.get("XSRF-TOKEN") ?? "",
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