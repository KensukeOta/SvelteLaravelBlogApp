import type { Action } from "@sveltejs/kit";
import { axios } from "$lib/axios";

export const POST: Action = async ({ request }) => {
  const values = await request.formData();
  let errorMsg;
  
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/users/create`, { name: values.get("name"), email: values.get("email"), password: values.get("password"), password_confirmation: values.get("password_confirmation") });
  } catch (error: any) {
    errorMsg = error.response.data.message;
    // console.log(error.response.data.errors);
    // errorMsg = error.response.data.errors.name[0];
  }

  if (errorMsg) {
    return {
      errors: {
        errorMsg
      }
    };
  }
 
  return {
    location: "/"
  };
};