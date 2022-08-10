import type { RequestHandler } from "@sveltejs/kit";
import { axios } from "$lib/axios";

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  let errorMsg;
  
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/users/create`, { name: data.name, email: data.email, password: data.password, password_confirmation: data.password_confirmation });
  } catch (error: any) {
    errorMsg = error.response.data.message;
    // console.log(error.response.data.errors.name);
    // errorMsg = error.response.data.errors.name[0];
  }

  if (errorMsg) {
    return {
      status: 400,
      body: {
        errorMsg
      }
    };
  }
 
  return {
    status: 303,
    headers: {
      location: "/"
    }
  };
};