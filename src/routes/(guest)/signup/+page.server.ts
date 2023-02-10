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

    const name = values.get("name");
    const email = values.get("email");
    const password = values.get("password");
    const password_confirmation = values.get("password_confirmation");
  
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/create`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": cookies.get("XSRF-TOKEN") ?? "",
        },
        body: JSON.stringify({ name, email, password, password_confirmation })
      });
      if (!res.ok) {
        errors = await res.json();
        throw new Error(errors.message);
      }
    } catch (error) {
      console.log(error);
    }

    // try {
    //   await axios.post(`${import.meta.env.VITE_API_URL}/api/users/create`, { name: values.get("name"), email: values.get("email"), password: values.get("password"), password_confirmation: values.get("password_confirmation") });
    // } catch (error: any) {
    //   errors = error.response.data.message;
    //   // console.log(error.response.data.errors);
    //   // error = error.response.data.errors.name[0];
    // }

    if (errors) {
      return fail(400, { name, email, errors });
    }
  }
};