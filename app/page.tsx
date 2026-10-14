import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CarFront,
  FileCheck,
  Globe2,
  ShieldCheck,
  Stethoscope,
} from "@/components/icons";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

const quickLinks = [
  { href: "/open-driving-file-dubai/", title: "Open a driving file", description: "Understand the first steps and document checks before you begin." },
  { href: "/driving-license-requirements-uae/", title: "Driving licence requirements", description: "Review age, residency, and document basics." },
  { href: "/dubai-driving-license-cost/", title: "Licence cost guide", description: "Compare official fees, institute packages, and optional extras." },
];

const processSteps = [
  "Check eligibility and category requirements",
  "Open the driving file and gather documents",
  "Complete eye-test and theory steps",
  "Book practical training and yard or road testing",
  "Apply for licence issue or exchange route",
];

const faqItems = [
  { q: "How do I open a driving file in Dubai?", a: "Start by confirming the licence category, preparing the key documents, and checking the latest RTA guidance before selecting a driving school." },
  { q: "Do I need a licence eye test?", a: "Most applicants complete an eye-test step during the licence process, but the exact route should be confirmed with current official guidance." },
  { q: "What are the main licence costs?", a: "Costs can include official authority charges, institute package fees, and optional extras such as repeat lessons or test reschedules." },
  { q: "Can I exchange a foreign licence?", a: "This depends on the issuing country, category, and current Dubai policy, so always check the official RTA exchange guidance first." },
];

const guideCards = [
  { href: "/driving-schools-dubai/", title: "How to choose a driving school", details: "Compare institute policies, fees, vehicles, and package transparency." },
  { href: "/driving-license-eye-test-dubai/", title: "Eye test guide", details: "Learn the general process and how to find an approved centre." },
  { href: "/foreign-driving-license-exchange-dubai/", title: "Foreign licence exchange", details: "Review the main conditions that affect exchange eligibility." },
  { href: "/dubai-driving-license-renewal/", title: "Renew your Dubai licence", details: "Prepare for renewal, eye testing, and current RTA service requirements." },
  { href: "/golden-chance-driving-license-dubai/", title: "Golden Chance test and cost", details: "Understand eligibility and separate RTA test charges from the full provider package." },
  { href: "/rent-a-car-dubai-requirements/", title: "Rent a car in Dubai", details: "Check resident and visitor documents, licence rules, and rental terms." },
  { href: "/international-driving-permit-uae/", title: "International driving permit", details: "Learn how to apply for an ATCUAE permit before driving abroad." },
  { href: "/driving-license-faq/", title: "FAQ library", details: "Get answers to the most common questions before you book anything." },
];

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">Independent UAE licence guidance</p>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Start Your UAE Driving Licence Journey
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Understand the driving licence process, required documents and training options before taking your next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppCTA label="Chat on WhatsApp" topic="opening a driving file in Dubai" detail="Hi, I found uaedrivinglicense.com and would like information about opening a driving file in Dubai. Please guide me through the next steps." className="px-6 py-3" />
              <Link href="/open-driving-file-dubai/" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-slate-50">
                Explore the process
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-green-600" aria-hidden="true" />Official-source references</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" aria-hidden="true" />Independent guidance</div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
              alt="Dubai skyline at sunset, with the Burj Khalifa and Sheikh Zayed Road"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent p-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-200">General guidance</p>
              <p className="mt-3 text-xl font-semibold">Driving licence information, costs, and next steps made simpler.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Quick links</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Start with the right topic</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:border-slate-300">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                <FileCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-700">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">Process overview</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">The typical Dubai driving licence pathway</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-900">{index + 1}</div>
                <p className="text-sm leading-7 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Documents and eligibility</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">What usually matters before you start</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-800"><BadgeCheck className="h-5 w-5" aria-hidden="true" /></div>
            <h3 className="text-xl font-semibold text-slate-900">Age and category</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Age and category rules vary by vehicle type, so always check the precise category-specific guidance.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-800"><FileCheck className="h-5 w-5" aria-hidden="true" /></div>
            <h3 className="text-xl font-semibold text-slate-900">Required documents</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Most applicants need identity, residence, and application documents prepared before opening a new driving file.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800"><Stethoscope className="h-5 w-5" aria-hidden="true" /></div>
            <h3 className="text-xl font-semibold text-slate-900">Eye-test requirement</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Applicants usually complete an eye-test step before continuing to training or final assessment stages.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-800"><Building2 className="h-5 w-5" aria-hidden="true" /></div>
            <h3 className="text-xl font-semibold text-slate-900">Provider route</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">The path can vary depending on whether you are applying for a first licence, exchange route, or category-specific training plan.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Institute selection</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Choose an authorised training provider carefully</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <ul className="space-y-4 text-sm leading-7 text-slate-700">
                <li className="flex gap-3"><span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700"><ShieldCheck className="h-3 w-3" aria-hidden="true" /></span><span>Compare total package costs, not only the headline tuition rate.</span></li>
                <li className="flex gap-3"><span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700"><ShieldCheck className="h-3 w-3" aria-hidden="true" /></span><span>Verify instructor support, practical training schedule, and vehicle category alignment.</span></li>
                <li className="flex gap-3"><span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700"><ShieldCheck className="h-3 w-3" aria-hidden="true" /></span><span>Check whether the package includes theory support, rescheduling, and booking assistance.</span></li>
                <li className="flex gap-3"><span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700"><ShieldCheck className="h-3 w-3" aria-hidden="true" /></span><span>Read the full written terms and confirm any differences before making payment.</span></li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-900"><CarFront className="h-5 w-5" aria-hidden="true" /></div>
              <h3 className="text-2xl font-bold">Important</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">This site does not claim official school partnerships or guarantee a result. Always check the latest public guidance and confirm the formal status of any provider before enrolling.</p>
              <Link href="/driving-schools-dubai/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200">Read the institute guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Helpful guides</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Explore the most useful pages</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {guideCards.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-800"><Globe2 className="h-5 w-5" aria-hidden="true" /></div>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.details}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Common questions from new drivers</h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/driving-license-faq/" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800">Browse the full FAQ <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-600 to-emerald-500 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-100">Ready to ask?</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Need personalised guidance before you start?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-green-50">Send a general WhatsApp enquiry to ask about opening a driving file, licence costs, testing, or exchange requirements in Dubai.</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTA label="Message us on WhatsApp" topic="opening a driving file in Dubai" detail="Hi, I found uaedrivinglicense.com and would like personalised information about the steps for opening a driving file in Dubai." className="px-7 py-3" />
          </div>
        </div>
      </section>
    </main>
  );
}
