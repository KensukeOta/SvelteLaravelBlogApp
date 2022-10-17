import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
  const { user } = await parent();

  if (!user.name) {
    throw redirect(307, "/login");
  }

  return {
    user: user
  }
};