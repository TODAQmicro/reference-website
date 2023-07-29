import type { ActionArgs } from "@remix-run/node";

export class Controller {
  private args: ActionArgs;

  constructor(args: ActionArgs) {
    this.args = args;
  }
}
