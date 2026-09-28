import { Briefcase, FileText, Globe, Scale, Shield, Users, type LucideProps } from "lucide-react";
import type { IconName } from "@/data/content";

const icons = { Shield, Scale, FileText, Users, Globe, Briefcase } satisfies Record<IconName, unknown>;

export function ServiceIcon({ name, ...props }: { name: IconName } & LucideProps) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" strokeWidth={1.5} {...props} />;
}
