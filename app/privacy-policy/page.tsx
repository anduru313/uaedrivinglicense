import type { Metadata } from "next";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import { PageIntro, Breadcrumbs, DisclosureBox, SourceNote } from "@/components/page-shell";
import { getPageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Privacy policy"),
  description: "A draft privacy policy for the website, including the current data handling approach and legal-review disclaimer before publishing." ,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Legal draft"
        title="Privacy policy"
        description="This privacy policy is a draft for legal review before publication. It reflects the present data collection and tracking approach of this website and should be updated if the final business model or analytics settings change."
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy policy" }]} />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-900"><LockKeyhole className="h-5 w-5 text-blue-700" aria-hidden="true" /> Draft policy</div>
            <div className="space-y-5 text-sm leading-7 text-slate-700">
              <p><strong className="text-slate-900">1.</strong> The website may collect minimal technical information such as browser type, language, device information, and pages visited to support site performance, analytics, and troubleshooting.</p>
              <p><strong className="text-slate-900">2.</strong> If a user sends a WhatsApp message or email, the website operator may process the information strictly for the purpose of responding to the enquiry and maintaining a useful customer service record.</p>
              <p><strong className="text-slate-900">3.</strong> The website does not intentionally request identity documents, passport copies, Emirates ID images, or other sensitive personal documentation through the public site.</p>
              <p><strong className="text-slate-900">4.</strong> Analytics and non-essential tracking should only be enabled where a legal basis exists, a consent model is in place, and the setup is clearly documented.</p>
              <p><strong className="text-slate-900">5.</strong> User data should be retained only for as long as necessary, and deletion or correction requests should be handled under the final privacy policy and applicable law.</p>
              <p><strong className="text-slate-900">6.</strong> Third-party services, such as analytics or messaging providers, may process limited data according to their own privacy terms and applicable law.</p>
              <p><strong className="text-slate-900">7.</strong> If Google AdSense is enabled, Google and its partners may use cookies or similar technologies to serve, measure, and personalize advertising, subject to visitor settings and applicable consent requirements. See <a className="underline" href="https://policies.google.com/technologies/ads">Google&apos;s advertising privacy information</a>.</p>
            </div>
          </div>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-xl font-semibold text-slate-900"><ShieldCheck className="h-5 w-5 text-green-600" aria-hidden="true" /> Legal review</div>
              <p className="text-sm leading-7 text-slate-700">This draft is not legal advice and should be reviewed by a qualified UAE legal adviser before it is published as a final privacy statement.</p>
              <SourceNote source="https://u.ae/" checked="2026-10-12" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
