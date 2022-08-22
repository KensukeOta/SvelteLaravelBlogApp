import type { LayoutServerLoad } from "./$types"
import { axios } from "$lib/axios";

export const load: LayoutServerLoad = async ({ request }) => {
  let res;
  try {
    res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`, { headers: { Cookie: request.headers.get("cookie") ?? "", referer: request.headers.get("referer") ?? "" } });
  } catch (error) {
    console.log(error);
  }
  
  return {
    user: res?.data
  };
};