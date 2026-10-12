import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, BadgeDollarSign, CarFront, CircleDollarSign, Gauge, WalletCards } from "lucide-react";
import { PageIntro, Breadcrumbs, DisclosureBox, SourceNote } from "@/components/page-shell";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getPageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Dubai driving licence cost"),
  description: "Understand the main cost categories for a Dubai driving licence, including official fees, driving institute packages, and optional charges that may apply.",
};

const categories = [
  { title: "Official government charges", detail: "These are the RTA and related authority charges that may apply to registration, tests, or licence issue. Always confirm the live fee schedule before paying." },
  { title: "Driving institute package", detail: "Institute pricing varies by category, lesson count, vehicle type, and whether theory, yard, or road tests are included." },
  { title: "Optional or extra charges", detail: "Some applicants may pay for rescheduling, extra lessons, licence document handling, eye-test centre charges, or other services depending on their route." },
];

export default function DubaiDrivingLicenseCostPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Cost guide"
        title="Dubai driving licence cost guide"
        description="Licence costs can include official authority charges, training package fees, and optional extras. Because pricing changes, this page separates the types of costs so you can compare offers more clearly before making a decision."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppCTA label="Ask about fees" topic="Dubai driving licence cost" detail="Please explain the main cost categories and what I should check before choosing a driving package in Dubai." className="px-5 py-3" />
          <Link href="/open-driving-file-dubai/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100">Open a file guide</Link>
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Dubai licence cost" }]} />

        <section className="grid gap-5 md:grid-cols-3">
          {categories.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                {item.title.includes("Official") ? <WalletCards className="h-5 w-5" aria-hidden="true" /> : item.title.includes("Driving institute") ? <CarFront className="h-5 w-5" aria-hidden="true" /> : <Gauge className="h-5 w-5" aria-hidden="true" />}
              </div>
              <h2 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="text-sm leading-7 text-slate-600">{item.detail}</p>
            </div>
          ))}
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">How to compare offers</h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <li><strong className="text-slate-900">1.</strong> Confirm the current authority fee schedule. Do not assume the same price applies to all categories or applicants.</li>
              <li><strong className="text-slate-900">2.</strong> Ask whether the institute price includes theory access, practical lessons, yard sessions, and test booking support.</li>
              <li><strong className="text-slate-900">3.</strong> Check whether reschedule fees, extra road hours, or vehicle rental costs are listed clearly in writing.</li>
              <li><strong className="text-slate-900">4.</strong> Compare the total cost of the full pathway, not only the headline package price.</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-2 flex items-center gap-2 text-base font-semibold text-slate-900"><BadgeDollarSign className="h-5 w-5 text-green-600" aria-hidden="true" /> Transparent pricing checklist</div>
              <p className="text-sm leading-7 text-slate-700">Ask for a written breakdown of any licence application fee, training package, test fees, eye-test cost, and potential extras. If the provider cannot show the total clearly, treat the offer as incomplete.</p>
            </div>
          </div>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-xl font-semibold text-slate-900"><AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" /> Important</div>
              <p className="text-sm leading-7 text-slate-700">Some prices may change based on category, residence status, or whether the applicant is reapplying or exchanging a foreign licence. Always confirm the latest public fee schedule before finalising a booking.</p>
              <SourceNote source="https://www.rta.ae/" checked="2026-10-12" />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-emerald-50 p-8">
          <div className="flex items-center gap-3 text-emerald-900">
            <CircleDollarSign className="h-6 w-6" aria-hidden="true" />
            <h2 className="text-2xl font-bold">How to avoid surprise fees</h2>
          </div>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700">The most common mistake is focusing only on a low headline rate while overlooking compulsory training, test attempts, or extra lessons. A realistic comparison should include the expected total cost from first file opening through licence issue or exchange.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppCTA label="Compare package options" topic="driving licence cost in Dubai" detail="Please walk me through the likely cost categories and what I should ask a driving institute before enrolling." className="px-5 py-3" />
            <Link href="/driving-license-faq/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100">Read FAQ</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
