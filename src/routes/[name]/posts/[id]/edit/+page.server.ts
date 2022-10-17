import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { axios } from "$lib/axios";

export const load: PageServerLoad = async ({ parent, params }) => {
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
};