import type { Actions, PageServerLoad } from "./$types";
import { invalid, redirect } from "@sveltejs/kit";
import { axios } from "$lib/axios";

export const load: PageServerLoad = async ({ parent }) => {
  const { user } = await parent();

  if (!user.name) {
    throw redirect(307, "/login");
  }

  return {
    user: user
  }
};

export const actions: Actions = {
  default: async ({ request }) => {
    const values = await request.formData();
    let errors;
    
    const title = values.get("title");
    const body = values.get("body");
    const user_id = values.get("user_id");

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/posts/create`, { title, body, user_id });
    } catch (error: any) {
      errors = error.response.data.message;
    }

    if (errors) {
      return invalid(400, { title, body, errors });
    }

    throw redirect(303, "/");
  },
};