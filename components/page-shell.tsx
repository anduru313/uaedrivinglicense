import Link from "next/link";
import { ArrowLeft } from "@/components/icons";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="hover:text-slate-900">{item.label}</Link>
            ) : (
              <span className="text-slate-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-600">
        <Link href="/" className="inline-flex items-center gap-2 hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p> : null}
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      {children}
    </section>
  );
}

export function InfoCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-7 text-slate-600">{body}</p>
    </div>
  );
}

export function SourceNote({ source, checked }: { source: string; checked: string }) {
  return (
    <p className="mt-4 text-xs text-slate-500">
      Source: <a href={source} className="text-blue-700 underline underline-offset-2" target="_blank" rel="noopener noreferrer">{source}</a> · Checked {checked}.
    </p>
  );
}

export function DisclosureBox() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
      <div className="mb-1 font-semibold">Important disclosure</div>
      <p>{siteConfig.disclosures.relationship}</p>
    </div>
  );
}
