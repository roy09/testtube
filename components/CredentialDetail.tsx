import Link from "next/link";
import type { Credential } from "@/data/content";

/** The qualifier line under a credential, with an optional follow-up link. */
export function CredentialDetail({ credential, className }: { credential: Credential; className?: string }) {
  const { detail, link } = credential;
  if (!detail && !link) return null;
  return (
    <p className={className}>
      {detail}
      {link && (
        <>
          {detail && " "}
          <Link href={link.href} className="font-medium text-navy underline underline-offset-4 hover:no-underline">
            {link.label}
          </Link>
        </>
      )}
    </p>
  );
}
