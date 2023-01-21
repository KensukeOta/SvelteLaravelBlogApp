import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { axios } from "$lib/axios";

export const load: PageServerLoad = (async ({ parent, params }) => {
  const { user } = await parent();
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts/${params.id}`);
  const post = await res.data;

  if (!user || user.id !== post.user_id) {
    throw redirect(307, "/");
  }

  return {
    user: user,
    post: post,
  };
})

export const actions: Actions = {
  default: async ({ request, params }) => {
    const values = await request.formData();
    let errors;
    
    const title = values.get("title");
    const body = values.get("body");
    const user_id = values.get("user_id");

    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/api/posts/${params.id}/update`, { title, body, user_id });
    } catch (error: any) {
      errors = error.response.data.message;
    }

    if (errors) {
      return fail(400, { title, body, errors });
    }

    throw redirect(303, "/");
  },
};