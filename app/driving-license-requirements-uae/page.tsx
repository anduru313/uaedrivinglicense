import type { Metadata } from "next";
import Link from "next/link";
import { FileCheck, IdCard, ShieldCheck, Stethoscope, UserRound, Users } from "@/components/icons";
import { PageIntro, Breadcrumbs, DisclosureBox, SourceNote } from "@/components/page-shell";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getPageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Driving licence requirements in the UAE"),
  description: "Review the main Dubai and UAE driving licence eligibility checks, required documents, age categories, and official references before starting your application.",
};

const requirementCards = [
  { title: "Age and category checks", body: "For Dubai light-vehicle training, ask whether a file can be opened at 17 years 6 months; licence issue is generally at 18 after passing the required assessments. Other categories have different rules.", icon: UserRound },
  { title: "Residency and identity", body: "A valid UAE residence status and identity information are normally required for a resident training-file route. Confirm accepted records with RTA or the approved institute.", icon: IdCard },
  { title: "Document readiness", body: "Prepare your original Emirates ID and approved eye-test result. Additional passport, visa, photo, sponsor NOC, or emirate-specific proof may be requested for your route.", icon: FileCheck },
  { title: "Eye-test requirement", body: "An approved eye-test is often required before training or licence issue. Confirm the latest centre and process with the official channels.", icon: Stethoscope },
];

export default function DrivingLicenseRequirementsPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Eligibility and documents"
        title="Driving licence requirements in the UAE"
        description="The most important first step is confirming which licence category you want, whether you match the age and residence requirements, and which documents the authority expects for your route. The exact needs can differ by category and applicant status."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppCTA label="Check my requirements" topic="Dubai driving licence requirements" detail="Please help me understand the basic requirements and documents I need before opening a driving file in Dubai." className="px-5 py-3" />
          <Link href="/open-driving-file-dubai/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100">Open a file guide</Link>
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Requirements" }]} />

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {requirementCards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h2>
                <p className="text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            );
          })}
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Choose the correct UAE driving licence category</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">
            The licence category must match the vehicle you intend to drive. Common categories include light motor vehicles, motorcycles, heavy vehicles, and buses. Training routes, minimum eligibility, and tests are category-specific; verify the current requirements with the authority before applying.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Light motor vehicle", body: "For eligible private and light-vehicle driving routes." },
              { title: "Motorcycle", body: "For motorcycle licensing, with its own training and assessment requirements." },
              { title: "Heavy vehicle", body: "For applicable heavy-vehicle categories and professional driving routes." },
              { title: "Bus", body: "For bus categories, where passenger and vehicle-class requirements apply." },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Documents and NOC checks for a Dubai driving file</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
            <li>Bring your original Emirates ID and complete the eye test at an RTA-approved centre. Confirm that the result has reached the relevant traffic file.</li>
            <li>Keep passport and UAE residence details available; the current application channel may request them even when Emirates ID is used for identity verification.</li>
            <li>If your residence is in another emirate, ask the Dubai institute whether an employer NOC or proof of a Dubai connection is required in your circumstances. A relevant company branch or tenancy/Ejari contract in your name may be relevant evidence, but document rules can vary; confirm the accepted proof before applying.</li>
            <li>Do not assume sponsor NOC, photographs, or any single document list applies to every applicant. Follow the live RTA service and chosen institute checklist.</li>
          </ul>
          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <h3 className="font-semibold text-blue-950">Training age versus licence age</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Some Dubai light-vehicle routes allow applicants to begin the training-file process at 17 years and 6 months, while licence issue is generally at 18 after the required tests. Confirm the age rule for your category and exact application with RTA or an approved institute.
            </p>
          </div>
          <Link href="/open-driving-file-dubai/" className="mt-5 inline-block text-sm font-semibold text-blue-800 underline underline-offset-2">See the full Dubai application and test sequence</Link>
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Common questions before applying</h2>
            <div className="mt-5 space-y-5 text-sm leading-7 text-slate-700">
              <p>Can I apply if I am a new resident? The answer depends on the category, legal status, and the official route available to the applicant.</p>
              <p>Do I need to do an eye test before training? In most cases, applicants complete an eye-test step before progressing, but the current approval route should always be checked with official guidance.</p>
              <p>What paperwork do I need for a first licence? At a minimum, ID and residency records are usually involved, but the exact document list depends on the applicant’s route and category.</p>
              <p>Do the rules change by emirate or licence category? Yes, category and emirate-specific rules can create different documentation or eligibility requirements.</p>
            </div>
          </div>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-xl font-semibold text-slate-900"><ShieldCheck className="h-5 w-5 text-green-600" aria-hidden="true" /> Official references</div>
              <p className="text-sm leading-7 text-slate-700">Use the latest RTA and UAE government guidance for qualifying criteria, age tables, and document lists relevant to your category.</p>
              <SourceNote source="https://www.rta.ae/" checked="2026-10-12" />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-indigo-50 p-8">
          <div className="flex items-center gap-3 text-indigo-900">
            <Users className="h-6 w-6" aria-hidden="true" />
            <h2 className="text-2xl font-bold">Need a tailored check?</h2>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">If you are unsure whether your route is a first licence, exchange route, or special category, ask the official channels or a licensed adviser before paying for training. The site is designed to help you understand the process, not replace official authority advice.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppCTA label="Ask about my case" topic="driving licence requirements" detail="Please explain the basic requirements and whether my situation needs a different process in Dubai or the UAE." className="px-5 py-3" />
            <Link href="/driving-license-faq/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100">Read FAQ</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
