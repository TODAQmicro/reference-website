import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { ActionArgs, json } from "@remix-run/node";
import { Controller } from "./index";

export class EmailController extends Controller {
  constructor(args: ActionArgs) {
    super(args);
  }

  // get contacts() { }

  async addContacts(
    companyName: string,
    name: string,
    role: string,
    email: string,
  ) {

    const params = {
      Destination: {
        ToAddresses: ['support@mail.m.todaq.net'],
      },
      Source: 'support@mail.m.todaq.net',
      Message: {
        Body: {
          Html: {
            Data: `
Company Name: ${companyName}
Name: ${name}
Role: ${role}
Email: ${email}

This is an automated message.
            `,
            Charset: 'utf-8',
          },
        },
        Subject: {
          Data: `${companyName} wants to join the waitlist!`,
          Charset: 'utf-8',
        },
      },      
    };

    const command = new SendEmailCommand(params);
    const client = new SESClient({ region: 'ca-central-1' });

    try {
      await client.send(command);

      return json({ success: true, errors: [], message: "OK" }, 200);
    } catch (error: any) {
      return json(
        {
          success: false,
          errors: error,
          message: "Internal server error",
        },
        500
      );
    }
  }

  removeContact() {}

  sendEmail() {}
}
