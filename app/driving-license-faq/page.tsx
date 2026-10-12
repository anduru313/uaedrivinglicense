import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, MessageCircleQuestion, ShieldCheck } from "lucide-react";
import { PageIntro, Breadcrumbs, DisclosureBox, SourceNote } from "@/components/page-shell";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getPageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Driving licence FAQ"),
  description: "Browse common UAE and Dubai driving licence questions about opening a file, age requirements, tests, costs, eye tests, and exchange routes.",
};

const faqs = [
  { q: "How do I open a driving file in Dubai?", a: "The normal route is to confirm eligibility, choose a suitable authorised provider, prepare the required documents, and complete any eye-test or initial application steps before training and testing." },
  { q: "What is the minimum age to start driving in Dubai?", a: "The minimum age depends on the category and the current official guidance. Always verify the exact category-specific requirement before assuming you are eligible." },
  { q: "Do I need an eye test before training?", a: "Most applicants complete an eye-test step as part of the licensing route, but the exact timing and approval route should be checked with the official current guidance." },
  { q: "Can I exchange my foreign licence in Dubai?", a: "Exchange eligibility depends on the issuing country, licence class, and current UAE policy. These rules can change and should be checked before booking any confirmatory steps." },
  { q: "How much does a Dubai licence cost?", a: "Costs vary between official authority fees, institute package pricing, and optional extras. A realistic comparison should include the full journey, not just the headline fee." },
  { q: "How do I choose a driving school in Dubai?", a: "Compare transparency, package inclusions, vehicle type, training schedule, and policy terms before committing to a package or signing a contract." },
];

export default function DrivingLicenseFaqPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Frequently asked questions"
        title="Driving licence FAQ"
        description="These answers are general references for understanding common questions. They are not a substitute for current official RTA, UAE government, or legal advice when you are ready to submit documents or pay for training."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppCTA label="Ask a question" topic="UAE driving licence FAQ" detail="I have a question about opening a file, costs, or tests for a Dubai driving licence." className="px-5 py-3" />
          <Link href="/contact/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100">Contact page</Link>
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "FAQ" }]} />

        <section className="space-y-5">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3 text-base font-semibold text-slate-900">
                <HelpCircle className="h-5 w-5 text-blue-700" aria-hidden="true" />
                <span>{item.q}</span>
              </div>
              <p className="text-sm leading-7 text-slate-600">{item.a}</p>
            </div>
          ))}
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-xl font-semibold text-slate-900"><MessageCircleQuestion className="h-5 w-5 text-green-600" aria-hidden="true" /> Need a specific answer?</div>
            <p className="text-sm leading-7 text-slate-700">The best next step is to confirm your route, category, and document status with the official authority and your chosen training provider before paying. This guide is designed to help you understand what to ask.</p>
          </div>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-xl font-semibold text-slate-900"><ShieldCheck className="h-5 w-5 text-green-600" aria-hidden="true" /> Official references</div>
              <p className="text-sm leading-7 text-slate-700">This FAQ references general public guidance and expects users to validate current rules with official service channels.</p>
              <SourceNote source="https://www.rta.ae/" checked="2026-10-12" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
