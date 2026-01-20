import type { LucideIcon } from "lucide-react";

export interface ProfileData {
  name: string;
  role: string;
  description: string;
  portraitUrl: string;
  location: string;
}

export interface HeroLinkData {
  href: string;
  label: string;
  icon: LucideIcon | string;
  external: boolean;
  ariaLabel: string;
  download?: string;
}
