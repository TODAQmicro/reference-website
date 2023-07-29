import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { EmailController } from "~/controllers/email";

export const action = async (args: ActionArgs) => {
  if (args.request.method !== "PUT") {
    return json(
      {
        success: false,
        errors: ["Method not allowed"],
        message: "Method not allowed",
      },
      405
    );
  }

  const payload = await args.request.formData();
  const ctrl = new EmailController(args);

  if (payload.has("email")) {
    return await ctrl.addContacts([{ email: payload.get("email") as string }]);
  }

  return json(
    {
      success: false,
      errors: ["Bad request"],
      message: "Missing required field 'email' from request",
    },
    400
  );
};
