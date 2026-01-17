import type { LucideIcon } from "lucide-react";

export interface Profile {
  name: string;
  role: string;
  description: string;
  portraitUrl: string;
}

export interface Link {
  href: string;
  label: string;
  icon: LucideIcon | string;
  external: boolean;
  ariaLabel: string;
  download?: string;
}
