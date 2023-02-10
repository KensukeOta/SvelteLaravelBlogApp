import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({ fetch, params, parent }) => {
  const { user } = await parent();
  let res;
  let post;

  try {
    res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${params.id}`, {
      headers: {
        "Accept": "application/json",
      }
    });
    if (!res.ok) {
      const errors = await res.json();
      throw new Error(errors.message)
    }
    post = await res.json();
  } catch (error) {
    console.log(error);
  }
  
  return {
    user: user,
    post: post,
  };
})