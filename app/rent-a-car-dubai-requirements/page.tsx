import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, BadgeCheck, FileCheck, IdCard } from "@/components/icons";
import { Breadcrumbs, DisclosureBox, PageIntro } from "@/components/page-shell";
import { getPageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Dubai car rental requirements"),
  description: "A practical checklist for renting a car in Dubai, covering resident and visitor documents, driving-licence eligibility, age and deposit conditions, and rental-company rules.",
};

const residentItems = [
  "A valid UAE driving licence for the vehicle category being rented.",
  "Emirates ID and any additional identity documents requested by the rental company.",
  "A payment card and security-deposit arrangement that meet the provider's terms.",
  "Any minimum licence-holding period or age requirement in the rental agreement.",
];

const visitorItems = [
  "Passport and evidence of lawful entry or visit status, as requested by the provider.",
  "A valid home-country driving licence that is accepted for driving in the UAE.",
  "An International Driving Permit together with the original licence if required for your licence or issuing country.",
  "A payment card and security-deposit arrangement that meet the provider's terms.",
];

export default function RentACarDubaiRequirementsPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Dubai car rental checklist"
        title="Requirements to rent a car in Dubai"
        description="The documents depend on whether you are a UAE resident or a visitor. Check two separate things before booking: whether your licence permits you to drive in the UAE, and whether the rental company accepts your documents under its contract."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://www.moet.gov.ae/en/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800">UAE Ministry of Economy & Tourism</a>
          <Link href="/international-driving-permit-uae/" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 hover:bg-slate-100">International permit guide</Link>
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Rent a car in Dubai" }]} />

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <IdCard className="h-6 w-6 text-blue-800" aria-hidden="true" />
              <h2 className="text-2xl font-bold">UAE residents</h2>
            </div>
            <p className="mb-4 text-sm leading-7 text-slate-600">Rental companies commonly ask residents for the following. Confirm the exact documents and eligibility with the provider before you reserve.</p>
            <ul className="space-y-3 text-sm leading-7 text-slate-700">
              {residentItems.map((item) => <li key={item} className="flex gap-3"><BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-green-700" aria-hidden="true" />{item}</li>)}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <FileCheck className="h-6 w-6 text-blue-800" aria-hidden="true" />
              <h2 className="text-2xl font-bold">Visitors and tourists</h2>
            </div>
            <p className="mb-4 text-sm leading-7 text-slate-600">Visitors should confirm licence acceptance for their issuing country before travelling to the rental desk. Depending on the applicable rules, an IDP may be required alongside the original licence.</p>
            <ul className="space-y-3 text-sm leading-7 text-slate-700">
              {visitorItems.map((item) => <li key={item} className="flex gap-3"><BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-green-700" aria-hidden="true" />{item}</li>)}
            </ul>
          </article>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold">Age, deposit, and rental terms</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              UAE Ministry of Economy and Tourism guidance says the minimum age to rent a car is generally 21, and some supercar rental companies may require renters to be older. A company can also set conditions for licence-holding period, vehicle class, insurance excess, mileage, additional drivers, and security deposits. Read the specific rental agreement; these provider terms are not the same as permission to drive under UAE law.
            </p>
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-center gap-2 font-semibold text-amber-900">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                <h3>Do not rely on a country list copied from a rental blog</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-amber-900">
                Visitor driving eligibility can depend on the licence issuing country and current official rules. Ask the rental company and check current UAE guidance whether your original licence alone is accepted or whether you also need an IDP.
              </p>
            </div>
          </article>

          <div className="space-y-6">
            <DisclosureBox />
            <aside className="rounded-3xl border border-slate-200 bg-blue-50 p-6">
              <h2 className="text-xl font-semibold text-blue-950">Quick checklist before booking</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700">
                <li>Send the rental company your driver and licence details for pre-check.</li>
                <li>Confirm whether the original licence, IDP, passport, and entry evidence are required.</li>
                <li>Ask about age, licence-holding period, insurance, deposit, and extra-driver terms.</li>
                <li>Keep the original documents available when collecting the vehicle.</li>
              </ol>
            </aside>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Official and related references</h2>
          <ul className="mt-4 space-y-3 text-sm text-blue-800">
            <li><a href="https://www.moet.gov.ae/en/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">UAE Ministry of Economy and Tourism</a></li>
            <li><a href="https://www.rta.ae/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Dubai Roads and Transport Authority</a></li>
            <li><Link href="/international-driving-permit-uae/" className="underline underline-offset-2">UAE international driving permit information</Link></li>
            <li><Link href="/foreign-driving-license-exchange-dubai/" className="underline underline-offset-2">Foreign driving licence rules for UAE residents</Link></li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">Checked 14 October 2026. Rental-company policies and official driving rules can change; verify both before booking.</p>
        </section>
      </div>
    </main>
  );
}
