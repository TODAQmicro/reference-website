import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export const action = async (args: ActionArgs) => {
  return json(
    {
      success: false,
      errors: ["Not Implemented"],
      message: "Not Implemented",
    },
    501
  );
};
