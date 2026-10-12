import type { Metadata } from "next";
import Link from "next/link";
import { Eye, SearchCheck, ShieldCheck, Stethoscope } from "lucide-react";
import { PageIntro, Breadcrumbs, DisclosureBox, SourceNote } from "@/components/page-shell";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getPageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Driving licence eye test in Dubai"),
  description: "Learn the general eye-test process for driving licences in Dubai and how to check which centres or official routes apply to your case.",
};

const steps = [
  "Check the latest eye-test requirement for your category and route through the official RTA and licensing channels.",
  "Select an approved optical centre or centre recognised by the relevant authority for the service you need.",
  "Bring the required ID and licence-related documents if the centre requests them before testing.",
  "Use the result as part of your overall file or licensing process, then continue with theory or practical training as required.",
];

export default function DrivingLicenseEyeTestPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Eye-test guidance"
        title="Driving licence eye test in Dubai"
        description="An eye test is commonly required before or during the licensing process. The exact route, centre, and documentation can vary by category, so it is best to check the current official guidance rather than rely on general advice alone."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppCTA label="Ask about eye-test steps" topic="Dubai driving licence eye test" detail="Please tell me how the eye-test step normally works in Dubai and what documentation I should bring." className="px-5 py-3" />
          <Link href="/driving-license-requirements-uae/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100">Requirements guide</Link>
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Eye test" }]} />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">General process</h2>
            <ol className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              {steps.map((item, index) => (
                <li key={item} className="flex gap-3"><span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-800">{index + 1}</span><span>{item}</span></li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-xl font-semibold text-slate-900"><SearchCheck className="h-5 w-5 text-green-600" aria-hidden="true" /> How to find an approved centre</div>
              <p className="text-sm leading-7 text-slate-700">Use the current official RTA and service instructions to identify approved optical centres or authorised channels. Do not rely on unverified third-party claims about a centre’s accreditation.</p>
              <SourceNote source="https://www.rta.ae/" checked="2026-10-12" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-800"><Eye className="h-5 w-5" aria-hidden="true" /></div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Eye test</h3>
            <p className="text-sm leading-7 text-slate-600">The test is usually a standard part of the licensing screening and must be kept with the rest of your application process.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-800"><Stethoscope className="h-5 w-5" aria-hidden="true" /></div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Document check</h3>
            <p className="text-sm leading-7 text-slate-600">Bring the identifying or licence documents the centre requests. Do not assume the same list applies to every route or category.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Official confirmation</h3>
            <p className="text-sm leading-7 text-slate-600">If a centre or provider says they can “guarantee” the test outcome or approval, treat this as a red flag and verify it independently.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
