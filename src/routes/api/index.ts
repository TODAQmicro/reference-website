import { redirect } from "@remix-run/node";

export const action = async () => {
  return redirect("/api/v1");
};
