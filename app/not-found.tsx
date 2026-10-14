import Link from "next/link";
import { ArrowLeft, SearchX } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-slate-900">
      <div className="max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-800"><SearchX className="h-7 w-7" aria-hidden="true" /></div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">404 error</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">The page you tried to open does not exist or may have moved. You can return to the homepage and continue exploring the driving licence guidance.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-slate-700">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
