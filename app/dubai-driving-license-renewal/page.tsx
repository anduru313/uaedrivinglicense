import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, BadgeCheck, Eye, FileCheck, ShieldCheck } from "@/components/icons";
import { Breadcrumbs, DisclosureBox, PageIntro } from "@/components/page-shell";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

export const metadata: Metadata = {
  title: "RTA Dubai driving licence renewal fees (2026)",
  description: "Check the cost categories for Dubai driving licence renewal in 2026, what can affect the total, and how to verify the live amount through RTA.",
};

const steps = [
  { title: "Check your licence and account", body: "Confirm the licence expiry date and that your Emirates ID and contact details are current in the official RTA service. Renewal rules and validity can vary by age, licence type, and applicant status.", icon: BadgeCheck },
  { title: "Complete an approved eye test", body: "If required for your renewal, book with an RTA-approved eye-test centre. Ask the centre to confirm that the result has been sent electronically to the relevant traffic file before you submit the renewal.", icon: Eye },
  { title: "Resolve outstanding requirements", body: "Review any traffic fines, blocks, or other requirements shown in your authority account and settle or resolve them through official channels before proceeding.", icon: FileCheck },
  { title: "Submit and pay through RTA", body: "Use the RTA website or official app/service channel, follow the prompts for renewal, confirm the displayed charges and delivery or collection option, then keep the receipt and digital licence available.", icon: ShieldCheck },
];

export default function DubaiDrivingLicenseRenewalPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Renewal guide"
        title="Renewing a Dubai driving licence"
        description="Dubai licence renewal is handled through the relevant authority service. Prepare for an eye test if required, check your traffic file, and confirm the current fee and validity shown by RTA before submitting."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://www.rta.ae/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-slate-800">Open RTA website</a>
          <WhatsAppCTA label="Ask about renewal" topic="Dubai driving licence renewal" detail="Please help me understand the official Dubai driving licence renewal steps and what I should prepare." className="px-5 py-3" />
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Licence renewal" }]} />

        <section className="grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-800">{index + 1}</span>
                  <Icon className="h-5 w-5 text-blue-800" aria-hidden="true" />
                  <h2 className="text-lg font-semibold text-slate-900">{step.title}</h2>
                </div>
                <p className="text-sm leading-7 text-slate-600">{step.body}</p>
              </article>
            );
          })}
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">What to have ready</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>Your current UAE driving licence and Emirates ID details.</li>
              <li>A recent eye-test result from an approved centre if required for your renewal.</li>
              <li>Access to the RTA account or official app associated with your traffic file.</li>
              <li>A payment method and a current address if you select a delivery option.</li>
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-700">Renewal periods, fees, delivery options, and any late-renewal consequences can change and may depend on the licence holder. Check the amount and terms displayed in the official RTA service rather than relying on third-party fee tables.</p>
          </section>

          <div className="space-y-6">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-center gap-3 text-amber-900"><AlertTriangle className="h-5 w-5" aria-hidden="true" /><h2 className="text-lg font-semibold">Do not leave it until you travel</h2></div>
              <p className="mt-3 text-sm leading-7 text-amber-900">Do not assume an expired licence remains valid for driving. Confirm any grace period, late fees, or eligibility restrictions with RTA, and complete renewal before driving if your licence has expired.</p>
            </div>
            <DisclosureBox />
          </div>
        </div>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">RTA driving licence renewal fees in 2026</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            There is not one safe third-party total to quote for every driver. The amount payable is the total shown by RTA for your licence and application at checkout. Review the fee breakdown there, including the renewal charge and any applicable knowledge/innovation, eye-test, delivery, or other service charges. Optional delivery or eye-test charges may be billed separately from the renewal service.
          </p>
          <ol className="mt-5 grid gap-4 text-sm leading-7 text-slate-700 md:grid-cols-3">
            <li className="rounded-2xl bg-slate-50 p-4"><strong className="text-slate-900">Check your profile:</strong> licence category, age, expiry status, and any account notices can affect the service shown.</li>
            <li className="rounded-2xl bg-slate-50 p-4"><strong className="text-slate-900">Separate the extras:</strong> confirm whether the eye test and delivery are included or paid separately.</li>
            <li className="rounded-2xl bg-slate-50 p-4"><strong className="text-slate-900">Use the live amount:</strong> rely on the RTA application total before payment, not an old fee table or school quote.</li>
          </ol>
          <p className="mt-5 text-xs text-slate-500">Checked 14 October 2026. Fees and conditions may change; this guide does not replace the amount shown in your RTA account.</p>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-xl font-semibold text-slate-900">Official references</h2>
          <ul className="mt-4 space-y-3 text-sm text-blue-800">
            <li><a href="https://u.ae/en/information-and-services/transportation/get-a-driving-licence/renewal-of-driving-licence" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">UAE Government: Renewal of driving licence</a></li>
            <li><a href="https://www.rta.ae/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Dubai Roads and Transport Authority (RTA)</a></li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">Checked 13 October 2026. This guide is informational; the authority service is the source of current eligibility, charges, and processing details.</p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-blue-800">
          <Link href="/international-driving-permit-uae/" className="hover:text-blue-950">UAE international driving permit guide</Link>
          <Link href="/driving-license-requirements-uae/" className="hover:text-blue-950">Licence requirements guide</Link>
        </div>
      </div>
    </main>
  );
}