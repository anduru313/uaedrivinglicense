import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, BadgeCheck, CircleDollarSign, FileCheck } from "@/components/icons";
import { Breadcrumbs, DisclosureBox, PageIntro } from "@/components/page-shell";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getPageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Golden Chance test cost Dubai (2026)"),
  description: "Understand Dubai's Golden Chance or instant-test route, what the RTA test charge covers, likely extra cost categories, and how to confirm eligibility.",
};

const checks = [
  {
    title: "Confirm the route applies to you",
    body: "Ask RTA or an approved driving institute to check your licence, issuing country, residence status, and traffic-file details. The Golden Chance/instant-test route is not guaranteed for every applicant.",
  },
  {
    title: "Request a complete written quote",
    body: "Ask the institute to separate RTA charges from its own file-opening or service charges, eye-test fees, and any optional training. Confirm exactly what is included before paying.",
  },
  {
    title: "Check the assessment requirements",
    body: "Confirm which test or tests you must take, whether preparation or training is required, how appointments are booked, and what happens if you do not pass.",
  },
];

export default function GoldenChanceDrivingLicenseDubaiPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Dubai test and cost guide · 2026"
        title="Golden Chance driving test in Dubai: cost and eligibility"
        description="The Golden Chance route is often discussed as a way for eligible drivers with foreign driving experience to take an assessment without following the full standard training route. Eligibility, required tests, and the total price must be confirmed for your case with RTA and an approved institute."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://www.rta.ae/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800">Check RTA services</a>
          <Link href="/dubai-driving-license-cost/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 hover:bg-slate-100">Compare licence cost categories</Link>
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Golden Chance test" }]} />

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <CircleDollarSign className="h-6 w-6 text-green-700" aria-hidden="true" />
              <h2 className="text-2xl font-bold">What does the Golden Chance test cost in 2026?</h2>
            </div>
            <p className="text-sm leading-7 text-slate-700">
              RTA service information currently lists an <strong>instant-test charge of AED 420</strong> (AED 400 service fee plus AED 20 Knowledge and Innovation fees) for the relevant instant-test service. Treat this as a test-service charge, not a guaranteed all-in Golden Chance package price. RTA charges and service eligibility can change; confirm the amount shown for your application before paying.
            </p>
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-center gap-2 font-semibold text-amber-900">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                <h3>There is no single guaranteed package total</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-amber-900">
                A final quote may also include institute or file services, an eye test, any required preparation, and additional test or training charges. These are not all included in the RTA test fee and can vary by provider and applicant.
              </p>
            </div>
          </article>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-green-700" aria-hidden="true" />
                <h2 className="text-xl font-semibold">Before you book</h2>
              </div>
              <p className="text-sm leading-7 text-slate-700">
                Ask RTA or your chosen approved institute to confirm the current route for your case. Do not assume a foreign licence qualifies for direct exchange or an instant test.
              </p>
              <p className="mt-4 text-xs text-slate-500">
                RTA fees checked 14 October 2026. Verify current fees and eligibility in the live RTA service.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-bold">How to check the Golden Chance route</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {checks.map((check, index) => (
              <article key={check.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-900">{index + 1}</span>
                  <FileCheck className="h-5 w-5 text-blue-800" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{check.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{check.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold">Golden Chance: common questions</h2>
          <div className="mt-5 space-y-5 text-sm leading-7 text-slate-700">
            <div>
              <h3 className="font-semibold text-slate-900">Does Golden Chance mean I automatically get a UAE licence without lessons?</h3>
              <p>No. It refers to a possible assessment route, not a licence guarantee. RTA determines eligibility and the required steps; applicants may need training or further testing depending on their results and current rules.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Is AED 420 the full Golden Chance price?</h3>
              <p>No. It is the RTA instant-test service charge currently listed for the relevant service. Provider charges and any other required services should be itemised separately.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">What if I do not pass?</h3>
              <p>Ask RTA or the institute what the current retest, training, and booking rules are before you register. Do not rely on assumptions about repeat attempts or included lessons.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-blue-800">
            <Link href="/open-driving-file-dubai/" className="hover:text-blue-950">How to open a Dubai driving file</Link>
            <Link href="/foreign-driving-license-exchange-dubai/" className="hover:text-blue-950">Foreign licence exchange guide</Link>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-950">Official reference</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">Check the RTA service catalogue and your live application for current eligibility, test details, and charges.</p>
          <a href="https://www.rta.ae/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-blue-800 underline underline-offset-2">Dubai Roads and Transport Authority</a>
        </section>
      </div>
    </main>
  );
}
