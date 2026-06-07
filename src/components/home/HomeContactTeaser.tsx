import Link from "next/link";

export function HomeContactTeaser() {
  return (
    <section className="border-y border-neutral-300 bg-white py-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Ready to talk scope?
          </h2>
          <p className="mt-2 text-base text-neutral-600 sm:text-lg">
            Send a short note and{" "}
            <Link
              href="/contact"
              className="font-semibold underline underline-offset-4 hover:text-neutral-900"
            >
              contact our Oregon and New York offices
            </Link>
            {" "}— we reply with next steps, not an auto-reply.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-10 shrink-0 items-center justify-center border border-neutral-900 bg-white px-6 py-2.5 text-[13px] font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
