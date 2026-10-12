import type { Metadata } from "next";
import Link from "next/link";
import { BookCheck, Building2, CarFront, ShieldCheck, Star, Users } from "lucide-react";
import { PageIntro, Breadcrumbs, DisclosureBox, SourceNote } from "@/components/page-shell";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getPageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Driving schools in Dubai"),
  description: "Learn how to select a driving school in Dubai, compare offers, and understand what to confirm before enrolling for training and tests.",
};

const checklist = [
  "Confirm the institute is a legitimate, authorised training provider relevant to your category and route.",
  "Ask for the total package price and a clear list of included lessons, theory support, and test booking assistance.",
  "Compare vehicle type, instructor ratio, lesson flexibility, and the practical schedule offered.",
  "Check any rescheduling, waiting time, or repeating-fee policy before committing to a plan.",
];

export default function DrivingSchoolsDubaiPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Institute selection"
        title="Driving schools in Dubai"
        description="Choosing the right driving school matters because the institute sets your training schedule, total cost, and how smoothly you progress through the practical stages. The safest approach is to compare authorised providers based on transparency, support, and practical fit."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppCTA label="Ask before enrolling" topic="driving schools in Dubai" detail="Please help me compare the main criteria I should check before enrolling in a driving school in Dubai." className="px-5 py-3" />
          <Link href="/open-driving-file-dubai/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100">Open a file guide</Link>
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Driving schools" }]} />

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Verify accreditation", body: "Check whether the provider is operating under the relevant approved structure for the category you need.", icon: ShieldCheck },
            { title: "Compare packages", body: "Look beyond the headline fee and check what the package includes before you sign up.", icon: BookCheck },
            { title: "Vehicle and route fit", body: "The right school should suit your preferred vehicle category, schedule, and practical training pace.", icon: CarFront },
            { title: "Support and communication", body: "Clear scheduling, test prep, and written service terms are important when comparing schools.", icon: Users },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h2>
                <p className="text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            );
          })}
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">What to ask before you commit</h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700"><Star className="h-3 w-3" aria-hidden="true" /></span><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-600">This site does not list or endorse specific institutions unless a confirmed, verified business arrangement has been approved. Always do your own checks before selecting a school.</p>
          </div>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-xl font-semibold text-slate-900"><Building2 className="h-5 w-5 text-green-600" aria-hidden="true" /> Official guidance</div>
              <p className="text-sm leading-7 text-slate-700">Review the current RTA and government guidance on training routes, licensing categories, and any approved service partner arrangements before making a booking.</p>
              <SourceNote source="https://www.rta.ae/" checked="2026-10-12" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
