import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = (async ({ fetch, parent }) => {
  const { user } = await parent();
  let res;
  let posts;

  try {
    res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
      headers: {
        "Accept": "application/json",
      }
    });
    if (!res.ok) {
      const errors = await res.json();
      throw new Error(errors.message);
    }
    posts = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    user: user,
    posts: posts,
  };
})