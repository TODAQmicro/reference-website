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
    useCase: string,
  ) {

    const params = {
      Destination: {
        ToAddresses: ['sales@todaq.net', 'sales@todaqfinance.com', 'salesmanager@todaqfinance.com'],
        BccAddresses: ['matthew.mihok@todaq.net'],
      },
      Source: 'support@mail.m.todaq.net',
      Message: {
        Body: {
          Html: {
            Data: `
Company Name: ${companyName}\r\n\n
Name: ${name}\r\n\n
Role: ${role}\r\n\n
Email: ${email}\r\n\r\n\n
Use Case: ${useCase}\t\r\n\t\r\n

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
