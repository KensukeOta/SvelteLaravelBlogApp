import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = (async ({ parent }) => {
  const { user } = await parent();

  if (user.name) {
    throw redirect(307, "/");
  }

  return {
    user: user,
  };
})

export const actions: Actions = {
  default: async ({ cookies, fetch, request }) => {
    const values = await request.formData();
    let errors;

    const email = values.get("email");
    const password = values.get("password");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": cookies.get("XSRF-TOKEN") ?? "",
        },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) {
        errors = await res.json();
        throw new Error(errors.message);
      }
    } catch (error) {
      console.log(error);
    }

    // try {
    //   await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, { email: values.get("email"), password: values.get("password") }, { headers: { Cookie: request.headers.get("cookie") ?? "", referer: request.headers.get("referer") ?? "", "X-XSRF-TOKEN": cookies.get("XSRF-TOKEN") ?? "" } });
    // } catch (error: any) {
    //   errors = error.response.data.message;
    // }

    if (errors) {
      return fail(400, { email, errors });
    }
  }
};