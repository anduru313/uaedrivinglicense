import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, BadgeCheck, FileCheck, Globe2, ShieldCheck } from "@/components/icons";
import { Breadcrumbs, DisclosureBox, PageIntro } from "@/components/page-shell";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

export const metadata: Metadata = {
  title: "UAE international driving permit",
  description: "How UAE licence holders can apply for an International Driving Permit through ATCUAE, what documents to prepare, and what the permit does and does not allow.",
};

const documents = [
  "Completed International Driving Licence (IDL) application form.",
  "Valid UAE driving licence; ATCUAE advises keeping the original licence valid for the permit period.",
  "Emirates ID and passport/residency details as requested by the application channel.",
  "Two passport-size photographs.",
];

export default function InternationalDrivingPermitPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Travel and driving abroad"
        title="Getting an international driving permit from the UAE"
        description="The UAE-issued International Driving Permit (IDP, called an International Driving Licence or IDL by ATCUAE) is a supporting translation of your UAE licence for driving abroad. It does not replace your UAE licence or guarantee that every destination accepts it."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://atcuae.ae/idl-international-driving-license/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-slate-800">View ATCUAE IDL service</a>
          <WhatsAppCTA label="Ask about an IDP" topic="UAE international driving permit" detail="Please help me understand the UAE-issued International Driving Permit application and documents." className="px-5 py-3" />
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "International permit" }]} />

        <section className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3"><FileCheck className="h-5 w-5 text-blue-800" aria-hidden="true" /><h2 className="text-2xl font-bold text-slate-900">Documents to prepare</h2></div>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              {documents.map((document) => <li key={document}>{document}</li>)}
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-700">ATCUAE&apos;s online checklist asks for identity, valid UAE licence, and photograph files. Requirements can differ by application route, so follow the current ATCUAE form and provide residency documents if requested.</p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3"><Globe2 className="h-5 w-5 text-blue-800" aria-hidden="true" /><h2 className="text-2xl font-bold text-slate-900">Application and validity</h2></div>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>Apply through ATCUAE&apos;s online IDL service or one of the service channels ATCUAE lists, such as its offices or participating outlets.</li>
              <li>Upload the requested documents, check the destination-country requirements, and confirm the current fee and delivery details before payment.</li>
              <li>ATCUAE states the IDL is valid for one year. Keep your UAE licence valid and carry it with the permit when driving abroad.</li>
            </ol>
          </article>
        </section>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
            <div className="flex items-center gap-3 text-green-900"><BadgeCheck className="h-5 w-5" aria-hidden="true" /><h2 className="text-lg font-semibold">What it is for</h2></div>
            <p className="mt-3 text-sm leading-7 text-green-950">The permit translates key information from your domestic licence to help authorities interpret it abroad. Whether it is required, accepted, or sufficient depends on the country, your residence status, vehicle class, and rental-company terms. Check the destination&apos;s official guidance before travelling.</p>
          </section>
          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex items-center gap-3 text-amber-900"><AlertTriangle className="h-5 w-5" aria-hidden="true" /><h2 className="text-lg font-semibold">Important limits</h2></div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-950">
              <li>An IDP is not a new or international replacement for your UAE driving licence. Carry both documents.</li>
              <li>It does not authorize driving in the UAE in place of a UAE licence.</li>
              <li>It does not override local rules, insurance conditions, vehicle categories, or age requirements.</li>
            </ul>
          </section>
        </div>

        <div className="mt-8"><DisclosureBox /></div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-green-700" aria-hidden="true" /><h2 className="text-xl font-semibold text-slate-900">Official reference</h2></div>
          <p className="mt-3 text-sm leading-7 text-slate-700">ATCUAE is the UAE motoring organization that publishes the IDL application information and channels. Confirm the current document checklist, charges, destination rules, and delivery estimate directly before applying.</p>
          <a href="https://atcuae.ae/idl-international-driving-license/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-blue-800 underline underline-offset-2">ATCUAE: International Driving Licence</a>
          <p className="mt-4 text-xs text-slate-500">Checked 13 October 2026. This guide is informational and does not guarantee acceptance in a particular country.</p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-blue-800">
          <Link href="/foreign-driving-license-exchange-dubai/" className="hover:text-blue-950">Foreign licence exchange in Dubai</Link>
          <Link href="/dubai-driving-license-renewal/" className="hover:text-blue-950">Renew a Dubai driving licence</Link>
        </div>
      </div>
    </main>
  );
}