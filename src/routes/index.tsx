import type { MetaFunction } from "@remix-run/node";
import { CharityWaitlistSection, CharityWaitlistDocumentation } from "~/components/charity-waitlist";
import CharityWaitlistPartners from "~/components/charity-waitlist/CharityWaitlistPartners";
import { DocumentationProvider } from "~/components/documentation";

export const meta: MetaFunction = () => ({
  title: "TODAQ Micro",
  description: "Power your micropayments with TODAQ Micro",
});

export default function Index() {
  // const data = useLoaderData<typeof loader>();

  return [
    <div className="">
      <DocumentationProvider>
        <CharityWaitlistSection />
        <CharityWaitlistDocumentation />
      </DocumentationProvider>
      <CharityWaitlistPartners />
    </div>
  ];
}
