import type { Metadata } from "next";
import { AlertTriangle, ShieldCheck } from "@/components/icons";
import { PageIntro, Breadcrumbs, DisclosureBox, SourceNote } from "@/components/page-shell";
import { getPageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Terms and disclaimer"),
  description: "Review the informational purpose, official-source caution, and relationship disclosure for this independent UAE driving licence information website.",
};

export default function TermsAndDisclaimerPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Terms and disclaimer"
        title="Terms and disclaimer"
        description="This site provides educational and informational content for people researching the UAE and Dubai driving licence process. It does not promise a licence outcome, test pass, or any official authority decision."
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms and disclaimer" }]} />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-900"><AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" /> Important disclaimer</div>
            <div className="space-y-5 text-sm leading-7 text-slate-700">
              <p><strong className="text-slate-900">1.</strong> All rules, fees, category requirements, and test procedures are informational only and may change without notice.</p>
              <p><strong className="text-slate-900">2.</strong> The website is not a government service and does not have authority to issue or renew licences or guarantee approval.</p>
              <p><strong className="text-slate-900">3.</strong> If a business relationship with a driving institute exists, it must be clearly disclosed and kept current. This site currently uses placeholder business details until confirmed.</p>
              <p><strong className="text-slate-900">4.</strong> Users should independently verify everything with the current RTA, UAE government, or qualified legal adviser before making a payment or relying on a decision.</p>
              <p><strong className="text-slate-900">5.</strong> The site uses publicly available information to help users understand common steps. It is not a substitute for legal or official authority advice.</p>
            </div>
          </div>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-xl font-semibold text-slate-900"><ShieldCheck className="h-5 w-5 text-green-600" aria-hidden="true" /> Review status</div>
              <p className="text-sm leading-7 text-slate-700">This draft should be reviewed by a qualified adviser before being treated as a legal policy for public publication.</p>
              <SourceNote source="https://developers.google.com/search/docs" checked="2026-10-12" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
