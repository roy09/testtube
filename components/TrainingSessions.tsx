"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarDays, Clock, MapPin, Tag } from "lucide-react";
import type { TrainingSession } from "@/data/content";
import { formatDate } from "@/lib/site";

/** Ticket buttons still on sale today (or a plain Register link for free sessions). */
function bookingLinks(session: TrainingSession, today: string | null) {
  if (session.tickets?.length) {
    return session.tickets.filter((t) => !t.availableUntil || today === null || today <= t.availableUntil);
  }
  return session.registerUrl ? [{ label: "Register", url: session.registerUrl }] : [];
}

/**
 * Lists sessions soonest first. The site is built ahead of time, so past sessions are
 * hidden in the visitor's browser (by their own date) rather than at build time.
 */
export function TrainingSessions({ sessions, emptyMessage }: { sessions: TrainingSession[]; emptyMessage: string }) {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => setToday(new Date().toLocaleDateString("en-CA")), []);

  const upcoming = [...sessions]
    .sort((a, b) => a.date.localeCompare(b.date))
    .filter((s) => today === null || s.date >= today);

  if (upcoming.length === 0) {
    return <p className="text-lg text-ink">{emptyMessage}</p>;
  }

  return (
    <ol className="divide-y divide-line border-y border-line">
      {upcoming.map((session) => (
        <li key={`${session.date}-${session.title}`} className="grid gap-6 py-10 md:grid-cols-12 md:gap-8">
          <div className="space-y-2 text-sm md:col-span-4">
            <p className="flex gap-2 font-medium text-navy">
              <CalendarDays className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <time dateTime={session.date}>{formatDate(session.date)}</time>
            </p>
            <p className="flex gap-2 text-ink">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {session.time}
            </p>
            <p className="flex gap-2 text-ink">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {session.format}
            </p>
            {session.price && (
              <p className="flex gap-2 text-ink">
                <Tag className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {session.price}
              </p>
            )}
          </div>
          <div className="md:col-span-8">
            <h2 className="text-2xl leading-snug sm:text-3xl">{session.title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">{session.description}</p>
            {bookingLinks(session, today).length > 0 ? (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {bookingLinks(session, today).map((link, i) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition-colors ${
                      i === 0 ? "bg-navy text-white hover:bg-navy-soft" : "border border-navy/20 text-navy hover:border-navy hover:bg-mist"
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only"> for {session.title} (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            ) : (
              <p className="mt-6 inline-flex rounded-sm border border-line bg-mist px-5 py-3 text-sm font-semibold text-ink">
                Registration opens soon
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
