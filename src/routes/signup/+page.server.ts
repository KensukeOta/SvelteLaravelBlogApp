import type { Actions } from "./$types";
import { invalid, redirect } from "@sveltejs/kit";
import { axios } from "$lib/axios";

export const actions: Actions = {
  default: async ({ request }) => {
    const values = await request.formData();
    let errors;
  
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/users/create`, { name: values.get("name"), email: values.get("email"), password: values.get("password"), password_confirmation: values.get("password_confirmation") });
    } catch (error: any) {
      errors = error.response.data.message;
      // console.log(error.response.data.errors);
      // error = error.response.data.errors.name[0];
    }

    if (errors) {
      return invalid(400, { name: values.get("name"), email: values.get("email"), errors: errors });
    }

    throw redirect(303, '/');
  }
};