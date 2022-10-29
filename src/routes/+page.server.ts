import type { PageServerLoad } from "./$types"
import { axios } from "$lib/axios";

export const load: PageServerLoad = async ({ parent, url }) => {
  const { user } = await parent();
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts${url.search}`);
  const posts = await res.data;

  return {
    user: user,
    posts: posts,
  };
};