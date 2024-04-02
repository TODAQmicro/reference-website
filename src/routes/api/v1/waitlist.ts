import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { EmailController } from "~/controllers/email";

export const loader = async (args: LoaderArgs) => {
   if (args.request.method === 'OPTIONS') {
    return new Response('', {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }
 
  return action(args);
};

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

  const { companyName, name, role, email, useCase } = await args.request.json();

  if (!companyName || !name || !role || !email) {
    return json(
      {
        success: false,
        errors: ["Bad request"],
        message: "Bad request",
      },
      400
    );
  }

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

  const ctrl = new EmailController(args);

  return ctrl.addContacts(`${companyName}`, `${name}`, `${role}`, `${email}`, `${useCase}`);
};
