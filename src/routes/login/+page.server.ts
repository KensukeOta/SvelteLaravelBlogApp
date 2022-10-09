import type { Actions, PageServerLoad } from "./$types";
import { invalid, redirect } from "@sveltejs/kit";
import { axios } from "$lib/axios";

export const load: PageServerLoad = async ({ parent }) => {
  const { user } = await parent();

  if (user.name) {
    throw redirect(307, "/");
  }

  return {
    user: user,
  };
};

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const values = await request.formData();
    let errors;

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, { email: values.get("email"), password: values.get("password") }, { headers: { Cookie: request.headers.get("cookie") ?? "", referer: request.headers.get("referer") ?? "", "X-XSRF-TOKEN": cookies.get("XSRF-TOKEN") ?? "" } });
    } catch (error: any) {
      errors = error.response.data.message;
    }

    if (errors) {
      return invalid(400, { email: values.get("email"), errors: errors });
    }

    throw redirect(303, "/");
  }
};