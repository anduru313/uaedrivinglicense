import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightLeft, BadgeCheck, Globe2 } from "lucide-react";
import { PageIntro, Breadcrumbs, DisclosureBox, SourceNote } from "@/components/page-shell";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getPageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Foreign driving licence exchange in Dubai"),
  description: "Understand the main factors that affect foreign driving licence exchange in Dubai, including eligibility, issuing country rules, and official RTA guidance.",
};

export default function ForeignDrivingLicenseExchangePage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Exchange and transfer guidance"
        title="Foreign driving licence exchange in Dubai"
        description="Foreign licence exchange rules depend on the issuing country, the category of licence, and current UAE policy. Some drivers may be eligible for direct exchange under specific criteria, while others will need to go through the full UAE licensing process."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppCTA label="Ask about exchange rules" topic="foreign driving licence exchange in Dubai" detail="Please explain the main requirements and where I should check whether my foreign licence can be exchanged in Dubai." className="px-5 py-3" />
          <Link href="/driving-license-requirements-uae/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100">View requirements</Link>
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Foreign licence exchange" }]} />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">The decision usually depends on:</h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <li><strong className="text-slate-900">• Issuing country:</strong> some countries have recognised exchange arrangements while others do not.</li>
              <li><strong className="text-slate-900">• Licence category:</strong> the permission you hold and the category you want to use in the UAE can affect eligibility.</li>
              <li><strong className="text-slate-900">• Current policy:</strong> rules can change, so the current official guidance should always be reviewed before booking.</li>
              <li><strong className="text-slate-900">• Residence status:</strong> the conditions for licence transfer or testing may vary by applicant profile.</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-2 flex items-center gap-2 text-base font-semibold text-slate-900"><Globe2 className="h-5 w-5 text-blue-700" aria-hidden="true" /> What to do next</div>
              <p className="text-sm leading-7 text-slate-700">Gather your current licence, passport, and residence details, then check the current Dubai RTA guidance for the precise eligibility route and any required document checks.</p>
            </div>
          </div>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-xl font-semibold text-slate-900"><BadgeCheck className="h-5 w-5 text-green-600" aria-hidden="true" /> Official source</div>
              <p className="text-sm leading-7 text-slate-700">Official guidance should be reviewed before you rely on any exchange decision. The RTA advises that rules can depend on nationality, licence class, and policy updates.</p>
              <SourceNote source="https://www.rta.ae/" checked="2026-10-12" />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-rose-50 p-8">
          <div className="flex items-center gap-3 text-rose-900">
            <ArrowRightLeft className="h-6 w-6" aria-hidden="true" />
            <h2 className="text-2xl font-bold">Important caution</h2>
          </div>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700">Do not assume an exchange is possible without checking current policy. Many cases require an official check of the licence issuing country, category, and current UAE rules. A licence pathway that looks straightforward often changes with policy updates or document status.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppCTA label="Confirm exchange eligibility" topic="foreign driving licence exchange in Dubai" detail="Please guide me through the official exchange route for my situation and what documents I should prepare." className="px-5 py-3" />
            <Link href="/driving-license-eye-test-dubai/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100">Learn about eye tests</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
