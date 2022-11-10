import type { Actions, PageServerLoad } from "./$types"
import { invalid } from "@sveltejs/kit";
import { axios } from "$lib/axios";

export const load: PageServerLoad = async ({ parent }) => {
  const { user } = await parent();
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts`);
  const posts = await res.data;

  return {
    user: user,
    posts: posts,
  };
};

export const actions: Actions = {
  post_search: async ({ request }) => {
    const values = await request.formData();
    const search = values.get("q");

    return invalid(200, { search });
  },
};