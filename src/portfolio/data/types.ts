import type { LucideIcon } from "lucide-react";

export interface ProfileData {
  name: string;
  role: string;
  description: string;
  portraitUrl: string;
  location: string;
}

export interface PortfolioLinkData {
  href: string;
  label: string;
  icon: LucideIcon | string;
  external: boolean;
  ariaLabel: string;
  download?: string;
}

export interface TechIcon {
  name: string;
  iconUrl: string;
}
