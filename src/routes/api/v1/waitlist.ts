import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { EmailController } from "~/controllers/email";

export const action = async (args: ActionArgs) => {
  if (args.request.method !== 'POST') {
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

  if (
    !payload.has('compantName')
    || !payload.has('name')
    || !payload.has('role')
    || !payload.has('email')
  ) {
    return json(
      {
        success: false,
        errors: ["Bad request"],
        message: "Bad request",
      },
      400
    );
  }

  const email = payload.get('email');

  if (email && !email.toString().includes('@')) {
    return json(
      {
        success: false,
        errors: ["Bad request"],
        message: "Bad request",
      },
      400
    );
  }

  const companyName = payload.get('companyName');
  const name = payload.get('name');
  const role = payload.get('role');

  const ctrl = new EmailController(args);

  

  return ctrl.addContacts(`${companyName}`, `${name}`, `${role}`, `${email}`);
};
