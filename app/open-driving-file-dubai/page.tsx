import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Building2, ClipboardList, FileText, GraduationCap, ShieldCheck } from "lucide-react";
import { PageIntro, Breadcrumbs, SourceNote, DisclosureBox } from "@/components/page-shell";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getPageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Open a driving file in Dubai"),
  description: "Learn the general process to open a driving file in Dubai, check eligibility, required documents, eye-test steps, and next actions before you start driving lessons.",
};

const steps = [
  { title: "Check eligibility", description: "Review age, residence, and category requirements before registering. Confirm all details with the current RTA guidance." },
  { title: "Choose an authorised institute", description: "Select a licensed driving school or training provider that matches your chosen category and training plan." },
  { title: "Open the file", description: "Submit the required application documents and begin the file-opening process through the official channels used by your chosen provider." },
  { title: "Complete eye test and theory", description: "Complete the eye-test requirement and move through the knowledge or theory steps before practical training." },
  { title: "Train and assess", description: "Complete the practical training, yard exercises, and road test stages before final licence issue or transfer steps." },
];

export default function OpenDrivingFileDubaiPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Driving file guide"
        title="Open a driving file in Dubai"
        description="The process normally starts with checking eligibility, selecting a suitable driving institute, and preparing the required documents before you begin training and tests. Always verify the current RTA process before you pay or book a driving lesson."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppCTA label="Ask on WhatsApp" topic="opening a driving file in Dubai" detail="Please guide me through the next steps for opening a driving file in Dubai." className="px-5 py-3" />
          <Link href="/driving-license-requirements-uae/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100">
            Check requirements
          </Link>
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Open a driving file" }]} />

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">{index + 1}</div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">{step.title}</h2>
              <p className="text-sm leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">What to prepare before starting</h2>
            <div className="space-y-4 text-sm leading-7 text-slate-700">
              <p>Most applicants start by confirming the category they want to apply for, the visa or residence status behind the application, and the documents needed for the chosen route.</p>
              <p>Applicants often need to complete an eye-test step and then continue with training or theory requirements before formal testing. Requirements can vary depending on the applicant’s situation, including whether they are applying for a first licence, transferring from another country, or reapplying after a suspension.</p>
              <p>When in doubt, check the latest RTA guidance before paying any fees or signing a training package.</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900"><ClipboardList className="h-4 w-4 text-blue-700" aria-hidden="true" /> Required checks</div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Eligibility by age and category</li>
                  <li>• Residence and visa status</li>
                  <li>• Passport and ID documents</li>
                  <li>• Eye-test requirement</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900"><Building2 className="h-4 w-4 text-blue-700" aria-hidden="true" /> Provider steps</div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Select a driving institute</li>
                  <li>• Compare package prices</li>
                  <li>• Confirm theory or class needs</li>
                  <li>• Book practical training</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">Official references</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3"><BadgeCheck className="mt-1 h-4 w-4 text-green-600" aria-hidden="true" /><span>Dubai RTA driver services and licensing pages.</span></div>
                <div className="flex items-start gap-3"><FileText className="mt-1 h-4 w-4 text-green-600" aria-hidden="true" /><span>UAE government transport guidance on licences and services.</span></div>
                <div className="flex items-start gap-3"><GraduationCap className="mt-1 h-4 w-4 text-green-600" aria-hidden="true" /><span>Official service routes for knowledge and practical assessment requirements.</span></div>
              </div>
              <SourceNote source="https://www.rta.ae/" checked="2026-10-12" />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-blue-50 p-8">
          <div className="flex items-center gap-3 text-blue-900">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            <h2 className="text-2xl font-bold">Before you pay anything</h2>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
            Confirm current RTA rules, fees, and test appointment availability before enrolling in any programme. The exact process can differ by licence category, type of visa, and whether you are a first-time applicant or exchanging a foreign licence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppCTA label="Ask for the latest RTA steps" topic="opening a driving file in Dubai" detail="Please share the most up-to-date steps for opening a driving file in Dubai and what documents I should prepare." className="px-5 py-3" />
            <Link href="/driving-license-requirements-uae/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100">Read requirements</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
