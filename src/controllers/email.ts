import { ActionArgs, json } from "@remix-run/node";

import sendgrid from "@sendgrid/client";
import { ClientRequest } from "@sendgrid/client/src/request";

import { Controller } from "./index";

const SENDGRID_LIST_IDS = process.env.SENDGRID_LIST_ID
  ? [process.env.SENDGRID_LIST_ID]
  : [];

sendgrid.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export class EmailController extends Controller {
  constructor(args: ActionArgs) {
    super(args);
  }

  // get contacts() { }

  async addContacts(
    contacts: { email: string }[],
    lists: string[] = SENDGRID_LIST_IDS
  ) {
    const params: ClientRequest = {
      url: "/v3/marketing/contacts",
      method: "PUT",
      body: {
        contacts,
      },
    };

    if (lists.length) {
      params.body.list_ids = lists;
    }

    try {
      const result = await sendgrid.request(params);

      return json({ success: true, errors: [], message: "OK" }, 200);
    } catch (error: any) {
      return json(
        {
          success: false,
          errors: error.response.body.errors,
          message: "Bad request",
        },
        error.code
      );
    }
  }

  removeContact() {}

  sendEmail() {}
}
